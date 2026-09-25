# Inquiry form

The form lives on `/availability` and asks for name, email, phone, event type, preferred date, guest count, and a message. `trailsidepa@gmail.com` is printed on the form. Submitting requests a date. It does not reserve, hold, or charge, and it does not open the visitor’s email app.

## Delivery

Submit POSTs the fields as JSON to FormSubmit:

`https://formsubmit.co/ajax/trailsidepa@gmail.com`

The subject is “TrailSide date inquiry”. Reply-to is the email the guest typed. The first time this address is used, FormSubmit emails `trailsidepa@gmail.com` a single activation link. After that link is clicked, later inquiries arrive in the inbox on their own.

## Pluggable endpoint

Leave `PUBLIC_FORM_ENDPOINT` empty to keep FormSubmit. Set it only to replace that URL. The script `POST`s JSON with an `Accept: application/json` header. Field names:

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
| `_honey` | Honeypot. Leave it empty. |

### Formspree

1. Create a form aimed at `trailsidepa@gmail.com`.
2. Set `PUBLIC_FORM_ENDPOINT` to `https://formspree.io/f/yourFormId`.
3. Redeploy. Astro inlines `PUBLIC_` variables at build time, so a change requires a new build.

### Cloudflare Worker

Point `PUBLIC_FORM_ENDPOINT` at a Worker route you control, for example `https://trailside.example/api/inquiry`. The Worker should accept the same field names, forward them to `trailsidepa@gmail.com`, and return a 2xx JSON body. If the endpoint fails, the page says so and leaves the form filled in.

Do not commit a live form URL that contains a secret. Formspree form IDs are public by design; email API tokens are not, and belong on the Worker, not in this static site.
