import { useState } from "react";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import food_img from "../assets/pasta.png";

function Order() {
  const [category, setCategory] = useState("all categories");
  const [activePage, setActivePage] = useState(1);

  const activeCategoryStyle = "text-white bg-red-500";
  const activePageStyle = "text-white bg-black";

  return (
    <div className="px-20 pb-20 pt-60 flex items-center flex-col gap-10 bg-[#F9F9F9]">
      <h2 className="text-5xl font-bold">Our Popular Menu</h2>
      <ul className="flex items-center gap-6 text-lg mt-4">
        <li onClick={() => setCategory("all categories")}>
          <button
            className={`${
              category === "all categories" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            All categories
          </button>
        </li>

        <li onClick={() => setCategory("pasta")}>
          <button
            className={`${
              category === "pasta" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            Pasta
          </button>
        </li>

        <li onClick={() => setCategory("pizza")}>
          <button
            className={`${
              category === "pizza" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            Pizza
          </button>
        </li>

        <li onClick={() => setCategory("dessert")}>
          <button
            className={`${
              category === "dessert" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            Dessert
          </button>
        </li>

        <li onClick={() => setCategory("drink")}>
          <button
            className={`${
              category === "drink" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            Drink
          </button>
        </li>
      </ul>

      <h3 className="text-2xl uppercase font-bold border-b border-b-red-500 pb-3">
        {category}
      </h3>

      <div className="flex gap-6">
        <div className="flex items-center gap-4 flex-wrap max-w-[640px]">
          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>

            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center border w-[200px] h-[400px] p-6 rounded-3xl gap-2">
            <img
              className="w-[180px] h-[180px]"
              src={food_img}
              alt="food image"
            />
            <h3 className="font-bold text-xl">Spaghetti</h3>

            <div className="flex text-red-500 gap-2 text-xs">
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
            <p className="font-semibold text-base mt-4">$12.05</p>
            <div className="flex items-center justify-center font-thin gap-6">
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaMinus className="text-xs text-red-300 cursor-pointer" />
              </div>
              <span>1</span>
              <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                <FaPlus className="text-xs text-green-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] border bg-red-100 rounded-2xl h-fit flex items-center justify-center flex-col p-6">
          <h3 className="text-2xl font-bold p-10">Order list</h3>

          <div className="bg-slate-500 h-[1px] w-full mb-10"></div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="bg-slate-500 h-[1px] w-full mb-10"></div>

          <div className="flex items-center flex-col justify-center gap-2">
            <p className="text-xl font-bold self-start">Voucher Code</p>
            <div className="flex items-center gap-2">
              <input
                className="p-2 rounded-lg"
                type="text"
                placeholder="FREETOEAT"
              />
              <button className="bg-blue-400 text-white font-thin p-3 rounded-lg">
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="bg-slate-500 h-[1px] w-full m-10"></div>

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Subtotal</p>
              <p className="text-slate-500 font-semibold">$78.3</p>
            </div>
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Tax fee</p>
              <p className="text-slate-500 font-semibold">$3.5</p>
            </div>
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Voucher</p>
              <p className="text-slate-500 font-semibold">$5.0</p>
            </div>
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Subtotal</p>
              <p className="text-slate-500 font-semibold">$78.3</p>
            </div>
          </div>
          <button className="text-2xl text-white w-full bg-red-500 rounded-lg font-bold p-2 mt-10 mb-2">
            Checkout
          </button>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center">
        <IoIosArrowBack className="cursor-pointer" />
        <span
          onClick={() => setActivePage(1)}
          className={`${
            activePage === 1 ? activePageStyle : "bg-slate-200"
          } h-6 w-6 flex cursor-pointer items-center justify-center text-xs font-semibold rounded-sm`}
        >
          1
        </span>
        <span
          onClick={() => setActivePage(2)}
          className={`${
            activePage === 2 ? activePageStyle : "bg-slate-200"
          } h-6 w-6 flex cursor-pointer items-center justify-center text-xs font-semibold rounded-sm`}
        >
          2
        </span>
        <span
          onClick={() => setActivePage(3)}
          className={`${
            activePage === 3 ? activePageStyle : "bg-slate-200"
          } h-6 w-6 flex cursor-pointer items-center justify-center text-xs font-semibold rounded-sm `}
        >
          3
        </span>
        <span className="cursor-pointer h-6 w-6 flex items-center justify-center text-xs font-semibold bg-slate-200 rounded-sm">
          ...
        </span>
        <IoIosArrowBack className="cursor-pointer rotate-180" />
      </div>
    </div>
  );
}

export default Order;
