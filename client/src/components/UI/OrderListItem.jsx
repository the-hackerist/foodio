/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function OrderListItem({ food }) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-red-200 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold italic">{food.foodName}</p>
        <span className="font-bold">$ {food.price}</span>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center justify-center gap-6 font-thin">
          <button className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
            <FaMinus className="cursor-pointer text-xs text-red-300" />
          </button>

          <span>1</span>

          <button className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
            <FaPlus className="cursor-pointer text-xs text-green-300" />
          </button>
        </div>

        <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
      </div>
    </div>
  );
}

export default OrderListItem;
