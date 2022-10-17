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
  organizationName: "Carapace",
  projectName: "website",

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
        docs: false,
        // blog: {
        //   showReadingTime: true,
        //   editUrl: "https://github.com/carapace-finance/website",
        // },
        blog: false,
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
        logo: {
          alt: "Carapace Logo",
          src: "img/white_logo.svg",
        },
        items: [
          { to: "/", label: "Home", position: "right" },
          { to: "/whitepaper", label: "White Paper", position: "right" },
          { to: "/documentation", label: "Documentation", position: "right" },
          { to: "/blogs", label: "Blogs", position: "right" },
          { to: "/signup", label: "SIGN-UP", position: "right" },
        ],
      },
      colorMode: {
        disableSwitch: true,
      },
      // footer: {
      //   style: "dark",
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
      //           href: "https://discord.gg/2hQC6q8CxA",
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
