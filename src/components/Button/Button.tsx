import Link from "@docusaurus/Link";
import React from "react";
import button from "./button.module.css";

export const Button = (props) => (
  <Link className={button.container} href={props.href}>
    <a className={button.text} target="_blank">
      {props.text}
    </a>
  </Link>
);
