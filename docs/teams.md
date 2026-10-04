# Team Profile Sharing

Share browser profiles with people you work with. Everyone launches from the same fingerprint and proxy setup. By default each person gets their own independent browser session; an Owner or Admin can also [share a profile's cookies](#sharing-cookies) so everyone starts signed in to the same accounts.

Teams need an account (free to create). The number of people per team depends on the owner's [plan](/pricing): 2 on Free and Starter, 4 on Pro, 8 on Business.

## Creating a Team

1. Open the **Team** section in the sidebar
2. Sign in, or create an account — this doesn't change your local profiles
3. Click **Create Team** and give it a name
4. Click **Invite** to generate an invite code and send it to a teammate — they enter it under **Have an invite code?** to join

## Roles

| Role | Can do |
|------|--------|
| **Owner** | Everything — manage members, folders, profiles, proxies, access and cookie sharing |
| **Admin** | Same as Owner for folders, profiles, proxies, access and cookie sharing; can invite members (not admins); can't remove the Owner or other Admins |
| **Member** | Launch profiles they have access to; share their own local profiles into the team; can't manage proxies or other people's access |

## Sharing a Profile

Right-click any local profile and choose **Share to team**. This creates a copy of that profile's fingerprint (and, optionally, its proxy) inside a team folder. Your original local profile is untouched, and you can keep using it as before.

- **Team folders** are separate from your personal folders. Find them under **Team** in the sidebar.
- Choose an existing team proxy, share your own proxy with the team, or leave it without a proxy.
- Sharing a proxy uploads its host, port and credentials to the team, encrypted at rest. A **Member** can use a shared proxy to launch a profile without ever seeing its password.

## Sharing Cookies

Optionally, a shared profile can carry its **cookies**, so whoever launches it starts signed in to the same accounts.

- **When sharing:** Owners and Admins can tick **Also share this profile's cookies with the team** in *Share to team*. (The profile needs cookies first — launch it, sign in, then stop it.)
- **Later:** open the profile's **Manage** dialog and switch **Team cookies** on or off. Switching it off stops syncing; **Clear synced cookies** deletes what's stored.
- **How it stays current:** when someone launches the profile, the latest shared cookies are loaded first. When they stop it or close the window — and every few minutes while it runs — the cookies are saved back for the team. Problems syncing never block launching or stopping.
- **Who sees it:** anyone who can launch the profile is signed in as that account. Only share profiles whose accounts you mean the whole team to use.
- **Where they're stored:** shared cookies are kept on the ctrldlogin server so the team can use them. See the [Privacy Policy](/privacy#teams).

## Restricting Access to Specific People

By default, everyone who can see a team folder can see every profile in it. To limit one profile to certain people:

1. Click **Manage** on that profile (Owner/Admin only)
2. Choose **Only specific people** and tick who should see it
3. Save

People without access won't see the profile at all, and they can't launch it even if they know its ID.

## One Person at a Time

A shared profile can only be open for one person at a time. If a teammate is using it, you'll see **"in use by [their email]"** and the Launch button is disabled. This stops two people opening the same identity at once.

If a teammate's session doesn't wrap up, an Owner or Admin can click **Force stop**. This asks the other person's app to close its browser, which normally happens within about a minute. The profile stays locked until that's confirmed, so nobody else can open it while the old browser is still running.

## Next Steps

- Explore [all features](/features)
- Compare [plans](/pricing)
- Check the [FAQ](/faq) for common questions
