import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-cropped.svg";
import menu from "../assets/images/menu-00.svg";
import close from "../assets/images/close-00.svg";
import styles from "../style";

import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full flex py-6 justify-between items-center relative z-50 bg-white">
        <img src={logo} alt="veloztech" className="w-2xs h-2xs" />

        {/* Desktop Menu */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`text-[#10323c] font-semibold cursor-pointer text-[16px] lg:hover:text-amber-500 ${
                active === nav.title ? "text-[#fc8318]" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </nav>

      
      {toggle && (
        <div className="sm:hidden w-full bg-white z-40">
          <ul className="w-full bg-white border border-gray-200 rounded-lg text-2xl px-4 py-2">
            {navLinks.map((nav) => (
             <li
  key={nav.id}
  className={`w-full text-left py-1 px-2 text-[#10323c] font-semibold text-[16px] ${styles.flexCenter} ${
    active === nav.title ? "text-[#fc8318]" : "text-dimWhite"
  }`}
  onClick={() => {
    setActive(nav.title);
    setToggle(false);
  }}
>
  <Link to={nav.path}>{nav.title}</Link>
</li>

            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
