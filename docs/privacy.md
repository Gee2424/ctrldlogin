# Privacy Policy

**Last updated: October 2026**

ctrldlogin is built to keep your data on your own computer. This page explains what stays local, what is sent to our servers and why, and how to control it. "We" means stuffules frameworks, the maker of ctrldlogin.

## On Your Computer

Your profiles and everything in them stay on your computer and are **not uploaded** — unless you choose to share a profile with a team (see [Teams](#teams)).

| Data | Stored locally | Sent to us |
|------|:---:|:---:|
| Profile settings and fingerprints | ✅ | ❌ |
| Cookies, history, cache, local storage | ✅ | ❌ (only for team profiles with cookie sharing on) |
| Proxy details and passwords | ✅ | ❌ (only proxies you share with a team) |
| Extensions, folders, templates, tags, notes | ✅ | ❌ |
| App log | ✅ | ❌ |

Storage locations are listed in the [FAQ](/faq#where-are-my-profiles-and-data-stored).

## Accounts

An account is optional; you need one only for paid plans and Teams. If you create one, we store:

- Your email address, your name if you give one, and a securely hashed password (never the password itself).
- Your plan, its status and the date it runs until.
- Your license key, and for each computer it's active on: a hashed hardware identifier (not your serial numbers), the operating system, a device label, and when it was first and last seen. This enforces your plan's device limit.

## Payments

Paid plans are bought with **Bitcoin** through a BTCPay Server checkout that **we operate ourselves**. No payment card data is collected. For each purchase we hold your account email, the plan, the invoice amount, and the Bitcoin payment details (the receiving address, amount and transaction). Bitcoin transactions are public on the Bitcoin blockchain by design; we don't publish anything linking them to you.

## License Checks

When you activate a paid plan, and then when the app starts and every 6 hours, the app contacts our server to confirm the plan is still active. It sends your license key, the device's instance ID, its hashed hardware identifier, the app version and the operating system.

## Anonymous Usage Statistics (Off by Default)

Usage statistics are **opt-in**: nothing is sent unless you turn on **Analytics** in **Settings → General**. When it's on, the app sends a short message when it starts containing:

- a hashed hardware identifier, the app version, the operating system and your plan;
- if you're signed in, your license key and device instance ID, so the device is linked to your account.

Our server also records the country your connection comes from (provided by Cloudflare); we don't store your IP address. Statistics never include profile names, settings, fingerprints, cookies, browsing data or proxy details.

## Teams

If you use Teams, we store your teams, members' email addresses and roles, invites, and the profiles and folders you share (their fingerprint settings and names — not their browsing data).

- **Shared proxies** are stored encrypted, and Members can use them without seeing the password.
- **Shared cookies:** if an Owner or Admin turns on cookie sharing for a team profile, that profile's cookies are uploaded so teammates start signed in. They are stored in our database, which our host (Cloudflare) encrypts at rest; we don't currently add a second layer of encryption to them. Anyone in the team with access to that profile can use them. Turning cookie sharing off stops syncing; to delete the stored cookies, an Owner or Admin clicks **Clear synced cookies** in the profile's **Manage** dialog. They're also deleted when the profile is removed from the team.

## Other Connections

- **Browser engine:** on first use the app downloads the CloakBrowser engine from GitHub, and checks for engine updates when you ask it to.
- **Chrome Web Store:** contacted only when you import an extension from it.
- **Proxy tests:** testing a proxy fetches your exit IP through that proxy from a public IP-lookup service.
- **Downloads:** app downloads are served by GitHub Releases.

The app contains no advertising, tracking pixels or third-party analytics SDKs.

## Service Providers

- **Cloudflare** hosts our server and database (accounts, licenses, Teams, statistics). [Cloudflare privacy policy](https://www.cloudflare.com/privacypolicy/)
- **GitHub** hosts app downloads, this website and the engine download. [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)

We don't sell your data or share it with anyone else, except where the law requires it.

## Your Choices

- **Use it without an account** — the Free plan needs no sign-in.
- **Statistics** — leave **Analytics** off (the default), or turn it off in **Settings → General**.
- **Delete local data** — uninstall the app and delete the data folder:
  - **Windows:** `rmdir /s %APPDATA%\ctrldlogin`
  - **macOS:** `rm -rf ~/Library/Application\ Support/ctrldlogin`
  - **Linux:** `rm -rf ~/.local/share/ctrldlogin`
- **Delete your account** — email us from your account's address and we'll delete your account and its server-side data (payment records may be kept where the law requires).

## Contact

Questions about privacy: **gkm18686@gmail.com**, or open an issue on [GitHub](https://github.com/Gee2424/ctrldlogin/issues).
