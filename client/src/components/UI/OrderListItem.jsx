/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import { useCart } from "../../contexts/CartContext";

function OrderListItem({ food }) {
  const { updateCart } = useCart();

  console.log("rendering");
  console.log(food);

  const [quantity, setQuantity] = useState(food.quantity);
  useEffect(() => {
    if (quantity === 0) {
      updateCart(food, 0, "removeItem");
    } else updateCart(food, quantity, "updateQty");
  }, [quantity]);

  const handleQuantity = (action) => {
    if (action === "increase") setQuantity((prev) => prev + 1);
    if (action === "decrease") setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-red-200 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold italic">{food.foodName}</p>
        <span className="font-bold">$ {food.price}</span>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center justify-center gap-6 font-thin">
          <button
            onClick={() => handleQuantity("decrease")}
            className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
          >
            <FaMinus className="cursor-pointer text-xs text-red-300" />
          </button>

          <span>{quantity}</span>

          <button
            onClick={() => handleQuantity("increase")}
            className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
          >
            <FaPlus className="cursor-pointer text-xs text-green-300" />
          </button>
        </div>

        <FaRegTrashAlt
          onClick={() => updateCart(food, 0, "removeItem")}
          className="cursor-pointer text-lg text-red-500"
        />
      </div>
    </div>
  );
}

export default OrderListItem;
