import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { openGraphBase, site } from "@/lib/site";

// Selbst gehostete Variable Fonts – kein Request an Google-Server.
const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  style: "normal",
});

const archivo = localFont({
  src: "../fonts/archivo-latin-wght-normal.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Veranstaltungstechnik aus ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  // Telefonnummern und Adressen nicht automatisch verlinken lassen – wir setzen
  // die tel:- und Maps-Links selbst.
  formatDetection: { telephone: false, address: false, email: false },
  keywords: [
    "Veranstaltungstechnik",
    "Tontechnik",
    "Lichttechnik",
    "Videotechnik",
    "Veranstaltungsplanung",
    "Essen",
    "Oberhausen",
    "Bottrop",
    "Ruhrgebiet",
    "Eventtechnik mieten",
  ],
  openGraph: {
    ...openGraphBase,
    title: `${site.name} | Veranstaltungstechnik aus ${site.city}`,
    description:
      "Ton, Licht, Video, Veranstaltungsplanung und Kommunikation aus einer Hand – aus der Mitte des Ruhrgebiets.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Veranstaltungstechnik aus ${site.city}`,
    description:
      "Ton, Licht, Video, Veranstaltungsplanung und Kommunikation aus einer Hand.",
    images: ["/og.jpg"],
  },
  // Kein canonical hier: Metadaten werden an alle Unterseiten vererbt, ein
  // canonical im Root-Layout würde Impressum, AGB und Datenschutz auf die
  // Startseite zeigen lassen. Jede Route setzt ihr canonical selbst.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${archivo.variable}`}>
      <body className="bg-ink text-chalk antialiased">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
