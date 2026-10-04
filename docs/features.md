# Features

## Profile Management

**Each profile is a separate browser identity** — its own fingerprint, proxy, cookies, local storage, cache and history.

- **Create, edit, clone, reset** — clone copies a profile with a new fingerprint seed; reset wipes its browser data but keeps the fingerprint *(clone: paid plans)*
- **Status at a glance** — running, stopped, paused or crashed, updated live
- **Bulk actions** — select many profiles to launch, stop, move, tag, re-assign a proxy or delete at once
- **Search** — full-text search across names, notes, tags and proxy labels
- **Trash** — deleted profiles go to Trash first and can be restored
- **Pause & resume** — save a running session and pick it up later *(paid plans)*
- **Activity log** — a history of what happened to each profile *(paid plans)*
- **Persistent or fresh sessions** — keep cookies and storage between launches, or start clean every time

---

## Browser Fingerprinting

**Every profile gets a stable fingerprint from its own seed**, so it looks like the same device every time you open it — and different from every other profile. Powered by the [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) engine.

- **Platform** — Windows, macOS or Linux, with matching platform version and browser brand
- **Hardware** — GPU vendor and renderer, CPU cores, device memory, storage quota
- **Screen** — resolution, taskbar height and pixel ratio that fit the chosen platform
- **Location** — timezone, language and geolocation, which can follow your proxy's country
- **WebRTC** — the WebRTC IP is set to your proxy's exit IP, so your real IP isn't exposed
- **Noise & fonts** — per-seed noise and a font set that fits the platform
- **Session warm-up** — optionally visit a few sites before your start page for a more natural history
- **Fingerprint test** — open a test page from the profile with one click

---

## Proxy Management

- **HTTP and SOCKS5**, one per profile (or none)
- **Connectivity test** — latency and exit IP, with the result shown on the proxy
- **Tested on every launch** — if the proxy is down the launch stops, instead of quietly using your real connection
- **Bulk import** — paste many proxies at once in any of these formats:

```
protocol://host:port:username:password
host:port   or   host:port:username:password
{"host": "...", "port": 8080, ...}            (JSON, one per line)
label,protocol,host,port,username,password    (CSV)
```

---

## Cookies

- **Import and export** for running *and* stopped profiles
- **Formats detected automatically** — ctrldlogin JSON, Playwright storage state, Cookie-Editor / EditThisCookie arrays, and Netscape `cookies.txt`
- **Many profiles at once** — export or import a whole selection as one ZIP
- **Team cookie sync** — share a team profile's cookies so whoever launches it starts signed in ([how it works](/teams#sharing-cookies))

---

## Extensions

- **Upload** CRX or ZIP files, or **import from the Chrome Web Store** by pasting its URL
- **Per profile** — enable or disable each extension for each profile
- Icons, names, descriptions and versions read from the extension itself

---

## Automation

**Rules that run on their own.** Each rule has a trigger and a list of steps.

- **Triggers** — every N minutes, daily at a set time, when a profile launches, stops, crashes, is paused or resumed, or manually with **Run now**
- **Steps** — launch a profile, stop a profile, wait, assign a random proxy, export cookies
- Pause and resume all automation from the Automation page; the number of rules depends on your [plan](/pricing)

---

## Team Collaboration

**Share profiles with the people you work with.** Create a team, invite members with a role, and share any local profile into a team folder as an independent, launchable copy.

- **Roles** — Owner, Admin and Member, with different management rights
- **Team folders** — separate from your personal folders, visible to the whole team or to chosen people
- **Shared proxies** — stored encrypted; a Member can use one without seeing its password
- **One person at a time** — a shared profile locks while someone is using it, with an Owner/Admin force-stop
- **Optional cookie sync** — everyone starts signed in to the same accounts

See the full [Team Profile Sharing guide](/teams). Team size depends on your [plan](/pricing).

---

## Organization

- **Folders** — group profiles; drag and drop profiles between folders
- **Templates** — save a profile's settings as a reusable preset
- **Tags and notes** — colour-coded tags and free-text notes on every profile
- **Context menus and keyboard shortcuts** for common actions

---

## Interface

- Sidebar with your folders and teams, a profile table or card view, and a detail panel
- Live status updates while profiles start, stop or crash
- **Dark and light themes**
- **Logs** — view the app's log in **Settings → System**, or open its folder
