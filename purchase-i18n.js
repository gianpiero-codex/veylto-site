(() => {
  "use strict";

  const translations = {
    en: {
      pageTitle: "Buy Veylto — Secure checkout",
      metaDescription: "Purchase Veylto securely with card, PayPal and supported wallets through Paddle Checkout.",
      navProduct: "Product", navPrivacy: "Privacy", navTerms: "Terms", navSupport: "Support", language: "Language",
      heroEyebrow: "Veylto desktop software", heroTitle: "Secure purchase. Immediate license provisioning.",
      heroText: "Complete your purchase using Paddle Checkout. Card details, PayPal credentials and supported wallets are handled directly by Paddle; Veylto never receives or stores your payment credentials.",
      licenseEyebrow: "One-time desktop license", productTitle: "Veylto",
      priceNote: "The final localized price, applicable taxes and available payment methods are shown securely inside checkout.",
      feature1: "Desktop workflow for Etsy sellers", feature2: "AI listing generation and validation", feature3: "SEO review and seller-controlled Etsy actions", feature4: "Social Studio and market workflows", feature5: "Secure activation through the Veylto backend",
      paymentSecurity: "Payment security:", paymentSecurityText: "checkout is hosted inside Paddle's secure payment frame.",
      etsyNotice: "Veylto uses the Etsy API but is not endorsed or certified by Etsy, Inc.",
      checkoutEyebrow: "Secure checkout", checkoutTitle: "Complete your purchase", loading: "Loading secure checkout…",
      verifiedEyebrow: "Payment verified", licenseTitle: "Your Veylto license", licenseText: "Copy this activation key and keep it in a safe place. Veylto will ask for it during product activation.", copy: "Copy license key", copied: "Copied", transaction: "Paddle transaction:",
      footerTagline: "AI-powered, local-first desktop software for Etsy seller workflows.", privacyPolicy: "Privacy Policy", termsService: "Terms of Service",
      trademark: "The term “Etsy” is a trademark of Etsy, Inc. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.",
      checkoutNotConfigured: "Sandbox checkout is ready but not configured yet. Add the Paddle sandbox client token, price ID and local backend URL before testing.",
      paymentReady: "Secure checkout ready. Payment details are handled directly by Paddle.",
      paymentReceived: "Payment received. Waiting for signed server-side fulfillment…",
      paymentVerified: "Payment verified. Your Veylto license is ready.",
      retrievalExpired: "The secure license retrieval window has expired. Contact support with the transaction ID below.",
      referenceInvalid: "The secure checkout reference is no longer valid. Contact support with the transaction ID below.",
      fulfillmentPending: "Payment completed, but license provisioning is still pending. Keep this page open or contact support with the transaction ID below.",
      copyFailed: "Copy failed. Select the license key manually."
    },
    it: {
      pageTitle: "Acquista Veylto — Checkout sicuro",
      metaDescription: "Acquista Veylto in modo sicuro con carta, PayPal e wallet supportati tramite Paddle Checkout.",
      navProduct: "Prodotto", navPrivacy: "Privacy", navTerms: "Termini", navSupport: "Supporto", language: "Lingua",
      heroEyebrow: "Software desktop Veylto", heroTitle: "Acquisto sicuro. Licenza generata automaticamente.",
      heroText: "Completa l’acquisto tramite Paddle Checkout. Dati della carta, credenziali PayPal e wallet supportati sono gestiti direttamente da Paddle; Veylto non riceve né memorizza le tue credenziali di pagamento.",
      licenseEyebrow: "Licenza desktop una tantum", productTitle: "Veylto",
      priceNote: "Il prezzo finale localizzato, le imposte applicabili e i metodi di pagamento disponibili vengono mostrati in modo sicuro nel checkout.",
      feature1: "Workflow desktop per venditori Etsy", feature2: "Generazione e validazione inserzioni con AI", feature3: "Revisione SEO e azioni Etsy controllate dal venditore", feature4: "Social Studio e workflow di mercato", feature5: "Attivazione sicura tramite il backend Veylto",
      paymentSecurity: "Sicurezza del pagamento:", paymentSecurityText: "il checkout è ospitato nel frame di pagamento sicuro di Paddle.",
      etsyNotice: "Veylto utilizza l’API di Etsy ma non è approvato né certificato da Etsy, Inc.",
      checkoutEyebrow: "Checkout sicuro", checkoutTitle: "Completa l’acquisto", loading: "Caricamento checkout sicuro…",
      verifiedEyebrow: "Pagamento verificato", licenseTitle: "La tua licenza Veylto", licenseText: "Copia questa chiave di attivazione e conservala in un luogo sicuro. Veylto la richiederà durante l’attivazione del prodotto.", copy: "Copia chiave di licenza", copied: "Copiata", transaction: "Transazione Paddle:",
      footerTagline: "Software desktop local-first basato su AI per i workflow dei venditori Etsy.", privacyPolicy: "Informativa privacy", termsService: "Termini di servizio",
      trademark: "Il termine “Etsy” è un marchio di Etsy, Inc. Questa applicazione utilizza l’API di Etsy, ma non è approvata né certificata da Etsy, Inc.",
      checkoutNotConfigured: "Il checkout Sandbox è pronto ma non ancora configurato. Inserisci client token Sandbox Paddle, price ID e URL del backend locale prima del test.",
      paymentReady: "Checkout sicuro pronto. I dati di pagamento sono gestiti direttamente da Paddle.",
      paymentReceived: "Pagamento ricevuto. Attendo la conferma firmata dal server…",
      paymentVerified: "Pagamento verificato. La licenza Veylto è pronta.",
      retrievalExpired: "La finestra sicura per recuperare la licenza è scaduta. Contatta il supporto indicando l’ID transazione qui sotto.",
      referenceInvalid: "Il riferimento sicuro del checkout non è più valido. Contatta il supporto indicando l’ID transazione qui sotto.",
      fulfillmentPending: "Pagamento completato, ma la generazione della licenza è ancora in corso. Mantieni aperta questa pagina o contatta il supporto indicando l’ID transazione.",
      copyFailed: "Copia non riuscita. Seleziona manualmente la chiave di licenza."
    },
    es: {
      pageTitle: "Comprar Veylto — Pago seguro",
      metaDescription: "Compra Veylto de forma segura con tarjeta, PayPal y monederos compatibles mediante Paddle Checkout.",
      navProduct: "Producto", navPrivacy: "Privacidad", navTerms: "Términos", navSupport: "Soporte", language: "Idioma",
      heroEyebrow: "Software de escritorio Veylto", heroTitle: "Compra segura. Licencia generada automáticamente.",
      heroText: "Completa tu compra mediante Paddle Checkout. Los datos de tarjeta, credenciales de PayPal y monederos compatibles los gestiona directamente Paddle; Veylto no recibe ni almacena tus credenciales de pago.",
      licenseEyebrow: "Licencia de escritorio de pago único", productTitle: "Veylto",
      priceNote: "El precio final localizado, los impuestos aplicables y los métodos de pago disponibles se muestran de forma segura dentro del checkout.",
      feature1: "Flujo de escritorio para vendedores de Etsy", feature2: "Generación y validación de publicaciones con IA", feature3: "Revisión SEO y acciones de Etsy controladas por el vendedor", feature4: "Social Studio y flujos de mercado", feature5: "Activación segura mediante el backend de Veylto",
      paymentSecurity: "Seguridad del pago:", paymentSecurityText: "el checkout se aloja en el marco de pago seguro de Paddle.",
      etsyNotice: "Veylto utiliza la API de Etsy, pero no está respaldado ni certificado por Etsy, Inc.",
      checkoutEyebrow: "Pago seguro", checkoutTitle: "Completa tu compra", loading: "Cargando pago seguro…",
      verifiedEyebrow: "Pago verificado", licenseTitle: "Tu licencia de Veylto", licenseText: "Copia esta clave de activación y guárdala en un lugar seguro. Veylto la solicitará durante la activación del producto.", copy: "Copiar clave de licencia", copied: "Copiada", transaction: "Transacción Paddle:",
      footerTagline: "Software de escritorio local-first con IA para flujos de vendedores de Etsy.", privacyPolicy: "Política de privacidad", termsService: "Términos del servicio",
      trademark: "El término “Etsy” es una marca de Etsy, Inc. Esta aplicación utiliza la API de Etsy, pero no está respaldada ni certificada por Etsy, Inc.",
      checkoutNotConfigured: "El checkout Sandbox está listo pero aún no está configurado. Añade el client token Sandbox de Paddle, el price ID y la URL del backend local antes de probarlo.",
      paymentReady: "Pago seguro listo. Los datos de pago los gestiona directamente Paddle.",
      paymentReceived: "Pago recibido. Esperando la confirmación firmada del servidor…",
      paymentVerified: "Pago verificado. Tu licencia de Veylto está lista.",
      retrievalExpired: "La ventana segura para recuperar la licencia ha caducado. Contacta con soporte indicando el ID de transacción de abajo.",
      referenceInvalid: "La referencia segura del checkout ya no es válida. Contacta con soporte indicando el ID de transacción de abajo.",
      fulfillmentPending: "Pago completado, pero la licencia aún se está generando. Mantén esta página abierta o contacta con soporte indicando el ID de transacción.",
      copyFailed: "No se pudo copiar. Selecciona manualmente la clave de licencia."
    },
    fr: {
      pageTitle: "Acheter Veylto — Paiement sécurisé",
      metaDescription: "Achetez Veylto en toute sécurité par carte, PayPal et portefeuilles pris en charge via Paddle Checkout.",
      navProduct: "Produit", navPrivacy: "Confidentialité", navTerms: "Conditions", navSupport: "Support", language: "Langue",
      heroEyebrow: "Logiciel de bureau Veylto", heroTitle: "Achat sécurisé. Licence générée automatiquement.",
      heroText: "Finalisez votre achat avec Paddle Checkout. Les données de carte, identifiants PayPal et portefeuilles pris en charge sont gérés directement par Paddle ; Veylto ne reçoit ni ne stocke vos identifiants de paiement.",
      licenseEyebrow: "Licence de bureau à paiement unique", productTitle: "Veylto",
      priceNote: "Le prix final localisé, les taxes applicables et les moyens de paiement disponibles sont affichés de manière sécurisée dans le checkout.",
      feature1: "Workflow de bureau pour vendeurs Etsy", feature2: "Génération et validation d’annonces par IA", feature3: "Révision SEO et actions Etsy contrôlées par le vendeur", feature4: "Social Studio et workflows de marché", feature5: "Activation sécurisée via le backend Veylto",
      paymentSecurity: "Sécurité du paiement :", paymentSecurityText: "le checkout est hébergé dans le cadre de paiement sécurisé de Paddle.",
      etsyNotice: "Veylto utilise l’API Etsy mais n’est ni approuvé ni certifié par Etsy, Inc.",
      checkoutEyebrow: "Paiement sécurisé", checkoutTitle: "Finalisez votre achat", loading: "Chargement du paiement sécurisé…",
      verifiedEyebrow: "Paiement vérifié", licenseTitle: "Votre licence Veylto", licenseText: "Copiez cette clé d’activation et conservez-la en lieu sûr. Veylto la demandera lors de l’activation du produit.", copy: "Copier la clé de licence", copied: "Copiée", transaction: "Transaction Paddle :",
      footerTagline: "Logiciel de bureau local-first basé sur l’IA pour les workflows des vendeurs Etsy.", privacyPolicy: "Politique de confidentialité", termsService: "Conditions d’utilisation",
      trademark: "Le terme « Etsy » est une marque d’Etsy, Inc. Cette application utilise l’API Etsy mais n’est ni approuvée ni certifiée par Etsy, Inc.",
      checkoutNotConfigured: "Le checkout Sandbox est prêt mais pas encore configuré. Ajoutez le client token Sandbox Paddle, le price ID et l’URL du backend local avant le test.",
      paymentReady: "Paiement sécurisé prêt. Les données de paiement sont gérées directement par Paddle.",
      paymentReceived: "Paiement reçu. En attente de la confirmation signée côté serveur…",
      paymentVerified: "Paiement vérifié. Votre licence Veylto est prête.",
      retrievalExpired: "La fenêtre sécurisée de récupération de licence a expiré. Contactez le support avec l’ID de transaction ci-dessous.",
      referenceInvalid: "La référence sécurisée du checkout n’est plus valide. Contactez le support avec l’ID de transaction ci-dessous.",
      fulfillmentPending: "Paiement terminé, mais la licence est encore en cours de génération. Gardez cette page ouverte ou contactez le support avec l’ID de transaction.",
      copyFailed: "Échec de la copie. Sélectionnez manuellement la clé de licence."
    },
    de: {
      pageTitle: "Veylto kaufen — Sicherer Checkout",
      metaDescription: "Kaufen Sie Veylto sicher per Karte, PayPal und unterstützten Wallets über Paddle Checkout.",
      navProduct: "Produkt", navPrivacy: "Datenschutz", navTerms: "Bedingungen", navSupport: "Support", language: "Sprache",
      heroEyebrow: "Veylto Desktop-Software", heroTitle: "Sicher kaufen. Lizenz automatisch bereitgestellt.",
      heroText: "Schließen Sie den Kauf über Paddle Checkout ab. Kartendaten, PayPal-Zugangsdaten und unterstützte Wallets werden direkt von Paddle verarbeitet; Veylto empfängt oder speichert Ihre Zahlungsdaten nicht.",
      licenseEyebrow: "Einmalige Desktop-Lizenz", productTitle: "Veylto",
      priceNote: "Der lokalisierte Endpreis, anwendbare Steuern und verfügbare Zahlungsmethoden werden sicher im Checkout angezeigt.",
      feature1: "Desktop-Workflow für Etsy-Verkäufer", feature2: "KI-gestützte Listing-Erstellung und Validierung", feature3: "SEO-Prüfung und vom Verkäufer kontrollierte Etsy-Aktionen", feature4: "Social Studio und Markt-Workflows", feature5: "Sichere Aktivierung über das Veylto-Backend",
      paymentSecurity: "Zahlungssicherheit:", paymentSecurityText: "der Checkout läuft im sicheren Zahlungsrahmen von Paddle.",
      etsyNotice: "Veylto verwendet die Etsy-API, wird aber nicht von Etsy, Inc. unterstützt oder zertifiziert.",
      checkoutEyebrow: "Sicherer Checkout", checkoutTitle: "Kauf abschließen", loading: "Sicherer Checkout wird geladen…",
      verifiedEyebrow: "Zahlung verifiziert", licenseTitle: "Ihre Veylto-Lizenz", licenseText: "Kopieren Sie diesen Aktivierungsschlüssel und bewahren Sie ihn sicher auf. Veylto fragt ihn bei der Produktaktivierung ab.", copy: "Lizenzschlüssel kopieren", copied: "Kopiert", transaction: "Paddle-Transaktion:",
      footerTagline: "KI-gestützte, local-first Desktop-Software für Etsy-Verkäufer-Workflows.", privacyPolicy: "Datenschutzerklärung", termsService: "Nutzungsbedingungen",
      trademark: "Der Begriff „Etsy“ ist eine Marke von Etsy, Inc. Diese Anwendung verwendet die Etsy-API, wird aber nicht von Etsy, Inc. unterstützt oder zertifiziert.",
      checkoutNotConfigured: "Der Sandbox-Checkout ist bereit, aber noch nicht konfiguriert. Fügen Sie vor dem Test den Paddle-Sandbox-Client-Token, die Price-ID und die lokale Backend-URL hinzu.",
      paymentReady: "Sicherer Checkout bereit. Zahlungsdaten werden direkt von Paddle verarbeitet.",
      paymentReceived: "Zahlung eingegangen. Warte auf die signierte serverseitige Bestätigung…",
      paymentVerified: "Zahlung verifiziert. Ihre Veylto-Lizenz ist bereit.",
      retrievalExpired: "Das sichere Zeitfenster zum Abrufen der Lizenz ist abgelaufen. Kontaktieren Sie den Support mit der unten angegebenen Transaktions-ID.",
      referenceInvalid: "Die sichere Checkout-Referenz ist nicht mehr gültig. Kontaktieren Sie den Support mit der unten angegebenen Transaktions-ID.",
      fulfillmentPending: "Zahlung abgeschlossen, aber die Lizenz wird noch bereitgestellt. Lassen Sie diese Seite geöffnet oder kontaktieren Sie den Support mit der Transaktions-ID.",
      copyFailed: "Kopieren fehlgeschlagen. Wählen Sie den Lizenzschlüssel manuell aus."
    }
  };

  const supported = Object.keys(translations);
  const params = new URLSearchParams(window.location.search);
  const requested = (params.get("lang") || "").toLowerCase();
  const stored = (window.localStorage.getItem("veylto-site-language") || "").toLowerCase();
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  let language = supported.includes(requested)
    ? requested
    : supported.includes(stored)
      ? stored
      : supported.includes(browser) ? browser : "en";

  const dictionary = translations[language];
  window.VEYLTO_PURCHASE_I18N = {
    language,
    t: key => dictionary[key] || translations.en[key] || key
  };

  const apply = nextLanguage => {
    if (!supported.includes(nextLanguage)) return;
    language = nextLanguage;
    const active = translations[language];
    document.documentElement.lang = language;
    document.title = active.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", active.metaDescription);
    document.querySelectorAll("[data-purchase-i18n]").forEach(node => {
      const key = node.getAttribute("data-purchase-i18n");
      if (key && active[key]) node.textContent = active[key];
    });
    document.querySelectorAll("[data-purchase-link]").forEach(link => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("#")) return;
      const url = new URL(href, window.location.href);
      if (language === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", language);
      link.setAttribute("href", `${url.pathname.split('/').pop()}${url.search}${url.hash}`);
    });
    const selector = document.querySelector("#purchase-language-selector");
    if (selector) selector.value = language;
    window.localStorage.setItem("veylto-site-language", language);
    window.VEYLTO_PURCHASE_I18N.language = language;
    window.VEYLTO_PURCHASE_I18N.t = key => active[key] || translations.en[key] || key;
  };

  const selector = document.querySelector("#purchase-language-selector");
  if (selector) {
    selector.addEventListener("change", event => {
      const next = event.target.value;
      apply(next);
      const url = new URL(window.location.href);
      if (next === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", next);
      window.history.replaceState({}, "", url);
      window.location.reload();
    });
  }

  apply(language);
})();
