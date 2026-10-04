# Changelog

Download any version from the [Releases page](https://github.com/Gee2424/ctrldlogin/releases).

## 0.6.5


### New
- **Paid plans with Bitcoin** — Starter, Pro and Business, monthly or yearly, bought from **Settings → Billing** through a BTCPay Server checkout. Your plan switches on by itself once the payment confirms; renew early without losing days; switching plans credits unused time; 3-day grace period. See [Pricing](https://gee2424.github.io/ctrldlogin/pricing).
- **Team cookie sync** — share a team profile's cookies so whoever launches it starts signed in. Opt-in per profile, Owner/Admin only. See [Sharing Cookies](https://gee2424.github.io/ctrldlogin/teams#sharing-cookies).
- **Cookie import/export for stopped profiles** — auto-detects ctrldlogin JSON, Playwright state, Cookie-Editor/EditThisCookie and Netscape `cookies.txt`; export or import many profiles as one ZIP.
- **Logs** — live log viewer in **Settings → System**, with secrets redacted.
- **Redesigned sidebar and Teams page** — team switcher, team folders, members, shared profiles; rename and delete team folders from the sidebar.
- **Drag and drop** — drag profiles (or a whole selection) onto a folder to move them.

### Fixed
- An activated plan could be lost after restarting the app.
- Plans now re-check every 6 hours and end on the desktop when they expire (with a 7-day allowance when offline).
- **Deactivate license** now frees the device slot on your account, so you can move your plan to another computer.
- Teams no longer "disappear" when your sign-in session expires; the app renews it automatically.
- Bulk actions rejected a selection of exactly your plan's limit.
- Deleted profiles stayed visible in "All profiles" after moving to Trash.
- Folder menu actions (rename, select all, launch all, delete) did nothing.
- Moving a profile out of a folder didn't stick.
- Settings and theme reset on every launch of the desktop app.
- Scheduled cookie-export automations wrote empty files for stopped profiles.

### Security
- Team invite codes are only visible to Owners and Admins.
- Sign-in and sign-up are rate-limited.

---

## 0.6.1


The first release as **ctrldlogin**.

- New desktop app: Vue 3 interface, Tauri shell, real-time profile status
- **Extensions** — CRX/ZIP upload and Chrome Web Store import, per-profile assignment
- **Folders, templates, tags and notes**; full-text search; multi-select with bulk launch, stop, delete and proxy assignment
- **Teams** — share profiles with roles, per-person access, shared proxies and one-person-at-a-time locking
- **Automation** — rules on a schedule, an interval or profile events
- **Pause & resume**, **clone**, **Trash**, **activity log**
- Keyboard shortcuts and context menus
- Windows fix for the app failing to start with `python311.dll not found`

---

## 0.1.0


First version: profile management, CloakBrowser fingerprinting with platform spoofing, proxies with connectivity testing and WebRTC IP matching, cookie import/export, profile cloning and reset, tags and notes, session warm-up and fingerprint testing.

---

For issues or suggestions, use the [GitHub issue tracker](https://github.com/Gee2424/ctrldlogin/issues).
