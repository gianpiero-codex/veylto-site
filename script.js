(() => {
  const translations = {
    en: {
      pageTitle: 'Veylto — Seller workflows, under control',
      metaDescription: 'Veylto is a local-first desktop workspace for Etsy sellers, built to streamline listing, SEO, social and market workflows while keeping sellers in control.',
      skip: 'Skip to content', menu: 'Menu', nav_product: 'Product', nav_principles: 'Principles', nav_security: 'Security', nav_privacy: 'Privacy', nav_terms: 'Terms',
      hero_eyebrow: 'Independent software by Veylto Labs · Desktop workspace for Etsy sellers',
      hero_title: 'Move faster without giving up control.',
      hero_text: 'Veylto brings listing workflows, SEO review, shop insights, social planning and market research into one local-first desktop workspace.',
      hero_primary: 'Explore the product', hero_support: 'Contact support', availability: 'Currently in private development',
      mock_workspace: 'Veylto workspace', mock_shop_overview: 'SHOP OVERVIEW', mock_good_morning: 'Good morning', mock_connected: 'Connected', mock_listings: 'Listings', mock_synced: 'Synced', mock_orders: 'Orders', mock_last30: 'Last 30 days', mock_seo_reviews: 'SEO reviews', mock_ready: 'Ready', mock_top_listings: 'Top listings', mock_views: 'Views',
      product_eyebrow: 'One workspace', product_title: 'Built around real seller workflows.', product_intro: 'Veylto is designed to reduce repetitive work while keeping every important decision visible and reviewable.',
      feature_etsy_title: 'Etsy workspace', feature_etsy_desc: 'Review shop data, prepare listings, manage drafts and keep write actions explicit.',
      feature_seo_title: 'SEO review', feature_seo_desc: 'Compare current listing content with suggested improvements before applying any change.',
      feature_social_title: 'Social Studio', feature_social_desc: 'Prepare platform-specific content and keep drafts, queue and publishing history organized.',
      feature_market_title: 'Market intelligence', feature_market_desc: 'Structure research, evidence and reporting without mixing unsupported claims into seller decisions.',
      feature_provider_title: 'Provider choice', feature_provider_desc: 'Use supported AI providers according to your configuration, with provider and model visibility.',
      feature_local_title: 'Local-first control', feature_local_desc: 'Keep the desktop application, local data and review workflow at the center of the experience.',
      principles_eyebrow: 'Product principles', principles_title: 'Automation should not hide consequences.',
      principle_review_title: 'Review before write', principle_review_desc: 'Changes that affect Etsy are designed to remain visible, confirmed and attributable.',
      principle_provider_title: 'No silent provider switching', principle_provider_desc: 'The selected provider and model should be the ones actually used for the requested workflow.',
      principle_boundaries_title: 'Clear data boundaries', principle_boundaries_desc: 'Local data, AI drafts and Etsy-applied values should remain distinguishable in the interface.',
      security_eyebrow: 'Security and platform respect', security_title: 'Designed for authorized seller access.', security_intro: 'Veylto uses Etsy OAuth for permitted shop access. It does not scrape Etsy, ask sellers to share API credentials, bypass Etsy checkout, or claim endorsement by Etsy.', security_link: 'Read the privacy overview →',
      security_oauth_title: 'OAuth authorization', security_oauth_desc: 'Access is tied to permissions granted by the seller.', security_write_title: 'Explicit write actions', security_write_desc: 'Seller-impacting changes require a clear action.', security_scraping_title: 'No scraping', security_scraping_desc: 'Platform data is accessed through supported interfaces.', security_revocable_title: 'Revocable access', security_revocable_desc: 'Connected access can be disconnected or revoked.',
      cta_eyebrow: 'Private development', cta_title: 'Veylto is being prepared for controlled testing.', cta_text: 'Public availability, pricing and production support details will be published after validation is complete.', cta_button: 'Contact Veylto',
      footer_tagline: 'Local-first desktop software for Etsy seller workflows.', footer_brand_statement: 'Veylto is developed under the independent Veylto Labs product brand.', footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service', footer_support: 'Support',
      trademark: 'The term “Etsy” is a trademark of Etsy, Inc. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.'
    },
    it: {
      pageTitle: 'Veylto — Workflow per venditori, sotto controllo',
      metaDescription: 'Veylto è un workspace desktop local-first per venditori Etsy, progettato per semplificare inserzioni, SEO, social e analisi di mercato mantenendo il controllo.',
      skip: 'Vai al contenuto', menu: 'Menu', nav_product: 'Prodotto', nav_principles: 'Principi', nav_security: 'Sicurezza', nav_privacy: 'Privacy', nav_terms: 'Termini',
      hero_eyebrow: 'Software indipendente di Veylto Labs · Workspace desktop per venditori Etsy',
      hero_title: 'Lavora più velocemente senza perdere il controllo.',
      hero_text: 'Veylto riunisce gestione delle inserzioni, revisione SEO, dati del negozio, pianificazione social e ricerca di mercato in un unico workspace desktop local-first.',
      hero_primary: 'Scopri il prodotto', hero_support: 'Contatta il supporto', availability: 'Attualmente in sviluppo privato',
      mock_workspace: 'Workspace Veylto', mock_shop_overview: 'PANORAMICA NEGOZIO', mock_good_morning: 'Buongiorno', mock_connected: 'Connesso', mock_listings: 'Inserzioni', mock_synced: 'Sincronizzate', mock_orders: 'Ordini', mock_last30: 'Ultimi 30 giorni', mock_seo_reviews: 'Revisioni SEO', mock_ready: 'Pronte', mock_top_listings: 'Inserzioni migliori', mock_views: 'Visualizzazioni',
      product_eyebrow: 'Un solo workspace', product_title: 'Costruito sui workflow reali dei venditori.', product_intro: 'Veylto riduce il lavoro ripetitivo mantenendo ogni decisione importante visibile e verificabile.',
      feature_etsy_title: 'Workspace Etsy', feature_etsy_desc: 'Controlla i dati del negozio, prepara le inserzioni, gestisci le bozze e mantieni esplicite le azioni di scrittura.',
      feature_seo_title: 'Revisione SEO', feature_seo_desc: 'Confronta i contenuti attuali con i miglioramenti suggeriti prima di applicare qualsiasi modifica.',
      feature_social_title: 'Social Studio', feature_social_desc: 'Prepara contenuti specifici per piattaforma e organizza bozze, coda e cronologia delle pubblicazioni.',
      feature_market_title: 'Analisi di mercato', feature_market_desc: 'Struttura ricerca, evidenze e report senza confondere affermazioni non supportate con le decisioni del venditore.',
      feature_provider_title: 'Scelta del provider', feature_provider_desc: 'Usa i provider AI supportati in base alla configurazione, con provider e modello sempre visibili.',
      feature_local_title: 'Controllo local-first', feature_local_desc: 'Mantieni applicazione desktop, dati locali e revisione al centro dell’esperienza.',
      principles_eyebrow: 'Principi del prodotto', principles_title: 'L’automazione non deve nascondere le conseguenze.',
      principle_review_title: 'Revisione prima della scrittura', principle_review_desc: 'Le modifiche che interessano Etsy restano visibili, confermate e attribuibili.',
      principle_provider_title: 'Nessun cambio silenzioso del provider', principle_provider_desc: 'Il provider e il modello selezionati devono essere quelli realmente utilizzati nel workflow richiesto.',
      principle_boundaries_title: 'Confini dei dati chiari', principle_boundaries_desc: 'Dati locali, bozze AI e valori applicati a Etsy devono restare distinguibili nell’interfaccia.',
      security_eyebrow: 'Sicurezza e rispetto della piattaforma', security_title: 'Progettato per l’accesso autorizzato dei venditori.', security_intro: 'Veylto usa Etsy OAuth per l’accesso autorizzato al negozio. Non esegue scraping, non chiede ai venditori credenziali API, non aggira il checkout Etsy e non dichiara approvazione da parte di Etsy.', security_link: 'Leggi la panoramica sulla privacy →',
      security_oauth_title: 'Autorizzazione OAuth', security_oauth_desc: 'L’accesso dipende dai permessi concessi dal venditore.', security_write_title: 'Azioni di scrittura esplicite', security_write_desc: 'Le modifiche che incidono sul venditore richiedono un’azione chiara.', security_scraping_title: 'Nessuno scraping', security_scraping_desc: 'I dati della piattaforma vengono acquisiti tramite interfacce supportate.', security_revocable_title: 'Accesso revocabile', security_revocable_desc: 'L’accesso collegato può essere disconnesso o revocato.',
      cta_eyebrow: 'Sviluppo privato', cta_title: 'Veylto è in preparazione per test controllati.', cta_text: 'Disponibilità pubblica, prezzi e dettagli del supporto in produzione saranno pubblicati dopo il completamento della validazione.', cta_button: 'Contatta Veylto',
      footer_tagline: 'Software desktop local-first per i workflow dei venditori Etsy.', footer_brand_statement: 'Veylto è sviluppato sotto il marchio di prodotto indipendente Veylto Labs.', footer_privacy: 'Informativa privacy', footer_terms: 'Termini di servizio', footer_support: 'Supporto',
      trademark: 'Il termine “Etsy” è un marchio di Etsy, Inc. Questa applicazione utilizza l’API di Etsy, ma non è approvata né certificata da Etsy, Inc.'
    },
    es: {
      pageTitle: 'Veylto — Flujos de vendedores bajo control',
      metaDescription: 'Veylto es un espacio de trabajo de escritorio local-first para vendedores de Etsy que simplifica publicaciones, SEO, redes sociales e investigación de mercado sin perder el control.',
      skip: 'Ir al contenido', menu: 'Menú', nav_product: 'Producto', nav_principles: 'Principios', nav_security: 'Seguridad', nav_privacy: 'Privacidad', nav_terms: 'Términos',
      hero_eyebrow: 'Software independiente de Veylto Labs · Espacio de trabajo de escritorio para vendedores de Etsy',
      hero_title: 'Avanza más rápido sin perder el control.',
      hero_text: 'Veylto reúne flujos de publicaciones, revisión SEO, datos de la tienda, planificación social e investigación de mercado en un único espacio de trabajo local-first.',
      hero_primary: 'Explorar el producto', hero_support: 'Contactar con soporte', availability: 'Actualmente en desarrollo privado',
      mock_workspace: 'Espacio Veylto', mock_shop_overview: 'RESUMEN DE LA TIENDA', mock_good_morning: 'Buenos días', mock_connected: 'Conectado', mock_listings: 'Publicaciones', mock_synced: 'Sincronizadas', mock_orders: 'Pedidos', mock_last30: 'Últimos 30 días', mock_seo_reviews: 'Revisiones SEO', mock_ready: 'Listas', mock_top_listings: 'Mejores publicaciones', mock_views: 'Visitas',
      product_eyebrow: 'Un solo espacio', product_title: 'Creado para flujos de trabajo reales.', product_intro: 'Veylto reduce el trabajo repetitivo y mantiene cada decisión importante visible y revisable.',
      feature_etsy_title: 'Espacio Etsy', feature_etsy_desc: 'Revisa datos de la tienda, prepara publicaciones, gestiona borradores y mantén explícitas las acciones de escritura.',
      feature_seo_title: 'Revisión SEO', feature_seo_desc: 'Compara el contenido actual con las mejoras sugeridas antes de aplicar cambios.',
      feature_social_title: 'Social Studio', feature_social_desc: 'Prepara contenido específico para cada plataforma y organiza borradores, cola e historial de publicación.',
      feature_market_title: 'Inteligencia de mercado', feature_market_desc: 'Estructura investigación, evidencias e informes sin mezclar afirmaciones no respaldadas con las decisiones del vendedor.',
      feature_provider_title: 'Elección de proveedor', feature_provider_desc: 'Usa proveedores de IA compatibles según tu configuración, con proveedor y modelo visibles.',
      feature_local_title: 'Control local-first', feature_local_desc: 'Mantén la aplicación de escritorio, los datos locales y la revisión en el centro de la experiencia.',
      principles_eyebrow: 'Principios del producto', principles_title: 'La automatización no debe ocultar las consecuencias.',
      principle_review_title: 'Revisar antes de escribir', principle_review_desc: 'Los cambios que afectan a Etsy permanecen visibles, confirmados y atribuibles.',
      principle_provider_title: 'Sin cambios silenciosos de proveedor', principle_provider_desc: 'El proveedor y el modelo seleccionados deben ser los utilizados realmente en el flujo solicitado.',
      principle_boundaries_title: 'Límites de datos claros', principle_boundaries_desc: 'Los datos locales, borradores de IA y valores aplicados a Etsy deben distinguirse en la interfaz.',
      security_eyebrow: 'Seguridad y respeto a la plataforma', security_title: 'Diseñado para acceso autorizado del vendedor.', security_intro: 'Veylto utiliza Etsy OAuth para el acceso permitido a la tienda. No extrae datos mediante scraping, no solicita credenciales API, no elude el pago de Etsy ni afirma estar respaldado por Etsy.', security_link: 'Leer el resumen de privacidad →',
      security_oauth_title: 'Autorización OAuth', security_oauth_desc: 'El acceso depende de los permisos concedidos por el vendedor.', security_write_title: 'Acciones de escritura explícitas', security_write_desc: 'Los cambios que afectan al vendedor requieren una acción clara.', security_scraping_title: 'Sin scraping', security_scraping_desc: 'Los datos se obtienen mediante interfaces compatibles.', security_revocable_title: 'Acceso revocable', security_revocable_desc: 'El acceso conectado puede desconectarse o revocarse.',
      cta_eyebrow: 'Desarrollo privado', cta_title: 'Veylto se está preparando para pruebas controladas.', cta_text: 'La disponibilidad pública, los precios y el soporte de producción se publicarán tras completar la validación.', cta_button: 'Contactar con Veylto',
      footer_tagline: 'Software de escritorio local-first para flujos de vendedores de Etsy.', footer_brand_statement: 'Veylto se desarrolla bajo la marca de producto independiente Veylto Labs.', footer_privacy: 'Política de privacidad', footer_terms: 'Términos del servicio', footer_support: 'Soporte',
      trademark: 'El término “Etsy” es una marca comercial de Etsy, Inc. Esta aplicación utiliza la API de Etsy, pero no está respaldada ni certificada por Etsy, Inc.'
    },
    fr: {
      pageTitle: 'Veylto — Les workflows vendeurs sous contrôle',
      metaDescription: 'Veylto est un espace de travail desktop local-first pour les vendeurs Etsy, conçu pour simplifier les fiches, le SEO, les réseaux sociaux et l’étude de marché tout en gardant le contrôle.',
      skip: 'Aller au contenu', menu: 'Menu', nav_product: 'Produit', nav_principles: 'Principes', nav_security: 'Sécurité', nav_privacy: 'Confidentialité', nav_terms: 'Conditions',
      hero_eyebrow: 'Logiciel indépendant de Veylto Labs · Espace de travail desktop pour vendeurs Etsy',
      hero_title: 'Avancez plus vite sans perdre le contrôle.',
      hero_text: 'Veylto réunit les workflows de fiches produit, la révision SEO, les données de boutique, la planification sociale et l’étude de marché dans un seul espace local-first.',
      hero_primary: 'Découvrir le produit', hero_support: 'Contacter le support', availability: 'Actuellement en développement privé',
      mock_workspace: 'Espace Veylto', mock_shop_overview: 'VUE D’ENSEMBLE', mock_good_morning: 'Bonjour', mock_connected: 'Connecté', mock_listings: 'Fiches', mock_synced: 'Synchronisées', mock_orders: 'Commandes', mock_last30: '30 derniers jours', mock_seo_reviews: 'Révisions SEO', mock_ready: 'Prêtes', mock_top_listings: 'Meilleures fiches', mock_views: 'Vues',
      product_eyebrow: 'Un seul espace', product_title: 'Conçu autour des vrais workflows vendeurs.', product_intro: 'Veylto réduit le travail répétitif tout en gardant chaque décision importante visible et vérifiable.',
      feature_etsy_title: 'Espace Etsy', feature_etsy_desc: 'Consultez les données de boutique, préparez les fiches, gérez les brouillons et gardez les actions d’écriture explicites.',
      feature_seo_title: 'Révision SEO', feature_seo_desc: 'Comparez le contenu actuel aux améliorations proposées avant d’appliquer une modification.',
      feature_social_title: 'Social Studio', feature_social_desc: 'Préparez du contenu propre à chaque plateforme et organisez brouillons, file d’attente et historique de publication.',
      feature_market_title: 'Veille marché', feature_market_desc: 'Structurez recherche, preuves et rapports sans mélanger des affirmations non étayées aux décisions du vendeur.',
      feature_provider_title: 'Choix du fournisseur', feature_provider_desc: 'Utilisez les fournisseurs d’IA compatibles selon votre configuration, avec visibilité du fournisseur et du modèle.',
      feature_local_title: 'Contrôle local-first', feature_local_desc: 'Gardez l’application desktop, les données locales et la révision au centre de l’expérience.',
      principles_eyebrow: 'Principes du produit', principles_title: 'L’automatisation ne doit pas masquer les conséquences.',
      principle_review_title: 'Réviser avant d’écrire', principle_review_desc: 'Les changements qui affectent Etsy restent visibles, confirmés et attribuables.',
      principle_provider_title: 'Aucun changement silencieux de fournisseur', principle_provider_desc: 'Le fournisseur et le modèle sélectionnés doivent être ceux réellement utilisés pour le workflow demandé.',
      principle_boundaries_title: 'Des limites de données claires', principle_boundaries_desc: 'Les données locales, brouillons IA et valeurs appliquées à Etsy doivent rester distincts dans l’interface.',
      security_eyebrow: 'Sécurité et respect de la plateforme', security_title: 'Conçu pour un accès vendeur autorisé.', security_intro: 'Veylto utilise Etsy OAuth pour l’accès autorisé à la boutique. Il ne pratique pas le scraping, ne demande pas de clés API aux vendeurs, ne contourne pas le paiement Etsy et ne revendique aucun soutien d’Etsy.', security_link: 'Lire l’aperçu de confidentialité →',
      security_oauth_title: 'Autorisation OAuth', security_oauth_desc: 'L’accès dépend des autorisations accordées par le vendeur.', security_write_title: 'Actions d’écriture explicites', security_write_desc: 'Les changements qui affectent le vendeur nécessitent une action claire.', security_scraping_title: 'Aucun scraping', security_scraping_desc: 'Les données de la plateforme sont obtenues via des interfaces prises en charge.', security_revocable_title: 'Accès révocable', security_revocable_desc: 'L’accès connecté peut être déconnecté ou révoqué.',
      cta_eyebrow: 'Développement privé', cta_title: 'Veylto est préparé pour des tests contrôlés.', cta_text: 'La disponibilité publique, les tarifs et les détails du support en production seront publiés après validation.', cta_button: 'Contacter Veylto',
      footer_tagline: 'Logiciel desktop local-first pour les workflows des vendeurs Etsy.', footer_brand_statement: 'Veylto est développé sous la marque de produit indépendante Veylto Labs.', footer_privacy: 'Politique de confidentialité', footer_terms: 'Conditions d’utilisation', footer_support: 'Support',
      trademark: 'Le terme « Etsy » est une marque d’Etsy, Inc. Cette application utilise l’API Etsy, mais n’est ni approuvée ni certifiée par Etsy, Inc.'
    },
    de: {
      pageTitle: 'Veylto — Seller-Workflows unter Kontrolle',
      metaDescription: 'Veylto ist ein Local-first-Desktop-Arbeitsbereich für Etsy-Verkäufer, der Listings, SEO, Social Media und Marktforschung vereinfacht, ohne Kontrolle abzugeben.',
      skip: 'Zum Inhalt springen', menu: 'Menü', nav_product: 'Produkt', nav_principles: 'Prinzipien', nav_security: 'Sicherheit', nav_privacy: 'Datenschutz', nav_terms: 'Bedingungen',
      hero_eyebrow: 'Unabhängige Software von Veylto Labs · Desktop-Arbeitsbereich für Etsy-Verkäufer',
      hero_title: 'Schneller arbeiten, ohne Kontrolle abzugeben.',
      hero_text: 'Veylto vereint Listing-Workflows, SEO-Prüfung, Shop-Einblicke, Social-Planung und Marktforschung in einem Local-first-Desktop-Arbeitsbereich.',
      hero_primary: 'Produkt entdecken', hero_support: 'Support kontaktieren', availability: 'Derzeit in privater Entwicklung',
      mock_workspace: 'Veylto-Arbeitsbereich', mock_shop_overview: 'SHOP-ÜBERSICHT', mock_good_morning: 'Guten Morgen', mock_connected: 'Verbunden', mock_listings: 'Listings', mock_synced: 'Synchronisiert', mock_orders: 'Bestellungen', mock_last30: 'Letzte 30 Tage', mock_seo_reviews: 'SEO-Prüfungen', mock_ready: 'Bereit', mock_top_listings: 'Top-Listings', mock_views: 'Aufrufe',
      product_eyebrow: 'Ein Arbeitsbereich', product_title: 'Für echte Seller-Workflows entwickelt.', product_intro: 'Veylto reduziert wiederkehrende Arbeit und hält jede wichtige Entscheidung sichtbar und überprüfbar.',
      feature_etsy_title: 'Etsy-Arbeitsbereich', feature_etsy_desc: 'Shop-Daten prüfen, Listings vorbereiten, Entwürfe verwalten und Schreibaktionen ausdrücklich ausführen.',
      feature_seo_title: 'SEO-Prüfung', feature_seo_desc: 'Aktuelle Inhalte mit vorgeschlagenen Verbesserungen vergleichen, bevor Änderungen angewendet werden.',
      feature_social_title: 'Social Studio', feature_social_desc: 'Plattformspezifische Inhalte vorbereiten und Entwürfe, Warteschlange sowie Veröffentlichungshistorie organisieren.',
      feature_market_title: 'Marktanalysen', feature_market_desc: 'Recherche, Belege und Berichte strukturieren, ohne unbelegte Aussagen mit Seller-Entscheidungen zu vermischen.',
      feature_provider_title: 'Provider-Auswahl', feature_provider_desc: 'Unterstützte KI-Provider gemäß Konfiguration nutzen, wobei Provider und Modell sichtbar bleiben.',
      feature_local_title: 'Local-first-Kontrolle', feature_local_desc: 'Desktop-Anwendung, lokale Daten und Prüfung in den Mittelpunkt stellen.',
      principles_eyebrow: 'Produktprinzipien', principles_title: 'Automatisierung darf Folgen nicht verbergen.',
      principle_review_title: 'Prüfen vor dem Schreiben', principle_review_desc: 'Änderungen mit Etsy-Auswirkung bleiben sichtbar, bestätigt und nachvollziehbar.',
      principle_provider_title: 'Kein stiller Provider-Wechsel', principle_provider_desc: 'Ausgewählter Provider und Modell müssen im angeforderten Workflow tatsächlich verwendet werden.',
      principle_boundaries_title: 'Klare Datengrenzen', principle_boundaries_desc: 'Lokale Daten, KI-Entwürfe und auf Etsy angewendete Werte bleiben in der Oberfläche unterscheidbar.',
      security_eyebrow: 'Sicherheit und Plattformrespekt', security_title: 'Für autorisierten Seller-Zugriff entwickelt.', security_intro: 'Veylto nutzt Etsy OAuth für erlaubten Shop-Zugriff. Es betreibt kein Scraping, fordert keine API-Zugangsdaten von Sellern an, umgeht nicht den Etsy-Checkout und behauptet keine Unterstützung durch Etsy.', security_link: 'Datenschutzübersicht lesen →',
      security_oauth_title: 'OAuth-Autorisierung', security_oauth_desc: 'Der Zugriff basiert auf den vom Seller erteilten Berechtigungen.', security_write_title: 'Explizite Schreibaktionen', security_write_desc: 'Seller-relevante Änderungen erfordern eine klare Aktion.', security_scraping_title: 'Kein Scraping', security_scraping_desc: 'Plattformdaten werden über unterstützte Schnittstellen abgerufen.', security_revocable_title: 'Widerrufbarer Zugriff', security_revocable_desc: 'Verbundener Zugriff kann getrennt oder widerrufen werden.',
      cta_eyebrow: 'Private Entwicklung', cta_title: 'Veylto wird für kontrollierte Tests vorbereitet.', cta_text: 'Öffentliche Verfügbarkeit, Preise und Produktionssupport werden nach abgeschlossener Validierung veröffentlicht.', cta_button: 'Veylto kontaktieren',
      footer_tagline: 'Local-first-Desktop-Software für Etsy-Seller-Workflows.', footer_brand_statement: 'Veylto wird unter der unabhängigen Produktmarke Veylto Labs entwickelt.', footer_privacy: 'Datenschutzerklärung', footer_terms: 'Nutzungsbedingungen', footer_support: 'Support',
      trademark: 'Der Begriff „Etsy“ ist eine Marke von Etsy, Inc. Diese Anwendung verwendet die Etsy-API, wird jedoch nicht von Etsy, Inc. unterstützt oder zertifiziert.'
    }
  };

  const supportedLanguages = Object.keys(translations);
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get('lang');
  const savedLanguage = window.localStorage.getItem('veylto-site-language');
  const browserLanguage = (navigator.language || 'en').slice(0, 2).toLowerCase();
  const initialLanguage = supportedLanguages.includes(requestedLanguage)
    ? requestedLanguage
    : supportedLanguages.includes(savedLanguage)
      ? savedLanguage
      : supportedLanguages.includes(browserLanguage)
        ? browserLanguage
        : 'en';

  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.title = dictionary.pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', dictionary.metaDescription);

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dictionary[key]) node.textContent = dictionary[key];
    });

    const selector = document.querySelector('#language-selector');
    if (selector) selector.value = language;

    window.localStorage.setItem('veylto-site-language', language);
  };

  const selector = document.querySelector('#language-selector');
  if (selector) {
    selector.addEventListener('change', (event) => {
      const language = event.target.value;
      applyLanguage(language);
      const url = new URL(window.location.href);
      if (language === 'en') url.searchParams.delete('lang');
      else url.searchParams.set('lang', language);
      window.history.replaceState({}, '', url);
    });
  }

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('#primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  applyLanguage(initialLanguage);
})();