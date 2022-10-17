import React from "react";

export const PinkBorderButton = (props) => (
  <a href={props.href} target="_blank">
    <button className={`border-4 border-buttonPink rounded-[200px] text-white tracking-[0.02em] text-transform: uppercase font-normal leading-[50px] text-center hover:text-buttonPinkHover hover:border-buttonPinkHover transition-all px-[65px] sm:px-[55px] py-[10px] sm:py-[27px] text-lg sm:text-3xl`}>{props.text}</button>
  </a>
);
