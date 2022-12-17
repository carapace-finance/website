// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");
// require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Decentralized protection against default risk in crypto loans",
  url: "https://carapace.finance",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Carapace",
  projectName: "website",
  plugins: [require.resolve("docusaurus-plugin-fathom")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   routeBasePath: "/",
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   editUrl: "https://github.com/carapace-finance/website",
        // },
        pages: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: false,
        },
        blog: {
          blogSidebarCount: 8,
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/style/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      fathomAnalytics: {
        siteId: process.env.FATHOM_SITE_ID,
        customDomain: "https://www.carapace.finance",
      },
      image: "img/socialmeta.png",
      // navbar: {
      //   logo: {
      //     alt: "Carapace Logo",
      //     src: "",
      //   },
      //   items: [
      //     { to: "/home", label: "Home", position: "right" },
      //     { to: "/whitepaper", label: "White Paper", position: "right" },
      //     { to: "/documentation", label: "Documentation", position: "right" },
      //     { to: "/blog", label: "Blog", position: "right" },
      //   ],
      // },
      colorMode: {
        disableSwitch: true,
      },
      // footer: {
      //   style: "light",
      //   links: [
      //     {
      //       title: "Protocol",
      //       items: [
      //         {
      //           label: "White Paper",
      //           to: "/whitepaper",
      //         },
      //         // {
      //         //   label: "Docs",
      //         //   to: "/docs/abstract",
      //         // },
      //         // {
      //         //   label: "Developers",
      //         //   to: "/developers/intro",
      //         // },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Discord",
      //           href: "https://discord.gg/f34GS9uheN",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/carapacefinance",
      //         },
      //       ],
      //     },
      //     {
      //       title: "More",
      //       items: [
      //         // {
      //         //   label: "Blog",
      //         //   to: "/blog",
      //         // },
      //         {
      //           label: "GitHub",
      //           href: "https://github.com/carapace-finance",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Carapace.`,
      // },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
