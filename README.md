# ParkEasy

[![CI](https://github.com/SanthoshRam-98/Park.Easy/actions/workflows/ci.yml/badge.svg)](https://github.com/SanthoshRam-98/Park.Easy/actions/workflows/ci.yml)

Make parking easier for anyone, anywhere in India. ParkEasy starts as **operating software for
parking lots** (entry, exit, QR ticket, UPI/cash, staff, reports, offline-first). Lots that run on
it produce *verified* availability, which powers driver discovery. Later: event parking and
owner-priced private spaces.

- Strategy and roadmap: [docs/ROADMAP.md](docs/ROADMAP.md)
- How the code fits together: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- How to contribute: [CONTRIBUTING.md](CONTRIBUTING.md)
- Decisions and why: [docs/DECISIONS.md](docs/DECISIONS.md)

## Stack
Ruby on Rails (API + server pages), React 18 pages bundled with esbuild, Devise auth, Hotwire,
Bootstrap. SQLite in development. PostgreSQL is the production target.

## Run it locally (Windows, PowerShell or Git Bash)
```
git clone https://github.com/SanthoshRam-98/Park.Easy.git
cd Park.Easy
bundle install
yarn install
bin/rails db:setup
bin/dev            # Rails + JS + CSS watchers (Procfile.dev)
```
Open http://localhost:3000. Run the checks with `bundle exec rails test`.

## Repository map
| Path | What lives there |
|---|---|
| `app/models`, `app/services` | Domain: organizations, sites, rate cards, parking sessions, fee rules |
| `app/controllers/api/v1` | JSON API used by the staff and driver screens |
| `app/javascript/react` | React pages (one root element per Rails page) |
| `db/migrate` | Schema history. Never edit a migration that has been merged |
| `docs/` | Architecture, roadmap, decisions |
| `.github/` | CI, issue and PR templates, Dependabot |

## Status
Pre-launch. Progress is tracked in [GitHub Issues](../../issues) and
[Milestones](../../milestones). Nothing is "done" until it is merged with CI green.
