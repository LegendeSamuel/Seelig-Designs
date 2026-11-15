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

### ✅ Schriften – ERLEDIGT (Sofia Pro selbst gehostet)
Früher kamen die Schriften über `use.typekit.net` von Adobe (IP-Übertragung
in die USA). **Jetzt gelöst:** Sofia Pro wird lokal aus `Fonts/SofiaPro/`
ausgeliefert – kein externer Font-Request mehr. Der Typekit-Link wurde auf
allen Seiten entfernt.
- **Deine Aufgabe:** stelle sicher, dass du eine gültige **Webfont-Lizenz** für
  Sofia Pro besitzt (kommerzielle Schrift; das Selbst-Hosten muss lizenziert
  sein).

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
- [x] **Schriften**: selbst gehostet (Sofia Pro) – kein externer Font-Dienst
      mehr zu nennen. In der Datenschutzerklärung ist das bereits so vermerkt.
- [ ] **WhatsApp**-Link (Klick führt zu Meta/WhatsApp) nennen.
- [ ] Betroffenenrechte, Rechtsgrundlagen (Art. 6 DSGVO), Kontakt der
      verantwortlichen Stelle.

## 4. Cookie-Consent / TDDDG (§ 25)

- Aktuell speichert die Seite nur einen **technisch notwendigen** Wert im
  localStorage (`cookiesAccepted`) – dafür ist **keine Einwilligung** nötig,
  der Banner ist nur ein Hinweis.
- **YouTube ist entschärft** (Click-to-load) **und die Schriften sind selbst
  gehostet** – es lädt also **nichts** mehr ohne Zustimmung von externen
  Servern. Damit kommst du realistisch **ganz ohne Consent-Banner** aus; der
  vorhandene Hinweis ist rein informativ und könnte sogar entfallen.
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

## 8. Hosting & Domain (Stand: 15.11.2026)

Die Seite läuft auf **GitHub Pages** unter der eigenen Domain
**`https://seelig-designs.eu/`** (kostenlos, mit HTTPS). Domain und Postfach
liegen bei **IONOS** (E-Mail-Paket Base 1).

**Aufbau**
- DNS bei IONOS: vier `A`- und vier `AAAA`-Records auf GitHub Pages, `www` als
  `CNAME` auf `legendesamuel.github.io`. Hauptadresse ist die Domain ohne `www`.
- Im Repo liegt eine `CNAME`-Datei mit dem Inhalt `seelig-designs.eu`. Sie darf
  nicht gelöscht werden, sonst entfällt die Custom Domain.
- Die alte Adresse `legendesamuel.github.io/Seelig-Designs/` leitet automatisch
  per 301 auf die neue Domain weiter.
- Die Domain ist in GitHub (Settings → Pages) per TXT-Record verifiziert,
  „Enforce HTTPS" ist aktiv.
- Mail: MX, SPF (`include:_spf-eu.ionos.com`), DKIM (`s1`/`s2`) und DMARC
  (`CNAME` auf IONOS) sind von IONOS gesetzt.

**Sicherheit**
- 2FA am IONOS-Konto und im Webmail; die Reset-Mail des Kontos ist eine
  Adresse außerhalb dieser Domain.
- Domain Guard bei IONOS aktiv.
- Externe Mailprogramme nutzen ein App-Passwort pro Gerät.

**Bei Änderungen am Code beachten**
- `canonical`, `og:url`, `og:image`, JSON-LD, `sitemap.xml` und `robots.txt`
  verwenden ausschließlich `https://seelig-designs.eu/…`.
- Alternativen zu GitHub Pages (Codeberg Pages, Netlify, Cloudflare Pages,
  eigener Server mit Caddy) bleiben möglich. Dann müssen DNS-Records und die
  `CNAME`-Datei angepasst werden.

---

## 9. Noch offen aus dem 12-Punkte-Plan (Business/Inhalt – von dir)

- **Punkt 1:** messbare KPIs, Zielgruppe, Wettbewerbsanalyse festlegen.
- **Punkt 6:** Keyword-Recherche; **Google Search Console** einrichten
  (Domain verifizieren, `sitemap.xml` einreichen) – sobald die finale Domain
  steht.
- **Punkt 12:** Wartung/Backups (GitHub ist versioniert), Content-Pflege,
  regelmäßige Reviews.
