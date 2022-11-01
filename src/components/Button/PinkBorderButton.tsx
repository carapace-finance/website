import React from "react";

export const PinkBorderButton = (props) => (
  <a href={props.href} target="_blank">
    <button className={`border-4 border-buttonPink rounded-[200px] text-white tracking-[0.02em] text-transform: uppercase font-normal leading-[50px] text-center hover:text-buttonPinkHover hover:border-buttonPinkHover transition-all ${props.paddingX} ${props.paddingY} ${props.fontSize}`}>{props.text}</button>
  </a>
);
