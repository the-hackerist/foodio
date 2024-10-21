/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../utils/NumberFormatter";

function FoodSummaryItem({ food }) {
  const [quantity, setQuantity] = useState(food.quantity);

  const navigate = useNavigate();

  const { updateCart } = useCart();

  useEffect(() => {
    if (quantity >= 1) {
      updateCart(food, quantity, "updateQty");
      return;
    } else {
      updateCart(food, quantity, "removeItem");
      return;
    }
  }, [quantity]);

  const handleQuantity = (action) => {
    if (action === "increase") setQuantity((prev) => prev + 1);
    if (action === "decrease") setQuantity((prev) => prev - 1);
  };

  return (
    <div
      key={food._id}
      className="flex w-full items-center justify-between py-4"
    >
      {/* <div className="flex w-[100px] items-center gap-1 md:w-[300px] md:gap-4"> */}
      <div className="flex flex-[2] items-center gap-1 sm:gap-4">
        <img
          className="h-8 w-8 cursor-pointer rounded-md object-cover transition-all hover:scale-110 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          src={food.image}
          alt={food.foodName}
          onClick={() => navigate(`/order/menu/${food._id}`)}
        />
        <p className="line-clamp-1 text-xs font-semibold italic sm:text-sm lg:text-base">
          {food.foodName}
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center gap-1 font-thin sm:gap-3">
        <button
          onClick={() => handleQuantity("decrease")}
          className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
        >
          <FaMinus className="h-2 w-2 cursor-pointer text-xs text-red-300 sm:h-3 sm:w-3" />
        </button>

        <span className="rounded-md px-[0.1rem] text-xs font-bold sm:bg-[#fee3e3] sm:px-4 sm:py-1">
          {quantity}
        </span>

        <button
          onClick={() => handleQuantity("increase")}
          className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
        >
          <FaPlus className="h-2 w-2 cursor-pointer text-xs text-green-300 sm:h-3 sm:w-3" />
        </button>
      </div>

      <p className="flex flex-1 justify-center gap-2 text-center text-sm sm:text-base">
        <span className="sm:w-[20px]">₱</span>
        <span className="text-start sm:w-[50px]">
          {formatNumber(food.price)}
        </span>
      </p>

      <p
        className="hidden flex-1 cursor-pointer items-center justify-center gap-1 text-center text-xs font-semibold text-red-500 hover:underline sm:flex md:text-sm"
        onClick={() => updateCart(food, quantity, "removeItem")}
      >
        <FaRegTrashAlt />
        Delete
      </p>

      <p
        className="flex w-[25px] cursor-pointer items-center justify-center gap-1 font-semibold text-red-500 hover:underline sm:hidden md:text-sm"
        onClick={() => updateCart(food, quantity, "removeItem")}
      >
        <MdCancel />
      </p>
    </div>
  );
}

export default FoodSummaryItem;
