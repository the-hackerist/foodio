import { useState } from "react";
import img from "../../assets/pasta.png";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

function Menu() {
  const [category, setCategory] = useState("all");
  const [activePage, setActivePage] = useState(1);

  const activeCategoryStyle = "text-white bg-red-500";

  const activePageStyle = "text-white bg-black";

  return (
    <div className="p-20 flex items-center flex-col gap-10 bg-[#F9F9F9]">
      <h2 className="text-5xl font-bold">Our Popular Menu</h2>
      <ul className="flex items-center gap-6 text-lg mt-4">
        <li onClick={() => setCategory("all")}>
          <button
            className={`${
              category === "all" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            All category
          </button>
        </li>

        <li onClick={() => setCategory("dinner")}>
          <button
            className={`${
              category === "dinner" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            Dinner
          </button>
        </li>

        <li onClick={() => setCategory("lunch")}>
          <button
            className={`${
              category === "lunch" ? activeCategoryStyle : "border"
            } px-8 py-4 rounded-lg`}
          >
            Lunch
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
      <div className="flex items-center justify-center gap-4 flex-wrap max-w-[1000px]">
        <div className="flex flex-col w-[300px] bg-white p-6 rounded-3xl gap-2 items-center">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex text-red-500 gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
              Order now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[300px] bg-white p-6 rounded-3xl gap-2 items-center">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex text-red-500 gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
              Order now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[300px] bg-white p-6 rounded-3xl gap-2 items-center">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex text-red-500 gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
              Order now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[300px] bg-white p-6 rounded-3xl gap-2 items-center">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex text-red-500 gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
              Order now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[300px] bg-white p-6 rounded-3xl gap-2 items-center">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex text-red-500 gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
              Order now
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[300px] bg-white p-6 rounded-3xl gap-2 items-center">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex text-red-500 gap-3">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
              Order now
            </button>
          </div>
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

export default Menu;
