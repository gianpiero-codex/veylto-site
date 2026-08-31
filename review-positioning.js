(() => {
  const common = {
    en: {
      updated: 'Last updated: August 31, 2026',
      availability: 'Limited early access available',
      cta_eyebrow: 'Limited early access',
      cta_title: 'Veylto is available to a selected group of Etsy sellers.',
      cta_text: 'Request access to evaluate Veylto and receive product updates about availability and pricing.',
      cta_button: 'Request early access',
      privacy_development: 'Veylto is available through a limited early-access program. This policy applies to website visitors, early-access requests and authorized use of Veylto.',
      terms_development: 'Veylto is available through a limited early-access program. These terms apply to access requests, evaluation access and any authorized version made available by Veylto.'
    },
    it: {
      updated: 'Ultimo aggiornamento: 31 agosto 2026',
      availability: 'Accesso anticipato limitato disponibile',
      cta_eyebrow: 'Accesso anticipato limitato',
      cta_title: 'Veylto è disponibile per un gruppo selezionato di venditori Etsy.',
      cta_text: 'Richiedi l’accesso per valutare Veylto e ricevere aggiornamenti su disponibilità e prezzi.',
      cta_button: 'Richiedi accesso anticipato',
      privacy_development: 'Veylto è disponibile tramite un programma di accesso anticipato limitato. Questa informativa si applica ai visitatori del sito, alle richieste di accesso anticipato e all’uso autorizzato di Veylto.',
      terms_development: 'Veylto è disponibile tramite un programma di accesso anticipato limitato. Questi termini si applicano alle richieste di accesso, agli accessi di valutazione e a ogni versione autorizzata resa disponibile da Veylto.'
    },
    es: {
      updated: 'Última actualización: 31 de agosto de 2026',
      availability: 'Acceso anticipado limitado disponible',
      cta_eyebrow: 'Acceso anticipado limitado',
      cta_title: 'Veylto está disponible para un grupo seleccionado de vendedores de Etsy.',
      cta_text: 'Solicita acceso para evaluar Veylto y recibir novedades sobre disponibilidad y precios.',
      cta_button: 'Solicitar acceso anticipado',
      privacy_development: 'Veylto está disponible mediante un programa limitado de acceso anticipado. Esta política se aplica a visitantes del sitio, solicitudes de acceso anticipado y uso autorizado de Veylto.',
      terms_development: 'Veylto está disponible mediante un programa limitado de acceso anticipado. Estos términos se aplican a solicitudes de acceso, acceso de evaluación y cualquier versión autorizada facilitada por Veylto.'
    },
    fr: {
      updated: 'Dernière mise à jour : 31 août 2026',
      availability: 'Accès anticipé limité disponible',
      cta_eyebrow: 'Accès anticipé limité',
      cta_title: 'Veylto est disponible pour un groupe sélectionné de vendeurs Etsy.',
      cta_text: 'Demandez un accès pour évaluer Veylto et recevoir des informations sur la disponibilité et les tarifs.',
      cta_button: 'Demander un accès anticipé',
      privacy_development: 'Veylto est disponible dans le cadre d’un programme d’accès anticipé limité. Cette politique s’applique aux visiteurs du site, aux demandes d’accès anticipé et à l’utilisation autorisée de Veylto.',
      terms_development: 'Veylto est disponible dans le cadre d’un programme d’accès anticipé limité. Ces conditions s’appliquent aux demandes d’accès, aux accès d’évaluation et à toute version autorisée mise à disposition par Veylto.'
    },
    de: {
      updated: 'Letzte Aktualisierung: 31. August 2026',
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

(() => {
  'use strict';

  const API_URL = 'https://script.google.com/macros/s/AKfycbzgI89EH9Uc51H56u3dcKVElcC6o5b3wc-DveioXm13-IIRUxIXeA7cDnFLgN4KWWkUvQ/exec';
  const CONSENT_KEY = 'veylto_cookie_consent_v1';
  const SESSION_KEY = 'veylto_visit_counted';
  const VERSION = 2;
  const supported = ['en', 'it', 'es', 'fr', 'de'];
  const copy = {
    en: {
      title: 'Cookie & privacy choices',
      text: 'Veylto uses essential browser storage to remember your language and privacy choice. With your consent, a lightweight visitor counter sends page path, page title, domain and timezone to our Google Apps Script endpoint for aggregated site statistics. No advertising tracking is enabled.',
      accept: 'Accept analytics',
      reject: 'Essential only',
      privacy: 'Privacy policy',
      settings: 'Cookie settings',
      label: 'Cookie and privacy preferences'
    },
    it: {
      title: 'Cookie e preferenze privacy',
      text: 'Veylto usa archiviazione essenziale del browser per ricordare lingua e scelta privacy. Con il tuo consenso, un contatore visite leggero invia percorso pagina, titolo, dominio e fuso orario al nostro endpoint Google Apps Script per statistiche aggregate del sito. Non è attivo alcun tracciamento pubblicitario.',
      accept: 'Accetta analytics',
      reject: 'Solo essenziali',
      privacy: 'Informativa privacy',
      settings: 'Impostazioni cookie',
      label: 'Preferenze cookie e privacy'
    },
    es: {
      title: 'Cookies y privacidad',
      text: 'Veylto usa almacenamiento esencial del navegador para recordar el idioma y tu elección de privacidad. Con tu consentimiento, un contador ligero envía la ruta y el título de la página, el dominio y la zona horaria a nuestro endpoint de Google Apps Script para estadísticas agregadas. No se activa seguimiento publicitario.',
      accept: 'Aceptar analítica',
      reject: 'Solo esenciales',
      privacy: 'Política de privacidad',
      settings: 'Configurar cookies',
      label: 'Preferencias de cookies y privacidad'
    },
    fr: {
      title: 'Cookies et confidentialité',
      text: 'Veylto utilise le stockage essentiel du navigateur pour mémoriser la langue et votre choix de confidentialité. Avec votre consentement, un compteur léger envoie le chemin et le titre de la page, le domaine et le fuseau horaire à notre endpoint Google Apps Script pour des statistiques agrégées. Aucun suivi publicitaire n’est activé.',
      accept: 'Accepter l’analyse',
      reject: 'Essentiels uniquement',
      privacy: 'Politique de confidentialité',
      settings: 'Paramètres des cookies',
      label: 'Préférences cookies et confidentialité'
    },
    de: {
      title: 'Cookies und Datenschutz',
      text: 'Veylto verwendet notwendigen Browser-Speicher, um Sprache und Datenschutzauswahl zu speichern. Mit Ihrer Einwilligung sendet ein einfacher Besucherzähler Seitenpfad, Seitentitel, Domain und Zeitzone an unseren Google-Apps-Script-Endpunkt für aggregierte Website-Statistiken. Es ist kein Werbetracking aktiviert.',
      accept: 'Analytics akzeptieren',
      reject: 'Nur erforderlich',
      privacy: 'Datenschutzerklärung',
      settings: 'Cookie-Einstellungen',
      label: 'Cookie- und Datenschutzeinstellungen'
    }
  };

  const safeGet = (key) => {
    try { return window.localStorage.getItem(key); } catch (_) { return null; }
  };

  const safeSet = (key, value) => {
    try { window.localStorage.setItem(key, value); return true; } catch (_) { return false; }
  };

  const language = () => supported.includes(document.documentElement.lang)
    ? document.documentElement.lang
    : 'en';

  const getConsent = () => {
    const raw = safeGet(CONSENT_KEY);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      return parsed && parsed.version === VERSION && typeof parsed.analytics === 'boolean'
        ? parsed
        : null;
    } catch (_) {
      return null;
    }
  };

  const saveConsent = (analytics) => {
    const value = {
      version: VERSION,
      preferences: Boolean(analytics),
      analytics: Boolean(analytics),
      advertising: false,
      updated_at: new Date().toISOString()
    };
    safeSet(CONSENT_KEY, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('veylto:consent-changed', { detail: value }));
    return value;
  };

  const getDomain = () => {
    const host = window.location.hostname || 'veyltolabs.com';
    if (host === 'localhost' || host === '127.0.0.1') return 'veyltolabs.com';
    return host.replace(/^www\./, '');
  };

  const getTimezone = () => {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; }
    catch (_) { return 'UTC'; }
  };

  const hasSessionVisit = () => {
    try { return window.sessionStorage.getItem(SESSION_KEY) === '1'; }
    catch (_) { return false; }
  };

  const markSessionVisit = () => {
    try { window.sessionStorage.setItem(SESSION_KEY, '1'); } catch (_) {}
  };

  const requestCounter = () => {
    const consent = getConsent();
    if (!consent || consent.analytics !== true || hasSessionVisit()) return null;
    markSessionVisit();
    return fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      body: JSON.stringify({
        domain: getDomain(),
        timezone: getTimezone(),
        page_path: window.location.pathname || '/',
        page_title: document.title || 'Veylto'
      })
    });
  };

  const injectStyles = () => {
    if (document.querySelector('#veylto-cookie-consent-styles')) return;
    const style = document.createElement('style');
    style.id = 'veylto-cookie-consent-styles';
    style.textContent = [
      '.cookie-consent{position:fixed;left:18px;right:18px;bottom:18px;z-index:9999;max-width:1040px;margin:0 auto;background:#101a33;color:#f7f9ff;border:1px solid rgba(255,255,255,.16);box-shadow:0 20px 55px rgba(0,0,0,.42);padding:20px;border-radius:14px;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}',
      '.cookie-consent[hidden]{display:none}',
      '.cookie-consent__row{display:flex;gap:22px;align-items:flex-end;justify-content:space-between}',
      '.cookie-consent__copy{max-width:690px}',
      '.cookie-consent h2{font-size:20px;line-height:1.25;margin:0 0 8px;color:#fff}',
      '.cookie-consent p{font-size:14px;line-height:1.55;margin:0;color:#c8d0e2}',
      '.cookie-consent a{color:#fff;text-decoration:underline;font-weight:700}',
      '.cookie-consent__actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end;min-width:270px}',
      '.cookie-consent__btn{min-height:42px;padding:9px 14px;border:1px solid #8ba7ff;border-radius:8px;background:transparent;color:#f7f9ff;font:700 14px Inter,system-ui,sans-serif;cursor:pointer}',
      '.cookie-consent__btn--primary{background:#6f8cff;border-color:#6f8cff;color:#071126}',
      '.cookie-consent__btn:hover,.cookie-consent__btn:focus-visible{outline:2px solid #a9bbff;outline-offset:2px}',
      '.cookie-settings{position:fixed;left:16px;bottom:16px;z-index:9998;border:1px solid #6578b8;border-radius:999px;background:#101a33;color:#f7f9ff;padding:8px 12px;font:700 12px Inter,system-ui,sans-serif;box-shadow:0 7px 20px rgba(0,0,0,.25);cursor:pointer}',
      '.cookie-settings[hidden]{display:none}',
      '@media(max-width:720px){.cookie-consent{left:10px;right:10px;bottom:10px;padding:16px}.cookie-consent__row{align-items:stretch;flex-direction:column}.cookie-consent__actions{justify-content:stretch;min-width:0}.cookie-consent__btn{flex:1 1 140px}.cookie-settings{left:10px;bottom:10px}}'
    ].join('');
    document.head.appendChild(style);
  };

  let banner;
  let settingsButton;

  const privacyHref = () => {
    const lang = language();
    return `privacy.html?lang=${encodeURIComponent(lang)}`;
  };

  const render = (forceOpen = false) => {
    injectStyles();
    const dictionary = copy[language()] || copy.en;

    if (!banner) {
      banner = document.createElement('section');
      banner.className = 'cookie-consent';
      banner.setAttribute('role', 'dialog');
      banner.setAttribute('aria-modal', 'false');
      banner.innerHTML = `
        <div class="cookie-consent__row">
          <div class="cookie-consent__copy">
            <h2 data-cookie-title></h2>
            <p><span data-cookie-text></span> <a data-cookie-privacy></a></p>
          </div>
          <div class="cookie-consent__actions">
            <button type="button" class="cookie-consent__btn" data-cookie-reject></button>
            <button type="button" class="cookie-consent__btn cookie-consent__btn--primary" data-cookie-accept></button>
          </div>
        </div>`;
      document.body.appendChild(banner);
      banner.querySelector('[data-cookie-reject]').addEventListener('click', () => {
        saveConsent(false);
        banner.hidden = true;
        settingsButton.hidden = false;
      });
      banner.querySelector('[data-cookie-accept]').addEventListener('click', () => {
        saveConsent(true);
        banner.hidden = true;
        settingsButton.hidden = false;
        requestCounter();
      });
    }

    if (!settingsButton) {
      settingsButton = document.createElement('button');
      settingsButton.type = 'button';
      settingsButton.className = 'cookie-settings';
      settingsButton.addEventListener('click', () => {
        render(true);
        banner.querySelector('[data-cookie-reject]').focus();
      });
      document.body.appendChild(settingsButton);
    }

    banner.setAttribute('aria-label', dictionary.label);
    banner.querySelector('[data-cookie-title]').textContent = dictionary.title;
    banner.querySelector('[data-cookie-text]').textContent = dictionary.text;
    const privacy = banner.querySelector('[data-cookie-privacy]');
    privacy.textContent = dictionary.privacy;
    privacy.href = privacyHref();
    banner.querySelector('[data-cookie-reject]').textContent = dictionary.reject;
    banner.querySelector('[data-cookie-accept]').textContent = dictionary.accept;
    settingsButton.textContent = dictionary.settings;
    settingsButton.setAttribute('aria-label', dictionary.settings);

    const consent = getConsent();
    banner.hidden = !forceOpen && Boolean(consent);
    settingsButton.hidden = forceOpen || !consent;
  };

  const init = () => {
    render(false);
    const request = requestCounter();
    if (request && request.catch) request.catch(() => {});
  };

  window.VeyltoCookieConsent = {
    get: getConsent,
    open: () => render(true),
    acceptAnalytics: () => { saveConsent(true); return requestCounter(); },
    acceptPreferences: () => { saveConsent(true); return requestCounter(); },
    essentialOnly: () => saveConsent(false)
  };

  window.addEventListener('veylto:consent-changed', (event) => {
    if (event.detail && event.detail.analytics === true) {
      const request = requestCounter();
      if (request && request.catch) request.catch(() => {});
    }
  });

  new MutationObserver(() => render(false)).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });

  window.addEventListener('storage', (event) => {
    if (event.key === CONSENT_KEY || event.key === 'veylto-site-language') {
      render(false);
      const request = requestCounter();
      if (request && request.catch) request.catch(() => {});
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
