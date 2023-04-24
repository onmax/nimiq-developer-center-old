import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/nimiq-developer-center/",
  title: "Nimiq Developer Center",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Protocol", link: "/protocol" },
      { text: "Nodes", link: "/nodes" },
      { text: "UI", link: "/ui" },
    ],

    sidebar: [
      { text: "Glossary", link: "/protocol/glossary" },
      {
        text: "Protocol Chapters",
        collapsed: false,
        items: [
          { text: "Accounts", link: "/protocol/accounts" },
          { text: "Block format", link: "/protocol/block-format" },
          { text: "Block Live Sync", link: "/protocol/block-live-sync" },
          { text: "Fork proofs", link: "/protocol/fork-proofs" },
          { text: "Forks and upgrades", link: "/protocol/forks-and-upgrades" },
          { text: "History Macro Sync", link: "/protocol/history-macro-sync" },
          { text: "Light Macro Sync", link: "/protocol/light-macro-sync" },
          { text: "Mempool", link: "/protocol/mempool" },
          {
            text: "Messages and requests",
            link: "/protocol/messages-and-requests",
          },
          { text: "Nodes and Sync", link: "/protocol/nodes-and-sync" },
          { text: "OASIS", link: "/protocol/OASIS" },
          {
            text: "Optimistic and pessimistic modes",
            link: "/protocol/optimistic-and-pessimistic-mode.md",
          },
          { text: "Overview", link: "/protocol/overview" },
          { text: "Prover node", link: "/protocol/prover-node" },
          { text: "Punishments", link: "/protocol/punishments" },
          { text: "Rewards", link: "/protocol/rewards" },
          { text: "RPC client", link: "/protocol/rpc-client" },
          { text: "Security Analysis", link: "/protocol/security-analysis" },
          { text: "Skip blocks", link: "/protocol/skip-blocks" },
          { text: "Slots", link: "/protocol/Slots" },
          { text: "Staking Contract", link: "/protocol/staking-contract" },
          { text: "Validator keys", link: "/protocol/validator-keys" },
          { text: "VRF", link: "/protocol/verifiable-random-functions" },
          {
            text: "Zero-knowledge proofs and SNARKs",
            link: "/protocol/ZKP-and-SNARKs.md",
          },
        ],
      },
      {
        text: "Testnet",
        collapsed: false,
        items: [
          {
            text: "Becoming a validator",
            link: "/protocol/becoming-a-validator.md",
          },
          {
            text: "Becoming a validator using JSON-CLI",
            link: "/protocol/becoming-a-validator-cli.md",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/onmax/" }],
  },
});
