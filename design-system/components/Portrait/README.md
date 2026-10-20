# Portrait

A circular photo ringed in 3px amber — how people appear on the site (the photographer, and clients in testimonials).

## Sizes
- `profil--lg` — About hero: clamp(200px, 28vw, 300px), with `shadow-portrait`.
- `profil` — Homepage intro: clamp(180px, 25vw, 200px).
- `profil--sm` — Testimonials: 10rem; clamp(160px, 40vw, 200px) on phones.

## What you provide
- An `<img>` of a person with a descriptive German `alt` ("Portrait des Fotografen Samuel Seelig", "Kundenfoto von …").
- A square-ish crop; `object-fit: cover` centres it.

## Rules
- People are always round; work (landscape, architecture, events) is always a rounded rectangle (`GalleryTile`).
- Ring: `3px solid amber`, radius `radius-round`.
