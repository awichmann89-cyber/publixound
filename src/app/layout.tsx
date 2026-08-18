import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

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
    default: "PubliXound – Veranstaltungstechnik aus Oberhausen",
    template: "%s | PubliXound",
  },
  description:
    "Ton, Licht, Video, Veranstaltungsplanung und Kommunikation aus einer Hand. PubliXound ist Ihr Veranstaltungsdienstleister aus der Mitte des Ruhrgebiets – von der Gerätevermietung bis zum Rundum-sorglos-Paket.",
  keywords: [
    "Veranstaltungstechnik",
    "Tontechnik",
    "Lichttechnik",
    "Videotechnik",
    "Veranstaltungsplanung",
    "Oberhausen",
    "Ruhrgebiet",
    "Eventtechnik mieten",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: "PubliXound – Veranstaltungstechnik aus Oberhausen",
    description:
      "Ton, Licht, Video, Veranstaltungsplanung und Kommunikation aus einer Hand – aus der Mitte des Ruhrgebiets.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "PubliXound – Veranstaltungstechnik aus Oberhausen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PubliXound – Veranstaltungstechnik aus Oberhausen",
    description:
      "Ton, Licht, Video, Veranstaltungsplanung und Kommunikation aus einer Hand.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
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
