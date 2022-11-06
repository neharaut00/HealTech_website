import { useState } from "react";

import close from "../assets/close.svg";
import logo from "../assets/logo.jpg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img src={logo} alt="Logo" className="w-[227px] h-[64px] my-6 ml-16 mr-16 " />

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

      <div className="md:hidden flex flex-1 justify-end items-center md:py-8">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mx-4"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } bg-primary_blue p-6 bg-black-gradient absolute top-20 right-0 mx-4 min-w-[240px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-inter font-semibold text-primary_font opacity-60 cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-primary_font"
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
}

export default Navbar