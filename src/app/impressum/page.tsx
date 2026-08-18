import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <LegalShell title="Impressum" intro="Angaben gemäß § 5 DDG (vormals § 5 TMG).">
      <section>
        <h2>Anbieter</h2>
        <p>
          {site.legalName}
          <br />
          {site.street}
          <br />
          {site.zip} {site.city}
        </p>
        <p>
          Telefon: <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>Geschäftsführer: Thomas Heipcke</p>
        <p className="text-fog/70">
          Hinweis für die Redaktion: Registergericht, Handelsregisternummer und
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG hier ergänzen.
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Thomas Heipcke und Alex Wichmann, Anschrift wie oben.
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
          DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
          nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
          Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen
          werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
          wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
          keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
          jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
          überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
          bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
          nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Alle auf dieser Website gezeigten Fotos und Videoaufnahmen stammen – soweit
          nicht anders gekennzeichnet – aus eigenen Produktionen.
        </p>
      </section>

      <section>
        <h2>Streitschlichtung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
          einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </LegalShell>
  );
}
