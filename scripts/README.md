# Galerie kuratieren (Ordner + ein Befehl)

Die Galerie entsteht automatisch aus den Ordnern unter **`img/gallery/`**.
Jeder Unterordner ist eine Kategorie (der Ordnername ist zugleich das
deutsche Filter-Label):

```
img/gallery/
  Portraits/      Street/       Landschaft/   Natur/
  Architektur/    Events/       Cosplay/
```

**So änderst du, was gezeigt wird:**
- **Bild anzeigen** → Datei in den passenden Kategorie-Ordner legen
- **Bild ausblenden** → Datei aus dem Ordner nehmen (oder löschen)
- **Kategorie hinzufügen** → neuen Ordner unter `img/gallery/` anlegen
- **Kategorie entfernen** → Ordner leeren oder löschen
- **Reihenfolge / englische Namen** → in `scripts/build-gallery.mjs` oben in
  `CONFIG` anpassen (ohne Eintrag erscheint ein neuer Ordner am Ende; dann ist
  der englische = deutsche Name)

**Danach neu bauen:**

```bash
npm run gallery     # schreibt Filter + Bildraster neu in gallery.html
npm run images      # (optional) WebP für neu hinzugekommene Bilder erzeugen
```

Zum Schluss committen: `git add -A && git commit -m "Galerie aktualisiert"`.

> Die Startseiten-Highlights liegen separat in `img/featured/` und werden von
> diesem Schritt nicht verändert.

---

# Bild-Optimierung (WebP / AVIF)

Deine Fotos liegen aktuell als große JPGs vor. WebP spart typischerweise
**25–35 %**, AVIF sogar **40–50 %** Dateigröße bei gleicher Qualität – das
verbessert Ladezeit und Core Web Vitals (Checklisten-Punkt 4) spürbar.

## 1. Einmalig einrichten

Auf deinem eigenen Rechner (nicht nötig auf dem Server), im Projektordner:

```bash
npm install
```

Das installiert u. a. [`sharp`](https://sharp.pixelplumbing.com/), das die
Konvertierung übernimmt – plattformübergreifend, ohne extra Programme.

## 2. Konvertieren

```bash
npm run images            # erzeugt neben jedem JPG/PNG eine .webp-Datei
npm run images -- --avif  # zusätzlich .avif
npm run images -- --force # bereits konvertierte Bilder neu erzeugen
```

Die Originale bleiben erhalten (als Fallback für alte Browser). Sehr große
Bilder werden auf max. 2000 px Breite herunterskaliert.

## 3. Im HTML einbinden

Ein einzelnes `<img>` wird zu einem `<picture>` mit Fallback:

```html
<!-- vorher -->
<img src="img/Landschaften/IMG_2187.jpg" alt="…" loading="lazy" decoding="async">

<!-- nachher -->
<picture>
  <source srcset="img/Landschaften/IMG_2187.avif" type="image/avif">
  <source srcset="img/Landschaften/IMG_2187.webp" type="image/webp">
  <img src="img/Landschaften/IMG_2187.jpg" alt="…" loading="lazy" decoding="async">
</picture>
```

Der Browser nimmt automatisch das erste Format, das er unterstützt, und fällt
sonst auf das JPG zurück. Das bestehende CSS (`.gallery-item img`,
`.masonry-item img`) funktioniert weiter, weil das `<img>` erhalten bleibt.

> Tipp: Sag Bescheid, dann baue ich die `<picture>`-Einbindung für die Galerie
> und die Startseite automatisch ein, sobald du die WebP/AVIF-Dateien einmal
> erzeugt und committet hast.

## 4. Committen

```bash
git add img
git commit -m "Add optimized WebP/AVIF image variants"
```
