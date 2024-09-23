import { useState } from "react";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

import food_img from "../assets/pasta.png";
import { Link } from "react-router-dom";

function Order() {
  const [category, setCategory] = useState("all categories");
  const [activePage, setActivePage] = useState(1);
  const [isOrderListOpen, setIsOrderListOpen] = useState(false);

  const activeCategoryStyle = "text-white bg-red-500";
  const activePageStyle = "text-white bg-black";

  return (
    <div className="flex flex-col items-center gap-10 bg-[#F9F9F9] px-20 pb-20 pt-40">
      <h2 className="text-center text-5xl font-bold leading-snug md:text-start">
        Our Popular Menu
      </h2>

      <ul className="mt-4 flex flex-wrap items-center gap-2 text-lg sm:gap-4 md:gap-6">
        <li onClick={() => setCategory("all categories")}>
          <button
            className={`${
              category === "all categories" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8`}
          >
            All categories
          </button>
        </li>

        <li onClick={() => setCategory("pasta")}>
          <button
            className={`${
              category === "pasta" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8`}
          >
            Pasta
          </button>
        </li>

        <li onClick={() => setCategory("pizza")}>
          <button
            className={`${
              category === "pizza" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8`}
          >
            Pizza
          </button>
        </li>

        <li onClick={() => setCategory("dessert")}>
          <button
            className={`${
              category === "dessert" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8`}
          >
            Dessert
          </button>
        </li>

        <li onClick={() => setCategory("drink")}>
          <button
            className={`${
              category === "drink" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8`}
          >
            Drink
          </button>
        </li>
      </ul>

      <h3 className="border-b border-b-red-500 pb-3 text-2xl font-bold uppercase">
        {category}
      </h3>

      {!isOrderListOpen && (
        <p
          className="text-base font-semibold text-slate-500 hover:underline sm:text-lg lg:hidden"
          onClick={() => setIsOrderListOpen(true)}
        >
          Check Order List
        </p>
      )}

      {isOrderListOpen && (
        <p
          className="text-base font-semibold text-red-500 hover:underline sm:text-lg lg:hidden"
          onClick={() => setIsOrderListOpen(false)}
        >
          Close Order List
        </p>
      )}

      <div className="flex flex-col gap-6 rounded-3xl p-4 sm:border-2 sm:border-red-100">
        <div className="mt-6 flex items-center justify-center gap-3">
          <IoIosArrowBack className="cursor-pointer" />
          <span
            onClick={() => setActivePage(1)}
            className={`${
              activePage === 1 ? activePageStyle : "bg-slate-200"
            } flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm text-xs font-semibold`}
          >
            1
          </span>
          <span
            onClick={() => setActivePage(2)}
            className={`${
              activePage === 2 ? activePageStyle : "bg-slate-200"
            } flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm text-xs font-semibold`}
          >
            2
          </span>
          <span
            onClick={() => setActivePage(3)}
            className={`${
              activePage === 3 ? activePageStyle : "bg-slate-200"
            } flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm text-xs font-semibold`}
          >
            3
          </span>
          <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm bg-slate-200 text-xs font-semibold">
            ...
          </span>
          <IoIosArrowBack className="rotate-180 cursor-pointer" />
        </div>

        <div className="flex gap-6">
          <div
            className={`${
              isOrderListOpen ? "hidden" : "flex"
            } max-w-[700px] flex-wrap items-center justify-center gap-4 sm:flex`}
          >
            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>

              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>

            <div className="flex h-[400px] w-[200px] flex-col items-center gap-2 rounded-3xl border p-6">
              <img
                className="h-[180px] w-[180px]"
                src={food_img}
                alt="food image"
              />
              <h3 className="text-xl font-bold">Spaghetti</h3>

              <div className="flex gap-2 text-xs text-red-500">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSLine />
              </div>

              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </p>
              <p className="mt-4 text-base font-semibold">$12.05</p>
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              !isOrderListOpen ? "hidden" : "flex"
            } h-fit w-[300px] flex-col items-center justify-center rounded-2xl border bg-red-100 p-6 lg:flex`}
          >
            <h3 className="p-10 text-2xl font-bold">Order list</h3>

            <div className="mb-10 h-[1px] w-full bg-slate-500"></div>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Spaghetti</p>
                <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
              </div>
              <div className="flex items-center gap-20">
                <div className="flex items-center justify-center gap-6 font-thin">
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaMinus className="cursor-pointer text-xs text-red-300" />
                  </div>
                  <span>1</span>
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaPlus className="cursor-pointer text-xs text-green-300" />
                  </div>
                </div>
                <span>$35.7</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Spaghetti</p>
                <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
              </div>
              <div className="flex items-center gap-20">
                <div className="flex items-center justify-center gap-6 font-thin">
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaMinus className="cursor-pointer text-xs text-red-300" />
                  </div>
                  <span>1</span>
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaPlus className="cursor-pointer text-xs text-green-300" />
                  </div>
                </div>
                <span>$35.7</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Spaghetti</p>
                <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
              </div>
              <div className="flex items-center gap-20">
                <div className="flex items-center justify-center gap-6 font-thin">
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaMinus className="cursor-pointer text-xs text-red-300" />
                  </div>
                  <span>1</span>
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaPlus className="cursor-pointer text-xs text-green-300" />
                  </div>
                </div>
                <span>$35.7</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Spaghetti</p>
                <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
              </div>
              <div className="flex items-center gap-20">
                <div className="flex items-center justify-center gap-6 font-thin">
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaMinus className="cursor-pointer text-xs text-red-300" />
                  </div>
                  <span>1</span>
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaPlus className="cursor-pointer text-xs text-green-300" />
                  </div>
                </div>
                <span>$35.7</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Spaghetti</p>
                <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
              </div>
              <div className="flex items-center gap-20">
                <div className="flex items-center justify-center gap-6 font-thin">
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaMinus className="cursor-pointer text-xs text-red-300" />
                  </div>
                  <span>1</span>
                  <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                    <FaPlus className="cursor-pointer text-xs text-green-300" />
                  </div>
                </div>
                <span>$35.7</span>
              </div>
            </div>

            <div className="mb-10 h-[1px] w-full bg-slate-500"></div>

            <div className="flex flex-col items-center justify-center gap-2">
              <p className="self-start text-xl font-bold">Voucher Code</p>
              <div className="flex items-center gap-2">
                <input
                  className="rounded-lg p-2"
                  type="text"
                  placeholder="FREETOEAT"
                />
                <button className="rounded-lg bg-blue-400 p-3 font-thin text-white">
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="m-10 h-[1px] w-full bg-slate-500"></div>

            <div className="flex w-full flex-col items-center gap-4">
              <div className="flex w-full justify-between text-xl font-bold">
                <p className="">Subtotal</p>
                <p className="font-semibold text-slate-500">$78.3</p>
              </div>
              <div className="flex w-full justify-between text-xl font-bold">
                <p className="">Tax fee</p>
                <p className="font-semibold text-slate-500">$3.5</p>
              </div>
              <div className="flex w-full justify-between text-xl font-bold">
                <p className="">Voucher</p>
                <p className="font-semibold text-slate-500">$5.0</p>
              </div>
              <div className="flex w-full justify-between text-xl font-bold">
                <p className="">Subtotal</p>
                <p className="font-semibold text-slate-500">$78.3</p>
              </div>
            </div>

            <Link
              to="/cart"
              className="mb-2 mt-10 w-full cursor-pointer rounded-lg bg-red-500 p-2 text-center text-2xl font-bold text-white"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
