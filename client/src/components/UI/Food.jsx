/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { useFood } from "../../contexts/FoodContext";
import { useCart } from "../../contexts/CartContext";

import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastProps = {
  position: "top-center",
  autoClose: 2000,
  pauseOnFocusLoss: false,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

function Food() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const { getFood, food, loading: isFoodLoading } = useFood();

  const { updateCart, loading } = useCart();

  useEffect(() => {
    getFood(id);
  }, []);

  if (isFoodLoading || food === null)
    return (
      <div className="flex h-screen items-center justify-center bg-[#F9F9F9] px-80 pb-20 pt-40">
        <p className="text-3xl font-bold">Loading...</p>
      </div>
    );

  const handleQuantity = (action) => {
    if (action === "increase") setQuantity((prev) => prev + 1);
    if (action === "decrease") setQuantity((prev) => (prev < 2 ? 1 : prev - 1));
  };

  const handleCart = async () => {
    const data = await updateCart(food, quantity);

    if (data.success === "OK") {
      toast.success(
        `${food?.foodName || "This menu"} is added to cart.`,
        toastProps,
      );
    } else {
      toast.error(
        `${food?.foodName || "This menu"} is not added to cart.`,
        toastProps,
      );
    }
  };

  const handleBuyNow = () => {
    updateCart(food, quantity);
    navigate("/cart");
  };

  return (
    <div className="bg-[#F9F9F9] px-80 pb-20 pt-40">
      <ToastContainer />
      <Link
        className="flex w-fit items-center gap-1 pb-6 pl-8 text-lg font-semibold hover:underline"
        onClick={() => navigate(-1)}
      >
        <MdKeyboardArrowLeft />
        Go back
      </Link>

      <div className="flex w-full gap-8 bg-white p-8">
        <div className="h-[300px] w-[40%]">
          <img
            className="h-full rounded-md object-cover"
            src={food.image}
            alt="Food image"
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <h1 className="text-2xl font-bold">{food.foodName}</h1>

          <div className="flex items-center gap-2 text-red-500">
            <p className="border-b-[1px] border-red-500">
              {food.starRatings}.0
            </p>

            <div className="flex text-xl">
              {[
                ...new Array(food.starRatings).fill("star"),
                ...new Array(5 - food.starRatings).fill("noStar"),
              ].map((star, i) =>
                star === "star" ? (
                  <RiStarSFill key={i} />
                ) : (
                  <RiStarSLine key={i} />
                ),
              )}
            </div>
          </div>

          <p className="w-full bg-[#F9F9F9] p-4 text-3xl font-semibold text-red-500">
            <span>₱</span> {food.price.toLocaleString()}
          </p>

          <div className="flex pt-4">
            <p className="w-[200px] text-lg font-semibold">Food Description:</p>
            <p className="line-clamp-3 w-[600px] pt-1">{food.description}</p>
          </div>

          <div className="flex pt-4">
            <p className="w-[200px] text-lg font-semibold">Quantity: </p>

            <div className="flex items-center justify-center gap-6 font-thin">
              <button
                onClick={() => handleQuantity("decrease")}
                className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
              >
                <FaMinus className="cursor-pointer text-xs text-red-300" />
              </button>

              <span className="rounded-md bg-[#F9F9F9] px-4 py-1 text-sm font-bold">
                {quantity}
              </span>

              <button
                onClick={() => handleQuantity("increase")}
                className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md"
              >
                <FaPlus className="cursor-pointer text-xs text-green-300" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              className={`w-[150px] rounded-md py-3 font-semibold text-white transition-all ${loading ? "bg-[#888888aa]" : "bg-red-500 hover:bg-red-600"}`}
              onClick={handleCart}
              disabled={loading}
            >
              {!loading ? "Add to cart" : "Loading..."}
            </button>

            <Link
              to="/cart"
              className="w-[150px] rounded-md border border-red-500 py-3 text-center font-semibold text-red-500 transition-all hover:bg-[#F9F9F9]"
              onClick={handleBuyNow}
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
