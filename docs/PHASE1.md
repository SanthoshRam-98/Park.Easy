# ParkEasy phase 1: operator mode (staff entry/exit + owner summary)

Goal: a parking lot can run a full day on ParkEasy with no paper, and every
lot that does so produces verified ("Live") availability for the driver app.

## What this patch adds
- Tenancy: `Organization` -> `Membership` (owner/manager/staff) -> `Site`.
- `RateCard`: hourly/daily/weekly/monthly, grace minutes, optional daily cap, versioned.
  The same card type will price owner-set private spaces later (billing unit chosen by the owner).
- `ParkingSession`: the QR ticket. Unique client UUID (offline retries are safe),
  one active session per plate per site (database-enforced), fee frozen at exit.
- `Fees::Calculator`: pure, tested fee rule (integer paise).
- JSON API under `/api/v1` (sites, summary, parking sessions: create, quote, checkout).
- `rake parkeasy:demo` for a demo org, lot and owner login.
- Fixes: broken scaffold tests (wrong route helpers, colliding blank-email fixtures).

## API (cookie login + CSRF token, as the existing React pages already do)
| Method | Path | Purpose |
|---|---|---|
| GET | /api/v1/sites | your sites with `live` and `availability` |
| GET | /api/v1/sites/:id/summary?date=YYYY-MM-DD | entries, exits, money by method and staff |
| POST | /api/v1/sites/:site_id/parking_sessions | entry: client_uuid, vehicle_number, vehicle_type |
| GET | .../parking_sessions/:ticket_code/quote | amount due now, changes nothing |
| PATCH | .../parking_sessions/:ticket_code/checkout | exit: payment_method cash/upi/pending |

## Fee rule
minutes (rounded up) minus grace = billable. Units = ceil(billable / unit). Fee = units x rate.
Hourly + daily cap: each full 24h billed at the cap, remainder at the normal rate, never above the cap.
Example: Rs 20/h, 10 min grace: 70 min -> Rs 20, 71 min -> Rs 40.

## Not in this patch (next slices)
Staff screen (React page on the existing Rails app), offline sync queue, UPI via a payment
provider, driver discovery page, owner dashboard UI, phone OTP login, Tamil UI.
