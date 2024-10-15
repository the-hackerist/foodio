/* eslint-disable react/prop-types */
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

// import { useCart } from "../../contexts/CartContext";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderItem({ food }) {
  // const { cart, updateCart } = useCart();
  const navigate = useNavigate();

  // const isOnCart = cart.find((menu) => menu.foodId === food._id);

  // const handleAddCart = () => {
  //   updateCart(food, 1);
  // };

  // const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   if (quantity === 0) {
  //     updateCart(food, 0, "removeItem");
  //   } else updateCart(food, quantity, "updateQty");
  // }, [quantity]);

  // const handleQuantity = (action) => {
  //   if (action === "increase") setQuantity((prev) => prev + 1);
  //   if (action === "decrease") setQuantity((prev) => prev - 1);
  // };

  const starsArray = [
    ...new Array(food.starRatings).fill("star"),
    ...new Array(5 - food.starRatings).fill("noStar"),
  ];

  const handleViewFood = () => {
    navigate(`/order/menu/${food._id}`);
  };

  return (
    <div
      onClick={handleViewFood}
      className="flex h-[450px] w-[250px] cursor-pointer flex-col items-center justify-evenly gap-2 rounded-md border border-[#00000022] p-6 text-center transition-all hover:scale-105 hover:border-2 hover:border-red-500"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-4">
        <div className="h-[180px] overflow-hidden rounded-md">
          <img className="object-contain" src={food.image} alt="food image" />
        </div>
        <h3 className="text-lg font-bold">{food.foodName}</h3>
      </div>

      <div className="flex gap-2 text-sm text-red-500">
        {starsArray.map((star, i) =>
          star === "star" ? (
            <RiStarSFill key={star + i} />
          ) : (
            <RiStarSLine key={star + i} />
          ),
        )}
      </div>

      <p className="line-clamp-2 text-start text-sm">{food.description}</p>
      <p className="mt-4 text-base font-semibold">
        ₱ {food.price.toLocaleString()}.00
      </p>

      {/* {!isOnCart ? (
        <button
          onClick={handleAddCart}
          className="w-full rounded-lg border-2 border-red-500 bg-red-500 p-2 text-xs font-bold uppercase text-slate-100"
        >
          Add to cart
        </button>
      ) : (
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

          <a className="cursor-pointer border-b border-blue-500 text-sm font-semibold capitalize text-blue-600">
            go to cart
          </a>
        </div>
        /* <button
          disabled
          className="w-full cursor-not-allowed rounded-lg border-2 border-red-200 bg-slate-100 p-2 text-xs font-semibold uppercase text-red-300"
        >
          check order summary
        </button> */
      /* )} */}
    </div>
  );
}

export default OrderItem;
