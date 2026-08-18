import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage" }, { status: 400 });
  }

  // Honeypot: von Bots ausgefüllt -> stillschweigend als Erfolg quittieren.
  if (str(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const vorname = str(body.vorname);
  const nachname = str(body.nachname);
  const email = str(body.email);
  const betreff = str(body.betreff);
  const nachricht = str(body.nachricht);
  const telefon = str(body.telefon);
  const zeitraum = str(body.zeitraum) === "mehrtaegig" ? "Mehrtägig" : "Eintägig";
  const von = str(body.von);
  const bis = str(body.bis);

  if (!vorname || !nachname || !email || !betreff || !nachricht) {
    return NextResponse.json(
      { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Bitte prüfen Sie Ihre E-Mail-Adresse" },
      { status: 400 },
    );
  }

  if (!body.einwilligung) {
    return NextResponse.json(
      { ok: false, error: "Bitte bestätigen Sie die Einwilligung zur Datenverarbeitung" },
      { status: 400 },
    );
  }

  const lines = [
    ["Name", `${vorname} ${nachname}`],
    ["E-Mail", email],
    ["Telefon", telefon || "–"],
    ["Betreff", betreff],
    ["Zeitraum", `${zeitraum}${von ? ` – von ${von}` : ""}${bis ? ` bis ${bis}` : ""}`],
  ];

  const text =
    lines.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nNachricht:\n${nachricht}\n`;

  const html = `<table style="font-family:system-ui,sans-serif;font-size:14px">
${lines
  .map(
    ([k, v]) =>
      `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(
        v,
      )}</strong></td></tr>`,
  )
  .join("\n")}
</table>
<p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(
    nachricht,
  )}</p>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM ?? "PubliXound Website <onboarding@resend.dev>";

  // Ohne konfigurierten Mailversand: Anfrage nur protokollieren, damit die
  // Seite auch vor dem Einrichten der Env-Variablen funktioniert.
  if (!apiKey) {
    console.warn("[kontakt] RESEND_API_KEY fehlt – Anfrage wurde nicht per Mail versendet.");
    console.info("[kontakt] Eingegangene Anfrage:\n" + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website-Anfrage: ${betreff}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[kontakt] Resend-Fehler", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Der Versand ist fehlgeschlagen" },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[kontakt] Netzwerkfehler", err);
    return NextResponse.json(
      { ok: false, error: "Der Versand ist fehlgeschlagen" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
