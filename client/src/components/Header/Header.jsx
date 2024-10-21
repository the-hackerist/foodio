/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import { useAuth } from "../../contexts/UserContext";
import { useCart } from "../../contexts/CartContext";
import { useMenu } from "../../contexts/MenuContext";

const activeLinkStyle =
  "border-b border-red-500 text-red-500 pb-1 font-semibold";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  const { navigation, setMenu } = useMenu();
  const { user, signOut, getUser } = useAuth();
  const { resetCart, cart } = useCart();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();

      setCurrUser({ ...currUser, ...data });
    };

    fetchUser();
  }, [cart]);

  const handleActiveLink = (link) => {
    // if (link === "cart") {
    //   setMenu("order");
    //   return;
    // }

    setMenu(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0 flex w-full justify-between bg-transparent px-10 py-8 md:px-20 lg:px-24 xl:px-48 2xl:px-80">
      <Link
        className="flex cursor-pointer items-center gap-2"
        to="/"
        onClick={() => handleActiveLink("home")}
      >
        <div className="flex h-10 w-10 rotate-[-20deg] items-center justify-center rounded-full bg-[#F54748]">
          <span className="p-2 text-xl font-semibold text-white">F</span>
        </div>

        <p className="font-bold text-[#523E2C]">
          Foodio<span className="text-red-500">.</span>
        </p>
      </Link>

      <div className="relative flex items-center">
        <div
          className="rounded-lg p-1 text-3xl lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </div>

        {isMenuOpen && (
          <div className="absolute right-1 top-10 z-[100] w-[150px] max-w-[150px] rounded-lg bg-white p-4 shadow-md lg:hidden">
            <ul className="text-md items-center gap-6 space-y-2 divide-y divide-solid divide-slate-200 lg:flex lg:gap-3 lg:text-xs">
              <li>
                <Link
                  to="/"
                  onClick={() => handleActiveLink("home")}
                  className={`${
                    navigation === "home"
                      ? `${activeLinkStyle} border-none pb-0`
                      : ""
                  } w-fit`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about-us"
                  onClick={() => handleActiveLink("about-us")}
                  className={`${
                    navigation === "about-us"
                      ? `${activeLinkStyle} border-none pb-0`
                      : ""
                  } w-fit`}
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/order"
                  onClick={() => handleActiveLink("order")}
                  className={`${
                    navigation === "order"
                      ? `${activeLinkStyle} border-none pb-0`
                      : ""
                  } w-fit`}
                >
                  Order
                </Link>
              </li>

              <li>
                <Link
                  to="/reservation"
                  onClick={() => handleActiveLink("reservation")}
                  className={`${
                    navigation === "reservation"
                      ? `${activeLinkStyle} border-none pb-0`
                      : ""
                  } w-fit`}
                >
                  Reservation
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  onClick={() => handleActiveLink("contact-us")}
                  className={`${
                    navigation === "contact-us"
                      ? `${activeLinkStyle} border-none pb-0`
                      : ""
                  } w-fit`}
                >
                  Contact us
                </Link>
              </li>

              <li className="flex items-center gap-1">
                <Link
                  to="/cart"
                  onClick={() => handleActiveLink("cart")}
                  className={`${
                    navigation === "cart"
                      ? `${activeLinkStyle} border-none pb-0`
                      : ""
                  } w-fit`}
                >
                  Cart
                </Link>
                {user && (
                  <p className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white">
                    {currUser && currUser?.cart?.length}
                  </p>
                )}
              </li>

              {!user ? (
                <li>
                  <Link
                    to="/log-in"
                    onClick={() => handleActiveLink("log-in")}
                    className={`${
                      navigation === "log-in"
                        ? `${activeLinkStyle} border-none pb-0`
                        : ""
                    } w-fit`}
                  >
                    Log in
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="/profile"
                    onClick={() => handleActiveLink("profile")}
                    className={`${
                      navigation === "profile"
                        ? `${activeLinkStyle} border-none pb-0`
                        : ""
                    } w-fit`}
                  >
                    Profile
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}

        <ul className="hidden items-center gap-3 text-sm lg:flex 2xl:gap-4 2xl:text-base">
          <li className={navigation === "home" ? activeLinkStyle : ""}>
            <Link to="/" onClick={() => handleActiveLink("home")}>
              Home
            </Link>
          </li>

          <li className={navigation === "about-us" ? activeLinkStyle : ""}>
            <Link to="/about-us" onClick={() => handleActiveLink("about-us")}>
              About us
            </Link>
          </li>
          <li className={navigation === "order" ? activeLinkStyle : ""}>
            <Link to="/order" onClick={() => handleActiveLink("order")}>
              Order
            </Link>
          </li>
          <li className={navigation === "reservation" ? activeLinkStyle : ""}>
            <Link
              to="/reservation"
              onClick={() => handleActiveLink("reservation")}
            >
              Reservation
            </Link>
          </li>
          <li className={navigation === "contact-us" ? activeLinkStyle : ""}>
            <Link
              to="/contact-us"
              onClick={() => handleActiveLink("contact-us")}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`hidden items-center justify-between gap-4 lg:${user ? "hidden" : "flex"}`}
      >
        <Link
          onClick={() => handleActiveLink("cart")}
          to="/cart"
          className="rounded-full p-3 text-slate-700"
        >
          <MdOutlineShoppingCart />
        </Link>

        <Link
          onClick={() => handleActiveLink("log-in")}
          to="/log-in"
          className="rounded-xl bg-[#F54748] px-8 py-3 text-sm font-semibold text-white"
        >
          Log in
        </Link>

        {user && (
          <Link to="/profile" className="w-full text-lg font-bold">
            {user.username}
          </Link>
        )}
      </div>

      <div
        className={`relative hidden items-center justify-between gap-4 lg:${user ? "flex" : "hidden"}`}
      >
        {user && (
          <p className="text-sm font-semibold">
            Hey,{" "}
            <Link
              to="/profile"
              className="text-lg font-bold capitalize hover:underline"
              onClick={() => setMenu("profile")}
            >
              {user.username}
            </Link>
          </p>
        )}

        <Link
          onClick={() => {
            handleActiveLink("none");
            setMenu("cart");
          }}
          to="/cart"
          className="relative rounded-full p-3 text-slate-700"
        >
          <MdOutlineShoppingCart />

          {user && (
            <p className="absolute right-1 top-[2px] z-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
              {currUser && currUser?.cart?.length}
            </p>
          )}
        </Link>

        <Link
          onClick={() => {
            handleActiveLink("none");
            resetCart();
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
