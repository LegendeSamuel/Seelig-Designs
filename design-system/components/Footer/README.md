# Footer

The solid amber footer: black mark left, links centre, black line icons right, copyright below.

## What you provide
- `.site-footer` › `.footer-container` (`.footer-logo` with `mark-black`, `.footer-nav ul`, `.footer-contact` with icon links) + `.footer-bottom-bar`.
- Links: Galerie, Portfolio, Kontakt, Impressum, Datenschutz — Impressum and Datenschutz are legally required; keep them.
- Icon links: Email, Anrufen, WhatsApp, Instagram, Pexels — each with an `aria-label` and `alt=""` on the image.
- "© {year} Samuel Seelig".

## Values
- Ground `accent`; all ink `on-accent` (8.8:1). Padding `3rem 2rem 1rem`.
- Grid `1fr 2fr 1fr`; → 2 columns (logo on top) at `bp-lg`; → 1 centred column with stacked links at `bp-md`.
- Logo 3.5rem tall; links `author` style (17.6px/600); icons 1.5rem, gap `space-2`.

## Rule
The footer is the one place colours invert: black on amber. Use the black mark and black icons here only.
