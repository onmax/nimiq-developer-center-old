import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/nimiq-developer-center/',
  title: "Nimiq Developer Center",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Protocol', link: '/protocol' },
      { text: 'Nodes', link: '/nodes' },
      { text: 'UI', link: '/ui' },
    ],

    sidebar: [
      { text: 'Glossary', link: '/glossary' },
      {
        text: 'Protocol Chapters',
        items: [
          { text: 'Accounts', link: '/protocol/accounts' },
          { text: 'Fork proofs', link: '/protocol/fork-proofs' },
          { text: 'Forks-and-upgrades', link: '/protocol/forks-and-upgrades' },
        ]
      },
      {
        text: 'Run your own node',
        items: [
          { text: 'Run a full node', link: 'https://nimiq.com' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/onmax/' }
    ]
  }
})
