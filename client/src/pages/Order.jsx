/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// import Pagination from "../components/UI/Pagination.jsx";

import { useFood } from "../contexts/FoodContext.jsx";

import OrderItem from "../components/UI/OrderItem.jsx";
import Loader from "../components/UI/Loader.jsx";

// import LoadingImage from "../components/UI/LoadingImage.jsx";

function Order() {
  const [category, setCategory] = useState("all categories");
  // const [activePage, setActivePage] = useState(1);
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

  const activeCategoryStyle = "text-white bg-red-500 border-red-500";

  // const images = [
  //   {
  //     src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     alt: "Image 1",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     alt: "Image 2",
  //   },
  //   {
  //     src: "https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     alt: "Image 3",
  //   },
  // ];

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center gap-10 bg-[#F9F9F9] px-8 pb-20 pt-40 md:px-20 lg:px-24 xl:px-48 2xl:px-80">
        <Loader />
      </div>
    );
  }

  // return (
  //   <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  //     {images.map((img, index) => (
  //       <LoadingImage
  //         key={index}
  //         src={img.src}
  //         alt={img.alt}
  //         className="h-auto w-full rounded-lg shadow-lg"
  //       />
  //     ))}
  //   </div>
  // );

  return (
    <div className="flex flex-col items-center gap-10 bg-[#F9F9F9] px-8 pb-20 pt-40 md:px-20 lg:px-24 xl:px-48 2xl:px-80">
      <h2 className="text-center text-5xl font-bold leading-snug md:text-start">
        Our Popular Menu
      </h2>

      <ul className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg sm:gap-4 md:gap-6">
        <li onClick={() => setCategory("all categories")}>
          <button
            className={`rounded-lg border-2 px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px] ${
              category === "all categories"
                ? activeCategoryStyle
                : "border-[#ffeaea]"
            } `}
          >
            All categories
          </button>
        </li>

        <li onClick={() => setCategory("pasta")}>
          <button
            className={`rounded-lg border-2 px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px] ${
              category === "pasta" ? activeCategoryStyle : "border-[#ffeaea]"
            } `}
          >
            Pasta
          </button>
        </li>

        <li onClick={() => setCategory("pizza")}>
          <button
            className={`rounded-lg border-2 px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px] ${
              category === "pizza" ? activeCategoryStyle : "border-[#ffeaea]"
            } `}
          >
            Pizza
          </button>
        </li>

        <li onClick={() => setCategory("dessert")}>
          <button
            className={`rounded-lg border-2 px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px] ${
              category === "dessert" ? activeCategoryStyle : "border-[#ffeaea]"
            } `}
          >
            Dessert
          </button>
        </li>

        <li onClick={() => setCategory("drink")}>
          <button
            className={`rounded-lg border-2 px-3 py-4 sm:px-6 md:px-8 lg:min-w-[150px] ${
              category === "drink" ? activeCategoryStyle : "border-[#ffeaea]"
            } `}
          >
            Drink
          </button>
        </li>
      </ul>

      <h3 className="border-b border-b-red-500 pb-3 text-2xl font-bold uppercase">
        {category}
      </h3>

      {loading ? (
        <div className="flex h-screen flex-col items-center gap-10 bg-[#F9F9F9] px-20 pb-20 pt-40">
          <Loader />
        </div>
      ) : (
        <div className="flex w-full flex-col gap-6">
          {/* <Pagination activePage={activePage} setActivePage={setActivePage} /> */}

          <div className="flex gap-6">
            <div className="flex flex-wrap items-center justify-center gap-5">
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
