/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";

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
      <div className="flex w-[300px] items-center gap-4">
        <img
          className="h-16 w-16 cursor-pointer rounded-md object-cover transition-all hover:scale-110"
          src={food.image}
          alt={food.foodName}
          onClick={() => navigate(`/order/menu/${food._id}`)}
        />
        <p className="font-semibold italic">{food.foodName}</p>
      </div>

      <div className="flex flex-1 items-center justify-center gap-6 font-thin">
        <button
          onClick={() => handleQuantity("decrease")}
          className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
        >
          <FaMinus className="cursor-pointer text-xs text-red-300" />
        </button>

        <span className="rounded-md bg-[#fee3e3] px-4 py-1 text-sm font-bold">
          {quantity}
        </span>

        <button
          onClick={() => handleQuantity("increase")}
          className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
        >
          <FaPlus className="cursor-pointer text-xs text-green-300" />
        </button>
      </div>
      <p className="flex flex-1 justify-center gap-2 text-center">
        <span className="w-[20px]">₱</span>{" "}
        <span className="w-[50px] text-start">{formatNumber(food.price)}</span>
      </p>
      <p
        className="flex flex-1 cursor-pointer items-center justify-center gap-1 text-center text-sm font-semibold text-red-500 hover:underline"
        onClick={() => updateCart(food, quantity, "removeItem")}
      >
        <FaRegTrashAlt />
        Delete
      </p>
    </div>
  );
}

export default FoodSummaryItem;
