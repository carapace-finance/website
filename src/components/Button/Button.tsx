import Link from "@docusaurus/Link";
import React from "react";
import button from "./button.module.css";

export const Button = (props) => (
  <Link className={button.container} href={props.href} target={props.target}>
    {props.text}
  </Link>
);
