(() => {
  "use strict";

  const config = window.VEYLTO_CHECKOUT_CONFIG || {};
  const i18n = window.VEYLTO_PURCHASE_I18N || {};
  const t = key => typeof i18n.t === "function" ? i18n.t(key) : key;
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
    setStatus(t("checkoutNotConfigured"), "warning");
    return;
  }

  const backendBaseUrl = String(config.backendBaseUrl).replace(/\/+$/, "");

  const showFulfillment = payload => {
    if (!payload || payload.status !== "fulfilled" || !payload.licenseKey) return false;
    if (licenseKey) licenseKey.textContent = payload.licenseKey;
    if (transactionNode) transactionNode.textContent = payload.transactionId || "";
    if (licensePanel) licensePanel.hidden = false;
    setStatus(t("paymentVerified"), "success");
    return true;
  };

  const requestFulfillment = () => fetch(
    `${backendBaseUrl}/api/v1/commerce/fulfillment`,
    {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ checkoutReference }),
      cache: "no-store",
      credentials: "omit",
      referrerPolicy: "no-referrer"
    }
  );

  const pollFulfillment = async transactionId => {
    if (transactionNode && transactionId) transactionNode.textContent = transactionId;
    for (let attempt = 0; attempt < 30; attempt += 1) {
      try {
        const response = await requestFulfillment();
        if (response.ok) {
          const payload = await response.json();
          if (showFulfillment(payload)) return;
        } else if (response.status === 410) {
          setStatus(t("retrievalExpired"), "warning");
          return;
        } else if (response.status === 400) {
          setStatus(t("referenceInvalid"), "warning");
          return;
        }
      } catch (_) {
        // Backend may still be processing/restarting; continue bounded polling.
      }
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    setStatus(t("fulfillmentPending"), "warning");
  };

  const locale = String(i18n.language || document.documentElement.lang || navigator.language || "en").slice(0, 2);
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
      setStatus(t("paymentReceived"), "progress");
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

  setStatus(t("paymentReady"), "success");
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
        copyButton.textContent = t("copied");
        setTimeout(() => { copyButton.textContent = t("copy"); }, 1800);
      } catch (_) {
        setStatus(t("copyFailed"), "warning");
      }
    });
  }
})();
