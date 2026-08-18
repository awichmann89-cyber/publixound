"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full rounded-xl border border-line bg-ink px-4 py-3.5 text-sm text-chalk placeholder:text-fog/60 transition-colors focus:border-brand focus:outline-none";
const label = "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-fog";

export default function Kontakt() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [mehrtaegig, setMehrtaegig] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Unbekannter Fehler");
      setStatus("ok");
      setMessage("Vielen Dank! Ihre Anfrage ist bei uns eingegangen – wir melden uns zeitnah.");
      form.reset();
      setMehrtaegig(false);
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error && err.message
          ? `Das hat leider nicht geklappt: ${err.message}. Schreiben Sie uns gerne direkt an ${site.email}.`
          : `Das hat leider nicht geklappt. Schreiben Sie uns gerne direkt an ${site.email}.`,
      );
    }
  }

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border-t border-line bg-ink-soft py-24 md:py-32"
    >
      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Kontakt</p>
            <h2 className="headline mt-6 text-[clamp(2.25rem,5vw,3.5rem)]">
              Zögern Sie nicht, mit uns Kontakt aufzunehmen.
            </h2>
            <p className="prose-px mt-7">
              <span className="block text-fog">
                Erzählen Sie uns von Ihrer Veranstaltung – wir melden uns mit einer
                ersten Einschätzung und einem passenden Vorschlag zurück.
              </span>
            </p>

            <dl className="mt-10 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              <div className="bg-ink p-6">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                  Telefon
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="font-display text-lg font-bold tracking-tight text-chalk transition-colors hover:text-brand"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="bg-ink p-6">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                  E-Mail
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-display text-lg font-bold tracking-tight text-chalk transition-colors hover:text-brand"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="bg-ink p-6">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                  Adresse
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-display text-lg font-bold leading-snug tracking-tight text-chalk transition-colors hover:text-brand"
                  >
                    {site.street}
                    <br />
                    {site.zip} {site.city}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-line bg-ink p-6 md:p-9"
              noValidate={false}
            >
              {/* Honeypot gegen Spam-Bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Bitte nicht ausfüllen</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="vorname">
                    Vorname *
                  </label>
                  <input id="vorname" name="vorname" required autoComplete="given-name" className={field} placeholder="Max" />
                </div>
                <div>
                  <label className={label} htmlFor="nachname">
                    Nachname *
                  </label>
                  <input id="nachname" name="nachname" required autoComplete="family-name" className={field} placeholder="Mustermann" />
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    E-Mail-Adresse *
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="max@beispiel.de" />
                </div>
                <div>
                  <label className={label} htmlFor="telefon">
                    Telefon
                  </label>
                  <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={field} placeholder="0208 ..." />
                </div>
                <div className="sm:col-span-2">
                  <label className={label} htmlFor="betreff">
                    Betreff *
                  </label>
                  <input id="betreff" name="betreff" required className={field} placeholder="Anfrage Sommerfest 2026" />
                </div>
              </div>

              <fieldset className="mt-7 border-t border-line pt-7">
                <legend className="sr-only">Zeitraum der Veranstaltung</legend>
                <p className={label}>Zeitraum der Veranstaltung</p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { v: "eintaegig", l: "Eintägig" },
                    { v: "mehrtaegig", l: "Mehrtägig" },
                  ].map((o) => (
                    <label key={o.v} className="flex cursor-pointer items-center gap-2.5 text-sm text-chalk">
                      <input
                        type="radio"
                        name="zeitraum"
                        value={o.v}
                        defaultChecked={o.v === "eintaegig"}
                        onChange={() => setMehrtaegig(o.v === "mehrtaegig")}
                        className="h-4 w-4 accent-[var(--color-brand)]"
                      />
                      {o.l}
                    </label>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="von">
                      {mehrtaegig ? "Von" : "Datum"}
                    </label>
                    <input id="von" name="von" type="date" className={field} />
                  </div>
                  {mehrtaegig && (
                    <div>
                      <label className={label} htmlFor="bis">
                        Bis
                      </label>
                      <input id="bis" name="bis" type="date" className={field} />
                    </div>
                  )}
                </div>
              </fieldset>

              <div className="mt-7">
                <label className={label} htmlFor="nachricht">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  required
                  rows={6}
                  className={`${field} resize-y`}
                  placeholder="Art der Veranstaltung, Location, erwartete Gästezahl, benötigte Technik ..."
                />
              </div>

              <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-fog">
                <input
                  type="checkbox"
                  name="einwilligung"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-brand)]"
                />
                <span>
                  Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage
                  verarbeitet werden. Details in der{" "}
                  <a href="/datenschutz" className="text-chalk underline underline-offset-4 hover:text-brand">
                    Datenschutzerklärung
                  </a>
                  . *
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 w-full rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-bright disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Wird gesendet …" : "Anfrage absenden"}
              </button>

              {message && (
                <p
                  role="status"
                  className={`mt-5 rounded-xl border p-4 text-sm ${
                    status === "ok"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                      : "border-brand/50 bg-brand/10 text-chalk"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="mt-4 text-xs leading-relaxed text-fog/70">
                * Pflichtfelder. Alternativ erreichen Sie uns telefonisch unter{" "}
                <a href={`tel:${site.phoneHref}`} className="underline underline-offset-2">
                  {site.phone}
                </a>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
