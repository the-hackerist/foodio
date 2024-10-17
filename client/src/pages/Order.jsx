/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// import Pagination from "../components/UI/Pagination.jsx";
import OrderItem from "../components/UI/OrderItem.jsx";

import { useFood } from "../contexts/FoodContext.jsx";

function Order() {
  const [category, setCategory] = useState("all categories");
  // const [activePage, setActivePage] = useState(1);
  const [isOrderListOpen, setIsOrderListOpen] = useState(false);
  const [foodList, setFoodList] = useState(null);

  const { getAllFood, loading } = useFood();

  useEffect(() => {
    const fetchFood = async () => {
      const data = await getAllFood();

      let foodArray = data;

      if (category === "all categories") {
        setFoodList(foodArray);
        return;
      }
      if (category === "pizza") {
        foodArray = data.filter((item) => item.category === "pizza");
        setFoodList(foodArray);
        return;
      }
      if (category === "pasta") {
        foodArray = data.filter((item) => item.category === "pasta");
        setFoodList(foodArray);
        return;
      }
      if (category === "drink") {
        foodArray = data.filter((item) => item.category === "drinks");
        setFoodList(foodArray);
        return;
      }
      if (category === "dessert") {
        foodArray = data.filter((item) => item.category === "dessert");
        setFoodList(foodArray);
        return;
      }
    };

    fetchFood();
  }, [category]);

  const activeCategoryStyle = "text-white bg-red-500";

  // if (loading)
  //   return (
  //     <div className="flex h-screen items-center justify-center bg-[#F9F9F9] px-20 pb-20 pt-40">
  //       <p className="text-3xl font-bold">Loading...</p>
  //     </div>
  //   );

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

      {loading ? (
        <div className="flex h-screen items-center justify-center bg-[#F9F9F9] px-20 pb-20 pt-40">
          <p className="text-3xl font-bold">Loading...</p>
        </div>
      ) : (
        <div className="flex w-[870px] flex-col gap-6 p-8">
          {/* <Pagination activePage={activePage} setActivePage={setActivePage} /> */}

          <div className="flex gap-6">
            <div
              className={`${
                isOrderListOpen ? "hidden" : "flex"
              } flex-wrap items-center gap-5 sm:flex`}
            >
              {foodList &&
                foodList.map((menu) => (
                  <OrderItem key={menu._id} food={menu} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
