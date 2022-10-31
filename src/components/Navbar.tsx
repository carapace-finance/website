import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import assets from '../assets';
import { navLinks } from '../constants';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const Navbar = () => {
  const [active, setActive] = useState(usePathname);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex h-[65px] md:h-[102px] px-[20px] md:px-[64px] justify-between items-center border-b">
      <a href="/">
        <img src={assets.logo} alt="carapace" className="w-[145px] md:w-[245px] h-[43px] md:h-[62px] object-contain" />
      </a>

      <ul className="list-none lg:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, _) => (
          <li
            key={nav.id}
            className={`decoration-buttonPink text-customDarkBlue list-none font-manrope font-normal cursor-pointer leading-[18px] tracking-[0.02em] text-[22px] ${
              active === nav.id ? "underline underline-offset-4 decoration-2 decoration-buttonPink decoration-solid" : ""
            } mr-10`}
            onClick={() => {
              setActive(nav.id)
            }
          }
          >
            <a className={`hover:text-customDarkBlue decoration-buttonPink ${active !== nav.id ? "group transition-all duration-300 ease-in-out  hover:no-underline" : "hover:decoration-buttonPink"}`}  href={`${nav.id}`}>
              <span className={`bg-left-bottom bg-gradient-to-r from-buttonPink to-buttonPink bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"}`} >
                {nav.title}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <a onClick={() => setToggle(!toggle)}>MENU</a>
        {/* <img
          src={assets.hamburger}
          alt="menu"
          className="w-[22px] sm:w-[32px] h-[16px] sm:h-[26px] object-cover"
          onClick={() => setToggle(!toggle)}
        />
 */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col p-6 bg-[url('.././assets/mobile_nav_bg.png')] h-full w-full right-0 top-0 fixed overflow-hidden z-10 bg-cover bg-no-repeat`}
        >
          <div className="flex flex-row items-center w-full">
            <img src={assets.footerCarapace} alt="carapace" className="w-[150px]" />
            <div className="flex-1"></div>
            <img src={assets.close} alt="back" className="w-[30px] h-[20px] object-cover" onClick={() => setToggle(!toggle)} />
          </div>
          <div className="h-[250px]"></div>
          <ul className="ml-[36px] list-none flex justify-start items-left flex-col">
            {navLinks.map((nav, _) => (
              <li
                key={nav.id}
                className={`${active === nav.id ? "opacity-100" : "opacity-70" } text-white list-none font-manrope font-semibold leading-[18px] cursor-pointer text-[34px] tracking-[0.02em] mb-[55px]`}
                onClick={() => setActive(nav.id)}
              >
                <a className={`${active === nav.id ? "underline underline-offset-8 decoration-buttonPink" : ""} hover:no-underline hover:text-white`} href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="h-[50px]"></div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
