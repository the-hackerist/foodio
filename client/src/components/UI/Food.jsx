/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { formatNumber } from "../../utils/NumberFormatter";

import { useFood } from "../../contexts/FoodContext";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/UserContext";
import { useMenu } from "../../contexts/MenuContext";

import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "./Loader";

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

  const { setMenu } = useMenu();

  const { user } = useAuth();

  const { getFood, food, loading: isFoodLoading } = useFood();

  const { updateCart, loading } = useCart();

  useEffect(() => {
    getFood(id);
  }, []);

  if (isFoodLoading || food === null)
    return (
      <div className="flex h-screen items-center justify-center bg-[#F9F9F9] px-80 pb-20 pt-40">
        <Loader />
      </div>
    );

  const handleQuantity = (action) => {
    if (action === "increase") setQuantity((prev) => prev + 1);
    if (action === "decrease") setQuantity((prev) => (prev < 2 ? 1 : prev - 1));
  };

  const handleCart = async () => {
    if (!user) {
      toast.error(`Login first in order to add ${food.foodName} in your cart`, {
        ...toastProps,
        autoClose: 5000,
      });
      return;
    }

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

  const handleBuyNow = async () => {
    if (!user) return;

    updateCart(food, quantity);
    setMenu("cart");
    navigate("/cart");
  };

  return (
    <div className="bg-[#F9F9F9] px-8 pb-20 pt-40 md:px-20 lg:px-24 xl:px-48 2xl:px-80">
      <ToastContainer />

      <Link
        className="flex w-fit items-center gap-1 pb-6 font-semibold hover:underline md:text-lg"
        onClick={() => navigate(-1)}
      >
        <MdKeyboardArrowLeft />
        Go back
      </Link>

      <div className="flex w-full flex-col gap-8 bg-white p-8 lg:flex-row">
        <div className="h-[200px] w-full self-center md:h-[300px] lg:w-[500px] lg:self-start">
          <img
            className="h-full w-full rounded-md object-cover"
            src={food.image}
            alt="Food image"
          />
        </div>

        <div className="flex w-full flex-col gap-3 md:text-start">
          <h1 className="text-xl font-bold sm:text-2xl">{food.foodName}</h1>

          <div className="flex w-full items-center gap-2 text-red-500">
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

          <p className="w-full bg-[#F9F9F9] p-4 text-xl font-semibold text-red-500 sm:text-3xl">
            <span>₱</span> {formatNumber(food.price)}
          </p>

          <div className="flex w-full flex-col pt-4">
            <p className="font-semibold sm:text-lg">Food Description:</p>
            <p className="w-fit pt-1 text-sm sm:text-base">
              {food.description}
            </p>
          </div>

          <div className="flex flex-col pt-4">
            <p className="font-semibold sm:text-lg">Quantity: </p>

            <div className="flex items-center justify-center gap-6 self-start pt-4 font-thin">
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

          <div className="flex flex-col items-center gap-4 pt-8 sm:flex-row">
            <button
              className={`w-full rounded-md py-3 font-semibold text-white transition-all lg:w-[150px] ${loading ? "bg-[#888888aa]" : "bg-red-500 hover:bg-red-600"}`}
              onClick={handleCart}
              disabled={loading}
            >
              {!loading ? "Add to cart" : "Loading..."}
            </button>

            <Link
              to="/cart"
              className="w-full rounded-md border border-red-500 py-3 text-center font-semibold text-red-500 transition-all hover:bg-[#F9F9F9] lg:w-[150px]"
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
