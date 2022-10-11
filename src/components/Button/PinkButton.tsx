import React from "react";

export const PinkButton = (props) => (
  // <Link className={button.container} href={props.href} target={props.target}>
  //   {props.text}
  // </Link>
  <a href={props.href} target="_blank">
    <button className={`bg-buttonPink text-white text-transform: uppercase ${props.fontSize} ${props.borderRadius} font-normal leading-[50px] px-12 py-7 text-center hover:bg-buttonPinkHover`}>{props.text}</button>
  </a>
);
