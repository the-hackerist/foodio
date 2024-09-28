/* eslint-disable react/prop-types */
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import food_img from "../../assets/default_img.svg";
import { useCart } from "../../contexts/CartContext";

function OrderItem({ food }) {
  const { cart, updateCart } = useCart();

  const isOnCart = cart.find((menu) => menu.foodId === food.id);

  const handleAddCart = () => {
    updateCart(food);
  };

  return (
    <div className="flex h-[450px] w-[220px] flex-col items-center justify-evenly gap-2 rounded-lg border p-4 text-center">
      <div className="w-full">
        <img className="h-[180px] w-[180px]" src={food_img} alt="food image" />
        <h3 className="text-lg font-bold">{food.foodName}</h3>
      </div>

      <div className="flex gap-2 text-sm text-red-500">
        {[
          ...new Array(food.starRatings).fill("star"),
          ...new Array(5 - food.starRatings).fill("noStar"),
        ].map((star, i) =>
          star === "star" ? (
            <RiStarSFill key={star + i} />
          ) : (
            <RiStarSLine key={star + i} />
          ),
        )}
      </div>

      <p className="line-clamp-3 text-sm">{food.description}</p>
      <p className="mt-4 text-base font-semibold">$ {food.price}</p>

      {!isOnCart ? (
        <button
          onClick={handleAddCart}
          className="w-full rounded-lg border-2 border-red-500 bg-red-500 p-2 text-sm font-bold uppercase text-slate-100"
        >
          Add to cart
        </button>
      ) : (
        <button
          disabled
          className="w-full cursor-not-allowed rounded-lg border-2 border-red-200 bg-slate-100 p-2 text-sm font-bold uppercase text-red-300"
        >
          Already on cart
        </button>
      )}
    </div>
  );
}

export default OrderItem;
