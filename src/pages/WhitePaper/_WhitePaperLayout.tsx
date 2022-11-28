import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import DocSidebar from "@theme/DocSidebar";
import { ThemeClassNames } from "@docusaurus/theme-common";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";

import MDXContent from "@theme/MDXContent";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function WhitePaperLayout(props) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <div className={DocPageStyles.docPage}>
        <aside
          className={clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer
          )}
        >
          <DocSidebar
            sidebar={[
              { type: "link", href: "#abstract", label: "Abstract"},
              { type: "link", href: "#peer-to-peer", label: "Peer-to-Peer Model"},
              { type: "link", href: "#premium-pricing", label: "Premium Pricing" },
              { type: "link", href: "#yields-distribution", label: "Yields Distribution" },
              { type: "link", href: "#security", label: "Security" },
              { type: "link", href: "#default-payouts", label: "Default Payouts" },
              { type: "link", href: "#acknowledgments", label: "Acknowledgments" },
              { type: "link", href: "#disclaimer", label: "Disclaimer" },
            ]}
            path="#abstract" onCollapse={function (): void {
              throw new Error("Function not implemented.");
            } } isHidden={false}          ></DocSidebar>
        </aside>
        <main className={clsx(MainStyles.docMainContainer)}>
          <div
            className={clsx(
              "container",
              "padding-top--md",
              "padding-bottom--lg"
            )}
          >
            <div className="row">
              <div className={clsx("col", DocItemColStyles.docItemCol)}>
                <div className={DocItemStyles.docItemContainer}>
                  <article>
                    <div
                      className={clsx(
                        ThemeClassNames.docs.docMarkdown,
                        "markdown"
                      )}
                    >
                      <MDXContent>
                        {props.content}
                      </MDXContent>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
