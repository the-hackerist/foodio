import { useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle =
    "border-b border-red-500 text-red-500 pb-1 font-semibold";

  const handleActiveLink = (link) => {
    if (link === "none") setActiveLink(link);

    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between px-10 md:px-32 xl:px-48 2xl:px-80 py-8 bg-transparent absolute w-full">
      <div className="flex gap-2 items-center">
        <div className="bg-[#F54748] rounded-full rotate-[-20deg] flex items-center justify-center h-10 w-10">
          <span className="p-2 text-white font-semibold text-xl">F</span>
        </div>
        <p className="text-[#523E2C] font-bold">
          Foodio<span className="text-red-500">.</span>
        </p>
      </div>

      <div className="flex items-center relative">
        <div
          className="lg:hidden p-1 rounded-lg text-3xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </div>

        {isMenuOpen && (
          <div className="shadow-md bg-white rounded-lg p-4 absolute top-10 right-1 w-[150px] lg:hidden">
            <ul className="lg:flex text-md lg:text-xs lg:gap-3 gap-6 items-center divide-y space-y-2 divide-solid divide-slate-200">
              <li
                onClick={() => handleActiveLink("home")}
                className={
                  activeLink === "home" && `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => handleActiveLink("menu")}
                className={
                  activeLink === "menu" && `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/menu">Menu</Link>
              </li>
              <li
                onClick={() => handleActiveLink("about-us")}
                className={
                  activeLink === "about-us" &&
                  `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/about-us">About us</Link>
              </li>
              <li
                onClick={() => handleActiveLink("order")}
                className={
                  activeLink === "order" &&
                  `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/order">Order online</Link>
              </li>
              <li
                onClick={() => handleActiveLink("reservation")}
                className={
                  activeLink === "reservation" &&
                  `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/reservation">Reservation</Link>
              </li>
              <li
                onClick={() => handleActiveLink("contact-us")}
                className={
                  activeLink === "contact-us" &&
                  `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/contact-us">Contact us</Link>
              </li>

              <li
                onClick={() => handleActiveLink("cart")}
                className={
                  activeLink === "cart" && `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/cart">Check cart</Link>
              </li>

              <li
                onClick={() => handleActiveLink("log-in")}
                className={
                  activeLink === "log-in" &&
                  `${activeLinkStyle} border-none pb-0`
                }
              >
                <Link to="/log-in">Log in</Link>
              </li>
            </ul>
          </div>
        )}

        <ul className="hidden lg:flex text-sm 2xl:text-base 2xl:gap-4 gap-3  items-center">
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

      <div className="hidden lg:flex items-center gap-4 justify-between">
        <Link
          onClick={() => handleActiveLink("none")}
          to="/cart"
          className="bg-white p-3 rounded-full text-slate-700"
        >
          <MdOutlineShoppingCart />
        </Link>

        <Link
          onClick={() => handleActiveLink("none")}
          to="/log-in"
          className="px-8 py-3 text-white font-semibold  text-sm bg-[#F54748] rounded-xl"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}

export default Header;
