# Decisions

Short records. Add a new entry instead of rewriting an old one.

## 001: One repository, not three (2026-11)
`Park.Easy-Rails` and `Park.Easy-React` were August 2024 scaffolds. All real work lives in
`Park.Easy`, where React is bundled into Rails with esbuild. Splitting would add version-skew and
double deploys with no benefit for a small team. The two old repos are archived.

## 002: Operator software first, marketplace second (2026-11)
Availability data must be real before drivers can trust it. Lots that run entry/exit on ParkEasy
create that data. Driver discovery follows once there are Live lots in one city.

## 003: Money in integer paise; times in UTC (2026-11)
Avoids rounding errors and time zone bugs in billing.

## 004: Cash-on-exit private spaces are a later feature (2026-11)
The owner picks one billing unit (hourly, daily, weekly or monthly). Commission cannot be taken
from cash, so a listing fee or prepaid owner wallet is needed first. Weekly and monthly spaces
should be paid up front.
