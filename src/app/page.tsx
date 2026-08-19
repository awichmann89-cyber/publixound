import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Saeulen from "@/components/Saeulen";
import UeberUns from "@/components/UeberUns";
import Veranstaltungstechnik from "@/components/Veranstaltungstechnik";
import Leistungsblock from "@/components/Leistungsblock";
import Galerie from "@/components/Galerie";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import { gallery, localSeo, openGraphBase, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...openGraphBase,
    url: "/",
    title: `${site.name} | Veranstaltungstechnik aus ${site.city}`,
    description:
      "Ton, Licht, Video, Veranstaltungsplanung und Kommunikation aus einer Hand – aus der Mitte des Ruhrgebiets.",
  },
};

const organizationId = `${site.url}/#organisation`;
const websiteId = `${site.url}/#website`;
const pageTitle = `${site.name} | Veranstaltungstechnik aus ${site.city}`;

/**
 * Strukturierte Daten für Google. Ein @graph mit festen @id-Werten, damit
 * Unternehmen, Website und Seite als eine zusammenhängende Entität gelesen
 * werden – das ist die Grundlage dafür, dass Google Firmenname, Logo und
 * Leistungen im Suchergebnis korrekt zuordnet.
 */
const organisation = {
  "@type": "LocalBusiness",
  "@id": organizationId,
  name: site.name,
  legalName: site.legalName,
  slogan: site.claim,
  url: site.url,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  logo: {
    "@type": "ImageObject",
    "@id": `${site.url}/#logo`,
    url: `${site.url}/logo-publixound.png`,
    width: 473,
    height: 440,
    caption: site.name,
  },
  image: [`${site.url}/og.jpg`, ...gallery.slice(0, 3).map((g) => `${site.url}${g.src}`)],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  hasMap: site.mapsUrl,
  areaServed: [
    ...site.areaServed.map((name) => ({ "@type": "City", name })),
    { "@type": "AdministrativeArea", name: site.region },
  ],
  knowsAbout: [
    "Veranstaltungstechnik",
    "Tontechnik",
    "Lichttechnik",
    "Videotechnik",
    "Veranstaltungsplanung",
    "Livestream",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Kundenservice",
    telephone: site.phone,
    email: site.email,
    areaServed: "DE",
    availableLanguage: ["de"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Veranstaltungstechnik",
        itemListElement: [
          {
            name: "Tontechnik",
            description:
              "Beschallung für innen und außen, digitale Mischpulte, Monitoring sowie Konferenz-, Sprach- und Livebeschallung.",
          },
          {
            name: "Lichttechnik",
            description:
              "Bühnen- und Effektlicht, Architektur- und Ambiente-Beleuchtung, Lichtdesign und Programmierung.",
          },
          {
            name: "Videotechnik",
            description:
              "LED-Wände, Projektion, Kamera und Bildregie sowie Livestream auf allen gängigen Plattformen.",
          },
        ].map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.description, provider: { "@id": organizationId } },
        })),
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Veranstaltungsplanung",
          description:
            "Konzept und Beratung, Planung und Koordination von Gewerken, Zeitplänen und Genehmigungen sowie die Umsetzung vor Ort.",
          provider: { "@id": organizationId },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kommunikation & Werbung",
          description:
            "Botschaft und Inhalt schärfen, Gestaltung von Bühnengrafik, Videoinhalten und Werbemitteln bis zur Ausspielung.",
          provider: { "@id": organizationId },
        },
      },
    ],
  },
  // Nur ausgeben, was in src/lib/site.ts wirklich hinterlegt ist.
  ...(localSeo.sameAs.length > 0 ? { sameAs: localSeo.sameAs } : {}),
  ...(localSeo.geo
    ? { geo: { "@type": "GeoCoordinates", latitude: localSeo.geo.lat, longitude: localSeo.geo.lng } }
    : {}),
  ...(localSeo.openingHours.length > 0
    ? {
        openingHoursSpecification: localSeo.openingHours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
      }
    : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organisation,
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      // Google nutzt diesen Namen für die Zeile über dem Suchergebnis-Titel.
      name: site.name,
      alternateName: `${site.name} Veranstaltungstechnik`,
      description: site.description,
      publisher: { "@id": organizationId },
      inLanguage: "de-DE",
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: pageTitle,
      description: site.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      primaryImageOfPage: { "@id": `${site.url}/#logo` },
      inLanguage: "de-DE",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <Hero />
        <Saeulen />
        <UeberUns />
        <Veranstaltungstechnik />

        <Leistungsblock
          id="veranstaltungsplanung"
          eyebrow="Leistungen"
          title="Veranstaltungsplanung."
          tone="ink"
          paragraphs={[
            "Bei der Organisation von Veranstaltungen gilt es, eine Fülle von Einzelbausteinen zu einem unvergesslichen Event zu vereinen.",
            "Nutzen Sie unsere langjährige Erfahrung in diesem Bereich und planen Sie von der ersten Idee bis zur Umsetzung gemeinsam mit uns.",
          ]}
          steps={[
            {
              k: "Konzept & Beratung",
              v: "Wir hören zu, prüfen die Location und entwickeln daraus ein realistisches Konzept.",
            },
            {
              k: "Planung & Koordination",
              v: "Zeitpläne, Gewerke, Genehmigungen und Dienstleister – wir behalten den Überblick.",
            },
            {
              k: "Umsetzung vor Ort",
              v: "Aufbau, Durchführung und Abbau mit eigenem Team und eigenem Material.",
            },
          ]}
          img="/media/planung.jpg"
          alt="Beschriftetes Flightcase im Lager von publiXound"
          flip
        />

        <Leistungsblock
          id="kommunikation"
          eyebrow="Leistungen"
          title="Kommunikation & Werbung."
          tone="soft"
          paragraphs={[
            "Im Bereich der Werbung und Öffentlichkeitsarbeit stehen der Inhalt und dessen ansprechende Präsentation im Vordergrund.",
            "Die Realisation Ihrer Ideen und Wünsche geschieht kreativ und in enger Kooperation mit Ihnen als Auftraggeber. Die technische und logistische Umsetzung ist für Sie dabei völlig stressfrei – wir bieten sie als Komplettpaket an.",
          ]}
          steps={[
            {
              k: "Inhalt & Botschaft",
              v: "Wir schärfen gemeinsam, was Ihre Veranstaltung nach außen erzählen soll.",
            },
            {
              k: "Gestaltung & Content",
              v: "Von Bühnengrafik über Videoinhalte bis zu Werbemitteln – aus einer Hand.",
            },
            {
              k: "Ausspielung",
              v: "Auf der Bühne, auf LED-Wänden oder im Livestream: Ihre Botschaft erreicht ihr Publikum.",
            },
          ]}
          img="/media/kommunikation.jpg"
          alt="Person plant am Laptop Inhalte für eine Veranstaltung"
        />

        <Galerie />
        <Kontakt />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
