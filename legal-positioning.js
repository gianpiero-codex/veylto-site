(() => {
  const common = {
    en: {
      development_label: 'Availability.',
      translation_notice: 'Translations are provided for convenience. If versions differ, the English version controls.'
    },
    it: {
      development_label: 'Disponibilità.',
      translation_notice: 'Le traduzioni sono fornite per comodità. In caso di differenze, prevale la versione inglese.'
    },
    es: {
      development_label: 'Disponibilidad.',
      translation_notice: 'Las traducciones se ofrecen por comodidad. Si existen diferencias, prevalece la versión inglesa.'
    },
    fr: {
      development_label: 'Disponibilité.',
      translation_notice: 'Les traductions sont fournies pour faciliter la lecture. En cas de divergence, la version anglaise prévaut.'
    },
    de: {
      development_label: 'Verfügbarkeit.',
      translation_notice: 'Übersetzungen dienen der leichteren Lesbarkeit. Bei Abweichungen ist die englische Fassung maßgeblich.'
    }
  };

  const pages = {
    privacy: {
      en: {
        privacy_development: 'Veylto is preparing a limited early-access release. This policy applies to website visitors, early-access reservations and authorized use of Veylto.',
        privacy_p5: 'Veylto is designed around a desktop application and local workflow storage. Some functions may use secure service infrastructure, including OAuth coordination, credential protection, licensing, rate limiting and controlled Etsy API access. Information about infrastructure and retention will be maintained in this policy as services are introduced or changed.',
        privacy_p12: 'This policy may be updated to reflect changes to Veylto’s services, architecture, features or legal obligations. The latest version will be published on this page with a revised date.'
      },
      it: {
        privacy_development: 'Veylto si prepara a un accesso anticipato riservato a un gruppo limitato di utenti. Questa informativa si applica ai visitatori del sito, alle prenotazioni dell’accesso anticipato e all’uso autorizzato di Veylto.',
        privacy_p5: 'Veylto è progettato attorno a un’applicazione desktop e all’archiviazione locale dei workflow. Alcune funzioni possono utilizzare un’infrastruttura sicura, inclusi coordinamento OAuth, protezione delle credenziali, licenze, limiti di frequenza e accesso controllato all’API Etsy. Le informazioni su infrastruttura e conservazione saranno mantenute aggiornate in questa informativa quando i servizi vengono introdotti o modificati.',
        privacy_p12: 'Questa informativa può essere aggiornata per riflettere modifiche ai servizi, all’architettura, alle funzionalità o agli obblighi legali di Veylto. La versione più recente sarà pubblicata su questa pagina con una data aggiornata.'
      },
      es: {
        privacy_development: 'Veylto se prepara para un acceso anticipado limitado. Esta política se aplica a los visitantes del sitio, a las reservas de acceso anticipado y al uso autorizado de Veylto.',
        privacy_p5: 'Veylto se diseña en torno a una aplicación de escritorio y al almacenamiento local de los flujos. Algunas funciones pueden utilizar infraestructura segura, incluida la coordinación OAuth, protección de credenciales, licencias, límites de frecuencia y acceso controlado a la API de Etsy. La información sobre infraestructura y conservación se mantendrá actualizada en esta política cuando los servicios se introduzcan o cambien.',
        privacy_p12: 'Esta política puede actualizarse para reflejar cambios en los servicios, la arquitectura, las funciones o las obligaciones legales de Veylto. La versión más reciente se publicará en esta página con una fecha revisada.'
      },
      fr: {
        privacy_development: 'Veylto prépare un accès anticipé limité. Cette politique s’applique aux visiteurs du site, aux réservations d’accès anticipé et à l’utilisation autorisée de Veylto.',
        privacy_p5: 'Veylto est conçu autour d’une application desktop et du stockage local des workflows. Certaines fonctions peuvent utiliser une infrastructure sécurisée, notamment pour la coordination OAuth, la protection des identifiants, les licences, la limitation du débit et l’accès contrôlé à l’API Etsy. Les informations relatives à l’infrastructure et à la conservation seront tenues à jour dans cette politique lorsque les services seront introduits ou modifiés.',
        privacy_p12: 'Cette politique peut être mise à jour pour refléter les changements apportés aux services, à l’architecture, aux fonctionnalités ou aux obligations légales de Veylto. La version la plus récente sera publiée sur cette page avec une date révisée.'
      },
      de: {
        privacy_development: 'Veylto bereitet einen begrenzten Early Access vor. Diese Erklärung gilt für Website-Besucher, Early-Access-Reservierungen und die autorisierte Nutzung von Veylto.',
        privacy_p5: 'Veylto ist als Desktop-Anwendung mit lokaler Workflow-Speicherung konzipiert. Einige Funktionen können sichere Infrastruktur nutzen, darunter OAuth-Koordination, Schutz von Zugangsdaten, Lizenzierung, Ratenbegrenzung und kontrollierter Etsy-API-Zugriff. Informationen zu Infrastruktur und Aufbewahrung werden in dieser Erklärung aktualisiert, wenn Dienste eingeführt oder geändert werden.',
        privacy_p12: 'Diese Erklärung kann aktualisiert werden, um Änderungen an Diensten, Architektur, Funktionen oder rechtlichen Pflichten von Veylto abzubilden. Die neueste Version wird mit einem aktualisierten Datum auf dieser Seite veröffentlicht.'
      }
    },
    terms: {
      en: {
        terms_development: 'Veylto is preparing a limited early-access release. These terms apply to reservations, evaluation access and any authorized version made available by Veylto.',
        terms_p1: 'Veylto is AI-assisted desktop software developed under the independent Veylto Labs product brand. Features, integrations, availability and system requirements may change over time.',
        terms_p7: 'Veylto may be unavailable, interrupted or changed without notice. External services, AI providers and APIs may impose their own limits, terms or outages.',
        terms_p9: 'To the maximum extent permitted by law, Veylto and any early-access versions are provided “as is” and “as available,” without warranties of uninterrupted operation, fitness for a particular purpose, error-free output or compatibility with every marketplace change.',
        terms_p11: 'Access may be limited or terminated for security reasons, misuse, policy violations or discontinuation of a service or access program. Users may stop using the software and revoke connected access at any time.',
        terms_p12: 'These terms may be updated to reflect changes to Veylto’s services, features or legal obligations. Material changes will be reflected by the date shown at the top of this page.'
      },
      it: {
        terms_development: 'Veylto si prepara a un accesso anticipato riservato a un gruppo limitato di utenti. Questi termini si applicano alle prenotazioni, agli accessi di valutazione e a ogni versione autorizzata resa disponibile da Veylto.',
        terms_p1: 'Veylto è un software desktop assistito dall’AI sviluppato sotto il marchio di prodotto indipendente Veylto Labs. Funzionalità, integrazioni, disponibilità e requisiti di sistema possono cambiare nel tempo.',
        terms_p7: 'Veylto può essere indisponibile, interrotto o modificato senza preavviso. Servizi esterni, provider AI e API possono imporre limiti, termini o interruzioni propri.',
        terms_p9: 'Nella misura massima consentita dalla legge, Veylto e le eventuali versioni di accesso anticipato sono forniti “così come sono” e “come disponibili”, senza garanzie di funzionamento ininterrotto, idoneità a uno scopo particolare, output privo di errori o compatibilità con ogni modifica del marketplace.',
        terms_p11: 'L’accesso può essere limitato o interrotto per motivi di sicurezza, uso improprio, violazioni delle policy o cessazione di un servizio o programma di accesso. Gli utenti possono smettere di usare il software e revocare in qualsiasi momento gli accessi collegati.',
        terms_p12: 'Questi termini possono essere aggiornati per riflettere modifiche ai servizi, alle funzionalità o agli obblighi legali di Veylto. Le modifiche sostanziali saranno indicate dalla data riportata in alto nella pagina.'
      },
      es: {
        terms_development: 'Veylto se prepara para un acceso anticipado limitado. Estos términos se aplican a las reservas, al acceso de evaluación y a cualquier versión autorizada ofrecida por Veylto.',
        terms_p1: 'Veylto es un software de escritorio asistido por IA desarrollado bajo la marca de producto independiente Veylto Labs. Las funciones, integraciones, disponibilidad y requisitos del sistema pueden cambiar con el tiempo.',
        terms_p7: 'Veylto puede no estar disponible, sufrir interrupciones o cambiar sin previo aviso. Los servicios externos, proveedores de IA y API pueden imponer sus propios límites, términos o interrupciones.',
        terms_p9: 'En la máxima medida permitida por la ley, Veylto y cualquier versión de acceso anticipado se proporcionan “tal cual” y “según disponibilidad”, sin garantías de funcionamiento ininterrumpido, idoneidad para un fin concreto, resultados sin errores o compatibilidad con todos los cambios del marketplace.',
        terms_p11: 'El acceso puede limitarse o finalizarse por motivos de seguridad, uso indebido, infracciones de políticas o finalización de un servicio o programa de acceso. Los usuarios pueden dejar de utilizar el software y revocar el acceso conectado en cualquier momento.',
        terms_p12: 'Estos términos pueden actualizarse para reflejar cambios en los servicios, las funciones o las obligaciones legales de Veylto. Los cambios sustanciales se reflejarán mediante la fecha indicada en la parte superior de esta página.'
      },
      fr: {
        terms_development: 'Veylto prépare un accès anticipé limité. Ces conditions s’appliquent aux réservations, aux accès d’évaluation et à toute version autorisée mise à disposition par Veylto.',
        terms_p1: 'Veylto est un logiciel desktop assisté par IA, développé sous la marque produit indépendante Veylto Labs. Les fonctionnalités, intégrations, disponibilités et exigences système peuvent évoluer dans le temps.',
        terms_p7: 'Veylto peut être indisponible, interrompu ou modifié sans préavis. Les services externes, fournisseurs IA et API peuvent imposer leurs propres limites, conditions ou interruptions.',
        terms_p9: 'Dans toute la mesure permise par la loi, Veylto et les éventuelles versions d’accès anticipé sont fournis « en l’état » et « selon disponibilité », sans garantie de fonctionnement ininterrompu, d’adéquation à un usage particulier, de résultat exempt d’erreur ou de compatibilité avec chaque évolution de la marketplace.',
        terms_p11: 'L’accès peut être limité ou interrompu pour des raisons de sécurité, d’usage abusif, de violation des politiques ou d’arrêt d’un service ou programme d’accès. Les utilisateurs peuvent cesser d’utiliser le logiciel et révoquer les accès connectés à tout moment.',
        terms_p12: 'Ces conditions peuvent être mises à jour pour refléter les changements apportés aux services, aux fonctionnalités ou aux obligations légales de Veylto. Les modifications importantes seront indiquées par la date figurant en haut de cette page.'
      },
      de: {
        terms_development: 'Veylto bereitet einen begrenzten Early Access vor. Diese Bedingungen gelten für Reservierungen, Testzugänge und jede von Veylto bereitgestellte autorisierte Version.',
        terms_p1: 'Veylto ist KI-gestützte Desktop-Software, die unter der unabhängigen Produktmarke Veylto Labs entwickelt wird. Funktionen, Integrationen, Verfügbarkeit und Systemanforderungen können sich im Laufe der Zeit ändern.',
        terms_p7: 'Veylto kann ohne Vorankündigung nicht verfügbar, unterbrochen oder geändert werden. Externe Dienste, KI-Provider und APIs können eigene Grenzen, Bedingungen oder Ausfälle haben.',
        terms_p9: 'Soweit gesetzlich zulässig, werden Veylto und etwaige Early-Access-Versionen „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne Gewähr für unterbrechungsfreien Betrieb, Eignung für einen bestimmten Zweck, fehlerfreie Ausgabe oder Kompatibilität mit jeder Marketplace-Änderung.',
        terms_p11: 'Der Zugriff kann aus Sicherheitsgründen, wegen Missbrauchs, Richtlinienverstößen oder der Einstellung eines Dienstes oder Zugangsprogramms eingeschränkt oder beendet werden. Nutzer können die Verwendung der Software beenden und verbundene Zugriffe jederzeit widerrufen.',
        terms_p12: 'Diese Bedingungen können aktualisiert werden, um Änderungen an Diensten, Funktionen oder rechtlichen Pflichten von Veylto abzubilden. Wesentliche Änderungen werden durch das oben angezeigte Datum kenntlich gemacht.'
      }
    }
  };

  const applyOverrides = () => {
    const language = ['en', 'it', 'es', 'fr', 'de'].includes(document.documentElement.lang)
      ? document.documentElement.lang
      : 'en';
    const page = document.body.dataset.legalPage || 'privacy';
    const dictionary = { ...common.en, ...common[language], ...pages[page].en, ...pages[page][language] };

    Object.entries(dictionary).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
        node.textContent = value;
      });
    });
  };

  const languageObserver = new MutationObserver(applyOverrides);
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  const selector = document.querySelector('#language-selector');
  if (selector) selector.addEventListener('change', () => setTimeout(applyOverrides, 0));

  applyOverrides();
})();
