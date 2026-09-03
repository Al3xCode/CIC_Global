# CIC-Global — Relaunch-Entwurf

Neubau der Website von CIC-Global (Konstantinos Kougkas, Gelsenkirchen) als Ersatz
für die bestehende Hostinger-Builder-Seite.

**Live:** https://cic-global.vercel.app

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deployment

- Live-URL: https://cic-global.vercel.app
- Repo: https://github.com/Al3xCode/CIC_Global
- Deploy: `git push` auf `main` → Vercel baut automatisch
- Vercel-Projekt: `al3x-workspace/cic-global`

Die Domain `cic-global.de` zeigt weiterhin auf die alte Hostinger-Seite und wird
erst umgehängt, wenn Impressum und Datenschutz stehen.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons

## Aufbau

| Pfad | Inhalt |
|---|---|
| `lib/site.ts` | Alle Texte, Leistungen und Blogartikel an einer Stelle |
| `lib/seo.ts` | Metadata-Helper und LocalBusiness-JSON-LD |
| `components/Timeline.tsx` | Die Zeitachse — das Signature-Element |
| `app/globals.css` | Design-Tokens (Farben, Schriften, Type-Scale) |

## Design

Dark + Gold, aufbauend auf der bestehenden Markenfarbe `#BE9B53`.

- **Display:** Fraunces · **Fließtext:** Instrument Sans · **Daten/Zeiten:** JetBrains Mono
- **Signature:** eine Goldlinie als Zeithorizont. Jede Leistung sitzt an der Position,
  ab der sie beim Kunden wirkt — von „Tag 0" (Finanzanalyse) bis „30+ Jahre"
  (Altersvorsorge). Ersetzt das übliche Kachelraster.
- **Rhythmus:** „Über uns" läuft auf hellem Papier statt dunkel.
- **Motion:** zwei Momente, beide beim Scrollen ausgelöst — die Achse zeichnet sich,
  die Kennzahlen zählen hoch (`components/Counter.tsx`). Sonst bewegt sich nichts
  von selbst. `prefers-reduced-motion` wird respektiert — bei der Achse abgesichert
  per CSS in `globals.css`, nicht nur über JavaScript.

## Bilder

Quellbilder liegen als WebP in `public/img`, skaliert auf die tatsächlich
gebrauchte Auflösung. Neue Bilder durchlaufen lassen mit:

```bash
node scripts/optimize-images.mjs
```

`next/image` rechnet zur Laufzeit weiter herunter und liefert je nach Gerät
28–54 KB aus. Große Quell-PNGs schaden der Auslieferung nicht, machen aber
Build und Erst-Optimierung langsam — deshalb gehören sie nicht ins Repo.

## Mobile

Geprüft bei 320 / 375 / 414 px, im Querformat (812×375) und auf dem Tablet (768 px),
über alle neun Seiten: kein horizontales Scrollen, keine abgeschnittenen Wörter,
Tap-Targets ≥ 44 px, keine Konsolenfehler.

Zwei Fallstricke, die dabei behoben wurden und beim Weiterbauen relevant bleiben:

- **Zeitachse:** Der Sichtbarkeits-Trigger sitzt auf dem `<ol>`, nicht auf den
  Punkten. Punkte starten auf `scale: 0`, sind damit 0×0 Pixel groß — und ein
  Element ohne Fläche meldet dem IntersectionObserver nie eine Überschneidung.
- **Counter:** Serverseitig steht die echte Zahl im HTML, auf 0 gesetzt wird erst
  im `useLayoutEffect`. Der Start hängt an drei unabhängigen Auslösern
  (Observer, Scroll-Listener, Timer), damit er nicht bei 0 hängen bleibt.

## Was noch fehlt (blockiert den Livegang)

`app/impressum/page.tsx` und `app/datenschutz/page.tsx` sind bewusst Platzhalter.
Die dort gelisteten Angaben müssen vom Betreiber kommen und rechtlich geprüft werden —
insbesondere Erlaubnis nach §34d/§34f GewO, Vermittlerregister-Nummer,
Berufshaftpflicht und Schlichtungsstelle.

Außerdem offen:

- Kontakt- und Newsletter-Formular versenden noch nicht (Server Action + Mailversand fehlen)
- Echte Kundenstimmen mit Freigabe — die Sektion entfällt bis dahin
- Echte Social-Media-Profil-URLs (auf der Altseite zeigten alle auf die Plattform-Startseiten)
- Herleitung der Zahlen „150+ Kunden" und „10.500 € Ersparnis"

## Vor dem Domain-Umzug

Die Altseite hat zehn Demo-Shop-URLs im Index (`/classic-cap-hpeszv` etc.).
Diese sollten nach dem Umzug **410 Gone** liefern, damit Google sie zügig entfernt.
Die Redirects der alten Slugs (`/uber-uns` → `/ueber-uns` usw.) stehen bereits
in `next.config.ts`.
