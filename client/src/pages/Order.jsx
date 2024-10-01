import { useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../components/UI/Pagination.jsx";
import OrderItem from "../components/UI/OrderItem.jsx";
import OrderListItem from "../components/UI/OrderListItem.jsx";

import food_data from "../data/food_data.js";

import { useCart } from "../contexts/CartContext.jsx";

function Order() {
  const [category, setCategory] = useState("all categories");
  const [activePage, setActivePage] = useState(1);
  const [isOrderListOpen, setIsOrderListOpen] = useState(false);
  const { cart } = useCart();

  const activeCategoryStyle = "text-white bg-red-500";

  const handleOrder = () => {};

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
            } rounded-lg px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px]`}
          >
            All categories
          </button>
        </li>

        <li onClick={() => setCategory("pasta")}>
          <button
            className={`${
              category === "pasta" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px]`}
          >
            Pasta
          </button>
        </li>

        <li onClick={() => setCategory("pizza")}>
          <button
            className={`${
              category === "pizza" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px]`}
          >
            Pizza
          </button>
        </li>

        <li onClick={() => setCategory("dessert")}>
          <button
            className={`${
              category === "dessert" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px]`}
          >
            Dessert
          </button>
        </li>

        <li onClick={() => setCategory("drink")}>
          <button
            className={`${
              category === "drink" ? activeCategoryStyle : "border"
            } rounded-lg px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px]`}
          >
            Drink
          </button>
        </li>
      </ul>

      <h3 className="border-b border-b-red-500 pb-3 text-2xl font-bold uppercase">
        {category}
      </h3>

      <p
        className={`text-base font-semibold ${isOrderListOpen ? "text-red-500" : "text-slate-500"} hover:underline sm:text-lg lg:hidden`}
        onClick={
          isOrderListOpen
            ? () => setIsOrderListOpen(false)
            : () => setIsOrderListOpen(true)
        }
      >
        {isOrderListOpen ? "Close " : "Open "} order summary
      </p>

      <div className="flex flex-col gap-6 rounded-3xl p-4 sm:border-2 sm:border-red-100">
        <Pagination activePage={activePage} setActivePage={setActivePage} />

        <div className="flex gap-6">
          <div
            className={`${
              isOrderListOpen ? "hidden" : "flex"
            } max-w-[700px] flex-wrap items-center justify-center gap-4 sm:flex`}
          >
            {food_data.map((menu, i) => (
              <OrderItem key={i} food={menu} />
            ))}
          </div>

          <div
            className={`${
              !isOrderListOpen ? "hidden" : "flex"
            } h-fit w-[300px] flex-col items-center justify-center rounded-2xl border bg-red-100 p-6 lg:flex`}
          >
            <h3 className="w-full p-10 text-center text-2xl font-bold">
              Order Summary
            </h3>

            <div className="mb-10 h-[1px] w-full bg-slate-500"></div>

            <div className="flex h-full max-h-[500px] w-full flex-col gap-4 overflow-auto overflow-x-hidden">
              {cart.length < 1 ? (
                <p className="text-center text-xs font-semibold italic">
                  You haven&apos;t order anything yet! 🥲
                </p>
              ) : (
                cart.map((menu) => (
                  <OrderListItem key={menu.foodId} food={menu} />
                ))
              )}
            </div>

            <div className="my-10 h-[1px] w-full bg-slate-500"></div>

            <Link
              to="/cart"
              onClick={handleOrder}
              className="w-full cursor-pointer rounded-lg bg-red-500 p-2 text-center text-lg font-bold uppercase text-white"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
