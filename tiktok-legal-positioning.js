(() => {
  const copy = {
    en: {
      updated: 'Last updated: August 23, 2026',
      privacy_tiktok_title: 'TikTok authorization and draft uploads',
      privacy_tiktok_text: 'When TikTok features are enabled, Veylto may process the authorized TikTok account open ID, display name, avatar, OAuth authorization credentials and the local video explicitly selected by the seller for draft upload. This information is used only to identify the connected account and perform seller-initiated TikTok draft uploads. Veylto does not request TikTok passwords, scrape TikTok or access unrelated TikTok users. Connected access can be revoked through TikTok account controls and, where available, through Veylto.'
    },
    it: {
      updated: 'Ultimo aggiornamento: 23 agosto 2026',
      privacy_tiktok_title: 'Autorizzazione TikTok e caricamento delle bozze',
      privacy_tiktok_text: 'Quando le funzionalità TikTok sono abilitate, Veylto può trattare open ID, nome visualizzato, avatar e credenziali di autorizzazione OAuth dell’account TikTok autorizzato, oltre al video locale selezionato esplicitamente dal venditore per il caricamento come bozza. Queste informazioni sono usate solo per identificare l’account collegato ed eseguire caricamenti di bozze TikTok avviati dal venditore. Veylto non richiede password TikTok, non effettua scraping di TikTok e non accede a utenti TikTok non correlati. L’accesso collegato può essere revocato dai controlli dell’account TikTok e, quando disponibile, da Veylto.'
    },
    es: {
      updated: 'Última actualización: 23 de agosto de 2026',
      privacy_tiktok_title: 'Autorización de TikTok y carga de borradores',
      privacy_tiktok_text: 'Cuando las funciones de TikTok están habilitadas, Veylto puede tratar el open ID, el nombre visible, el avatar y las credenciales de autorización OAuth de la cuenta de TikTok autorizada, además del vídeo local seleccionado expresamente por el vendedor para cargarlo como borrador. Esta información se utiliza únicamente para identificar la cuenta conectada y realizar cargas de borradores de TikTok iniciadas por el vendedor. Veylto no solicita contraseñas de TikTok, no extrae datos de TikTok ni accede a usuarios de TikTok no relacionados. El acceso conectado puede revocarse desde los controles de la cuenta de TikTok y, cuando esté disponible, desde Veylto.'
    },
    fr: {
      updated: 'Dernière mise à jour : 23 août 2026',
      privacy_tiktok_title: 'Autorisation TikTok et téléversement de brouillons',
      privacy_tiktok_text: 'Lorsque les fonctionnalités TikTok sont activées, Veylto peut traiter l’open ID, le nom d’affichage, l’avatar et les identifiants d’autorisation OAuth du compte TikTok autorisé, ainsi que la vidéo locale explicitement sélectionnée par le vendeur pour être téléversée comme brouillon. Ces informations sont utilisées uniquement pour identifier le compte connecté et effectuer les téléversements de brouillons TikTok initiés par le vendeur. Veylto ne demande pas les mots de passe TikTok, n’extrait pas de données de TikTok et n’accède pas à des utilisateurs TikTok sans rapport. L’accès connecté peut être révoqué depuis les contrôles du compte TikTok et, lorsqu’il est disponible, depuis Veylto.'
    },
    de: {
      updated: 'Letzte Aktualisierung: 23. August 2026',
      privacy_tiktok_title: 'TikTok-Autorisierung und Entwurfs-Uploads',
      privacy_tiktok_text: 'Wenn TikTok-Funktionen aktiviert sind, kann Veylto die Open ID, den Anzeigenamen, den Avatar und OAuth-Autorisierungsdaten des autorisierten TikTok-Kontos sowie das vom Verkäufer ausdrücklich für den Entwurfs-Upload ausgewählte lokale Video verarbeiten. Diese Informationen werden ausschließlich verwendet, um das verbundene Konto zu identifizieren und vom Verkäufer gestartete TikTok-Entwurfs-Uploads auszuführen. Veylto fordert keine TikTok-Passwörter an, führt kein TikTok-Scraping durch und greift nicht auf unbeteiligte TikTok-Nutzer zu. Der verbundene Zugriff kann über die TikTok-Kontoeinstellungen und, soweit verfügbar, über Veylto widerrufen werden.'
    }
  };

  const apply = () => {
    const language = ['en', 'it', 'es', 'fr', 'de'].includes(document.documentElement.lang)
      ? document.documentElement.lang
      : 'en';
    const dictionary = { ...copy.en, ...copy[language] };
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
