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
    <div className="flex flex-col items-center gap-10 bg-[#F9F9F9] p-20">
      <h2 className="text-5xl font-bold">Our Menu</h2>

      <ul className="mt-4 flex flex-wrap items-center gap-6 text-lg">
        <li onClick={() => setCategory("all")}>
          <button
            className={`${
              category === "all" ? activeCategoryStyle : "border"
            } rounded-lg px-4 py-4`}
          >
            All category
          </button>
        </li>

        <li onClick={() => setCategory("dinner")}>
          <button
            className={`${
              category === "dinner" ? activeCategoryStyle : "border"
            } rounded-lg px-4 py-4`}
          >
            Dinner
          </button>
        </li>

        <li onClick={() => setCategory("lunch")}>
          <button
            className={`${
              category === "lunch" ? activeCategoryStyle : "border"
            } rounded-lg px-4 py-4`}
          >
            Lunch
          </button>
        </li>

        <li onClick={() => setCategory("dessert")}>
          <button
            className={`${
              category === "dessert" ? activeCategoryStyle : "border"
            } rounded-lg px-4 py-4`}
          >
            Dessert
          </button>
        </li>

        <li onClick={() => setCategory("drink")}>
          <button
            className={`${
              category === "drink" ? activeCategoryStyle : "border"
            } rounded-lg px-4 py-4`}
          >
            Drink
          </button>
        </li>
      </ul>
      <div className="flex max-w-[1000px] flex-wrap items-center justify-center gap-4">
        <div className="flex w-[300px] flex-col items-center gap-2 rounded-3xl bg-white p-6">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex gap-3 text-red-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white">
              Order now
            </button>
          </div>
        </div>

        <div className="flex w-[300px] flex-col items-center gap-2 rounded-3xl bg-white p-6">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex gap-3 text-red-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white">
              Order now
            </button>
          </div>
        </div>

        <div className="flex w-[300px] flex-col items-center gap-2 rounded-3xl bg-white p-6">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex gap-3 text-red-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white">
              Order now
            </button>
          </div>
        </div>

        <div className="flex w-[300px] flex-col items-center gap-2 rounded-3xl bg-white p-6">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex gap-3 text-red-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white">
              Order now
            </button>
          </div>
        </div>

        <div className="flex w-[300px] flex-col items-center gap-2 rounded-3xl bg-white p-6">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex gap-3 text-red-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white">
              Order now
            </button>
          </div>
        </div>

        <div className="flex w-[300px] flex-col items-center gap-2 rounded-3xl bg-white p-6">
          <img className="w-[250px]" src={img} alt="food img" />
          <h3 className="text-2xl font-bold">Spaghetti</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            consequat mi eget auctor aliquam, diam.
          </p>
          <div className="flex gap-3 text-red-500">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold">$12.05</span>
            <button className="rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white">
              Order now
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
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
    </div>
  );
}

export default Menu;
