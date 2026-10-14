<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { withBase } from 'vitepress'

const RELEASES = 'https://github.com/Gee2424/ctrldlogin/releases/latest'

const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const el = root.value
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  el.classList.add('animate')
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          observer?.unobserve(e.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  )
  el.querySelectorAll('.reveal').forEach((n) => observer!.observe(n))
})

onBeforeUnmount(() => observer?.disconnect())

const profiles = [
  { name: 'ads-us', tag: 'FB', color: '#3b82f6', os: 'Windows 11', proxy: 'US · Residential', status: 'running' },
  { name: 'store-de', tag: 'AM', color: '#f59e0b', os: 'macOS 14', proxy: 'DE · Mobile', status: 'running' },
  { name: 'shop-uk', tag: 'TT', color: '#ec4899', os: 'Windows 10', proxy: 'UK · Residential', status: 'stopped' },
  { name: 'search-ca', tag: 'GA', color: '#22c55e', os: 'Linux', proxy: 'CA · Datacenter', status: 'running' },
  { name: 'support-fr', tag: 'SP', color: '#a855f7', os: 'Windows 11', proxy: 'FR · SOCKS5', status: 'paused' },
]

const fingerprint = [
  ['Platform', 'Win32 · Windows 11'],
  ['GPU renderer', 'NVIDIA GeForce RTX 3060'],
  ['CPU cores / memory', '8 cores · 16 GB'],
  ['Screen', '1920 × 1080 @ 1x'],
  ['Timezone', 'America/New_York'],
  ['WebRTC IP', '= proxy exit IP'],
]

const plans = [
  { name: 'Free', price: '$0', note: 'forever', profiles: 15, members: 2, devices: 1 },
  { name: 'Starter', price: '$3', note: '/month', profiles: 30, members: 2, devices: 1 },
  { name: 'Pro', price: '$6', note: '/month', profiles: 60, members: 4, devices: 2 },
  { name: 'Business', price: '$9', note: '/month', profiles: 120, members: 8, devices: 3 },
]

const extras = [
  { title: 'Extensions', text: 'Upload CRX/ZIP or import from the Chrome Web Store, then enable per profile.', link: '/features#extensions' },
  { title: 'Folders & templates', text: 'Group profiles, drag between folders, and save settings as reusable presets.', link: '/features#organization' },
  { title: 'Bulk actions', text: 'Launch, stop, move, tag or re-proxy a whole selection in one go.', link: '/features#profile-management' },
  { title: 'Trash & restore', text: 'Deleted profiles go to Trash first and can be restored from there.', link: '/features#profile-management' },
  { title: 'Pause & resume', text: 'Save a running session and continue it later. Available on paid plans.', link: '/features#profile-management' },
  { title: 'Local API', text: 'Drive profiles from your own scripts through the built-in local API.', link: '/api-guide' },
]
</script>

<template>
  <div ref="root" class="landing">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow" aria-hidden="true" />
      <div class="wrap hero-inner">
        <a class="pill" :href="withBase('/changelog')">
          <span class="pill-dot" />
          New in 0.6.5: paid plans with Bitcoin checkout
        </a>
        <h1 class="hero-title">
          Separate browser profiles<br />
          <span class="grad">for every account you run</span>
        </h1>
        <p class="hero-sub">
          Each profile has its own fingerprint, proxy, cookies and storage, so websites see a
          different device for every account. Everything runs and stays on your computer.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" :href="RELEASES">
            <svg viewBox="0 0 24 24" class="ico"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 19h16" /></svg>
            Download free
          </a>
          <a class="btn btn-ghost" :href="withBase('/pricing')">View pricing</a>
        </div>
        <ul class="trust">
          <li><svg viewBox="0 0 24 24" class="ico"><path d="m5 12 5 5L20 7" /></svg>Free plan with 15 profiles</li>
          <li><svg viewBox="0 0 24 24" class="ico"><path d="m5 12 5 5L20 7" /></svg>No account needed</li>
          <li><svg viewBox="0 0 24 24" class="ico"><path d="m5 12 5 5L20 7" /></svg>Windows · macOS · Linux</li>
        </ul>
      </div>

      <!-- App mock -->
      <div class="wrap mock-stage reveal">
        <div class="float float-l">
          <span class="float-ico"><svg viewBox="0 0 24 24" class="ico"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /></svg></span>
          Unique fingerprint
        </div>
        <div class="float float-r">
          <span class="float-ico"><svg viewBox="0 0 24 24" class="ico"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></span>
          Proxy per profile
        </div>
        <div class="float float-b">
          <span class="float-ico"><svg viewBox="0 0 24 24" class="ico"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg></span>
          Shared with your team
        </div>

        <div class="window">
          <div class="win-bar">
            <span class="dots"><i /><i /><i /></span>
            <span class="win-title">ctrldlogin</span>
            <span class="win-live"><i />3 running</span>
          </div>
          <div class="win-body">
            <aside class="win-side">
              <div class="side-h">Folders</div>
              <div class="side-i active">All profiles <b>24</b></div>
              <div class="side-i">Advertising <b>8</b></div>
              <div class="side-i">E-commerce <b>9</b></div>
              <div class="side-i">Social <b>7</b></div>
              <div class="side-h">Teams</div>
              <div class="side-i">Growth team <b>12</b></div>
              <div class="side-i muted">Trash</div>
            </aside>
            <div class="win-main">
              <div class="win-tools">
                <span class="search">Search profiles, tags, notes…</span>
                <span class="new">+ New profile</span>
              </div>
              <div class="rows">
                <div v-for="p in profiles" :key="p.name" class="row">
                  <span class="avatar" :style="{ background: p.color }">{{ p.tag }}</span>
                  <span class="r-name">{{ p.name }}<small>{{ p.os }}</small></span>
                  <span class="r-proxy">{{ p.proxy }}</span>
                  <span class="r-status" :class="p.status"><i />{{ p.status }}</span>
                  <span class="r-btn" :class="{ stop: p.status === 'running' }">{{ p.status === 'running' ? 'Stop' : 'Launch' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Built for -->
    <section class="wrap strip reveal">
      <span class="strip-h">Built for</span>
      <span class="chip">Agencies &amp; freelancers</span>
      <span class="chip">E-commerce sellers</span>
      <span class="chip">Social media managers</span>
      <span class="chip">Ad buyers</span>
      <span class="chip">QA &amp; testing teams</span>
    </section>

    <!-- Feature bands -->
    <section class="wrap section">
      <div class="sec-head reveal">
        <span class="eyebrow">Features</span>
        <h2>How ctrldlogin keeps profiles separate</h2>
      </div>

      <div class="band reveal">
        <div class="band-text">
          <span class="eyebrow">Fingerprinting</span>
          <h3>A stable fingerprint for every profile</h3>
          <p>
            Each profile is generated from its own seed, so it looks like the same device every time
            it opens and different from every other profile. Built on the CloakBrowser engine.
          </p>
          <ul class="checks">
            <li>Platform, browser brand, GPU, CPU and memory that fit together</li>
            <li>Screen, fonts and noise that match the chosen OS</li>
            <li>Timezone, language and location that follow your proxy</li>
          </ul>
          <a class="more" :href="withBase('/features#browser-fingerprinting')">How fingerprinting works</a>
        </div>
        <div class="panel">
          <div class="panel-h"><span>Profile 07 · fingerprint</span><span class="ok"><i />Stable</span></div>
          <div v-for="[k, v] in fingerprint" :key="k" class="kv">
            <span>{{ k }}</span><code>{{ v }}</code>
          </div>
        </div>
      </div>

      <div class="band rev reveal">
        <div class="band-text">
          <span class="eyebrow">Proxies</span>
          <h3>A proxy for each profile, tested before launch</h3>
          <p>
            Assign an HTTP or SOCKS5 proxy to any profile. ctrldlogin checks the proxy every time the
            profile launches. If the check fails, the profile doesn't open, so your real IP address is
            never used by mistake.
          </p>
          <ul class="checks">
            <li>Connectivity test with latency and exit IP</li>
            <li>WebRTC IP set to the proxy's exit IP</li>
            <li>Bulk import in URL, host:port, JSON or CSV format</li>
          </ul>
          <a class="more" :href="withBase('/features#proxy-management')">Proxy management</a>
        </div>
        <div class="panel">
          <div class="proxy-card">
            <span class="flag">US</span>
            <span class="pc-main">New York · Residential<small>socks5://104.28.xx.xx:1080</small></span>
            <span class="lat">42 ms</span>
          </div>
          <div class="kv"><span>Exit IP</span><code>104.28.xx.xx</code></div>
          <div class="kv"><span>Timezone</span><code>America/New_York <em>matched</em></code></div>
          <div class="kv"><span>Language</span><code>en-US <em>matched</em></code></div>
          <div class="kv"><span>On launch</span><code>tested <em>passed</em></code></div>
          <div class="kv warn"><span>If proxy fails</span><code>launch blocked</code></div>
        </div>
      </div>

      <div class="band reveal">
        <div class="band-text">
          <span class="eyebrow">Teams</span>
          <h3>Share profiles with your team</h3>
          <p>
            Move any profile into a team folder and your teammates get the same fingerprint and proxy.
            With cookie sync on, they open it already signed in. A profile in use is locked for
            everyone else until it's closed.
          </p>
          <ul class="checks">
            <li>Owner, Admin and Member roles with per-person access</li>
            <li>Shared proxies are stored encrypted, and Members can't see their passwords</li>
            <li>Optional cookie sync so everyone starts signed in</li>
          </ul>
          <a class="more" :href="withBase('/teams')">Team profile sharing</a>
        </div>
        <div class="panel">
          <div class="panel-h"><span>Growth team · 4 members</span><span class="ok"><i />Synced</span></div>
          <div class="member"><span class="m-av" style="background:#e94560">AK</span><span>Alex K.</span><em>Owner</em></div>
          <div class="member"><span class="m-av" style="background:#6366f1">MR</span><span>Maria R.</span><em>Admin</em></div>
          <div class="member"><span class="m-av" style="background:#14b8a6">JT</span><span>Jon T.</span><em>Member</em></div>
          <div class="lock">
            <svg viewBox="0 0 24 24" class="ico"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            <span><b>store-de</b> is in use by Maria R.</span>
          </div>
        </div>
      </div>

      <div class="band rev reveal">
        <div class="band-text">
          <span class="eyebrow">Cookies &amp; automation</span>
          <h3>Import sessions and schedule routine tasks</h3>
          <p>
            Import and export cookies in common formats, including for profiles that aren't running.
            Automation rules can launch, stop or re-proxy profiles on a schedule or in response to
            profile events.
          </p>
          <ul class="checks">
            <li>JSON, Playwright state, Cookie-Editor and Netscape cookies.txt</li>
            <li>Export many profiles at once as one ZIP</li>
            <li>Run rules every N minutes, daily, or on launch, stop or crash</li>
          </ul>
          <a class="more" :href="withBase('/features#automation')">Cookies and automation</a>
        </div>
        <div class="panel">
          <div class="panel-h"><span>Rule · Nightly refresh</span><span class="ok"><i />Active</span></div>
          <div class="step trig"><span>When</span>Daily at 03:00</div>
          <div class="step"><span>1</span>Assign random proxy</div>
          <div class="step"><span>2</span>Launch profile</div>
          <div class="step"><span>3</span>Wait 10 minutes</div>
          <div class="step"><span>4</span>Export cookies as ZIP</div>
          <div class="step"><span>5</span>Stop profile</div>
        </div>
      </div>
    </section>

    <!-- Extras grid -->
    <section class="wrap section">
      <div class="sec-head reveal">
        <span class="eyebrow">Also included</span>
        <h2>More tools for managing profiles</h2>
      </div>
      <div class="grid reveal">
        <a v-for="x in extras" :key="x.title" class="cell" :href="withBase(x.link)">
          <h4>{{ x.title }}</h4>
          <p>{{ x.text }}</p>
        </a>
      </div>
    </section>

    <!-- Real screenshot -->
    <section class="wrap section">
      <div class="sec-head reveal">
        <span class="eyebrow">Screenshot</span>
        <h2>The ctrldlogin desktop app</h2>
      </div>
      <div class="shot reveal">
        <img :src="withBase('/screenshot.png')" alt="The ctrldlogin app showing a list of browser profiles" loading="lazy" width="2160" height="1290" />
      </div>
    </section>

    <!-- Pricing teaser -->
    <section class="wrap section">
      <div class="sec-head reveal">
        <span class="eyebrow">Pricing</span>
        <h2>Plans and pricing</h2>
        <p class="sec-sub">Fingerprinting, proxies, cookies, Teams and automation are on every plan. Paid plans raise the limits and add the activity log, pause and resume, and profile cloning. Yearly billing is 10 times the monthly price. Payment is in Bitcoin and never renews automatically.</p>
      </div>
      <div class="plans reveal">
        <div v-for="p in plans" :key="p.name" class="plan">
          <h4>{{ p.name }}</h4>
          <div class="price">{{ p.price }}<small>{{ p.note }}</small></div>
          <ul>
            <li><b>{{ p.profiles }}</b> profiles</li>
            <li><b>{{ p.members }}</b> team members</li>
            <li><b>{{ p.devices }}</b> {{ p.devices === 1 ? 'device' : 'devices' }}</li>
          </ul>
        </div>
      </div>
      <div class="center reveal"><a class="more" :href="withBase('/pricing')">Compare all plan limits</a></div>
    </section>

    <!-- CTA -->
    <section class="wrap section">
      <div class="cta reveal">
        <div class="cta-glow" aria-hidden="true" />
        <h2>Start with the free plan</h2>
        <p>The free plan includes 15 profiles with no time limit, and you don't need an account to use it.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" :href="RELEASES">Download ctrldlogin</a>
          <a class="btn btn-ghost" :href="withBase('/getting-started')">Getting started guide</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing {
  --accent: #e94560;
  --accent-2: #ff7a59;
  --line: var(--vp-c-divider);
  --card: var(--vp-c-bg-soft);
  --muted: var(--vp-c-text-2);
  color: var(--vp-c-text-1);
  overflow-x: clip;
  padding-bottom: 48px;
}
.landing a { text-decoration: none; color: inherit; }
.wrap { max-width: 1152px; margin: 0 auto; padding: 0 24px; }
.ico { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex: none; }

/* Reveal on scroll (only when JS + motion allowed) */
.animate .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
.animate .reveal.in { opacity: 1; transform: none; }

/* Hero */
.hero { position: relative; padding: 72px 0 24px; }
.hero-glow {
  position: absolute; inset: -120px 0 auto; height: 720px; pointer-events: none;
  background:
    radial-gradient(600px 320px at 50% 30%, rgba(233,69,96,.22), transparent 70%),
    radial-gradient(500px 300px at 75% 55%, rgba(99,102,241,.16), transparent 70%);
}
.hero-glow::after {
  content: ''; position: absolute; inset: 0;
  background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 56px 56px; opacity: .35;
  mask-image: radial-gradient(ellipse 60% 55% at 50% 35%, #000 20%, transparent 75%);
}
.hero-inner { position: relative; text-align: center; display: flex; flex-direction: column; align-items: center; }
.pill {
  display: inline-flex; align-items: center; gap: 10px; padding: 6px 14px; border-radius: 999px;
  font-size: 13px; font-weight: 500; color: var(--muted);
  border: 1px solid var(--line); background: color-mix(in srgb, var(--vp-c-bg) 70%, transparent);
  backdrop-filter: blur(8px); transition: border-color .2s, color .2s;
}
.pill:hover { border-color: var(--accent); color: var(--vp-c-text-1); }
.pill-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 4px rgba(233,69,96,.2); }
.hero-title {
  margin: 28px 0 0; font-size: clamp(40px, 7.2vw, 76px); line-height: 1.04; font-weight: 700; letter-spacing: -.035em;
}
.grad { background: linear-gradient(100deg, var(--accent) 10%, var(--accent-2) 60%, #f9a8d4); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero-sub { margin: 24px 0 0; max-width: 620px; font-size: clamp(16px, 2vw, 19px); line-height: 1.6; color: var(--muted); }
.hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 36px; }
.btn {
  display: inline-flex; align-items: center; gap: 8px; height: 50px; padding: 0 26px; border-radius: 12px;
  font-size: 16px; font-weight: 600; transition: transform .15s ease, box-shadow .2s, background .2s, border-color .2s;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: linear-gradient(180deg, #f05673, var(--accent)); color: #fff !important; box-shadow: 0 8px 24px -6px rgba(233,69,96,.55), inset 0 1px 0 rgba(255,255,255,.2); }
.btn-primary:hover { box-shadow: 0 12px 32px -6px rgba(233,69,96,.7), inset 0 1px 0 rgba(255,255,255,.2); }
.btn-ghost { border: 1px solid var(--line); background: var(--vp-c-bg); }
.btn-ghost:hover { border-color: var(--vp-c-text-3); }
.trust { list-style: none; padding: 0; margin: 26px 0 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 26px; font-size: 14px; color: var(--muted); }
.trust li { display: flex; align-items: center; gap: 7px; margin: 0; }
.trust .ico { width: 16px; height: 16px; color: #22c55e; stroke-width: 2.5; }

/* Mock window */
.mock-stage { position: relative; margin-top: 64px; padding: 0 24px; max-width: 1000px; }
.window {
  position: relative; border-radius: 16px; overflow: hidden; text-align: left;
  border: 1px solid var(--line); background: var(--vp-c-bg-alt);
  box-shadow: 0 40px 100px -30px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03), 0 -1px 0 rgba(255,255,255,.06) inset;
}
.window::before { content: ''; position: absolute; inset: 0 0 auto; height: 1px; background: linear-gradient(90deg, transparent, rgba(233,69,96,.6), transparent); }
.win-bar { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--line); font-size: 13px; }
.dots { display: flex; gap: 6px; }
.dots i { width: 11px; height: 11px; border-radius: 50%; background: #ef4444; }
.dots i:nth-child(2) { background: #f59e0b; }
.dots i:nth-child(3) { background: #22c55e; }
.win-title { font-weight: 600; }
.win-live { margin-left: auto; display: flex; align-items: center; gap: 6px; color: #22c55e; font-size: 12px; font-weight: 500; }
.win-live i, .ok i, .r-status i { width: 7px; height: 7px; border-radius: 50%; background: currentColor; display: inline-block; }
.win-body { display: grid; grid-template-columns: 190px 1fr; min-height: 330px; }
.win-side { border-right: 1px solid var(--line); padding: 14px 10px; font-size: 13px; }
.side-h { font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: var(--vp-c-text-3); padding: 10px 10px 6px; }
.side-i { display: flex; justify-content: space-between; padding: 7px 10px; border-radius: 8px; color: var(--muted); }
.side-i b { font-weight: 500; color: var(--vp-c-text-3); }
.side-i.active { background: rgba(233,69,96,.12); color: var(--vp-c-text-1); }
.side-i.active b { color: var(--accent); }
.side-i.muted { opacity: .6; }
.win-main { padding: 14px 16px; min-width: 0; }
.win-tools { display: flex; gap: 10px; margin-bottom: 12px; }
.search { flex: 1; padding: 8px 12px; border: 1px solid var(--line); border-radius: 8px; font-size: 13px; color: var(--vp-c-text-3); }
.new { padding: 8px 14px; border-radius: 8px; background: var(--accent); color: #fff; font-size: 13px; font-weight: 600; white-space: nowrap; }
.rows { display: flex; flex-direction: column; gap: 6px; }
.row {
  display: grid; grid-template-columns: 34px 1.3fr 1.2fr 96px 70px; align-items: center; gap: 12px;
  padding: 9px 10px; border: 1px solid var(--line); border-radius: 10px; background: var(--vp-c-bg); font-size: 13px;
}
.avatar { width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; color: #fff; font-size: 12px; font-weight: 700; }
.r-name { font-weight: 600; display: flex; flex-direction: column; line-height: 1.3; min-width: 0; }
.r-name small, .pc-main small { font-weight: 400; font-size: 12px; color: var(--vp-c-text-3); }
.r-proxy { color: var(--muted); font-size: 12.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.r-status { display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: capitalize; color: var(--vp-c-text-3); }
.r-status.running { color: #22c55e; }
.r-status.paused { color: #f59e0b; }
.r-btn { text-align: center; padding: 5px 0; border-radius: 7px; font-size: 12px; font-weight: 600; background: rgba(233,69,96,.14); color: var(--accent); }
.r-btn.stop { background: var(--card); color: var(--muted); }

.float {
  position: absolute; z-index: 2; display: flex; align-items: center; gap: 10px; padding: 10px 16px 10px 10px;
  border-radius: 14px; border: 1px solid var(--line); background: color-mix(in srgb, var(--vp-c-bg) 85%, transparent);
  backdrop-filter: blur(12px); box-shadow: 0 16px 40px -12px rgba(0,0,0,.45); font-size: 14px; font-weight: 600;
  animation: bob 6s ease-in-out infinite;
}
.float-ico { width: 32px; height: 32px; border-radius: 9px; display: grid; place-items: center; background: rgba(233,69,96,.14); color: var(--accent); }
.float-l { left: -64px; bottom: 22%; }
.float-r { right: -64px; top: 18%; animation-delay: -2s; }
.float-b { right: 8%; bottom: -24px; animation-delay: -4s; }
@keyframes bob { 50% { transform: translateY(-8px); } }
@media (prefers-reduced-motion: reduce) { .float { animation: none; } }

/* Built-for strip */
.strip { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px; margin-top: 88px; }
.strip-h { font-size: 12px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--vp-c-text-3); margin-right: 6px; }
.chip { padding: 7px 14px; border-radius: 999px; border: 1px solid var(--line); font-size: 14px; color: var(--muted); }

/* Sections */
.section { margin-top: 128px; }
.sec-head { text-align: center; max-width: 720px; margin: 0 auto 56px; }
.eyebrow { display: inline-block; font-size: 12.5px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); }
.sec-head h2, .cta h2 { margin: 12px 0 0; border: 0; padding: 0; font-size: clamp(30px, 4.4vw, 46px); line-height: 1.12; font-weight: 700; letter-spacing: -.03em; }
.sec-sub { margin: 16px auto 0; color: var(--muted); font-size: 17px; line-height: 1.6; }

.band { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; padding: 56px 0; }
.band + .band { border-top: 1px solid var(--line); }
.band.rev .band-text { order: 2; }
.band-text h3 { margin: 10px 0 0; font-size: clamp(24px, 3vw, 32px); line-height: 1.2; font-weight: 700; letter-spacing: -.02em; }
.band-text p { margin: 16px 0 0; font-size: 16.5px; line-height: 1.7; color: var(--muted); }
.checks { list-style: none; padding: 0; margin: 22px 0 0; display: grid; gap: 12px; }
.checks li { position: relative; padding-left: 30px; margin: 0; font-size: 15px; line-height: 1.5; }
.checks li::before {
  content: ''; position: absolute; left: 0; top: 1px; width: 20px; height: 20px; border-radius: 6px; background: rgba(233,69,96,.14);
  -webkit-mask: none;
}
.checks li::after { content: ''; position: absolute; left: 7px; top: 5px; width: 5px; height: 9px; border: solid var(--accent); border-width: 0 2px 2px 0; transform: rotate(45deg); }
.more { display: inline-flex; align-items: center; gap: 6px; margin-top: 24px; font-weight: 600; font-size: 15px; color: var(--accent) !important; }
.more::after, .pill::after { content: ''; width: 7px; height: 7px; border: solid currentColor; border-width: 2px 2px 0 0; transform: rotate(45deg); transition: transform .2s; }
.pill::after { color: var(--accent); width: 6px; height: 6px; }
.more:hover::after, .pill:hover::after { transform: translateX(3px) rotate(45deg); }
.more:hover { text-decoration: underline !important; }

.panel {
  position: relative; border: 1px solid var(--line); border-radius: 16px; padding: 8px 20px 12px; background: var(--vp-c-bg-alt);
  box-shadow: 0 30px 70px -30px rgba(0,0,0,.5);
}
.panel::before { content: ''; position: absolute; inset: -1px; border-radius: 16px; padding: 1px; pointer-events: none;
  background: linear-gradient(140deg, rgba(233,69,96,.5), transparent 40%); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; }
.panel-h { display: flex; justify-content: space-between; align-items: center; padding: 10px 0 12px; font-size: 13.5px; font-weight: 600; border-bottom: 1px solid var(--line); }
.ok { display: flex; align-items: center; gap: 6px; color: #22c55e; font-size: 12px; font-weight: 500; }
.kv { display: flex; justify-content: space-between; gap: 16px; padding: 12px 0; font-size: 13.5px; color: var(--muted); }
.kv + .kv { border-top: 1px dashed var(--line); }
.kv code { font-family: var(--vp-font-family-mono); font-size: 12.5px; color: var(--vp-c-text-1); background: none; padding: 0; text-align: right; }
.kv em { font-style: normal; margin-left: 6px; padding: 2px 6px; border-radius: 5px; font-size: 10.5px; font-family: var(--vp-font-family-base); font-weight: 600; text-transform: uppercase; letter-spacing: .04em; background: rgba(34,197,94,.14); color: #22c55e; }
.kv.warn code { color: var(--accent); }
.proxy-card { display: flex; align-items: center; gap: 12px; margin: 12px 0 6px; padding: 12px; border-radius: 12px; background: var(--vp-c-bg); border: 1px solid var(--line); }
.flag { width: 38px; height: 28px; border-radius: 6px; display: grid; place-items: center; font-size: 12px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #1e3a8a, #b91c1c); }
.pc-main { flex: 1; display: flex; flex-direction: column; font-size: 14px; font-weight: 600; min-width: 0; }
.pc-main small { font-family: var(--vp-font-family-mono); }
.lat { font-size: 12px; font-weight: 600; color: #22c55e; background: rgba(34,197,94,.12); padding: 4px 8px; border-radius: 6px; }
.member { display: flex; align-items: center; gap: 12px; padding: 12px 0; font-size: 14px; font-weight: 500; }
.member + .member { border-top: 1px dashed var(--line); }
.member em { margin-left: auto; font-style: normal; font-size: 12px; color: var(--muted); padding: 3px 9px; border: 1px solid var(--line); border-radius: 999px; }
.m-av { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-size: 12px; font-weight: 700; color: #fff; }
.lock { display: flex; align-items: center; gap: 10px; margin: 8px 0 4px; padding: 12px; border-radius: 10px; font-size: 13.5px; color: var(--muted); background: rgba(245,158,11,.1); border: 1px solid rgba(245,158,11,.25); }
.lock .ico { color: #f59e0b; }
.lock b { color: var(--vp-c-text-1); }
.step { display: flex; align-items: center; gap: 12px; margin-top: 8px; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--line); background: var(--vp-c-bg); font-size: 14px; }
.step span { width: 24px; height: 24px; border-radius: 7px; display: grid; place-items: center; font-size: 12px; font-weight: 700; background: var(--card); color: var(--muted); flex: none; }
.step.trig { margin-top: 12px; border-color: rgba(233,69,96,.35); background: rgba(233,69,96,.07); }
.step.trig span { width: auto; padding: 0 8px; background: var(--accent); color: #fff; }

/* Extras grid */
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
.cell { display: block; padding: 28px; background: var(--vp-c-bg); transition: background .2s; }
.cell:hover { background: var(--vp-c-bg-alt); }
.cell h4 { margin: 0; font-size: 17px; font-weight: 600; }
.cell:hover h4 { color: var(--accent); }
.cell h4 { transition: color .2s; }
.cell p { margin: 8px 0 0; font-size: 14.5px; line-height: 1.6; color: var(--muted); }

/* Screenshot */
.shot { border-radius: 16px; padding: 10px; border: 1px solid var(--line); background: var(--vp-c-bg-alt); box-shadow: 0 40px 100px -40px rgba(233,69,96,.35); }
.shot img { display: block; width: 100%; height: auto; border-radius: 10px; }

/* Plans */
.plans { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.plan { position: relative; padding: 28px 24px; border-radius: 16px; border: 1px solid var(--line); background: var(--vp-c-bg-alt); }
.plan h4 { margin: 0; font-size: 15px; font-weight: 600; color: var(--muted); }
.price { margin-top: 8px; font-size: 40px; font-weight: 700; letter-spacing: -.03em; }
.price small { margin-left: 4px; font-size: 14px; font-weight: 500; color: var(--vp-c-text-3); letter-spacing: 0; }
.plan ul { list-style: none; padding: 0; margin: 18px 0 0; display: grid; gap: 8px; font-size: 14px; color: var(--muted); }
.plan li { margin: 0; }
.plan li b { color: var(--vp-c-text-1); }
.center { text-align: center; margin-top: 8px; }

/* CTA */
.cta { position: relative; overflow: hidden; text-align: center; padding: 80px 32px; border-radius: 24px; border: 1px solid var(--line); background: var(--vp-c-bg-alt); }
.cta-glow { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(500px 240px at 50% 0%, rgba(233,69,96,.25), transparent 70%); }
.cta h2, .cta p, .cta .hero-actions { position: relative; }
.cta p { max-width: 540px; margin: 16px auto 0; font-size: 17px; line-height: 1.6; color: var(--muted); }

/* Responsive */
@media (max-width: 1160px) {
  .float-l, .float-r { display: none; }
}
@media (max-width: 960px) {
  .band { grid-template-columns: 1fr; gap: 40px; padding: 40px 0; }
  .band.rev .band-text { order: 0; }
  .grid { grid-template-columns: repeat(2, 1fr); }
  .plans { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .wrap, .mock-stage { padding: 0 16px; }
  .hero { padding-top: 48px; }
  .win-body { grid-template-columns: 1fr; }
  .win-side { display: none; }
  .row { grid-template-columns: 34px 1fr 70px; }
  .r-proxy, .r-status { display: none; }
  .float-b { display: none; }
  .section { margin-top: 96px; }
  .grid, .plans { grid-template-columns: 1fr; }
  .btn { width: 100%; justify-content: center; }
  .hero-actions { width: 100%; }
  .cta { padding: 56px 20px; }
}
</style>
