import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import CarapaceLogoSvg from "../../static/img/green_logo.svg";
import index from "./index.module.css";
import { Button } from "../components/Button/Button";
import { PinkButton } from "../components/Button/PinkButton";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const jobsPage = useDocusaurusContext().siteConfig.baseUrl + "jobs";
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Carapace is building decentralized protection against default risk in crypto loans."
    >
      <section className={index.container}>
        <CarapaceLogoSvg className={index.logo} />
        <h1>{siteConfig.title}</h1>
        <PinkButton />
        <div className={index.buttons}>
          <Button
            href="https://xzpl2jauxb6.typeform.com/to/hSmuyZph"
            target="_blank"
            text="Sign Up for Beta"
          ></Button>
          <Button href={jobsPage} target="_self" text="Join our Team"></Button>
        </div>
      </section>
    </Layout>
  );
}
