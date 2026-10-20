# Navigation

The fixed, 7rem-tall liquid-glass header: page links left, language toggle and white wordmark right.

## Structure
- `<header>` › `<nav>` › `.nav-left ul` (links) + `.nav-right` (`LangToggle`, then the `wordmark-white` logo linking home) + `.mobile-menu-button`.
- Links, in order: Home, Galerie, Portfolio (external, Pexels), Über mich, Kontakt.
- The current page's link gets `class="active-link" aria-current="page"` and turns `amber`.

## Values
- Height `header-height` (7rem), side inset `space-6` (3rem), link gap `nav-gap` (2.5rem).
- Links: `nav-link` style (24px Bold) in `text`; hover `accent-hover` (gold); current `amber`.
- Logo height 2.5rem (2rem at 993–1250px, 1.6rem on mobile, 1.4rem under 400px).
- Surface: the site runs an SVG displacement "glass" filter (js/app.js `GlassSurface`, blur 15) with `shadow-glass`; this preview uses the CSS fallback (`blur(15px) saturate(1.8)`).

## Mobile (≤ 992px)
- Links collapse into a full-screen menu on `scrim-menu`, stacked with 3rem gaps, `nav-link-mobile` (40px Light, 1px tracking), sliding in from the right over 0.8s `cubic-bezier(0.16, 1, 0.3, 1)`.
- The hamburger is three 30×2px white bars 10px apart that rotate into an ×.

## Do / don't
- The header always sits on photography or the dark ground — the white wordmark only. Never the black wordmark here.
