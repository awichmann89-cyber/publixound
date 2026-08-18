import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-px py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-publixound.png"
              alt="PubliXound"
              width={473}
              height={440}
              className="h-16 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fog">
              Veranstaltungstechnik, Veranstaltungsplanung sowie Kommunikation und
              Werbung – aus der Mitte des Ruhrgebiets, für Ihre Veranstaltung.
            </p>
          </div>

          <nav aria-label="Footer-Navigation">
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-fog transition-colors hover:text-chalk"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
              Kontakt
            </h2>
            <address className="mt-5 space-y-3 not-italic text-sm text-fog">
              <p>
                <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-chalk">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-chalk">
                  {site.email}
                </a>
              </p>
              <p>
                {site.street}
                <br />
                {site.zip} {site.city}
              </p>
            </address>
          </div>
        </div>

        <div className="hairline mt-14 flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-fog/70">
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {[
              { href: "/impressum", label: "Impressum" },
              { href: "/datenschutz", label: "Datenschutzerklärung" },
              { href: "/agb", label: "AGB" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs text-fog transition-colors hover:text-chalk"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
