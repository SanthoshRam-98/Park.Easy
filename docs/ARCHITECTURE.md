# Architecture

## Shape
One Rails app serves everything. React pages are "islands": each Rails view renders a root element
and `app/javascript/react/src/index.js` mounts the matching component. The JSON API lives under
`/api/v1` and is what the staff and driver screens call. Authentication is Devise with a
cookie session and the Rails CSRF token (`/csrf_token` and the `csrf-token` meta tag).

## Domain model
```
Organization 1-* Membership *-1 User          role: staff | manager | owner
Organization 1-* Site                         kind: operator_lot | event | private_space
Site 1-* RateCard                             billing_unit: hourly|daily|weekly|monthly, versioned
Site 1-* ParkingSession *-1 RateCard          the QR ticket: entry -> exit -> payment
```
- `Fees::Calculator` is a pure function: minutes (rounded up) minus grace, divided into billing
  units (part unit = full unit), optional hourly daily cap. Money is integer paise.
- `ParkingSession` has a unique `client_uuid` so offline retries cannot duplicate, and a
  database-level rule of one active session per plate per site.
- A site is **Live** when staff recorded movement in the last 30 minutes; otherwise **Listed**.
  Drivers see the difference, which is what makes availability trustworthy.

## Request path (staff exit)
React staff screen -> `PATCH /api/v1/sites/:id/parking_sessions/:ticket/checkout` ->
`BaseController` (login + CSRF) -> `Site.accessible_to(current_user)` -> `ParkingSession#close!`
(row lock, idempotent) -> JSON.

## Environments
| | Database | Notes |
|---|---|---|
| development / test | SQLite | `bin/dev`, `bundle exec rails test` |
| production | PostgreSQL (planned) | Secrets via host secret store, `RAILS_MASTER_KEY` |

## Not built yet
Offline queue (PWA), UPI payments and webhooks, owner dashboard UI, driver discovery,
phone OTP login, Tamil UI, event mode, owner-priced private spaces.
