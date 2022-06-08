// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Decentralized protection against default risk in crypto loans",
  url: "https://carapace.finance",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Carapace Finance",
  projectName: "website",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/carapace-finance/website",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/carapace-finance/website",
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
      navbar: {
        title: "Carapace Finance",
        logo: {
          alt: "Carapace Logo",
          src: "img/white_logo.svg",
        },
        items: [
          { to: "/whitepaper", label: "White Paper", position: "right" },
          {
            type: "doc",
            docId: "docs/abstract",
            position: "right",
            label: "Docs",
            to: "/docs/docs/abstract",
          },
          {
            type: "doc",
            docId: "developers/intro",
            position: "right",
            label: "Developers",
            to: "/docs/developers/intro",
          },
          { to: "/jobs", label: "Jobs", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Protocol",
            items: [
              {
                label: "White Paper",
                to: "/whitepaper",
              },
              {
                label: "Docs",
                to: "/docs/abstract",
              },
              {
                label: "Developers",
                to: "/developers/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/ZqeB5MHzjX",
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
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/carapace-finance",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Carapace Protocol.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
