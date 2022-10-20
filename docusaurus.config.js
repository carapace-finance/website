// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
  // plugins: [require.resolve("docusaurus-plugin-fathom")],
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
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: "https://github.com/carapace-finance/website",
        // },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/style/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      fathomAnalytics: {
        siteId: process.env.FATHOM_SITE_ID,
      },
      navbar: {
        logo: {
          alt: "Carapace Logo",
          src: "img/white_logo.svg",
        },
        items: [
          { to: "/home", label: "Home", position: "right" },
          { to: "/whitepaper", label: "White Paper", position: "right" },
          { to: "/documentation", label: "Documentation", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
        ],
      },
      colorMode: {
        disableSwitch: true,
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Protocol",
            items: [
              {
                label: "White Paper",
                to: "/whitepaper",
              },
              // {
              //   label: "Docs",
              //   to: "/docs/abstract",
              // },
              // {
              //   label: "Developers",
              //   to: "/developers/intro",
              // },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/f34GS9uheN",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/carapacefinance",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/carapace-finance",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carapace.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
