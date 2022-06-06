import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import CarapaceLogoSvg from "../../static/img/green_logo.svg";
import index from "./index.module.css";
import { Button } from "../components/Button/Button";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Carapace Finance is building decentralized protection against default risk in crypto loans."
    >
      <section className={index.container}>
        <CarapaceLogoSvg className={index.logo} />
        <h1>{siteConfig.title}</h1>
        <div className={index.buttons}>
          <Button
            text="Sign Up for Beta"
            href="https://notionforms.io/forms/sign-up-for-beta-2"
          ></Button>
          <Button
            text="We're Hiring"
            href="/jobs"
          ></Button>
        </div>
      </section>
    </Layout>
  );
}
