# Hero

A full-bleed photograph or looping video, dimmed and washed in amber, with one Extra-Light headline centred on it.

## Variants
- **Homepage** (`.hero`): fixed, 100vh; the content scrolls up over it (`page-content` has `margin-top: 100vh`). The title animates in character by character.
- **Sub-page** (`.hero-child`, shown): 45vh band that also fills behind the fixed header (`padding-top: header-height`), with the page title ("Galerie", "Über mich", "Kontakt").

## What you provide
- Background media inside `.hero-child-background` — the site uses `hero.mp4` (autoplay, muted, loop, playsinline) with `hero.jpg` as poster.
- One `<h1>`: the page name, or on the homepage the motto "Wäre es einfach,<br>wäre es langweilig."

## Recipe
- Media: `object-fit: cover; filter: brightness(0.6)`.
- Overlay `::after`: `hero-tint` (rgba(255,170,0,.33)) — the brand's signature warm wash.
- Title: `display` style (clamp 2–4rem, 200 weight, 1.2 leading), white, `text-shadow-hero`, max-width 80%.
- Motion (homepage): GSAP split-chars, each from `opacity 0, y 40` → `1, 0`, 1.25s `power3.out`, 50ms stagger, after `document.fonts.ready`.
