import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der ${site.legalName}: welche personenbezogenen Daten wir verarbeiten und welche Rechte Sie haben.`,
  alternates: { canonical: "/datenschutz" },
  // Rechtstexte gehören nicht in den Index, Google darf den Links aber folgen.
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <LegalShell
      title="Datenschutzerklärung"
      intro="Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."
    >
      <section>
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          {site.legalName}
          <br />
          Tüsselstraße 7
          <br />
          46147 Oberhausen
          <br />
          Telefon: <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>

      <section>
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Vercel Inc.,
          440 N Barranca Ave #4133, Covina, CA 91723, USA bzw. Vercel Germany GmbH).
          Der Hoster verarbeitet in unserem Auftrag Server-Logfiles, die Ihr Browser
          automatisch übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs,
          angeforderte Datei, Referrer-URL sowie Browser- und Betriebssystemangaben.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes
          Interesse an einer technisch fehlerfreien und sicheren Bereitstellung unserer
          Website. Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung nach
          Art. 28 DSGVO.
        </p>
      </section>

      <section>
        <h2>3. Kontaktaufnahme und Kontaktformular</h2>
        <p>
          Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren,
          verarbeiten wir die von Ihnen übermittelten Daten (Name, E-Mail-Adresse,
          optional Telefonnummer, Angaben zur Veranstaltung und Ihre Nachricht) zur
          Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
          Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
          Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
          auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und unserem berechtigten
          Interesse an der effektiven Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
        <p>
          Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
          Einwilligung widerrufen oder der Zweck der Speicherung entfällt. Zwingende
          gesetzliche Aufbewahrungsfristen bleiben unberührt.
        </p>
        <p>
          Für den Versand der Formularanfragen setzen wir einen E-Mail-Dienstleister
          ein, der die Nachricht in unserem Auftrag zustellt.
        </p>
      </section>

      <section>
        <h2>4. Cookies und Analyse</h2>
        <p>
          Diese Website verwendet keine Tracking-Cookies, kein Webanalyse-Tool und keine
          Werbenetzwerke. Es werden ausschließlich technisch notwendige Daten
          verarbeitet, die für den Betrieb der Seite erforderlich sind.
        </p>
      </section>

      <section>
        <h2>5. Schriftarten</h2>
        <p>
          Zur einheitlichen Darstellung von Schriftarten verwenden wir die freien
          Schriften „Inter“ und „Archivo“. Die Schriftdateien werden ausschließlich von
          unserem eigenen Server ausgeliefert (Self-Hosting). Ein Verbindungsaufbau
          Ihres Browsers zu Servern Dritter – etwa zu Google Fonts – findet dabei nicht
          statt.
        </p>
      </section>

      <section>
        <h2>6. SSL-/TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
          vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
          Verbindung erkennen Sie an der Adresszeile „https://“ und am Schloss-Symbol in
          Ihrer Browserzeile.
        </p>
      </section>

      <section>
        <h2>7. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO),</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
          <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO),</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft.</li>
        </ul>
        <p>
          Wenden Sie sich dazu formlos an die oben genannte verantwortliche Stelle.
          Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde
          zu – für Nordrhein-Westfalen: Landesbeauftragte für Datenschutz und
          Informationsfreiheit NRW, Kavalleriestraße 2–4, 40213 Düsseldorf.
        </p>
      </section>

      <p className="text-fog/70">
        Hinweis für die Redaktion: Bitte diese Erklärung vor dem Livegang mit Ihrem
        Datenschutzbeauftragten bzw. Ihrer Rechtsberatung abgleichen und um
        unternehmensspezifische Angaben ergänzen.
      </p>
    </LegalShell>
  );
}
