import type { Metadata } from "next";

export const site = {
  name: "publiXound",
  legalName: "publiXound | Veranstaltungstechnik GmbH",
  claim: "Zusammen gestalten, was andere fasziniert.",
  // Google schneidet Snippets bei ca. 160 Zeichen ab – dieser Text bleibt darunter.
  description:
    "Veranstaltungstechnik aus Essen: Ton, Licht, Video, Planung und Vermietung aus einer Hand – für Events in Oberhausen, Bottrop und dem Ruhrgebiet.",
  url: "https://www.publixound.de",
  phone: "+49 208 77 80 59 06",
  phoneHref: "+4920877805906",
  email: "info@publixound.de",
  street: "Donnerstraße 177",
  zip: "45357",
  city: "Essen",
  region: "Ruhrgebiet",
  // Direkt auf den Eintrag im Unternehmensprofil statt auf eine Adress-Suche –
  // landet im JSON-LD als hasMap.
  mapsUrl: "https://maps.google.com/?cid=14675968657872639225",
  // Einzugsgebiet – wird als schema.org/City in die strukturierten Daten übernommen.
  areaServed: ["Essen", "Oberhausen", "Bottrop"],
} as const;

/**
 * Optionale Angaben für die lokale Suche. Sobald hier etwas eingetragen ist,
 * landet es automatisch im JSON-LD der Startseite; leere Werte werden
 * herausgefiltert.
 *
 * Bitte nichts schätzen: Google gleicht diese Daten mit dem Google-
 * Unternehmensprofil ab, Abweichungen schaden dem lokalen Ranking mehr, als
 * eine fehlende Angabe es tut.
 */
export const localSeo = {
  /** Profile derselben Firma: Google-Unternehmensprofil, Facebook, Instagram, LinkedIn ... */
  sameAs: [
    // Google-Unternehmensprofil als CID-Link – anders als geteilte Kurzlinks
    // (share.google, maps.app.goo.gl) löst diese Form serverseitig auf und
    // bleibt dauerhaft gültig.
    "https://maps.google.com/?cid=14675968657872639225",
    "https://www.instagram.com/publixound",
  ] as string[],
  /** Koordinaten des Standorts, in Google Maps per Rechtsklick abzulesen. */
  geo: { lat: 51.4875678, lng: 6.9311482 } as { lat: number; lng: number } | null,
  /** Bürozeiten, z. B. [{ days: ["Monday", "Tuesday"], opens: "09:00", closes: "17:00" }] */
  openingHours: [] as { days: string[]; opens: string; closes: string }[],
};

/**
 * Gemeinsame Open-Graph-Felder. Next merged Metadaten nur flach: Sobald eine
 * Route `openGraph` selbst setzt, ersetzt sie den Block aus dem Layout
 * vollständig. Deshalb liegt die Basis hier und wird pro Route ergänzt.
 */
export const openGraphBase: Metadata["openGraph"] = {
  type: "website",
  locale: "de_DE",
  siteName: site.name,
  images: [
    {
      url: "/og.jpg",
      width: 1200,
      height: 630,
      alt: `${site.name} | Veranstaltungstechnik aus ${site.city}`,
    },
  ],
};

export const nav = [
  { href: "/#uberuns", label: "Über uns" },
  { href: "/#veranstaltungstechnik", label: "Veranstaltungstechnik" },
  { href: "/#veranstaltungsplanung", label: "Veranstaltungsplanung" },
  { href: "/#kommunikation", label: "Kommunikation & Werbung" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export const gallery = [
  { src: "/media/gal-01.jpg", alt: "Bühne mit LED-Wand und Traversenkonstruktion bei einem Open-Air-Event" },
  { src: "/media/gal-02.jpg", alt: "Live-Band auf einer Bühne vor großer Videowand" },
  { src: "/media/gal-03.jpg", alt: "Publikum vor blau ausgeleuchteter Open-Air-Bühne" },
  { src: "/media/gal-04.jpg", alt: "Lichtshow mit Beams über dem Publikum in einer Halle" },
  { src: "/media/gal-05.jpg", alt: "Industriedenkmal in Szene gesetzt mit Architekturbeleuchtung" },
  { src: "/media/gal-06.jpg", alt: "Abendveranstaltung mit Bühne, Zelten und vollem Gelände" },
  { src: "/media/gal-07.jpg", alt: "Bühne bei Nacht in grünes Licht getaucht" },
  { src: "/media/gal-08.jpg", alt: "Digitales Mischpult am FOH-Platz während einer Abendveranstaltung" },
  { src: "/media/gal-09.jpg", alt: "Traversenbühne mit Nebel und blauem Licht" },
  { src: "/media/gal-10.jpg", alt: "Publikum vor der Bühne bei einem Open-Air-Konzert" },
] as const;
