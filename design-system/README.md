# Seelig Designs – Design System

Export des Design Systems „Seelig Designs“ aus Claude (Stand der Extraktion: 2026-09-29, Commit `258e763`).
Dieser Ordner ist die Referenz für Farben, Schrift, Abstände und Komponenten der Website. Agents und Menschen lesen hier nach, bevor sie UI bauen oder ändern.

## Inhalt

| Datei | Zweck |
|---|---|
| `tokens.json` | Quelle aller Tokens, mit Verwendungszweck pro Token |
| `tokens.css` | Dieselben Tokens als CSS-Variablen plus `@font-face` für Sofia Pro (lädt aus `../Fonts/SofiaPro/woff2/`) |
| `components/bundle.css` | Komponenten-Styles, Klassennamen wie auf der Website, Werte über Tokens |
| `components/<Name>/README.md` | Wann und wie die Komponente eingesetzt wird |
| `components/<Name>/preview.html` | Statische Vorschau, direkt im Browser öffnen |

## Assets

Logos, Icons und Fotos liegen nicht doppelt hier, sondern an ihrem Platz im Repo:

| Rolle | Datei |
|---|---|
| Wordmark weiß / schwarz | `img/Left_Logo_Name_wht.svg`, `img/Left_Logo_Name_blk.svg` |
| Bildmarke weiß / schwarz | `icons/Logo_wht.svg`, `img/Logo_blk.svg` |
| Icons (E-Mail, Telefon, WhatsApp, Instagram, Kamera) | `icons/*-svgrepo-com.svg` |
| Schrift | `Fonts/SofiaPro/woff2/` |

## Regeln für Änderungen

- Neue Farben, Abstände oder Radien zuerst in `tokens.json` eintragen, dann `tokens.css` daraus ableiten. Keine Hex-Werte direkt in Komponenten.
- `css/style.css` der Website ist der Ursprung dieser Werte. Weichen beide voneinander ab, gilt bis zur Klärung die Website.
- Das Design System in Claude wird nicht automatisch aktualisiert. Änderungen hier müssen dort nachgezogen werden (oder umgekehrt erneut exportiert).

---

## Markenleitfaden

Seelig Designs is the photography studio of Samuel Seelig. The brand is photography seen through warm amber light, on near-black: dark, quiet grounds that let the pictures speak, one amber accent that marks everything you can act on, and Sofia Pro set light and large. **Motto:** *Wäre es einfach, wäre es langweilig.* ("If it were easy, it would be boring.")

## Content fundamentals

- **German first, English second.** Write every string in German; the site offers English through the `LangToggle`. Keep both in step.
- **First person, informal "du".** Samuel speaks for himself ("Ich bin Samuel Seelig – Fotograf, Beobachter und leidenschaftlicher Moment-Jäger.") and addresses the visitor as *du* ("Bereit, deine eigene Geschichte mit mir zu schreiben?"). Couples are addressed as *ihr* ("eurer besonderen Tage").
- **Short, warm, unhurried.** One idea per sentence. Headlines are 1–4 words ("Wer ich bin", "Highlights", "Mein Ansatz", "Was ich fotografiere"). CTAs are verbs: "Kontakt aufnehmen", "Lass uns reden", "Nachricht senden", "Verstanden!".
- **Moments, not products.** Talk about moments, stories and atmosphere ("Ich halte fest, was sich nicht wiederholt."). Never hard-sell, never superlatives about the service.
- **Casing:** headings are written in sentence case and shown capitalized by CSS (`text-transform: capitalize`); buttons are written normally and shown UPPERCASE. Don't hard-code caps in the copy.
- **Quotes** from clients are one sentence, real, attributed "- Name & Name".
- **No emoji**, no exclamation marks except the cookie "Verstanden!".
- **Privacy is part of the voice.** Anything that loads third-party content says so plainly before the click (see `VideoFacade`).

## Colour

- The palette is five warm hues from Adobe Color "Samus Farben": `yellow` → `gold` → `amber` → `orange` → `rust`. **`amber` (#f2a007) is the brand colour**; the others are for brand art, the cover and print.
- Ground: `bg` (#121212) behind everything, `surface` (#181818) for page content. Homepage bands alternate the translucent `surface-translucent` / `surface-showreel` / `surface-showcase` so the fixed hero video ghosts through.
- Text: `text` (white) for headings and copy; step down through `text-secondary`, `text-muted`, `text-label`, `text-subtle` to `text-caption` (#888, 5.0:1) — never lighter-on-dark than `text-caption`.
- Use `amber` for: section titles (h2), author names, stat numbers, the current nav link, CTA and chip borders, the focus ring, portrait rings. Hover on links is `accent-hover` (gold).
- On any amber fill (hovered button, active chip, footer, play button) the ink is `on-accent` (#121212, 8.8:1). **Never white on amber** (2.1:1).
- The one place the colours invert is the `Footer`: solid `accent` ground, black mark, black icons, black links.
- Photography is always washed with `hero-tint` (amber at 33%) and dimmed to 60% brightness when it sits behind text.

## Typography

- One family: **Sofia Pro** (`--font-sans`), self-hosted woff2, weights 200–700 and Light/Regular italics. Sofia Pro Condensed is in the repository but not used on the site; don't introduce it.
- The site's typography is **light**: `display` h1 at 200 (Extra-Light), `section-title` h2 at 300, `body` paragraphs at 300 and 19.2px/1.6. Weight only climbs for UI: `button` 600, `nav-link` 700, `contact-value` 500.
- Italic is reserved for voice: the `lead` line on About and testimonial `quote`s.
- Uppercase + 1px tracking for `button`, `eyebrow` and `lang-toggle` only.
- `display` is fluid, `clamp(2rem, 5vw, 4rem)`.

## Spacing & layout

- Sections breathe: `space-12` (6rem) top and bottom, `space-4` (2rem) sides. Content columns max out at 800–1500px depending on the section (testimonials 800, about 1000, contact 1200, masonry 1400, gallery 1500).
- Header is `header-height` (7rem) and fixed; sub-page heroes pad by it.
- Images run in CSS-column masonry at their own aspect ratios (`gap-masonry` 20px, `gap-gallery` 18px) — never cropped into a uniform grid.
- Breakpoints: `bp-xl` 1250 (nav tightens), `bp-lg` 992 (mobile nav, 2 columns, left-aligned text), `bp-md` 768 (stacked layouts), `bp-sm` 600, `bp-xs` 400. On mobile, all text left-aligns except the hero and CTAs.

## Shape, depth & surfaces

- Rounded, never sharp: `radius-md` (10px) for fields and rows, `radius-lg` (15px) for image tiles and cards, `radius-xl` (20px) for panels, `radius-pill` for every button-like control.
- **People are round** (`Portrait`, ring 3px `amber`); **work is a rounded rectangle** (`GalleryTile`).
- Cards are flat: `fill-subtle` + a 1px hairline (`line-subtle`), no shadow. Shadows belong to photography and floating panels (`shadow-tile`, `shadow-frame`, `shadow-panel`, `shadow-lightbox`).
- **Liquid glass** (`shadow-glass` + backdrop blur/saturate; an SVG displacement filter in js/app.js) is used for the header, mobile menu and cookie banner — only over photography.

## Motion

- Hover transitions are 0.3s ease (buttons, cards, links); image tiles 0.4s ease; chips and lightbox 0.25s; testimonial cross-fade 0.6s.
- Hover vocabulary: buttons lift 3px and fill amber; cards lift 5px and gain an amber border; contact rows slide 10px right; photos zoom to 1.05 and dim.
- The homepage motto enters character by character (GSAP, `y 40 → 0`, 1.25s `power3.out`, 50ms stagger). The mobile menu slides over 0.8s `cubic-bezier(0.16, 1, 0.3, 1)`.

## States & accessibility

- **Focus:** 3px solid `amber` outline, 2px offset, on every interactive element (8.3:1 on `surface`; on the amber footer it switches to `on-accent`). Inputs instead take an `amber` border + `shadow-focus` glow.
- **Known source pairs below the floor** (kept exact, flagged): `line-control` round-button rings ~1.9:1 and `line` field borders ~1.3:1 (always pair with a glyph or label); white gallery-overlay labels on `accent-overlay` ~2:1 (kept large, over a darkened photo).
- Every icon-only control carries a German `aria-label`; decorative images use `alt=""`.

## Iconography

- Five single-colour **line icons** from SVG Repo (24px grid, 2px stroke, round caps; WhatsApp is a filled glyph): email, phone, WhatsApp, Instagram, camera (Pexels). See the Icons group.
- As files they are black (#000000) for use on the amber `Footer`. On dark grounds, inline the SVG with `stroke="currentColor"` (or `fill` for WhatsApp) and colour it `amber`, as `ContactItem` does.
- Arrows and close controls are plain text glyphs (← → × ‹ ›), not icons. No icon font, no emoji.

## Logo

- The **mark** is an abstract, angular "S" built from two interlocking chevrons. The **wordmark** sets the mark left of a hairline divider and the name "Seelig Designs".
- `wordmark-white` in the header on dark/photo; `mark-black` in the `Footer` on amber. `wordmark-black` and `mark-white` are for light or dark backgrounds elsewhere.
- Never recolour the mark amber or place the white mark on amber. Minimum header height 1.4rem.

## Imagery

- The work is the imagery: portraits, weddings and diamond weddings, events, street, landscape and nature, architecture, and stylized portraits. Use Samuel's own photographs only — never stock.
- Behind text, photographs are dimmed (`brightness(0.6)`) and washed with `hero-tint`.

## Not synced

- Sofia Pro Condensed, and the Sofia Pro weights the site doesn't load (UltraLight, Black, most italics), are left out. The desktop `.otf` files are left out too.
- The liquid-glass SVG displacement filter (`GlassSurface` in js/app.js) is JavaScript. The previews show its CSS fallback.
- The GSAP motion (hero split text, cookie fade) is described under Motion, not shipped.
- Components are static HTML plus `bundle.css` (the site has no component library), so there is no `bundle.js`.
- `altes-style.css` / `altes-code.js` (legacy) and the `img/alt/` drafts are left out.
