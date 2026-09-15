# Team Profile Sharing

Share browser profiles with people you work with — everyone launches from the same fingerprint and proxy setup, but each person gets their own independent browser session. Nobody shares a live login.

## Creating a Team

1. Open the **Teams** tab in the sidebar
2. Sign in (or create an account) — this is separate from your license and doesn't affect your local profiles
3. Click **Create Team** and give it a name
4. Click **Invite** to generate a code, then send it to a teammate — they enter it under "Have an invite code?" to join

## Roles

| Role | Can do |
|------|--------|
| **Owner** | Everything — manage members, folders, profiles, proxies, and access |
| **Admin** | Same as Owner for folders/profiles/proxies/access; can invite members (not admins); can't remove the Owner or other Admins |
| **Member** | Launch profiles they have access to; can share their own local profiles into the team; can't manage proxies or other people's access |

## Sharing a Profile

Right-click any local profile and choose **Share to team**. This creates a snapshot of that profile's fingerprint (and, optionally, its proxy) inside a team folder — your original local profile is untouched, and you can keep using it normally.

- **Team folders** are separate from your personal folders. Find them under **Team** in the sidebar.
- Choose an existing team proxy, share your own proxy's credentials with the team, or leave it proxy-free.
- Sharing a proxy uploads its host, port, and credentials to the team, encrypted at rest. A **Member** can use a shared proxy to launch a profile without ever seeing its password.

## Restricting Access to Specific People

By default, everyone who can see a team folder can see every profile in it. To limit one profile to specific people:

1. Open the folder and click **Manage access** on that profile (Owner/Admin only)
2. Choose **Only specific people** and check who should see it
3. Save

People without access won't see the profile at all — not in their folder view, and they can't launch it even if they know its ID.

## One Person at a Time

A shared profile can only be launched by one person at a time — if a teammate is already using it, you'll see **"in use by [their email]"** and the Launch button is disabled. This keeps two people from opening the same fingerprint simultaneously.

When a teammate's session isn't wrapping up in time, an Owner or Admin can click **Force stop**. This doesn't cut the connection instantly — it asks the other person's app to close its own browser, which normally happens within about a minute. The profile stays locked until it actually confirms it stopped, so a third person can never jump in while that browser is still open.

## Next Steps

- Explore [all features](/features)
- Read the [API reference](/api-guide) for programmatic control
- Check the [FAQ](/faq) for common questions
