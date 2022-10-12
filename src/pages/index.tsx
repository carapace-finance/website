import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import CarapaceLogoSvg from "../../static/img/green_logo.svg";
import index from "./index.module.css";
import Hero from "../components/Hero";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const jobsPage = useDocusaurusContext().siteConfig.baseUrl + "jobs";
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Carapace is building decentralized protection against default risk in crypto loans."
    >
        <Hero />
      <section className={index.container}>
        <CarapaceLogoSvg className={index.logo} />
        <h1>{siteConfig.title}</h1>
      </section>
    </Layout>
  );
}
