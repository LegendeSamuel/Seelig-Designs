# CookieBanner

A small liquid-glass notice pinned bottom-right that tells visitors only necessary cookies are used, dismissed with one button.

## What you provide
- `.cookie-banner` › `.cookie-content` › one `<p>` + a full-width `Button` ("Verstanden!").
- Honest copy: only necessary cookies, addressed as "du".

## Values
- Position: fixed, `bottom: 2rem; right: 2rem`, max 400px, `z-banner`. Under `bp-sm`: 5% side insets, 1rem from the bottom.
- Glass: the site's SVG `GlassSurface` (radius 15, opacity .95, blur 15); fallback shown here — `rgba(255,255,255,.1)`, `blur(12px) saturate(1.8) brightness(1.2)`, 1px `line-control`, `shadow-glass`, `radius-lg`.
- Copy: `small` style, white. Padding `space-4`.
- Dismiss: GSAP fade to `opacity 0, y 20` over 0.5s, then remove; remembered in localStorage.

## Rule
Glass only over photography or the hero; on flat `surface` it reads as a grey box.
