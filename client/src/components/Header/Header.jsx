import { useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../../contexts/UserContext";

const activeLinkStyle =
  "border-b border-red-500 text-red-500 pb-1 font-semibold";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, signOut } = useAuth();

  const handleActiveLink = (link) => {
    if (link === "none") setActiveLink(link);

    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute flex w-full justify-between bg-transparent px-10 py-8 md:px-32 xl:px-48 2xl:px-80">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 rotate-[-20deg] items-center justify-center rounded-full bg-[#F54748]">
          <span className="p-2 text-xl font-semibold text-white">F</span>
        </div>

        <p className="font-bold text-[#523E2C]">
          Foodio<span className="text-red-500">.</span>
        </p>
      </div>

      <div className="relative flex items-center">
        <div
          className="rounded-lg p-1 text-3xl lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </div>

        {isMenuOpen && (
          <div className="absolute right-1 top-10 w-[150px] max-w-[150px] rounded-lg bg-white p-4 shadow-md lg:flex">
            <ul className="text-md items-center gap-6 space-y-2 divide-y divide-solid divide-slate-200 lg:flex lg:gap-3 lg:text-xs">
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

        <ul className="hidden items-center gap-3 text-sm lg:flex 2xl:gap-4 2xl:text-base">
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

      <div
        className={`hidden items-center justify-between gap-4 lg:${user ? "hidden" : "flex"}`}
      >
        <Link
          onClick={() => handleActiveLink("none")}
          to="/cart"
          className="rounded-full bg-white p-3 text-slate-700"
        >
          <MdOutlineShoppingCart />
        </Link>

        <Link
          onClick={() => handleActiveLink("none")}
          to="/log-in"
          className="rounded-xl bg-[#F54748] px-8 py-3 text-sm font-semibold text-white"
        >
          Log in
        </Link>
        {user && <p className="w-full text-lg font-bold">{user.username}</p>}
      </div>

      <div
        className={`hidden items-center justify-between gap-4 lg:${user ? "flex" : "hidden"}`}
      >
        {user && (
          <p>
            Hey, <span className="text-lg font-bold">{user.username}</span>
          </p>
        )}
        <Link
          onClick={() => handleActiveLink("none")}
          to="/cart"
          className="rounded-full bg-white p-3 text-slate-700"
        >
          <MdOutlineShoppingCart />
        </Link>

        <Link
          onClick={() => {
            handleActiveLink("none");
            signOut();
          }}
          to="/log-in"
          className="rounded-xl bg-[#F54748] px-8 py-3 text-sm font-semibold text-white"
        >
          Log out
        </Link>
      </div>
    </header>
  );
}

export default Header;
