(() => {
  const common = {
    en: {
      availability: 'Limited early access available',
      cta_eyebrow: 'Limited early access',
      cta_title: 'Veylto is available to a selected group of Etsy sellers.',
      cta_text: 'Request access to evaluate Veylto and receive product updates about availability and pricing.',
      cta_button: 'Request early access',
      privacy_development: 'Veylto is available through a limited early-access program. This policy applies to website visitors, early-access requests and authorized use of Veylto.',
      terms_development: 'Veylto is available through a limited early-access program. These terms apply to access requests, evaluation access and any authorized version made available by Veylto.'
    },
    it: {
      availability: 'Accesso anticipato limitato disponibile',
      cta_eyebrow: 'Accesso anticipato limitato',
      cta_title: 'Veylto è disponibile per un gruppo selezionato di venditori Etsy.',
      cta_text: 'Richiedi l’accesso per valutare Veylto e ricevere aggiornamenti su disponibilità e prezzi.',
      cta_button: 'Richiedi accesso anticipato',
      privacy_development: 'Veylto è disponibile tramite un programma di accesso anticipato limitato. Questa informativa si applica ai visitatori del sito, alle richieste di accesso anticipato e all’uso autorizzato di Veylto.',
      terms_development: 'Veylto è disponibile tramite un programma di accesso anticipato limitato. Questi termini si applicano alle richieste di accesso, agli accessi di valutazione e a ogni versione autorizzata resa disponibile da Veylto.'
    },
    es: {
      availability: 'Acceso anticipado limitado disponible',
      cta_eyebrow: 'Acceso anticipado limitado',
      cta_title: 'Veylto está disponible para un grupo seleccionado de vendedores de Etsy.',
      cta_text: 'Solicita acceso para evaluar Veylto y recibir novedades sobre disponibilidad y precios.',
      cta_button: 'Solicitar acceso anticipado',
      privacy_development: 'Veylto está disponible mediante un programa limitado de acceso anticipado. Esta política se aplica a visitantes del sitio, solicitudes de acceso anticipado y uso autorizado de Veylto.',
      terms_development: 'Veylto está disponible mediante un programa limitado de acceso anticipado. Estos términos se aplican a solicitudes de acceso, acceso de evaluación y cualquier versión autorizada facilitada por Veylto.'
    },
    fr: {
      availability: 'Accès anticipé limité disponible',
      cta_eyebrow: 'Accès anticipé limité',
      cta_title: 'Veylto est disponible pour un groupe sélectionné de vendeurs Etsy.',
      cta_text: 'Demandez un accès pour évaluer Veylto et recevoir des informations sur la disponibilité et les tarifs.',
      cta_button: 'Demander un accès anticipé',
      privacy_development: 'Veylto est disponible dans le cadre d’un programme d’accès anticipé limité. Cette politique s’applique aux visiteurs du site, aux demandes d’accès anticipé et à l’utilisation autorisée de Veylto.',
      terms_development: 'Veylto est disponible dans le cadre d’un programme d’accès anticipé limité. Ces conditions s’appliquent aux demandes d’accès, aux accès d’évaluation et à toute version autorisée mise à disposition par Veylto.'
    },
    de: {
      availability: 'Begrenzter Early Access verfügbar',
      cta_eyebrow: 'Begrenzter Early Access',
      cta_title: 'Veylto ist für eine ausgewählte Gruppe von Etsy-Verkäufern verfügbar.',
      cta_text: 'Fordern Sie Zugang an, um Veylto zu testen und Updates zu Verfügbarkeit und Preisen zu erhalten.',
      cta_button: 'Early Access anfordern',
      privacy_development: 'Veylto ist im Rahmen eines begrenzten Early-Access-Programms verfügbar. Diese Erklärung gilt für Website-Besucher, Early-Access-Anfragen und die autorisierte Nutzung von Veylto.',
      terms_development: 'Veylto ist im Rahmen eines begrenzten Early-Access-Programms verfügbar. Diese Bedingungen gelten für Zugangsanfragen, Testzugänge und jede von Veylto bereitgestellte autorisierte Version.'
    }
  };

  const apply = () => {
    const language = ['en', 'it', 'es', 'fr', 'de'].includes(document.documentElement.lang)
      ? document.documentElement.lang
      : 'en';
    const dictionary = { ...common.en, ...common[language] };
    Object.entries(dictionary).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
        node.textContent = value;
      });
    });
  };

  new MutationObserver(apply).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });
  const selector = document.querySelector('#language-selector');
  if (selector) selector.addEventListener('change', () => setTimeout(apply, 0));
  apply();
})();
