# Working on ParkEasy

## Flow (trunk-based, one person or a small team)
1. `main` is always deployable. Protect it: pull request required, CI `test` must pass, no force-push.
2. Start from an issue. Branch from `main`: `feat/staff-entry-screen`, `fix/otp-resend`, `chore/upgrade-rails`.
3. Keep branches short (days, not weeks) and PRs small (one idea, ideally under ~400 changed lines).
4. Squash-merge. The PR title becomes the commit message, so write it well.
5. Delete the branch after merge. Tag releases `v0.1.0`, `v0.2.0`, ... and update `CHANGELOG.md`.

## Commit and PR titles
`type: short summary` where type is `feat`, `fix`, `chore`, `docs`, `test`, `refactor`.
Example: `feat: staff can close a parking session with cash or UPI`.

## Rules that protect the product
- Money is integer paise. Times are stored in UTC and shown in the site's time zone.
- Entry, exit and payment endpoints must be safe to retry (client-generated UUIDs).
- Never edit a merged migration; add a new one. Rate cards are versioned, not edited.
- Every site lookup goes through the signed-in user's organizations (tenant isolation).
- No secrets in git. `config/master.key` and `.env*` stay local.

## Checks before opening a PR
```
bundle exec rails test
bundle exec brakeman -q
```

## Git over HTTPS (Windows)
Git for Windows ships with Git Credential Manager. `git push` opens a browser sign-in the first
time and then remembers it. If prompted for a password in a terminal, use a Personal Access
Token (fine-grained, repository access to this repo, Contents: read and write), never your account password.
