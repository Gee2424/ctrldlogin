# FAQ

## General

### Do I need an account?

No. The Free plan works without signing in. You only need an account to buy a paid plan or to use Teams.

### Where are my profiles and data stored?

On your computer:

| System | Data folder |
|--------|-------------|
| Windows | `%APPDATA%\ctrldlogin\` |
| macOS | `~/Library/Application Support/ctrldlogin/` |
| Linux | `~/.local/share/ctrldlogin/` |

Back up or move your profiles by copying this folder while the app is closed.

### Can I use ctrldlogin without a proxy?

Yes. Each profile gets its own fingerprint whether or not it has a proxy. A proxy is useful when the profile's IP address should match its location, or when profiles must not share your IP.

### Can I run several profiles at the same time?

Yes, as many as your computer can handle. Each runs in its own browser window with its own fingerprint, cookies, cache and storage.

### Which systems are supported?

Windows 10/11 (64-bit), Apple Silicon Macs, and 64-bit Linux with glibc 2.35+ (Ubuntu 22.04+, Debian 12+, Fedora 36+). See [System Requirements](/getting-started#system-requirements).

---

## Installation & Updates

### Windows says "Windows protected your PC"

The app isn't code-signed yet. Click **More info → Run anyway**. You only need to do this once.

### macOS says the app is from an unidentified developer

The app isn't notarized by Apple yet. Open **System Settings → Privacy & Security**, scroll to **Security**, click **Open Anyway** next to the ctrldlogin message and confirm. Only needed once.

### Is there an Intel Mac version?

Not at the moment — the macOS build is for Apple Silicon (M1 or newer).

### The first launch of a profile is slow

The first launch downloads the browser engine (~200 MB, one time). After that, profiles start quickly.

### The browser engine download fails or gets stuck

Check your firewall, VPN or proxy settings and that you have at least 1 GB free. The engine is downloaded from CloakBrowser's servers on GitHub.

### How do I update ctrldlogin?

Download the latest version from the [Releases page](https://github.com/Gee2424/ctrldlogin/releases/latest) and install it over the old one. Your profiles and settings are kept.

---

## Billing and Plans

### How do I pay?

In **Settings → Billing**, choose a plan and **Monthly** or **Yearly**. A checkout page opens in your browser; pay the invoice in Bitcoin. Your plan switches on in the app by itself once the payment confirms. Full details on the [Pricing](/pricing) page.

### Does my plan renew automatically?

No. Each payment covers one month or one year, and nothing is charged automatically. Pay again to continue — paying early adds the new period after the current one, so you don't lose any days.

### What happens when my plan ends?

You keep paid features for a 3-day grace period. After that the account returns to the Free plan. Your profiles stay on your computer.

### My invoice expired — was I charged?

No. An expired invoice means no payment arrived. Choose your plan again to get a new invoice.

### I paid, but the invoice had already expired

A payment that arrives after the invoice expires isn't applied automatically. Email **gkm18686@gmail.com** with the invoice ID and we'll apply it or refund it — see the [Refund Policy](/refund).

### I paid, but my plan hasn't switched on

On-chain Bitcoin payments usually confirm within 10–60 minutes. Keep the app open (or reopen **Settings → Billing**) and it will switch on once confirmed. If it hasn't after a few hours, email us the invoice ID.

### Can I change plans?

Yes, at any time from **Settings → Billing**. The switch is immediate and the unused part of your current plan is credited against the new one.

### How many computers can I use?

1 on Starter, 2 on Pro, 3 on Business. To move your plan to another computer, choose **Deactivate license** in **Settings → Billing** on the old one, then sign in on the new one.

### Does the app need to be online?

Only to start a paid plan and to re-check it, which it does at startup and every 6 hours. If it can't reach our server, your plan keeps working for up to 7 days.

---

## Account

### I forgot my password

There's no self-service reset yet. Email **gkm18686@gmail.com** from the address you signed up with and we'll help you back in.

### How do I delete my account?

Email us from your account's address. Your profiles on your computer aren't affected.

---

## Profiles

### A profile won't launch or closes immediately

Open **Settings → System** to see the log (the file is `ctrldlogin.log` in your [data folder](#where-are-my-profiles-and-data-stored)). Common causes:
- The profile's proxy failed its test — launches stop rather than use your real connection
- The browser engine didn't finish downloading — try again with a stable connection
- Not enough free disk space
- Antivirus blocking the browser

### How do I move profiles to another computer?

Copy the whole data folder (with the app closed) to the same location on the new computer, then install ctrldlogin there. Profile fingerprints come from their saved seeds, so they look the same on the new machine. You can also export and import cookies per profile, or many at once as a ZIP.

### Can I recover a deleted profile?

Yes, if it's still in **Trash** — restore it from there. Once Trash is emptied, only a backup of the data folder can bring it back.

---

## Fingerprinting

### How is a profile's fingerprint generated?

From the profile's seed, which is created when the profile is made and saved with it. The same seed always produces the same fingerprint, so a profile looks like the same device every time. Cloning a profile gives the copy a new seed.

### Can I check what websites see?

Yes — use **Fingerprint test** on a profile, or visit [browserscan.net](https://browserscan.net) from inside it.

---

## Support

### I found a bug — how do I report it?

Open an issue on [GitHub](https://github.com/Gee2424/ctrldlogin/issues) or email **gkm18686@gmail.com**. Please include your system and ctrldlogin version, the steps to reproduce it, and the relevant part of the log (**Settings → System**).
