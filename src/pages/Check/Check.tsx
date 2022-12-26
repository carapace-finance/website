import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { ThemeClassNames } from "@docusaurus/theme-common";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";
import MDXContent from "@theme/MDXContent";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function Check(props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const jobsPage = useDocusaurusContext().siteConfig.baseUrl + "jobs";
  return (
    <Layout>
      <div className={DocPageStyles.docPage}>
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
