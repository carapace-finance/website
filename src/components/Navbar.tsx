import React, { useState } from "react";
import assets from '../assets';
import { navLinks } from '../constants';
import { PinkButton } from "./Button/PinkButton";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex h-[65px] md:h-[102px] px-[20px] md:px-[64px] justify-between items-center">
      <img src={assets.logo} alt="carapace" className="w-[145px] md:w-[245px] h-[43px] md:h-[62px]" />

      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, _) => (
          <li
            key={nav.id}
            className={`text-customDarkBlue list-none font-manrope font-normal cursor-pointer leading-[18px] tracking-[0.02em] text-[22px] ${
              active === nav.title ? "underline underline-offset-2 decoration-buttonPink" : ""
            } mr-10`}
            onClick={() => setActive(nav.title)}
          >
            <a className="hover:decoration-buttonPink hover:text-customDarkBlue transition-all" href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:block hidden">
      <PinkButton
        fontWeight="font-medium"
        fontSize="text-[22px]"
        borderRadius="rounded-[100px]"
        text="sign-up"
        paddingX="px-[28px]"
        paddingY="py-[5px]"
        href="https://xzpl2jauxb6.typeform.com/to/hSmuyZph"
      />
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={assets.hamburger}
          alt="menu"
          className="w-[22px] h-[16px] object-cover"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col p-6 bg-customDarkBlue h-full w-full right-0 top-0 items-center fixed overflow-hidden z-10`}
        >
          <div className="flex flex-row items-center w-full">
            <img src={assets.footerCarapace} alt="carapace" className="w-[150px]" />
            <div className="flex-1"></div>
            <img src={assets.arrow} alt="back" className="w-[30px] h-[20px] object-cover" onClick={() => setToggle(!toggle)} />
          </div>
          <div className="h-[120px]"></div>
          <ul className="list-none flex justify-start items-center  flex-col">
            {navLinks.map((nav, _) => (
              <li
                key={nav.id}
                className={`text-white list-none font-manrope font-medium leading-[18px] cursor-pointer text-[22px] tracking-[0.02em]${
                  active === nav.title ? "underline underline-offset-8 decoration-buttonPink" : ""
                } mb-[55px]`}
                onClick={() => setActive(nav.title)}
              >
                <a className="hover:decoration-buttonPink hover:text-white transition-all" href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="h-[50px]"></div>
      <PinkButton
        fontWeight="font-medium"
        fontSize="text-[22px]"
        borderRadius="rounded-[100px]"
        text="sign-up"
        paddingX="px-[28px]"
        paddingY="py-[5px]"
        href="https://xzpl2jauxb6.typeform.com/to/hSmuyZph"
      />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
