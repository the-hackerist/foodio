/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";
import { FaRegStar, FaRegHandshake } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

import { useMenu } from "../contexts/MenuContext";
import { formatNumber } from "../utils/NumberFormatter";
import Loader from "../components/UI/Loader";

function OrderStatus() {
  const [orderData, setOrderData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  const { setMenu } = useMenu();

  const subTotal = orderData?.items?.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );
  const total = +subTotal + +orderData?.deliveryFee;

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/v1/order/${params.id}`);

        const data = await res.json();

        if (!data) {
          console.log("error");
          return;
        }

        setOrderData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListing();
  }, []);

  if (!orderData)
    return (
      <div className="flex w-full flex-col items-center justify-center px-8 pb-20 pt-40 md:px-20 lg:px-24 xl:px-48 2xl:px-80">
        <Loader />
      </div>
    );

  return (
    <div className="flex w-full flex-col p-80 px-8 pb-20 pt-40 md:px-20 lg:px-24 xl:px-48 2xl:px-80">
      <header className="flex items-center justify-between rounded-md border border-dotted p-4">
        {/* header */}
        <button
          className="flex items-center justify-center text-sm uppercase text-black text-opacity-50 hover:underline sm:text-base"
          onClick={() => navigate(-1)}
        >
          <span className="text-lg sm:text-3xl">
            <MdKeyboardArrowLeft />
          </span>
          Back
        </button>

        <div className="flex flex-col gap-1 text-end uppercase sm:flex-row sm:gap-0 sm:divide-x-2">
          <p className="text-xs sm:pr-4 sm:text-base">
            ORDER ID. {orderData._id || "no id"}
          </p>
          <p className="text-xs font-semibold text-red-500 sm:pl-4 sm:text-base">
            order {orderData.status}
          </p>
        </div>
      </header>

      {/* delivery status  */}
      <div className="px- flex flex-col items-center justify-evenly gap-4 rounded-md border border-dotted p-4 py-12 sm:flex-row sm:items-start sm:gap-1 md:gap-0 md:px-0 lg:p-4 lg:py-12">
        <div className="flex w-[200px] flex-col items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full border-[4px] text-3xl ${
              orderData.status === "placed" ||
              orderData.status === "confirmed" ||
              orderData.status === "onDelivery" ||
              orderData.status === "received" ||
              orderData.status === "completed"
                ? "border-green-500 text-green-500"
                : "border-slate-500 text-slate-500"
            }`}
          >
            <PiNewspaperClipping />
          </div>

          <div className="flex flex-col items-center text-center sm:text-sm md:text-base">
            <p>Order Placed</p>
            <p className="text-[#00000042] sm:text-xs md:text-sm">
              {orderData.status === "placed" ||
              orderData.status === "confirmed" ||
              orderData.status === "onDelivery" ||
              orderData.status === "received" ||
              orderData.status === "completed"
                ? "08/03/2024 00:51"
                : ""}
            </p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full border-[4px] text-3xl ${
              orderData.status === "confirmed" ||
              orderData.status === "onDelivery" ||
              orderData.status === "received" ||
              orderData.status === "completed"
                ? "border-green-500 text-green-500"
                : "border-slate-500 text-slate-500"
            }`}
          >
            <IoMdCheckmark />
          </div>
          <div className="flex flex-col items-center text-center sm:text-sm md:text-base">
            <p>Order Confirmed</p>
            <p className="text-[#00000042] sm:text-xs md:text-sm">
              {orderData.status === "confirmed" ||
              orderData.status === "onDelivery" ||
              orderData.status === "received" ||
              orderData.status === "completed"
                ? "08/03/2024 00:51"
                : ""}
            </p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full border-[4px] text-3xl ${
              orderData.status === "onDelivery" ||
              orderData.status === "received" ||
              orderData.status === "completed"
                ? "border-green-500 text-green-500"
                : "border-slate-500 text-slate-500"
            }`}
          >
            <GrDeliver />
          </div>
          <div className="flex flex-col items-center text-center sm:text-sm md:text-base">
            <p> Order in Delivery</p>
            <p className="text-[#00000042] sm:text-xs md:text-sm">
              {orderData.status === "onDelivery" ||
              orderData.status === "received" ||
              orderData.status === "completed"
                ? "08/03/2024 00:51"
                : ""}
            </p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full border-[4px] text-3xl ${
              orderData.status === "received" ||
              orderData.status === "completed"
                ? "border-green-500 text-green-500"
                : "border-slate-500 text-slate-500"
            }`}
          >
            <FaRegHandshake />
          </div>
          <div className="flex flex-col items-center text-center sm:text-sm md:text-base">
            <p>Order Received</p>
            <p className="text-[#00000042] sm:text-xs md:text-sm">
              {orderData.status === "received" ||
              orderData.status === "completed"
                ? "08/03/2024 00:51"
                : ""}
            </p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full border-[4px] text-3xl ${
              orderData.status === "completed"
                ? "border-green-500 text-green-500"
                : "border-slate-500 text-slate-500"
            }`}
          >
            <FaRegStar />
          </div>
          <div className="flex flex-col items-center text-center sm:text-sm md:text-base">
            <p>Order Complete</p>
            <p className="text-[#00000042] sm:text-xs md:text-sm">
              {orderData.status === "completed" ? "08/03/2024 00:51" : ""}
            </p>
          </div>
        </div>
      </div>

      {/* buy again */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-md border border-dotted bg-[#FFFCF5] p-4 sm:flex-row sm:gap-2">
        <p className="text-sm text-[#0000008A]">
          Thank you for ordering with Foodio!
        </p>

        <div className="flex w-full flex-col gap-2 sm:w-fit sm:flex-row sm:gap-4">
          <Link
            to="/order"
            onClick={() => setMenu("order")}
            className="rounded-md bg-red-500 py-2 text-center font-semibold text-white sm:w-[200px]"
          >
            Order Again
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setMenu("contact-us")}
            className="cursor-pointer rounded-md border border-[#00000015] bg-[#fff] py-2 text-center font-semibold text-[#555555] sm:w-[200px]"
          >
            Contact Restaurant
          </Link>
        </div>
      </div>

      <div className="flex flex-col divide-y-2 rounded-md border border-dotted p-4 sm:flex-row sm:divide-x-2 sm:divide-y-0">
        <div className="flex flex-col gap-2 pb-4 sm:w-[44%] sm:pb-0 sm:pr-6">
          <p className="pb-2 text-2xl font-medium text-[#000000CC]">
            Delivery Address
          </p>
          <p className="sm:text-lg">{`${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}`}</p>
          <p className="text-xs text-[#0000008A] sm:text-sm">
            (+63) {orderData.customerInfo.phone}
          </p>
          <p className="text-xs text-[#0000008A] sm:text-sm">
            {orderData.customerInfo.address}
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-4 sm:w-[70%] sm:pl-6 sm:pt-0">
          <p className="text-2xl font-medium text-[#000000CC] sm:pb-2">
            Order Summary
          </p>

          {orderData.items.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-center justify-between gap-4 sm:flex-row"
            >
              <div className="flex gap-4">
                <img
                  className="b h-12 w-12 rounded-md object-cover sm:h-24 sm:w-24"
                  alt="food image"
                  src={item.image}
                />

                <div className="self-center">
                  <p className="line-clamp-1 text-sm font-semibold sm:text-lg">
                    {item.foodName}
                  </p>
                  <p className="line-clamp-3 text-xs sm:text-sm lg:line-clamp-2">
                    {item.description}
                  </p>
                  <p className="pt-1 text-sm font-semibold sm:pt-0 sm:text-base">
                    x{item.quantity}
                  </p>

                  <p className="flex items-center gap-2 text-sm sm:hidden sm:w-[80px]">
                    <span>₱</span> {formatNumber(item.price)}
                  </p>
                </div>
              </div>

              <p className="hidden items-center justify-between gap-2 sm:flex sm:w-[80px]">
                <span>₱</span> {formatNumber(item.price)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-md border border-dotted bg-[#FFFCF5]">
        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="w-full p-2 text-sm text-[#000000] text-opacity-55">
            <p>Sub Total</p>
          </div>

          <div className="border-l border-dotted px-2 py-3 text-opacity-10">
            <div className="flex justify-end">
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> {formatNumber(subTotal)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="w-full p-2 text-sm text-[#000000] text-opacity-55">
            <p>Delivery fee</p>
          </div>

          <div className="border-l border-dotted px-2 py-3 text-opacity-10">
            <div className="flex justify-end">
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> {formatNumber(orderData.deliveryFee)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="w-full p-2 text-sm text-[#000000] text-opacity-55">
            <p>Voucher</p>
          </div>

          <div className="border-l border-dotted px-2 py-3 text-opacity-10">
            <div className="flex justify-end">
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> {formatNumber(0)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="w-full p-2 text-sm text-[#000000] text-opacity-55">
            <p>Order Total</p>
          </div>

          {/* <div className=" border-l border-dotted px-2 py-5 text-opacity-10"> */}
          <div className="border-l border-dotted px-2 py-5 text-opacity-10">
            <p className="text-nowrap pl-6 text-xl font-semibold text-red-500 sm:pl-0 sm:text-3xl">
              ₱ {formatNumber(total)}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="w-full p-2 text-sm text-[#000000] text-opacity-55">
            <p className="text-nowrap">Payment Method</p>
          </div>

          <div className="border-l border-dotted px-2 py-5 pl-6 text-opacity-10 sm:pl-2">
            <p className="text-nowrap text-sm sm:text-lg">
              {orderData.paymentMethod === "cashOnDelivery" &&
                "Cash on Delivery"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
