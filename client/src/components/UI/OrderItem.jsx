/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import { formatNumber } from "../../utils/NumberFormatter";

function OrderItem({ food }) {
  const navigate = useNavigate();

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
      className="flex h-[450px] w-[250px] cursor-pointer flex-col items-center justify-evenly gap-2 rounded-md border-2 border-[#ffeaea] p-6 text-center transition-all hover:scale-105 hover:bg-[#ffeaea]"
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
        ₱ {formatNumber(food.price)}
      </p>
    </div>
  );
}

export default OrderItem;
