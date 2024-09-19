import { useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const activeLinkStyle = "border-b border-red-500 text-red-500 pb-1";

  const handleActiveLink = (link) => setActiveLink(link);

  return (
    <header className="flex justify-between px-48 2xl:px-60 lg:px-40 py-8 bg-transparent absolute w-full">
      <div className="flex gap-2 items-center">
        <div className="bg-[#F54748] rounded-full rotate-[-20deg] flex items-center justify-center h-10 w-10">
          <span className="p-2 text-white font-semibold text-xl">F</span>
        </div>
        <p className="text-[#523E2C] font-bold">
          Foodio<span className="text-red-500">.</span>
        </p>
      </div>

      <div className="flex items-center">
        <div className="lg:hidden">
          <GiHamburgerMenu />
        </div>

        <ul className="hidden lg:flex lg:text-xs lg:gap-3 text-sm gap-6 items-center">
          <li
            onClick={() => handleActiveLink("home")}
            className={activeLink === "home" && activeLinkStyle}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => handleActiveLink("menu")}
            className={activeLink === "menu" && activeLinkStyle}
          >
            <Link to="/menu">Menu</Link>
          </li>
          <li
            onClick={() => handleActiveLink("about-us")}
            className={activeLink === "about-us" && activeLinkStyle}
          >
            <Link to="/about-us">About us</Link>
          </li>
          <li
            onClick={() => handleActiveLink("order")}
            className={activeLink === "order" && activeLinkStyle}
          >
            <Link to="/order">Order online</Link>
          </li>
          <li
            onClick={() => handleActiveLink("reservation")}
            className={activeLink === "reservation" && activeLinkStyle}
          >
            <Link to="/reservation">Reservation</Link>
          </li>
          <li
            onClick={() => handleActiveLink("contact-us")}
            className={activeLink === "contact-us" && activeLinkStyle}
          >
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4 justify-between">
        <div className="bg-white p-3 rounded-full text-slate-700">
          <MdOutlineShoppingCart />
        </div>
        <button className="px-8 py-3 text-white font-semibold  text-sm bg-[#F54748] rounded-xl">
          Log in
        </button>
      </div>
    </header>
  );
}

export default Header;
