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
            <a className="hover:decoration-buttonPink hover:text-customDarkBlue transition-all" href={`#${nav.id}`}>{nav.title}</a>
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
        href={`#signup`}
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
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`list-none font-manrope font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
