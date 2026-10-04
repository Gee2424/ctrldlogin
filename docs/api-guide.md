# Local API

ctrldlogin's interface talks to a local REST + WebSocket API, and you can use the same API to script the app — for example to launch profiles from your own tools and drive them with Playwright or Puppeteer.

- **Address:** the API listens only on your own computer (`127.0.0.1`). In the desktop app the port is picked at startup; in a development run it is `7331`.
- **Interactive docs:** open `/docs` (Swagger UI) or `/redoc` on the same address for every endpoint with its request and response schemas.
- **Format:** JSON in and out. Errors use standard HTTP status codes with a `detail` message.
- **Plan limits apply** — e.g. creating more profiles than your plan allows returns `403`.

## Driving a profile with Playwright

Launch a profile, then connect to its browser over CDP:

```python
import requests
from playwright.sync_api import sync_playwright

API = "http://127.0.0.1:7331/api"          # use the desktop app's port
requests.post(f"{API}/profiles/client-a/launch").raise_for_status()
ws = requests.get(f"{API}/profiles/client-a/cdp").json()   # CDP connection details

with sync_playwright() as p:
    browser = p.chromium.connect_over_cdp(ws["cdp_ws_url"] or ws["cdp_http_url"])
    page = browser.contexts[0].pages[0]
    page.goto("https://browserscan.net")
```

## Profiles

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/profiles` | List all profiles with current status |
| `POST` | `/api/profiles` | Create a new profile |
| `POST` | `/api/profiles/batch/delete` | Delete multiple profiles |
| `POST` | `/api/profiles/batch/launch` | Launch several profiles |
| `POST` | `/api/profiles/batch/proxy` | Assign or remove proxy from multiple profiles |
| `POST` | `/api/profiles/batch/stop` | Stop several running profiles |
| `POST` | `/api/profiles/batch/tag` | Add or remove tags on multiple profiles |
| `GET` | `/api/profiles/consistency` | Check that saved profiles and their data folders match |
| `POST` | `/api/profiles/consistency/cleanup` | Repair mismatches between saved profiles and data folders |
| `POST` | `/api/profiles/cookies/export-zip` | Bundle several profiles' cookies into one ZIP (one file each + manifest.json) |
| `POST` | `/api/profiles/cookies/import-zip` | Import a cookie ZIP, matching each file to the profile of the same name |
| `GET` | `/api/profiles/search` | Search profiles by name, notes, tags, or proxy label using FTS5 |
| `GET` | `/api/profiles/trash` | List all profiles in trash |
| `DELETE` | `/api/profiles/trash` | Permanently delete all trashed profiles |
| `GET` | `/api/profiles/{name}` | Get a single profile by name |
| `PUT` | `/api/profiles/{name}` | Update an existing profile |
| `DELETE` | `/api/profiles/{name}` | Delete a profile |
| `GET` | `/api/profiles/{name}/activity` | Get profile activity log |
| `GET` | `/api/profiles/{name}/cdp` | Return CDP WebSocket URL for a running profile |
| `POST` | `/api/profiles/{name}/clone` | Clone an existing profile |
| `GET` | `/api/profiles/{name}/cookies/export` | Export a profile's cookies |
| `POST` | `/api/profiles/{name}/cookies/import` | Import cookies into a profile |
| `GET` | `/api/profiles/{name}/cookies/status` | How many cookies this profile has right now, without exporting them |
| `GET` | `/api/profiles/{name}/extensions` | List all extensions assigned to a profile |
| `POST` | `/api/profiles/{name}/extensions` | Assign an extension to a profile |
| `PUT` | `/api/profiles/{name}/extensions/{ext_id}` | Enable or disable an extension on a profile |
| `DELETE` | `/api/profiles/{name}/extensions/{ext_id}` | Unassign an extension from a profile |
| `POST` | `/api/profiles/{name}/fingerprint-test` | Open fingerprint testing URL in the running profile via CDP |
| `POST` | `/api/profiles/{name}/launch` | Launch a profile (tests its proxy first) |
| `POST` | `/api/profiles/{name}/pause` | Pause a running profile - save session and stop browser |
| `POST` | `/api/profiles/{name}/reset` | Reset profile data (wipe Chromium data directory) |
| `POST` | `/api/profiles/{name}/restore` | Restore profile from trash |
| `POST` | `/api/profiles/{name}/resume` | Resume a paused profile - restore session and launch browser |
| `POST` | `/api/profiles/{name}/stop` | Stop a running profile |
| `PUT` | `/api/profiles/{name}/trash` | Move profile to trash (soft delete) |

## Proxies

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/proxies` | List all proxies |
| `POST` | `/api/proxies` | Create a new proxy |
| `POST` | `/api/proxies/bulk-import` | Import multiple proxies from a text string |
| `PUT` | `/api/proxies/{pid}` | Update an existing proxy |
| `DELETE` | `/api/proxies/{pid}` | Delete a proxy |
| `POST` | `/api/proxies/{pid}/test` | Test proxy connectivity and resolve external IP |

## Folders

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/folders` | List all folders with profile counts |
| `POST` | `/api/folders` | Create a new folder |
| `GET` | `/api/folders/{folder_id}` | Get a single folder by ID |
| `PUT` | `/api/folders/{folder_id}` | Update folder name or order |
| `DELETE` | `/api/folders/{folder_id}` | Delete a folder. Profiles will have folder_id set to NULL |

## Templates

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/templates` | List all templates |
| `POST` | `/api/templates` | Save current fingerprint config as a template |
| `GET` | `/api/templates/{template_id}` | Get a single template by ID |
| `DELETE` | `/api/templates/{template_id}` | Delete a template |

## Extensions

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/extensions` | List all extensions with profile assignment count |
| `GET` | `/api/extensions/downloads/active` | Get list of extension IDs currently being downloaded |
| `POST` | `/api/extensions/import-from-store` | Download extension from Chrome Web Store with progress reporting |
| `POST` | `/api/extensions/upload` | Upload and unpack a CRX or ZIP file with progress reporting |
| `DELETE` | `/api/extensions/{ext_id}` | Delete extension from library (cascades to all profiles) |
| `GET` | `/api/extensions/{ext_id}/icon` | Serve extension icon from _meta cache |

## Automation

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/automation/engine` | Get Engine Status |
| `POST` | `/api/automation/engine` | Set Engine Status |
| `GET` | `/api/automation/rules` | List Rules |
| `POST` | `/api/automation/rules` | Create Rule |
| `PUT` | `/api/automation/rules/{rule_id}` | Update Rule |
| `DELETE` | `/api/automation/rules/{rule_id}` | Delete Rule |
| `POST` | `/api/automation/rules/{rule_id}/run` | Run Rule Once |
| `GET` | `/api/automation/runs` | List Runs |

## License

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/license` | Get current license status and feature flags |
| `DELETE` | `/api/license` | Deactivate the current license and revert to free tier |
| `POST` | `/api/license/activate` | Activate a license key against the signed-in account |
| `POST` | `/api/license/validate` | Re-check the active license with the license server now |

## Billing

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/billing/checkout-url` | Create a BTCPay checkout (crypto) for a tier; returns the hosted payment URL |
| `GET` | `/api/billing/status` | Plan, paid-until date and license key — polled after opening checkout |

## System

| Method | Path | What it does |
|---|---|---|
| `GET` | `/api/running` | Get detailed info for currently running profiles |
| `GET` | `/api/system` | Get system information including CloakBrowser binary status |
| `POST` | `/api/system/check-updates` | Check for CloakBrowser updates |
| `POST` | `/api/system/clear-cache` | Clear CloakBrowser cache |
| `POST` | `/api/system/client-log` | Record an error from the UI so it shows up in the log viewer and diagnostics |
| `GET` | `/api/system/diagnostics` | A ZIP of logs and system info to send when something isn't working |
| `GET` | `/api/system/logs` | Recent log entries for the in-app log viewer |
| `GET` | `/health` | Health check endpoint for monitoring and sidecar integration |

## WebSocket

Connect to `ws://127.0.0.1:<port>/ws/<any-client-id>` to receive live events as JSON messages with a `type` field:

| Area | Events |
|---|---|
| Launch | `launch_progress`, `cdp_ready`, `profile_launched`, `profile_crashed`, `browser_crashed` |
| Stop | `stop_start`, `stop_progress`, `stop_complete`, `profile_stopped`, `window_closed` |
| Pause / resume | `pause_progress`, `profile_paused`, `resume_start`, `profile_resumed` |
| Profiles | `profile_created`, `profile_updated`, `profile_deleted`, `profile_reset`, `profile_cloned` |
| Proxies | `proxy_created`, `proxy_updated`, `proxy_deleted`, `proxy_tested` |
| Extensions | `extension_added`, `extension_deleted`, `extension_upload_progress`, `extension_download_progress`, `extension_delete_progress`, `profile_extension_added`, `profile_extension_removed` |
| Folders | `folder_created`, `folder_updated`, `folder_deleted` |
| Teams | `shared_profile_force_stopped`, `cookie_sync_warning` |
| Connection | `connected` |

Account, Teams and sign-in endpoints also exist on this API (`/api/auth`, `/api/teams`, `/api/worker`) — they pass through to the ctrldlogin server and need you to be signed in; see `/docs` for details.
