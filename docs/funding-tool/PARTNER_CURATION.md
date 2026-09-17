# Curating validation partners (for the MVC team)

The partner matcher ships with **six fake placeholder entries**, each marked
`[EXAMPLE]`. They exist only so the tool runs during testing. The founder-facing
page shows a loud yellow warning while any of them are present.

**Delete them all before showing this to a founder.**

## The consent rule

Never list a real person or company unless they have agreed to it. Two levels:

- **Default (`intro_via_mvc: true`, `contact_public: false`)** — the founder sees
  the partner and can request an introduction, but MVC brokers it. This is the
  safe default and the one you should use for almost everyone. It also protects
  your relationships: nobody gets cold-emailed because they appeared in a tool.
- **Direct contact (`contact_public: true`)** — only for partners who explicitly
  agreed to be contacted directly. Then fill in the `contact` field.

## Adding a real partner

Edit `lib/partners.json`. Copy an existing block, remove `"is_example": true`,
and fill it in:

```json
{
  "id": "acme_clinic",
  "name": "Acme Family Clinic",
  "entity_type": "company",
  "partner_kind": ["customer", "pilot_site"],
  "industries": ["healthcare"],
  "personas": ["clinical", "operations"],
  "segment": "mid_market",
  "location": "Montreal",
  "intro_via_mvc": true,
  "contact_public": false,
  "contact": null,
  "blurb": "A three-site family clinic open to piloting patient-facing tools.",
  "status": "active",
  "last_reviewed": "2026-07-01"
}
```

## Getting the tags right

This is where matching lives or dies.

- **`industries`** is your partner's OWN industry, and it is what a founder's
  *customer industry* answer is matched against. A clinic is `healthcare`. Tag
  the partner by who they ARE, not who they sell to.
- **`personas`** are the roles this partner can credibly speak as. A clinic
  office manager is `operations`, a doctor is `clinical`. List all that apply.
- **`partner_kind`** decides which validation goal they serve:
  - `customer` → founders wanting to confirm the problem is real
  - `design_partner` → founders wanting hands-on product feedback
  - `pilot_site` → founders wanting to run a trial
  - `expert` → founders wanting advice
  - `channel` → distribution or resale
- Use `"any"` sparingly in industries and personas. A partner tagged `any`
  matches weakly against everything, which makes results mushy. Be specific.

## Set `status` to `paused`, not deleted

If a partner needs a break from introductions, set `"status": "paused"`. They
disappear from results but keep their history.

## Quarterly habit

Confirm each partner is still willing, still at the same organization, and still
tagged correctly. Update `last_reviewed`. A partner who has moved on, or who is
annoyed by a bad-fit intro, costs you a relationship that took years to build.
