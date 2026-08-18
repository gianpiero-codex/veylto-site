(() => {
  "use strict";

  const config = window.VEYLTO_CHECKOUT_CONFIG || {};
  const status = document.querySelector("[data-checkout-status]");
  const licensePanel = document.querySelector("[data-license-panel]");
  const licenseKey = document.querySelector("[data-license-key]");
  const copyButton = document.querySelector("[data-copy-license]");
  const transactionNode = document.querySelector("[data-transaction-id]");
  const frame = document.querySelector(".checkout-container");

  const setStatus = (message, tone = "neutral") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.tone = tone;
  };

  const randomReference = () => {
    const bytes = new Uint8Array(32);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
  };

  const referenceKey = "veylto_checkout_ref_v1";
  let checkoutReference = sessionStorage.getItem(referenceKey);
  if (!checkoutReference || checkoutReference.length < 32) {
    checkoutReference = randomReference();
    sessionStorage.setItem(referenceKey, checkoutReference);
  }

  const configured = Boolean(
    config.clientToken &&
    config.priceId &&
    config.backendBaseUrl &&
    window.Paddle
  );

  if (!configured) {
    if (frame) frame.hidden = true;
    setStatus(
      "Sandbox checkout is ready but not configured yet. Add the Paddle sandbox client token, price ID and local backend URL before testing.",
      "warning"
    );
    return;
  }

  const backendBaseUrl = String(config.backendBaseUrl).replace(/\/+$/, "");

  const showFulfillment = payload => {
    if (!payload || payload.status !== "fulfilled" || !payload.licenseKey) return false;
    if (licenseKey) licenseKey.textContent = payload.licenseKey;
    if (transactionNode) transactionNode.textContent = payload.transactionId || "";
    if (licensePanel) licensePanel.hidden = false;
    setStatus("Payment verified. Your Veylto license is ready.", "success");
    return true;
  };

  const pollFulfillment = async transactionId => {
    if (transactionNode && transactionId) transactionNode.textContent = transactionId;
    for (let attempt = 0; attempt < 30; attempt += 1) {
      try {
        const response = await fetch(
          `${backendBaseUrl}/api/v1/commerce/fulfillment/${encodeURIComponent(checkoutReference)}`,
          { headers: { "Accept": "application/json" }, cache: "no-store" }
        );
        if (response.ok) {
          const payload = await response.json();
          if (showFulfillment(payload)) return;
        } else if (response.status === 410) {
          setStatus("The secure license retrieval window has expired. Contact support with the transaction ID below.", "warning");
          return;
        }
      } catch (_) {
        // Backend may still be processing/restarting; continue bounded polling.
      }
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    setStatus(
      "Payment completed, but license provisioning is still pending. Keep this page open or contact support with the transaction ID below.",
      "warning"
    );
  };

  const locale = (document.documentElement.lang || navigator.language || "en").slice(0, 2);
  if (String(config.environment).toLowerCase() === "sandbox") {
    window.Paddle.Environment.set("sandbox");
  }

  window.Paddle.Initialize({
    token: config.clientToken,
    eventCallback: event => {
      if (!event || event.name !== "checkout.completed") return;
      const transactionId = event.data && event.data.transaction_id
        ? String(event.data.transaction_id)
        : "";
      setStatus("Payment received. Waiting for signed server-side fulfillment…", "progress");
      pollFulfillment(transactionId);
    },
    checkout: {
      settings: {
        displayMode: "inline",
        frameTarget: "checkout-container",
        frameInitialHeight: "520",
        frameStyle: "width:100%;min-width:312px;background-color:transparent;border:none;",
        variant: "one-page",
        theme: "dark",
        locale: ["en", "it", "es", "fr", "de"].includes(locale) ? locale : "en"
      }
    }
  });

  setStatus("Secure checkout ready. Payment details are handled directly by Paddle.", "success");
  window.Paddle.Checkout.open({
    items: [{ priceId: config.priceId, quantity: 1 }],
    customData: {
      veylto_checkout_ref: checkoutReference,
      veylto_product_sku: config.productSku || "VEY-LTO"
    }
  });

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const value = licenseKey ? licenseKey.textContent.trim() : "";
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        copyButton.textContent = "Copied";
        setTimeout(() => { copyButton.textContent = "Copy license key"; }, 1800);
      } catch (_) {
        setStatus("Copy failed. Select the license key manually.", "warning");
      }
    });
  }
})();
