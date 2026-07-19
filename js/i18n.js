/* =========================================================================
   Lightweight i18n for Seelig Designs (DE / EN)
   - Text via   data-i18n="key"
   - HTML via    data-i18n-html="key"        (allows <br>, <strong> ...)
   - Attributes  data-i18n-attr="placeholder:key; aria-label:key; alt:key"
   Language is stored in localStorage ('sd-lang'); default = German.
   ========================================================================= */
(function () {
  'use strict';

  const translations = {
    de: {
      // --- Navigation / Footer / Cookie ---
      'nav.home': 'Home',
      'nav.gallery': 'Galerie',
      'nav.about': 'Über mich',
      'nav.contact': 'Kontakt',
      'nav.lang': 'Sprache wechseln',
      'footer.portfolio': 'Galerie',
      'footer.contact': 'Kontakt',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.rights': 'Alle Rechte vorbehalten.',
      'cookie.text': 'Diese Website verwendet nur notwendige Cookies, damit du das bestmögliche Erlebnis auf meiner Seite hast.',
      'cookie.accept': 'Verstanden!',

      // --- Home: Hero & Intro ---
      'hero.title': 'Wäre es einfach,<br>wäre es langweilig.',
      'intro.h2': 'Wer ich bin',
      'intro.p': "Ich bin Samuel Seelig – Fotograf, Beobachter und leidenschaftlicher Moment-Jäger. Als ich in Japan Regentropfen mitten in der Luft festhielt, wurde mir klar, was mich wirklich antreibt: die Zeit anzuhalten, flüchtige Momente einzufangen und sichtbar zu machen. <strong>„Wäre es einfach, wäre es langweilig&quot;</strong> – dieses Motto begleitet mich seit meiner Schulzeit. Ich suche bewusst die Herausforderung, denn genau dort entstehen bleibende Bilder. Ob spontane Freude auf einem Event, feine Details in der Architektur oder die Ruhe einer Landschaft – ich gehe an die Fotografie heran wie an die Tierbeobachtung: leise und geduldig, wartend auf den perfekten Moment. Meine Kamera ist kein bloßes Werkzeug, sie ist meine Art, Menschen, Geschichten und Natur authentisch festzuhalten.",

      // --- Home: Showcase ---
      'showcase.h2': 'Highlights',
      'showcase.p': 'Hier findest du eine sorgfältig kuratierte Auswahl der vielfältigen Momente und fesselnden Geschichten, die ich festhalten durfte.',
      'cat.architecture': 'Architektur',
      'cat.traditional': 'Traditionell',
      'cat.street': 'Street',
      'cat.portraits.stylized': 'Stilisierte Portraits',
      'cat.portraits': 'Portraits',
      'cat.couple': 'Paar-Portraits',
      'cat.nature': 'Natur',
      'cat.diamond': 'Diamantene Hochzeiten',
      'cat.weddings': 'Hochzeiten',

      // --- Home: Showreel & Testimonials ---
      'video.h2': 'Showreel',
      'testi.h2': 'Was meine Kunden sagen',
      'testi.1.quote': '„Die Fotos sind absolut wunderschön und wir sind unglaublich glücklich und zufrieden damit. Du hast einen fantastischen Job gemacht! Besonders beeindruckt hat uns, wie du fast unsichtbar und doch immer am richtigen Ort warst. Die Ergebnisse sprechen für sich. Wir empfehlen dich sehr gerne weiter und freuen uns auf eine mögliche erneute Zusammenarbeit."',
      'testi.2.quote': '„Er war die perfekte Wahl für unsere Business-Headshots und Paarfotos. Samuel hat das Shooting mühelos wirken lassen und beide Seiten – professionell und persönlich – wunderschön eingefangen. Wir sind begeistert, wie alle Bilder geworden sind."',
      'testi.3.quote': '„Samuels ruhige Präsenz war perfekt für unseren 60. Hochzeitstag. Er hat den Geist des Tages eingefangen, ohne aufdringlich zu sein, und daraus eine wunderschöne, herzliche Bildergeschichte gemacht. Wir sind so froh, diese wundervollen Bilder mit unserer Familie teilen zu können."',
      'cta.text': 'Bereit, deine eigene Geschichte mit mir zu schreiben?',
      'cta.button': 'Kontakt aufnehmen',

      // --- Gallery ---
      'gallery.title': 'Galerie',
      'gallery.intro': 'Ein Streifzug durch meine Arbeit – von stillen Landschaften über pulsierende Straßen bis zu erzählenden Portraits. Filtere nach Kategorie oder tauche einfach ein.',
      'gallery.filter.all': 'Alle',
      'gallery.filter.portraits': 'Portraits',
      'gallery.filter.street': 'Street',
      'gallery.filter.landscape': 'Landschaft',
      'gallery.filter.nature': 'Natur & Tiere',
      'gallery.filter.architecture': 'Architektur',
      'gallery.filter.events': 'Events',
      'gallery.filter.cosplay': 'Cosplay',
      'gallery.filter.food': 'Kulinarik',
      'gallery.empty': 'Keine Bilder in dieser Kategorie.',
      'gallery.close': 'Schließen',
      'gallery.prev': 'Vorheriges Bild',
      'gallery.next': 'Nächstes Bild',
      'gallery.cta.text': 'Ein Bild sagt mehr als tausend Worte – lass uns deines gemeinsam erschaffen.',
      'gallery.cta.button': 'Kontakt aufnehmen',

      // --- About ---
      'about.title': 'Über mich',
      'about.lead': 'Fotograf aus Leidenschaft. Ich halte fest, was sich nicht wiederholt.',
      'about.story.h2': 'Meine Geschichte',
      'about.story.p1': 'Alles begann mit einem einzigen Moment: Regentropfen, die in Japan mitten in der Luft zu schweben schienen. In diesem Augenblick verstand ich, was mich antreibt – die Fähigkeit, Zeit anzuhalten und das Flüchtige sichtbar zu machen. Seitdem ist die Kamera mein ständiger Begleiter.',
      'about.story.p2': 'Mein Leitspruch begleitet mich seit der Schulzeit: „Wäre es einfach, wäre es langweilig." Ich suche bewusst die Herausforderung, denn genau dort entstehen die Bilder, die bleiben. Geduld ist dabei mein wichtigstes Werkzeug – ich arbeite wie bei der Tierbeobachtung: leise, aufmerksam und immer bereit für den entscheidenden Augenblick.',
      'about.approach.h2': 'Mein Ansatz',
      'about.approach.p': 'Ob Hochzeit, Event, Portrait oder Landschaft – ich bleibe im Hintergrund und lasse die Momente für sich sprechen. Authentizität steht über Inszenierung. Ich möchte, dass du dich beim Betrachten deiner Bilder wieder genau so fühlst wie in dem Moment, als sie entstanden.',
      'about.services.h2': 'Was ich fotografiere',
      'about.services.weddings.h3': 'Hochzeiten & Feiern',
      'about.services.weddings.p': 'Von der ersten Träne bis zum letzten Tanz – ehrliche, unaufdringliche Reportage eurer besonderen Tage.',
      'about.services.portraits.h3': 'Portraits',
      'about.services.portraits.p': 'Business-Headshots, Paar- und stilisierte Portraits, die deine Persönlichkeit einfangen.',
      'about.services.events.h3': 'Events',
      'about.services.events.p': 'Conventions, Straßenfeste und Feiern – lebendige Bilder mit Atmosphäre und Charakter.',
      'about.services.nature.h3': 'Natur & Landschaft',
      'about.services.nature.p': 'Landschaften, Tiere und Wetterphänomene – die stille Schönheit der Welt um uns herum.',
      'about.stats.years': 'Jahre Erfahrung',
      'about.stats.shoots': 'Shootings',
      'about.stats.categories': 'Genres',
      'about.cta.text': 'Lust auf gemeinsame Bilder?',
      'about.cta.button': 'Lass uns reden',

      // --- Contact ---
      'contact.h1': 'Kontakt',
      'contact.intro': 'Lass uns gemeinsam etwas Zeitloses schaffen. Ob du ein konkretes Projekt im Kopf hast oder einfach Möglichkeiten ausloten möchtest – ich höre dir zu.',
      'contact.email.label': 'Schreib mir',
      'contact.phone.label': 'Ruf mich an',
      'contact.whatsapp.label': 'WhatsApp',
      'contact.whatsapp.value': 'Auf WhatsApp chatten',
      'contact.form.h2': 'Nachricht senden',
      'contact.form.name': 'Name',
      'contact.form.name.ph': 'Dein Name',
      'contact.form.email': 'E-Mail',
      'contact.form.email.ph': 'Deine E-Mail-Adresse',
      'contact.form.subject': 'Betreff',
      'contact.form.subject.ph': 'Worum geht es?',
      'contact.form.message': 'Nachricht',
      'contact.form.message.ph': 'Erzähl mir von deinem Projekt ...',
      'contact.form.submit': 'Nachricht senden'
    },

    en: {
      // --- Navigation / Footer / Cookie ---
      'nav.home': 'Home',
      'nav.gallery': 'Gallery',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.lang': 'Switch language',
      'footer.portfolio': 'Gallery',
      'footer.contact': 'Contact',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy',
      'footer.rights': 'All rights reserved.',
      'cookie.text': 'This website uses only necessary cookies to ensure you get the best experience on my website.',
      'cookie.accept': 'Got it!',

      // --- Home: Hero & Intro ---
      'hero.title': 'If it were easy,<br>it would be boring.',
      'intro.h2': 'Who I am',
      'intro.p': "I'm Samuel Seelig – photographer, observer, and passionate moment-hunter. When I captured raindrops suspended midair in Japan, I realized what truly drives me: freezing time, the art of capturing fleeting moments and turning them visible. <strong>&quot;If it were easy, it would be boring&quot;</strong> – this has been my motto since my school days. I actively seek challenges because that's precisely where lasting images are created. Whether capturing spontaneous joy at an event, intricate details in architecture, or the tranquility of landscapes, I approach photography like observing wildlife – quietly and patiently waiting for the perfect moment. My camera isn't merely a tool, it's my way of authentically capturing people, stories, and nature alike.",

      // --- Home: Showcase ---
      'showcase.h2': 'Highlights',
      'showcase.p': "Below, you'll find a carefully curated gallery showcasing some of the diverse moments and captivating stories I've had the privilege to capture.",
      'cat.architecture': 'Architecture',
      'cat.traditional': 'Traditional',
      'cat.street': 'Street Photography',
      'cat.portraits.stylized': 'Stylized Portraits',
      'cat.portraits': 'Portraits',
      'cat.couple': 'Couple Portraits',
      'cat.nature': 'Nature',
      'cat.diamond': 'Diamond Weddings',
      'cat.weddings': 'Weddings',

      // --- Home: Showreel & Testimonials ---
      'video.h2': 'Showreel',
      'testi.h2': 'What my customers have to say',
      'testi.1.quote': '"The photos are absolutely wonderful, and we\'re incredibly happy and satisfied with them. You did a fantastic job! We were particularly impressed by how you were almost invisible yet always in the right place. The results truly speak for themselves. We\'ll happily recommend you, and we look forward to the possibility of working with you again."',
      'testi.2.quote': '"He was the perfect choice for our business headshots and couple photos. Samuel made the session feel effortless and captured both our professional and personal sides beautifully. We\'re thrilled with how all the images turned out."',
      'testi.3.quote': '"Samuel\'s calm presence was perfect for our 60th anniversary. He captured the spirit of the day without being intrusive, creating a beautiful and heartfelt story in photos. We\'re so glad to have these wonderful pictures to share with the rest of our family."',
      'cta.text': 'Ready to write your own story with me?',
      'cta.button': 'Get in touch',

      // --- Gallery ---
      'gallery.title': 'Gallery',
      'gallery.intro': 'A journey through my work – from quiet landscapes and vibrant streets to storytelling portraits. Filter by category or simply dive in.',
      'gallery.filter.all': 'All',
      'gallery.filter.portraits': 'Portraits',
      'gallery.filter.street': 'Street',
      'gallery.filter.landscape': 'Landscape',
      'gallery.filter.nature': 'Nature & Animals',
      'gallery.filter.architecture': 'Architecture',
      'gallery.filter.events': 'Events',
      'gallery.filter.cosplay': 'Cosplay',
      'gallery.filter.food': 'Food',
      'gallery.empty': 'No images in this category.',
      'gallery.close': 'Close',
      'gallery.prev': 'Previous image',
      'gallery.next': 'Next image',
      'gallery.cta.text': 'A picture is worth a thousand words – let\'s create yours together.',
      'gallery.cta.button': 'Get in touch',

      // --- About ---
      'about.title': 'About',
      'about.lead': 'A photographer by passion. I capture what never happens twice.',
      'about.story.h2': 'My Story',
      'about.story.p1': 'It all began with a single moment: raindrops that seemed to hang midair in Japan. In that instant I understood what drives me – the ability to freeze time and make the fleeting visible. Ever since, the camera has been my constant companion.',
      'about.story.p2': 'My motto has followed me since school: "If it were easy, it would be boring." I deliberately seek out challenges, because that\'s exactly where the images that last are born. Patience is my most important tool – I work like a wildlife observer: quietly, attentively, and always ready for the decisive moment.',
      'about.approach.h2': 'My Approach',
      'about.approach.p': 'Whether it\'s a wedding, an event, a portrait or a landscape – I stay in the background and let the moments speak for themselves. Authenticity over staging. I want you to feel, when you look at your images, exactly the way you felt the moment they were taken.',
      'about.services.h2': 'What I Photograph',
      'about.services.weddings.h3': 'Weddings & Celebrations',
      'about.services.weddings.p': 'From the first tear to the last dance – honest, unobtrusive documentation of your special days.',
      'about.services.portraits.h3': 'Portraits',
      'about.services.portraits.p': 'Business headshots, couple and stylized portraits that capture your personality.',
      'about.services.events.h3': 'Events',
      'about.services.events.p': 'Conventions, street festivals and celebrations – lively images full of atmosphere and character.',
      'about.services.nature.h3': 'Nature & Landscape',
      'about.services.nature.p': 'Landscapes, animals and weather phenomena – the quiet beauty of the world around us.',
      'about.stats.years': 'Years of experience',
      'about.stats.shoots': 'Shoots',
      'about.stats.categories': 'Genres',
      'about.cta.text': 'Want to create images together?',
      'about.cta.button': "Let's talk",

      // --- Contact ---
      'contact.h1': 'Get in Touch',
      'contact.intro': "Let's create something timeless together. Whether you have a specific project in mind or just want to explore possibilities, I'm here to listen.",
      'contact.email.label': 'Email Me',
      'contact.phone.label': 'Call Me',
      'contact.whatsapp.label': 'WhatsApp',
      'contact.whatsapp.value': 'Chat on WhatsApp',
      'contact.form.h2': 'Send a message',
      'contact.form.name': 'Name',
      'contact.form.name.ph': 'Your Name',
      'contact.form.email': 'Email',
      'contact.form.email.ph': 'Your Email Address',
      'contact.form.subject': 'Subject',
      'contact.form.subject.ph': 'What is this about?',
      'contact.form.message': 'Message',
      'contact.form.message.ph': 'Tell me about your project...',
      'contact.form.submit': 'Send Message'
    }
  };

  const STORAGE_KEY = 'sd-lang';
  const DEFAULT_LANG = 'de';

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored === 'de' || stored === 'en') ? stored : DEFAULT_LANG;
  }

  function t(key, lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    return (key in dict) ? dict[key] : (translations[DEFAULT_LANG][key] || key);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'), lang);
    });

    // Inner HTML (allows inline markup like <br>, <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'), lang);
    });

    // Attributes: "placeholder:key; aria-label:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        const parts = pair.split(':');
        if (parts.length === 2) {
          const attr = parts[0].trim();
          const key = parts[1].trim();
          if (attr && key) el.setAttribute(attr, t(key, lang));
        }
      });
    });

    // Reflect active state on language toggles
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (span) {
      span.classList.toggle('active', span.getAttribute('data-lang') === lang);
    });

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (lang !== 'de' && lang !== 'en') return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  // Expose a tiny API for other scripts (e.g. gallery lightbox labels)
  window.SDi18n = { get: getLang, set: setLang, t: function (key) { return t(key, getLang()); } };

  function initToggles() {
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (span) {
      span.addEventListener('click', function () {
        setLang(span.getAttribute('data-lang'));
      });
    });
  }

  function boot() {
    initToggles();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
