(() => {
  "use strict";

  const labels = {
    en: "Buy Veylto",
    it: "Acquista Veylto",
    es: "Comprar Veylto",
    fr: "Acheter Veylto",
    de: "Veylto kaufen"
  };
  const supported = Object.keys(labels);

  const resolveLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const requested = (params.get("lang") || "").toLowerCase();
    const stored = (window.localStorage.getItem("veylto-site-language") || "").toLowerCase();
    if (supported.includes(requested)) return requested;
    if (supported.includes(stored)) return stored;
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    return supported.includes(browser) ? browser : "en";
  };

  const apply = language => {
    const active = supported.includes(language) ? language : "en";
    document.querySelectorAll('a[href^="purchase.html"]').forEach(link => {
      link.textContent = labels[active];
      const url = new URL("purchase.html", window.location.href);
      if (active !== "en") url.searchParams.set("lang", active);
      link.setAttribute("href", `purchase.html${url.search}`);
    });
  };

  apply(resolveLanguage());
  const selector = document.querySelector("#language-selector");
  if (selector) {
    selector.addEventListener("change", event => apply(event.target.value));
  }
})();
