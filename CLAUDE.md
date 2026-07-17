# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website ("Visitenkarte") of Samuel Seelig, photographer — brand name **Seelig Designs**. Static multi-page site built with vanilla HTML/CSS/JS, no framework. Site copy is English, legal pages and audience are German (`lang="de"`).

## Commands

- `npm start` — dev server (webpack-dev-server, serves repo root with live reload)
- `npm run build` — production build to `dist/` (webpack.config.prod.js; bundles `js/app.js`, copies `img/`, `css/`, static assets)

There are no tests or linters.

## Architecture

Plain static pages that all share the same header/footer markup (duplicated per HTML file — changes to nav/footer must be applied to every page): `index.html` (home), `contact.html`, `imprint.html`, `privacy-policy.html`, `404.html`. `about.html` is an unfinished skeleton with placeholder links.

**Active files vs. legacy files:** the stylesheet actually linked by all pages is `css/style.css`, and the script is `js/app.js`. The root-level `style.css`, `code.js`, `altes-style.css`, and `altes-code.js` are old leftovers — do not edit them.

`js/app.js` (loaded directly by pages; also the webpack entry) contains everything:

- **`GlassSurface` class** — the site's signature "liquid glass" effect. Dynamically injects an SVG displacement-map filter (chromatic aberration + blur) and applies it via `backdrop-filter` and the `--filter-id` CSS variable. Instantiated on the header, mobile menu, cookie banner, and `#global-glass-overlay`. CSS fallback class: `.glass-surface--fallback`.
- **`SplitTextAnimation` class** — splits the hero h1 into chars and staggers them in with GSAP + ScrollTrigger (both loaded from CDN in the HTML, not bundled).
- Testimonial slider, mobile menu toggle, cookie banner (localStorage `cookiesAccepted`), dynamic footer year.

**Homepage scroll trick:** the `.hero` (fullscreen video) is `position: fixed`; `.hero + .page-content` gets `margin-top: 100vh` so content scrolls over the pinned hero. Child pages use `.hero-child` (relative, 30vh) instead.

The contact form posts to Formspree (`https://formspree.io/f/xvzgllnv`). The portfolio nav link points to an external Pexels profile.

## Brand / CI (keep consistent)

- **Palette** ("Samus-Farben", swatch in `AdobeColor-Samus-Farben .png`): yellow-orange ramp `#F2CB07`, `#F2B807` (hover), **`#F2A007` (primary accent)**, `#D97A07`, `#BF4A06` — on dark backgrounds `#121212` / `#181818` / `#222`. The hero video gets a warm overlay `rgba(255, 170, 0, 0.33)`.
- **Typography:** `sofia-pro` via Adobe Typekit (`https://use.typekit.net/ixl2sxe.css`). Large headings with light weights (200–300); CTAs uppercase with letter-spacing.
- **Shapes:** circular portraits with `#F2A007` border, 15px border radius on cards/media, pill-shaped CTA buttons. Footer is solid `#F2A007` with dark text and the black logo variant (`img/Logo_blk.svg`; white variants in header).
- **Motto/philosophy:** "If it were easy, it would be boring." Calm, patient, authentic moment-hunting — the design (dark, warm-golden, elegant, technically playful) should reflect that.

## Conventions

- 2-space indentation (`.editorconfig`), UTF-8, LF.
- CSS is a single file (`css/style.css`) organized by `/* === Section === */` comment blocks with mobile overrides in `@media` blocks at the end; comments are mixed German/English.
- Photo galleries live in `img/<Category>/`; homepage masonry grid uses curated copies in `img/featured/`.
