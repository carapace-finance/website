import React from "react";

export const PinkButton = (props) => (
  <a href={props.href} target="_blank">
    <button className={`bg-buttonPink text-white text-transform: uppercase leading-[50px] text-center hover:bg-buttonPinkHover transition-all ${props.fontWeight} ${props.paddingX} ${props.paddingY} ${props.fontSize} ${props.borderRadius} `}>{props.text}</button>
  </a>
);
