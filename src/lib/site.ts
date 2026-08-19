export const site = {
  name: "publiXound",
  legalName: "publiXound | Veranstaltungstechnik GmbH",
  claim: "Zusammen gestalten, was andere fasziniert.",
  url: "https://www.publixound.de",
  phone: "+49 208 77 80 59 06",
  phoneHref: "+4920877805906",
  email: "info@publixound.de",
  street: "Tüsselstraße 7",
  zip: "46147",
  city: "Oberhausen",
  region: "Ruhrgebiet",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=T%C3%BCsselstra%C3%9Fe+7+46147+Oberhausen",
} as const;

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
