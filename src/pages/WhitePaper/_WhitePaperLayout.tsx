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
import { sidebarLinks } from '../../constants';
import Link from "@docusaurus/Link";

export default function WhitePaperLayout(props) {
  const [active, setActive] = useState("");

  return (
    <Layout>
      {/* <div className={DocPageStyles.docPage}>
        <aside
          className={clsx(
            ThemeClassNames.docs.docSidebarContainer,
            SidebarStyles.docSidebarContainer
          )}
        >
          <div className="sticky top-3">
            <ul>
              {sidebarLinks.map((nav, _) => (
                <li
                  key={nav.id}
                  onClick={() => {setActive(nav.id)}}
                  className={` text-darkSidebar list-none font-manrope font-semibold cursor-pointer leading-[18px] tracking-[0.02em] text-[16px] py-1.5 px-3 hover:bg-gray-100
                  ${active === nav.id ? "underline underline-offset-4 decoration-2 decoration-buttonPink decoration-solid" : ""}
                  mr-10`}
                >
                  <Link
                    to={nav.id}
                    className={`block
                   ${active!== nav.id ? "group transition-all hover:no-underline hover:text-darkSidebar" : "hover:decoration-buttonPink decoration-buttonPink"}
                  `}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
      </div> */}
    </Layout>
  );
}
