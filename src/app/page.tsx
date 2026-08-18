import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Saeulen from "@/components/Saeulen";
import UeberUns from "@/components/UeberUns";
import Veranstaltungstechnik from "@/components/Veranstaltungstechnik";
import Leistungsblock from "@/components/Leistungsblock";
import Galerie from "@/components/Galerie";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/media/gal-01.jpg`,
  description:
    "Veranstaltungstechnik, Veranstaltungsplanung sowie Kommunikation und Werbung aus Oberhausen im Ruhrgebiet.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressCountry: "DE",
  },
  areaServed: "Ruhrgebiet, Nordrhein-Westfalen",
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
          alt="Beschriftetes Flightcase im Lager von PubliXound"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
