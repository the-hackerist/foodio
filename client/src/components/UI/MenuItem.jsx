/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import food_img from "../../assets/default_img.svg";

import { useCart } from "../../contexts/CartContext.jsx";

function MenuItem({ food }) {
  const { updateCart } = useCart();

  const navigate = useNavigate();

  const handleOrder = () => {
    updateCart(food);
    navigate("/order");
  };

  const stars = [
    ...new Array(food.starRatings).fill("star"),
    ...new Array(5 - food.starRatings).fill("noStar"),
  ];

  return (
    <div
      key={food.id}
      className="flex h-[500px] w-[300px] flex-col items-center justify-between gap-2 rounded-3xl bg-white p-6"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <img className="w-[250px]" src={food_img} alt="food img" />
        <h3 className="text-2xl font-bold">{food.foodName}</h3>
        <p className="line-clamp-2 text-sm leading-6">{food.description}</p>
      </div>

      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex gap-3 text-red-500">
          {stars.map((star, i) =>
            star === "star" ? <RiStarSFill key={i} /> : <RiStarSLine key={i} />,
          )}
        </div>

        <div className="flex items-center justify-center gap-4">
          <p className="text-xl font-bold">$ {food.price}</p>
          <button
            onClick={handleOrder}
            className="rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white"
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
