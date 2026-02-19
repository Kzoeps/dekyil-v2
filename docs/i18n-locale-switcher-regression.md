## Locale Switcher Regression Checklist

Purpose: verify locale switching preserves route context and accessibility labels on desktop and mobile.

### Desktop

1. Root route switching

- Start at `https://<host>/en`.
- Locate the locale switcher in the main nav.
- Click `DE`.
- Pass: browser navigates to `https://<host>/de`.
- Fail: any other path or a full reload to a different route.

2. Nested route switching

- Start at `https://<host>/en/rooms/suite`.
- Click `DE` in the locale switcher.
- Pass: browser navigates to `https://<host>/de/rooms/suite`.
- Fail: route resets to `/de` or drops the nested path.

3. Query + hash preservation

- Start at `https://<host>/en/rooms/suite?ref=summer#details`.
- Click `DE`.
- Pass: browser navigates to `https://<host>/de/rooms/suite?ref=summer#details`.
- Fail: query or hash is missing, changed, or re-ordered.

4. Active locale semantics

- Start at `https://<host>/en`.
- Inspect the `EN` locale link element.
- Pass: `EN` has `aria-current="page"` and is not interactive (no click navigation).
- Fail: `EN` is clickable or missing `aria-current="page"`.

5. Localized accessibility labels

- Start at `https://<host>/en`.
- Inspect the locale switcher container label and each locale link label.
- Pass: labels are English (example: "Language" container label and per-link labels like "Switch language to German").
- Switch to `https://<host>/de` using the switcher.
- Pass: labels are German equivalents (no English strings remain).
- Fail: labels remain in the previous locale or are hardcoded in one language.

### Mobile

1. Root route switching

- Start at `https://<host>/en` with the mobile nav open.
- Tap `DE` in the locale switcher.
- Pass: browser navigates to `https://<host>/de`.
- Fail: any other path or route.

2. Nested route switching

- Start at `https://<host>/en/rooms/suite`.
- Tap `DE`.
- Pass: browser navigates to `https://<host>/de/rooms/suite`.
- Fail: nested path drops or resets.

3. Query + hash preservation

- Start at `https://<host>/en/rooms/suite?ref=summer#details`.
- Tap `DE`.
- Pass: browser navigates to `https://<host>/de/rooms/suite?ref=summer#details`.
- Fail: query or hash missing or altered.

4. Active locale semantics

- Start at `https://<host>/de` with the mobile nav open.
- Inspect the `DE` locale link element.
- Pass: `DE` has `aria-current="page"` and is not interactive.
- Fail: `DE` is clickable or missing `aria-current="page"`.

5. Localized accessibility labels

- Start at `https://<host>/en` with the mobile nav open.
- Inspect the locale switcher container label and each locale link label.
- Pass: labels are English.
- Switch to `https://<host>/de`.
- Pass: labels are German equivalents.
- Fail: labels do not change with locale.
