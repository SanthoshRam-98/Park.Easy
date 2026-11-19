#!/usr/bin/env bash
# Creates labels, milestones and the starting issues so GitHub tracks the work.
# Run once from the repo root in Git Bash, after: gh auth login --web --git-protocol https
set -euo pipefail
command -v gh >/dev/null || { echo "Install GitHub CLI: https://cli.github.com"; exit 1; }

label() { gh label create "$1" --color "$2" --description "$3" --force >/dev/null; }
label operator 1d76db "Staff / lot operator features"
label driver 0e8a16 "Driver-facing features"
label owner fbca04 "Owner dashboard and listings"
label platform 5319e7 "Tenancy, auth, API, billing"
label infra 006b75 "CI, deploy, database, security"
label tech-debt d93f0b "Upgrades and cleanup"
label design c5def5 "Figma and UX"
label pilot b60205 "Field work with real lots"

milestone() { gh api repos/:owner/:repo/milestones -f title="$1" -f description="$2" >/dev/null 2>&1 || true; }
milestone "M0 Foundation" "Safe, modern, tracked base"
milestone "M1 Operator pilot" "One lot runs a full day on ParkEasy"
milestone "M2 Driver discovery" "Drivers find Live lots"
milestone "M3 Growth" "Events and private spaces"

issue() { gh issue create --title "$1" --body "$2" --label "$3" --milestone "$4" >/dev/null && echo "created: $1"; }

issue "Mark bin/* scripts executable and remove empty config/credentials.yml" \
 "bin/* are mode 100644, which breaks Linux CI and Docker. Run: git update-index --chmod=+x bin/rails bin/rake bin/setup bin/dev bin/docker-entrypoint bin/bundle. Also git rm config/credentials.yml. Done when CI runs bin scripts and no empty credentials file is tracked." \
 "infra,tech-debt" "M0 Foundation"
issue "Upgrade Ruby to 3.4 and Rails to 8.1 (remove unused devise-jwt)" \
 "Rails 7.1 and Ruby 3.1 are end-of-life. Delete the config.jwt block in devise.rb, bundle remove devise-jwt, bundle update rails devise, bin/rails app:update. Done when sign-in, sign-up and logout work and CI is green." \
 "tech-debt,infra" "M0 Foundation"
issue "Configure ActionMailer so password reset email is delivered" \
 "devise.rb still has the placeholder mailer_sender and no delivery method is configured. Done when a reset email arrives in production." \
 "platform" "M0 Foundation"
issue "Enable Content Security Policy and rate limiting (rack-attack)" \
 "CSP initializer is fully commented out. Throttle sign-in, sign-up and later OTP endpoints." \
 "infra" "M0 Foundation"
issue "Move production database to PostgreSQL" \
 "Production still points at SQLite. Add pg, update database.yml, document backup and restore." \
 "infra" "M0 Foundation"
issue "Phase 1 domain model and /api/v1 (organizations, sites, rate cards, parking sessions)" \
 "Add models, migrations, Fees::Calculator, API and tests from the phase 1 patch. Done when tests pass in CI." \
 "platform,operator" "M1 Operator pilot"
issue "Staff entry and exit screen (React page)" \
 "Mobile-first screen: pick site, enter plate and vehicle type, issue QR ticket, scan to exit, show amount, record cash or UPI." \
 "operator" "M1 Operator pilot"
issue "Offline queue and sync for the staff screen" \
 "PWA with a local queue that posts the same client UUIDs on reconnect. Clamp device clocks. Test duplicate and conflict cases." \
 "operator,platform" "M1 Operator pilot"
issue "UPI payments with idempotent webhooks (Razorpay or Cashfree)" \
 "UPI first, cash tracked. Reconcile cash and UPI per staff per day." \
 "platform,operator" "M1 Operator pilot"
issue "Owner dashboard: daily summary, staff collections, Excel export" \
 "Uses GET /api/v1/sites/:id/summary. Add revenue by day and cash discrepancy alerts." \
 "owner" "M1 Operator pilot"
issue "Pilot: onboard 5 lots in one city and measure daily use" \
 "Field work: visit lots, train staff, compare paper vs digital revenue. Success: 80%+ daily use for 30 days." \
 "pilot" "M1 Operator pilot"
issue "Driver page showing Live vs Listed lots" \
 "Mobile web first. Label each lot Live (staff recorded movement in the last 30 minutes) or Listed." \
 "driver" "M2 Driver discovery"
issue "Phone OTP login (matches the Figma flow)" \
 "Add SMS OTP provider, rate limiting and resend rules. Keep email login for owners." \
 "platform,driver" "M2 Driver discovery"
issue "Tamil UI (i18n)" \
 "Move copy to Rails/React i18n files. Tamil first, then Hindi. Staff screen first." \
 "platform" "M2 Driver discovery"
issue "Design: UPI-first payment, failure and empty states, on-site flow" \
 "Figma has no UPI, no full/offline/payment-failed states, and no scan-in/scan-out/extend screens." \
 "design" "M2 Driver discovery"
issue "Event parking mode (festival and market lots)" \
 "Create many temporary lots, assign staff, event-close report." \
 "operator,owner" "M3 Growth"
issue "Owner-priced private spaces with cash on exit" \
 "Owner chooses one billing unit. Check-in confirmed by owner, cash received confirmed by both. Needs a listing fee or wallet because commission cannot be taken from cash. Prepay weekly and monthly spaces." \
 "owner,driver" "M3 Growth"
echo "Done."
