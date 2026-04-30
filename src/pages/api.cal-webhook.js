/**
 * Cal.com Booking Webhook — Resource Route (no UI)
 *
 * Receives BOOKING_CREATED events from Cal.com, then:
 *   1. Upserts the booker as a HubSpot contact
 *   2. Posts a notification to #the-front-desk in Slack
 *
 * Env vars required:
 *   COH_CAL_COM_WEBHOOK_SECRET — shared secret for verifying Cal.com payloads
 *   COH_HUBSPOT_API_KEY        — HubSpot private-app token (CRM write scope)
 *   COH_SLACK_WEBHOOK_URL      — Slack incoming-webhook URL for #the-front-desk
 */

import { createHmac } from "node:crypto";

// ── Helpers ──────────────────────────────────────────────────────────

function verifyCalSignature(payload, signature, secret) {
  if (!secret || !signature) return !secret; // skip verification if no secret configured
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  return expected === signature;
}

async function upsertHubSpotContact({ email, firstName, lastName, eventType, startTime }) {
  const apiKey = process.env.COH_HUBSPOT_API_KEY;
  if (!apiKey) {
    console.warn("[cal-webhook] COH_HUBSPOT_API_KEY not set — skipping CRM upsert");
    return null;
  }

  const properties = {
    email,
    firstname: firstName || "",
    lastname: lastName || "",
    lifecyclestage: "lead",
    hs_lead_status: "NEW",
    notes_last_contacted: new Date().toISOString(),
  };

  // HubSpot v3 — create or update contact by email
  const res = await fetch(
    "https://api.hubapi.eu/crm/v3/objects/contacts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ properties }),
    }
  );

  if (res.status === 409) {
    // Contact exists — extract ID from conflict response and update
    const conflict = await res.json();
    const existingId = conflict.message?.match(/Existing ID: (\d+)/)?.[1];
    if (existingId) {
      const updateRes = await fetch(
        `https://api.hubapi.eu/crm/v3/objects/contacts/${existingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            properties: {
              notes_last_contacted: new Date().toISOString(),
              hs_lead_status: "IN_PROGRESS",
            },
          }),
        }
      );
      return { action: "updated", id: existingId, ok: updateRes.ok };
    }
  }

  if (!res.ok) {
    const err = await res.text();
    console.error("[cal-webhook] HubSpot create failed:", err);
    return { action: "error", error: err };
  }

  const created = await res.json();
  return { action: "created", id: created.id };
}

async function notifySlack({ name, email, eventType, startTime, notes }) {
  const webhookUrl = process.env.COH_SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[cal-webhook] COH_SLACK_WEBHOOK_URL not set — skipping Slack notification");
    return null;
  }

  const eventLabels = {
    "25min": "Digital Transformation Survivors Podcast Introduction (25 min)",
    "15min": "15 Minute Meeting",
    "book-a-conversation": "Book a Conversation",
    "secret": "Secret Meeting",
  };

  const label = eventLabels[eventType] || eventType;
  const when = startTime
    ? new Date(startTime).toLocaleString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/London",
      })
    : "TBC";

  const payload = {
    username: "Administrator",
    icon_emoji: ":calendar:",
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "New Cal.com Booking", emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Event:*\n${label}` },
          { type: "mrkdwn", text: `*When:*\n${when}` },
          { type: "mrkdwn", text: `*Name:*\n${name || "—"}` },
          { type: "mrkdwn", text: `*Email:*\n${email || "—"}` },
        ],
      },
      ...(notes
        ? [
            {
              type: "section",
              text: { type: "mrkdwn", text: `*Notes:*\n${notes}` },
            },
          ]
        : []),
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Source: coherence.digital | <https://app.cal.com/bookings|View in Cal.com>`,
          },
        ],
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return { ok: res.ok, status: res.status };
}

// ── Route action (POST /api/cal-webhook) ─────────────────────────────

export async function action({ request }) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const rawBody = await request.text();

  // Verify Cal.com signature
  const signature = request.headers.get("x-cal-signature-256") || "";
  if (!verifyCalSignature(rawBody, signature, process.env.COH_CAL_COM_WEBHOOK_SECRET)) {
    console.warn("[cal-webhook] Invalid signature");
    return new Response("Unauthorized", { status: 401 });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  // Only process booking creation events
  const triggerEvent = payload.triggerEvent;
  if (triggerEvent !== "BOOKING_CREATED") {
    return Response.json({ ok: true, skipped: triggerEvent });
  }

  const booking = payload.payload || {};
  const attendee = booking.attendees?.[0] || {};
  const eventSlug = booking.eventType?.slug || booking.type?.slug || "";

  const name = attendee.name || "";
  const email = attendee.email || "";
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");
  const startTime = booking.startTime;
  const notes = booking.responses?.notes?.value || booking.description || "";

  // Run CRM upsert and Slack notification in parallel
  const [hubspotResult, slackResult] = await Promise.all([
    upsertHubSpotContact({ email, firstName, lastName, eventType: eventSlug, startTime }).catch(
      (err) => {
        console.error("[cal-webhook] HubSpot error:", err);
        return { action: "error", error: String(err) };
      }
    ),
    notifySlack({ name, email, eventType: eventSlug, startTime, notes }).catch((err) => {
      console.error("[cal-webhook] Slack error:", err);
      return { ok: false, error: String(err) };
    }),
  ]);

  console.log("[cal-webhook] Processed booking:", {
    event: eventSlug,
    email,
    hubspot: hubspotResult,
    slack: slackResult,
  });

  return Response.json({ ok: true, hubspot: hubspotResult, slack: slackResult });
}
