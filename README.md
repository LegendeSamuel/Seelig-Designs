# Seelig Designs

Website von **Seelig Designs**, dem Fotografie-Studio von Samuel Seelig.
Portraits, Hochzeiten, Events, Street, Landschaft und mehr.

> *Wäre es einfach, wäre es langweilig.*

**Live:** https://legendesamuel.github.io/Seelig-Designs/

## Überblick

Statische Website aus reinem HTML, CSS und JavaScript, ohne Framework. Gehostet über GitHub Pages direkt aus diesem Repository.

| Seite | Datei |
|---|---|
| Startseite mit Hero-Video, Highlights, Showreel, Testimonials | `index.html` |
| Galerie mit Kategorie-Filter und Lightbox | `gallery.html` |
| Über mich | `about.html` |
| Kontakt (Formular über Formspree) | `contact.html` |
| Impressum, Datenschutz, 404 | `imprint.html`, `privacy-policy.html`, `404.html` |

Funktionen:

- **Zweisprachig (DE/EN):** Texte über `data-i18n`-Attribute, Wörterbuch in `js/i18n.js`. Die gewählte Sprache wird im `localStorage` gemerkt, Standard ist Deutsch.
- **Galerie aus Ordnern:** Jeder Unterordner in `img/gallery/` ist eine Kategorie. Ein Skript schreibt Filter und Bildraster in `gallery.html`.
- **Liquid-Glass-Oberflächen** für Header, Mobilmenü und Cookie-Banner (SVG-Displacement-Filter in `js/app.js`).
- **Datenschutzfreundlich:** Schrift (Sofia Pro) selbst gehostet, YouTube-Showreel lädt erst nach Klick über `youtube-nocookie.com`.
- **SEO:** Open-Graph-Tags, JSON-LD (`ProfessionalService`), `sitemap.xml`, `robots.txt`.

## Projektstruktur

```
├── index.html, gallery.html, about.html, …   Seiten
├── css/style.css                              Styles der Website
├── js/
│   ├── app.js                                 Navigation, Glas-Effekt, Cookie-Banner, Video-Facade
│   ├── gallery.js                             Filter und Lightbox der Galerie
│   └── i18n.js                                Übersetzungen DE/EN
├── img/
│   ├── gallery/<Kategorie>/                   Galerie-Bilder (JPG + WebP)
│   └── featured/                              Highlights der Startseite
├── Fonts/SofiaPro/woff2/                      Selbst gehostete Schrift (nur Web-Schnitte)
├── icons/                                     Logo und Kontakt-Icons
├── design-system/                             Tokens, Komponenten, Markenleitfaden
├── scripts/                                   Galerie- und Bild-Skripte (Node)
└── docs/RECHT-UND-HOSTING.md                  To-do-Liste Recht, Datenschutz, Hosting
```

## Lokal starten

Die Seite ist statisch und braucht keinen Build. Zum Ansehen reicht ein beliebiger lokaler Server im Projektordner, zum Beispiel:

```bash
npx serve .
```

Für die Galerie- und Bild-Skripte einmalig `npm install` ausführen (installiert `sharp`).

## Galerie pflegen

```bash
# Bild in den passenden Ordner unter img/gallery/ legen, dann:
npm run images     # WebP-Varianten erzeugen (optional --avif, --force)
npm run gallery    # Filter und Bildraster in gallery.html neu schreiben
```

Reihenfolge und englische Kategorienamen stehen oben in `scripts/build-gallery.mjs` (`CONFIG`). Details in [`scripts/README.md`](scripts/README.md).

## Design System

Farben, Schrift, Abstände und Komponenten sind in [`design-system/`](design-system/README.md) dokumentiert:

- `tokens.json` ist die Quelle aller Tokens, `tokens.css` die CSS-Variante.
- Pro Komponente gibt es eine `README.md` und eine `preview.html`.
- Markenfarbe ist Amber `#f2a007` auf fast schwarzem Grund `#121212`. Schrift ist Sofia Pro, leicht und groß gesetzt.

Texte auf der Website: Deutsch zuerst, Du-Form, ohne Emoji. Hinweise für Coding-Agents stehen in [`AGENTS.md`](AGENTS.md).

## Deployment

GitHub Pages veröffentlicht den Stand von `main` direkt aus dem Repository-Root. Ein Build-Schritt ist dafür nicht nötig: Änderungen committen und pushen genügt.

## Rechtliches

© Samuel Seelig. Alle Rechte vorbehalten. Das Repository ist öffentlich einsehbar, aber nicht frei lizenziert: Fotos, Videos, Logos, Texte, Design System und Code dürfen ohne Zustimmung nicht weiterverwendet werden. Details und Hinweise zu Bestandteilen Dritter (Sofia Pro, HTML5 Boilerplate) in [`LICENSE.txt`](LICENSE.txt).

## Kontakt

- E-Mail: samuelseelig@gmail.com
- Instagram: [@samuel.seelig](https://www.instagram.com/samuel.seelig/)
- Pexels: [Samuel Seelig](https://www.pexels.com/de-de/@samuel-seelig-5998373/)
