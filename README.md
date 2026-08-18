# publiXound – Website

Neue One-Page-Website der PubliXound – Veranstaltungstechnik GmbH.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · optimiert für Vercel.

---

## Inhalt der Seite

| Anker | Abschnitt |
| --- | --- |
| `#start` | Hero mit Drohnenvideo aus eigenem Material |
| `#uberuns` | Über uns – „Alles aus einer Hand." (alter Link `/#uberuns` funktioniert unverändert) |
| `#veranstaltungstechnik` | Ton-, Licht- und Videotechnik |
| `#veranstaltungsplanung` | Veranstaltungsplanung |
| `#kommunikation` | Kommunikation & Werbung |
| `#referenzen` | Bildergalerie mit Lightbox |
| `#kontakt` | Kontaktformular + Kontaktdaten |

Rechtliche Seiten: `/impressum`, `/datenschutz`, `/agb`.
Alte WordPress-Pfade (`/datenschutzerklaerung`, `/agbs`, `/home`) werden per 308 umgeleitet.

---

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm start        # Produktions-Server
```

Node 20 oder neuer wird benötigt.

---

## Deployment auf Vercel

### Variante A – über die Weboberfläche

1. Projektordner in ein Git-Repository legen (GitHub, GitLab oder Bitbucket):
   ```bash
   git init && git add . && git commit -m "Neue Website"
   git remote add origin git@github.com:<konto>/publixound.git
   git push -u origin main
   ```
2. Auf [vercel.com](https://vercel.com) → **Add New… → Project** → Repository auswählen.
3. Vercel erkennt Next.js automatisch. Framework Preset: **Next.js**,
   Build Command `npm run build`, Output: automatisch. Nichts ändern.
4. Unter **Environment Variables** die Werte aus `.env.example` eintragen
   (siehe unten). Danach **Deploy**.

### Variante B – über die CLI

```bash
npm i -g vercel
vercel            # Preview-Deployment
vercel --prod     # Produktion
```

### Domain umstellen

1. Im Vercel-Projekt → **Settings → Domains** → `publixound.de` und
   `www.publixound.de` hinzufügen.
2. Vercel zeigt die nötigen DNS-Einträge an (A-Record `76.76.21.21` für die
   Apex-Domain bzw. CNAME `cname.vercel-dns.com` für `www`). Diese beim
   bisherigen DNS-Anbieter setzen.
3. Empfehlung: `publixound.de` auf `www.publixound.de` weiterleiten (oder
   umgekehrt) – das lässt sich in Vercel mit einem Klick einstellen.
4. Das TLS-Zertifikat stellt Vercel automatisch aus.

> Erst umstellen, wenn die Seite im Preview geprüft wurde. Bis dahin läuft die
> alte Seite unverändert weiter.

---

## Umgebungsvariablen

| Variable | Pflicht | Beschreibung |
| --- | --- | --- |
| `RESEND_API_KEY` | nein | API-Key von [resend.com](https://resend.com) für den Mailversand des Kontaktformulars. Fehlt der Key, wird die Anfrage nur in den Vercel-Logs protokolliert. |
| `CONTACT_TO` | nein | Empfängeradresse (Standard: `info@publixound.de`). |
| `CONTACT_FROM` | nein | Absenderadresse. Die Domain muss bei Resend verifiziert sein. |

Alternativ lässt sich der Versand in `src/app/api/kontakt/route.ts` auf jeden
anderen Anbieter (SMTP, Postmark, Brevo …) umstellen – der Rest des Formulars
bleibt unverändert.

---

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Kontaktdaten, Navigation, Galerie-Bilder | `src/lib/site.ts` |
| Texte der Leistungsblöcke | `src/app/page.tsx` |
| Ton/Licht/Video-Karten | `src/components/Veranstaltungstechnik.tsx` |
| Über-uns-Text | `src/components/UeberUns.tsx` |
| Impressum / Datenschutz / AGB | `src/app/impressum|datenschutz|agb/page.tsx` |
| Bilder und Videos | `public/media/` |
| Logo | `public/logo-publixound.png` |

### Bilder austauschen

Neue Bilder mit maximal ca. 1600–1800 px Kantenlänge in `public/media/`
ablegen und den Pfad im jeweiligen Bauteil eintragen. Die Auslieferung in
WebP/AVIF und die passenden Größen übernimmt `next/image` automatisch.

### Hero-Video austauschen

```bash
ffmpeg -ss 105 -t 20 -i rohmaterial.MP4 -an \
  -vf "scale=1920:1080:flags=lanczos,fps=25" \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart \
  public/media/hero-1080.mp4

ffmpeg -i public/media/hero-1080.mp4 -an -vf scale=1280:720 \
  -c:v libx264 -preset slow -crf 31 -pix_fmt yuv420p -movflags +faststart \
  public/media/hero-720.mp4

ffmpeg -ss 6 -i public/media/hero-1080.mp4 -frames:v 1 -q:v 5 \
  public/media/hero-poster.jpg
```

Das Video läuft stumm, in Schleife und respektiert
`prefers-reduced-motion`. Auf Mobilgeräten wird die 720p-Fassung geladen.

---

## Vor dem Livegang prüfen

- [ ] Impressum: Registergericht, HRB-Nummer und USt-IdNr. ergänzen
      (`src/app/impressum/page.tsx`)
- [ ] AGB-Text einfügen (`src/app/agb/page.tsx`)
- [ ] Datenschutzerklärung rechtlich gegenprüfen lassen
- [ ] `RESEND_API_KEY` setzen und eine Testanfrage über das Formular senden
- [ ] `site.url` in `src/lib/site.ts` prüfen (steuert Canonical, Sitemap, OG-Tags)

---

## Technische Hinweise

- **Schriften** (Inter, Archivo) liegen als Variable Fonts unter `src/fonts/`
  und werden selbst ausgeliefert – keine Verbindung zu Google-Servern.
- **Kein Tracking, keine Cookies**, daher ist kein Cookie-Banner nötig.
- **Barrierefreiheit**: Skip-Link, sichtbare Fokus-Zustände, Alt-Texte,
  Tastaturbedienung der Galerie (Pfeiltasten, Escape), reduzierte Animationen
  bei `prefers-reduced-motion`.
- **SEO**: Metadaten, Open Graph, `sitemap.xml`, `robots.txt` und
  LocalBusiness-Structured-Data sind eingebunden.
