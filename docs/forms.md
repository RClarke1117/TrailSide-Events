# Inquiry form

The form lives on `/inquire` and asks for name, email, phone, event type, preferred date, guest count, and a message. `trailsidepa@gmail.com` is printed on the form. Submitting requests a date. It does not reserve, hold, or charge.

## Mailto fallback

If `PUBLIC_FORM_ENDPOINT` is unset, submit opens the visitor’s email app:

`mailto:trailsidepa@gmail.com`

The subject is “TrailSide date inquiry”. The body includes every field. A status line tells the visitor to send the same details manually if the mail app does not open.

## Pluggable endpoint

Set `PUBLIC_FORM_ENDPOINT` in `.env` locally and in the Cloudflare Pages project for production. The form then `POST`s `multipart/form-data` with an `Accept: application/json` header. Field names:

| Name | Notes |
| --- | --- |
| `name` | Required |
| `email` | Required. Also sent as `_replyto` for Formspree. |
| `phone` | Required |
| `event_type` | Required slug, such as `intimate-wedding` |
| `preferred_date` | `YYYY-MM-DD`. Filled when an open calendar day is clicked. |
| `guest_count` | Optional |
| `message` | Required |
| `_subject` | Added by the script: “TrailSide date inquiry” |
| `company_website` | Honeypot. Leave it empty. |

### Formspree

1. Create a form aimed at `trailsidepa@gmail.com`.
2. Set `PUBLIC_FORM_ENDPOINT` to `https://formspree.io/f/yourFormId`.
3. Redeploy. Astro inlines `PUBLIC_` variables at build time, so a change requires a new build.

### Cloudflare Worker

Point `PUBLIC_FORM_ENDPOINT` at a Worker route you control, for example `https://trailside.example/api/inquiry`. The Worker should accept the same field names, forward them to `trailsidepa@gmail.com`, and return a 2xx JSON body. If the endpoint fails, the page falls back to the mailto link.

Do not commit a live form URL that contains a secret. Formspree form IDs are public by design; email API tokens are not, and belong on the Worker, not in this static site.
