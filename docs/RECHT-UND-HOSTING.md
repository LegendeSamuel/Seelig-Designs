# Recht, Datenschutz & Hosting – To-do-Liste für den Launch

> **Wichtiger Hinweis:** Das hier ist eine strukturierte Arbeitsliste, **keine
> Rechtsberatung**. Rechtstexte solltest du mit einem geprüften Generator
> (z. B. eRecht24, Dr. Schwenke, IT-Recht Kanzlei) erstellen und im Zweifel
> anwaltlich prüfen lassen. Ich erfinde bewusst keine verbindlichen
> Rechtstexte für dich.

---

## 1. Konkrete Findings aus deinem aktuellen Code (Priorität!)

Diese drei Punkte sind echte DSGVO-Themen, die aus dem bestehenden Code
kommen – bitte zuerst ansehen:

### ✅ YouTube-Showreel – ERLEDIGT (Click-to-load eingebaut)
Früher lud das eingebettete YouTube-Video **beim Seitenaufruf** und verband
sich mit Google/DoubleClick, bevor der Besucher zugestimmt hatte.
**Jetzt gelöst:** Es wird zunächst nur ein lokales Standbild mit Play-Button
und Hinweistext gezeigt; das echte iframe (über `youtube-nocookie.com`) lädt
**erst nach Klick**. Damit werden vor der aktiven Einwilligung keine Daten an
Google übertragen – gut für Datenschutz *und* Ladezeit.

### 🟠 Adobe Fonts (Typekit) laden von US-Servern
Die Schriften kommen über `use.typekit.net` von Adobe – dabei wird die
IP-Adresse deiner Besucher in die USA übertragen.
- **Lösung:** Schriften **selbst hosten** (lokal ausliefern) statt vom
  Adobe-CDN. Rechtlich sauberer und schneller. Achtung: Lizenzbedingungen von
  Adobe Fonts fürs Self-Hosting prüfen – ggf. auf eine frei lizenzierte
  Alternative (Google-Fonts-lokal, Fontsource) ausweichen.

### 🟠 Kontaktformular über Formspree (USA)
`contact.html` schickt das Formular an `formspree.io` – ein US-Dienst, der die
Daten deiner Interessenten verarbeitet.
- In der Datenschutzerklärung **nennen** (Formspree als Auftragsverarbeiter).
- **AVV/DPA** mit Formspree abschließen (bieten sie an).
- Alternativ ein EU-Formular-Backend erwägen.

---

## 2. Impressum (§ 5 DDG)

Die Seite `imprint.html` existiert; die Rechtsgrundlage wurde bereits von
§ 5 TMG auf **§ 5 DDG** aktualisiert. Noch zu tun:
- [ ] Inhalt auf **Deutsch** bereitstellen (aktuell Englisch). Für ein
      DACH-Angebot sollte das Impressum deutsch sein.
- [ ] Vollständigkeit prüfen: Name, Anschrift, E-Mail **und Telefon**,
      USt-IdNr. (vorhanden). Bei erlaubnispflichtigen Tätigkeiten ggf. weitere
      Angaben – bei reiner Fotografie i. d. R. nicht nötig.
- [ ] Angaben aktuell halten (Adresse/USt-IdNr.).

## 3. Datenschutzerklärung (DSGVO)

`privacy-policy.html` ist vorhanden, aber auf Englisch und muss zu deinem
tatsächlichen Setup passen. Sie muss **alle** eingesetzten Dienste abdecken:
- [ ] Auf **Deutsch** erstellen (Generator nutzen).
- [ ] Hosting: **GitHub Pages** (GitHub = US-Anbieter, Server-Logs/IP) nennen.
- [ ] **Formspree** (Kontaktformular) nennen.
- [ ] **YouTube** (Showreel) nennen – ist bereits enthalten, an die gewählte
      Lösung aus Punkt 1 anpassen.
- [ ] **Adobe Fonts** nennen – oder streichen, falls du Fonts selbst hostest.
- [ ] **WhatsApp**-Link (Klick führt zu Meta/WhatsApp) nennen.
- [ ] Betroffenenrechte, Rechtsgrundlagen (Art. 6 DSGVO), Kontakt der
      verantwortlichen Stelle.

## 4. Cookie-Consent / TDDDG (§ 25)

- Aktuell speichert die Seite nur einen **technisch notwendigen** Wert im
  localStorage (`cookiesAccepted`) – dafür ist **keine Einwilligung** nötig,
  der Banner ist nur ein Hinweis.
- **YouTube ist entschärft** (Click-to-load, siehe oben). Es bleibt nur noch
  **Adobe Fonts**, das ohne Zustimmung von US-Servern lädt. Wenn du die Fonts
  selbst hostest (Punkt 1), kommst du realistisch **ganz ohne Consent-Banner**
  aus – der einfachste und sauberste Weg für ein Portfolio.
- Kein Analytics ausgewählt → keine zusätzliche Consent-Pflicht dadurch. 👍

## 5. Auftragsverarbeitung (AVV / DPA)

Verträge zur Auftragsverarbeitung mit allen Dienstleistern, die
personenbezogene Daten verarbeiten:
- [ ] GitHub (Hosting)
- [ ] Formspree (Formular)
- [ ] ggf. Adobe (Fonts), Google (YouTube)

## 6. AGB & Widerruf

- Nur nötig, wenn du **online kostenpflichtige Leistungen/Buchungen** direkt
  über die Seite verkaufst. Aktuell ist die Seite ein Portfolio mit
  Kontaktaufnahme → **vorerst nicht erforderlich**. Sobald du z. B. Pakete
  online buchbar machst: AGB + Widerrufsbelehrung ergänzen.

## 7. Barrierefreiheit (BFSG, seit 28.06.2025)

- Das BFSG betrifft u. a. „Dienstleistungen im elektronischen
  Geschäftsverkehr" für Verbraucher.
- **Kleinunternehmer-Ausnahme:** Für *Dienstleistungen* sind Anbieter mit
  < 10 Beschäftigten **und** ≤ 2 Mio. € Jahresumsatz i. d. R. **ausgenommen**.
  Als Einzel-/Kleinunternehmer fällst du damit wahrscheinlich nicht unter die
  Pflicht – **das solltest du aber für deinen Fall verbindlich klären**.
- Unabhängig davon: **WCAG 2.1 AA als Best Practice** umsetzen (gute
  Grundlagen sind bereits drin: semantisches HTML, Alt-Texte, Tastatur-Lightbox,
  aria-Attribute). Noch prüfen: Farbkontraste (das helle Grau auf Dunkel und
  das Amber auf Dunkel mit einem Kontrast-Checker gegen 4.5:1 testen).

---

## 8. Hosting & Domain (deine Frage)

Aktuell läuft die Seite auf **GitHub Pages** unter
`https://legendesamuel.github.io/Seelig-Designs/` (kostenlos, mit HTTPS). Das
ist für den Start völlig in Ordnung. Für einen professionellen Auftritt lohnt
sich eine **eigene Domain** (z. B. `seelig-designs.de`).

### Option A – Domain kaufen + auf GitHub Pages zeigen (empfohlen, einfachster Weg)
1. Domain bei einem Registrar kaufen (~10–20 €/Jahr): **INWX**, **Namecheap**,
   **Cloudflare Registrar** (zum Selbstkostenpreis), **Porkbun**.
2. In den Repo-Einstellungen unter **Settings → Pages → Custom domain** die
   Domain eintragen (legt eine `CNAME`-Datei an).
3. Beim Registrar DNS setzen: `CNAME` (bzw. `ALIAS`/`ANAME` für die
   Root-Domain) auf `legendesamuel.github.io` – bzw. die vier A-Records von
   GitHub. GitHub stellt **kostenloses HTTPS** bereit (Let's Encrypt).
4. Danach in den SEO-Tags/der Sitemap die URL einmal ersetzen (siehe unten).

### Option B – Cloudflare als DNS/CDN davor (kostenlos)
Domain bei einem Registrar, DNS über **Cloudflare** (gratis) → bringt CDN,
Caching und zusätzliche Sicherheit (Checklisten-Punkte 4 & 8). Ziel bleibt
GitHub Pages.

### Option C – Open-Source / selbst hosten
- **Codeberg Pages** (Open Source, EU/Deutschland) – DSGVO-freundliche
  Alternative zu GitHub Pages.
- **Netlify** / **Cloudflare Pages** – ebenfalls kostenlos, mehr Features
  (Formulare, Deploy-Previews).
- **Eigener Server** (VPS mit **Caddy** oder **nginx**): volle Kontrolle,
  automatisches HTTPS mit Caddy – aber du musst Updates/Backups selbst machen
  (Checklisten-Punkt 8 & 12). Für ein statisches Portfolio meist Overkill.

> **„DNS selbst hosten"** ist technisch möglich (eigener Bind9/PowerDNS), aber
> für dich nicht sinnvoll: Ausfallsicherheit und Aufwand stehen in keinem
> Verhältnis. Nimm einen etablierten DNS-Anbieter (Registrar oder Cloudflare).

### Domain in den Code übernehmen
Wenn deine Domain feststeht, ersetze ich die Platzhalter-URLs in einem Schritt.
Manuell ginge es z. B. so (im Projektordner):

```bash
# Beispiel: von der github.io-URL auf die eigene Domain umstellen
grep -rl "legendesamuel.github.io/Seelig-Designs" --include="*.html" --include="*.xml" . \
  | xargs sed -i 's#https://legendesamuel.github.io/Seelig-Designs#https://www.seelig-designs.de#g'
```

Danach greifen Canonical-Tags, Open-Graph-Vorschaubilder und die Sitemap auf
die richtige Domain.

---

## 9. Noch offen aus dem 12-Punkte-Plan (Business/Inhalt – von dir)

- **Punkt 1:** messbare KPIs, Zielgruppe, Wettbewerbsanalyse festlegen.
- **Punkt 6:** Keyword-Recherche; **Google Search Console** einrichten
  (Domain verifizieren, `sitemap.xml` einreichen) – sobald die finale Domain
  steht.
- **Punkt 12:** Wartung/Backups (GitHub ist versioniert), Content-Pflege,
  regelmäßige Reviews.
