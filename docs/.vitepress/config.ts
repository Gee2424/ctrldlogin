import { defineConfig } from 'vitepress'

const RELEASES = 'https://github.com/Gee2424/ctrldlogin/releases/latest'
const DESCRIPTION =
  'Desktop app for managing isolated browser profiles — each with its own fingerprint, proxy and cookies. Teams, automation, cookie tools. Free plan; paid plans in Bitcoin.'

export default defineConfig({
  title: 'ctrldlogin',
  description: DESCRIPTION,
  lang: 'en-US',
  base: '/ctrldlogin/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/ctrldlogin/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/ctrldlogin/favicon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/ctrldlogin/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'ctrldlogin — isolated browser profiles' }],
    ['meta', { property: 'og:description', content: DESCRIPTION }],
    ['meta', { property: 'og:image', content: 'https://gee2424.github.io/ctrldlogin/screenshot.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Features', link: '/features' },
      { text: 'Pricing', link: '/pricing' },
      { text: 'Teams', link: '/teams' },
      { text: 'FAQ', link: '/faq' },
      {
        text: 'More',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Local API', link: '/api-guide' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'Terms of Service', link: '/terms' },
          { text: 'Refund Policy', link: '/refund' },
        ],
      },
      { text: 'Download', link: RELEASES },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'System Requirements', link: '/getting-started#system-requirements' },
          { text: 'Download', link: '/getting-started#download' },
          { text: 'Installation', link: '/getting-started#installation' },
          { text: 'First Launch', link: '/getting-started#first-launch' },
          { text: 'Upgrading to a Paid Plan', link: '/getting-started#upgrading-to-a-paid-plan' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Profile Management', link: '/features#profile-management' },
          { text: 'Fingerprinting', link: '/features#browser-fingerprinting' },
          { text: 'Proxies', link: '/features#proxy-management' },
          { text: 'Cookies', link: '/features#cookies' },
          { text: 'Extensions', link: '/features#extensions' },
          { text: 'Automation', link: '/features#automation' },
          { text: 'Teams', link: '/features#team-collaboration' },
          { text: 'Organization', link: '/features#organization' },
        ],
      },
      {
        text: 'Pricing & Billing',
        items: [
          { text: 'Plans', link: '/pricing#plans' },
          { text: 'How Paying Works', link: '/pricing#how-paying-works' },
          { text: 'Renewing & Changing Plans', link: '/pricing#renewing-and-changing-plans' },
          { text: 'Devices', link: '/pricing#devices' },
        ],
      },
      {
        text: 'Team Profile Sharing',
        items: [
          { text: 'Creating a Team', link: '/teams#creating-a-team' },
          { text: 'Roles', link: '/teams#roles' },
          { text: 'Sharing a Profile', link: '/teams#sharing-a-profile' },
          { text: 'Sharing Cookies', link: '/teams#sharing-cookies' },
          { text: 'Restricting Access', link: '/teams#restricting-access-to-specific-people' },
          { text: 'One Person at a Time', link: '/teams#one-person-at-a-time' },
        ],
      },
      {
        text: 'Resources',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Changelog', link: '/changelog' },
          { text: 'Local API', link: '/api-guide' },
          { text: 'Privacy Policy', link: '/privacy' },
          { text: 'Terms of Service', link: '/terms' },
          { text: 'Refund Policy', link: '/refund' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Gee2424/ctrldlogin' }],

    footer: {
      message:
        'Commercial software. See the <a href="/ctrldlogin/terms">Terms of Service</a>, <a href="/ctrldlogin/privacy">Privacy Policy</a> and <a href="https://github.com/Gee2424/ctrldlogin/blob/main/LICENSE">License</a>.',
      copyright: '© 2024–2026 stuffules frameworks',
    },

    search: {
      provider: 'local',
    },
  },
})
