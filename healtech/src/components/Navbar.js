import { useState } from "react";

import close from "../assets/close.svg";
import logo from "../assets/logo.jpg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar z-10  ">
      <img src={logo} alt="Logo" className="w-[207px] h-[44px] sm:w-[227px] sm:h-[64px] mx-5 my-4 md:my-6 md:ml-16 md:mr-16 " />

      <ul className="list-none pt-8 pb-4 pr-16 md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-semibold text-primary_font opacity-60 cursor-pointer text-[22px] ${active === nav.title ? "text-black" : "text-primary_font"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center md:py-8 z-10">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mx-4"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-10 absolute top-20 right-0 mx-1 my-3 rounded-xl sidebar bg-primary_font text-white max-w-fit font-inter
            `}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col z-10 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-inter font-semibold text-white cursor-pointer text-[22px] z-20 ${active === nav.title ? "text-primary_yellow" : "text-white"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(!toggle)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar