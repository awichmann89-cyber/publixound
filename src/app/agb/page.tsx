import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AGB",
  robots: { index: false, follow: true },
};

export default function AGB() {
  return (
    <LegalShell
      title="Allgemeine Geschäftsbedingungen"
      intro="Diese Seite ist für die bestehenden AGB der PubliXound – Veranstaltungstechnik GmbH vorbereitet."
    >
      <section>
        <h2>Hinweis für die Redaktion</h2>
        <p>
          Der bislang auf publixound.de veröffentlichte AGB-Text wurde aus rechtlichen
          Gründen nicht automatisch übernommen. Bitte fügen Sie die geprüfte Fassung
          Ihrer AGB in der Datei{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 text-chalk">
            src/app/agb/page.tsx
          </code>{" "}
          ein – die Formatierung (Überschriften, Absätze, Listen) übernimmt das Layout
          automatisch.
        </p>
        <p>
          Bis dahin erhalten Sie unsere Geschäftsbedingungen auf Anfrage unter{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> oder telefonisch unter{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.
        </p>
      </section>
    </LegalShell>
  );
}
