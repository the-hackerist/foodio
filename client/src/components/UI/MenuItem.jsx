/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import { useCart } from "../../contexts/CartContext.jsx";
import { useOrder } from "../../contexts/OrderContext.jsx";

function MenuItem({ food }) {
  const { getOrder } = useOrder();
  const { updateCart, cart } = useCart();

  const isOnCart = cart.find((menu) => menu._id === food._id);

  const navigate = useNavigate();

  const handleOrder = () => {
    updateCart(food, 1);
    getOrder();
    navigate("/order");
  };

  const stars = [
    ...new Array(food.starRatings).fill("star"),
    ...new Array(5 - food.starRatings).fill("noStar"),
  ];

  return (
    <div
      key={food._id}
      className="flex h-[500px] w-[300px] flex-col items-center justify-between gap-2 rounded-lg border-2 bg-white p-6"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-[250px] overflow-hidden rounded-sm">
          <img className="object-cover" src={food.image} alt="food img" />
        </div>
        <h3 className="text-2xl font-bold">{food.foodName}</h3>
        <p className="line-clamp-2 text-sm leading-6">{food.description}</p>
      </div>

      <div className="flex w-full flex-col items-center gap-3 text-center">
        <div className="flex gap-3 text-red-500">
          {stars.map((star, i) =>
            star === "star" ? <RiStarSFill key={i} /> : <RiStarSLine key={i} />,
          )}
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <p className="text-nowrap text-xl font-semibold">
            ₱ {food.price.toLocaleString()}.00
          </p>
          {!isOnCart ? (
            <button
              onClick={handleOrder}
              className="w-[150px] rounded-xl bg-red-500 py-3 text-lg font-semibold text-white"
            >
              Order now
            </button>
          ) : (
            <button
              disabled
              className="w-[150px] cursor-not-allowed rounded-lg border-2 border-red-200 bg-slate-100 p-2 text-xs font-semibold uppercase text-red-300"
            >
              Check order summary
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
