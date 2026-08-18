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
      title="Hinweise zu den allgemeinen Geschäftsbedingungen"
      intro="Diese Seite ist für die bestehenden AGB der PubliXound – Veranstaltungstechnik GmbH vorbereitet."
    >
      <section>
        <p>
          Willkommen im PubliXound Haupt-Portal und vielen Dank für Ihr Interesse.
        </p>
        <p>
          Wir behalten uns vor, den Inhalt dieser Allgemeinen Geschäftsbedingungen von Zeit zu Zeit anzupassen. Es empfiehlt sich daher, unsere Allgemeinen Geschäftsbedingungen in regelmäßigen Abständen erneut zur Kenntnis zu nehmen.
        </p>
        <p>
          <a href="https://www.dropbox.com/scl/fi/vnq2d70qptuwv6gy1omha/Allgemeine-Gesch-ftsbedingungen-2022-05.pdf?rlkey=kpv62fz8p8cb4uo34v3lzjedv&st=suh2yll6&dl=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Allgemeine Geschäftsbedingungen (2022-05)
          </a>
        </p>
      </section>
    </LegalShell>
  );
}
