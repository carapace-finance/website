import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import CarapaceLogoSvg from "../../static/img/green_logo.svg";
import index from "./index.module.css";
import Hero from "../components/Hero";
import ContentMain from "../components/ContentMain";
import Supporters from "../components/Supporters";
import LendingProtocol from "../components/LendingProtocol";
import Footer from "../components/Footer";


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const jobsPage = useDocusaurusContext().siteConfig.baseUrl + "jobs";
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Carapace is building decentralized protection against default risk in crypto loans."
    >
        <Hero />
        <div className="h-[67px] sm:h-[185px]"></div>
        <ContentMain />
        <div className="h-[153px] lg:h-[76px]"></div>
        <Supporters />
        <div className="h-[61px] lg:h-[199px]"></div>
        <LendingProtocol/>
        <div className="h-[61px] lg:h-[100px]"></div>
        <Footer />
      <section className={index.container}>
        <CarapaceLogoSvg className={index.logo} />
        <h1>{siteConfig.title}</h1>
      </section>
    </Layout>
  );
}
