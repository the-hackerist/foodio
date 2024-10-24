/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import { useCart } from "../contexts/CartContext";
import { useAddress } from "../contexts/AddressContext";
import { useOrder } from "../contexts/OrderContext";

import FoodSummaryItem from "../components/UI/FoodSummaryItem";
import { useMenu } from "../contexts/MenuContext";
import { formatNumber } from "../utils/NumberFormatter";

const paymentMethods = [
  { id: "cashOnDelivery", label: "Cash on Delivery" },
  { id: "creditCard", label: "Credit Card" },
  { id: "paypal", label: "PayPal" },
  { id: "bankTransfer", label: "Bank Transfer" },
];

function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isChangingAddress, setIsChangingAddress] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");

  const { cart, calculateTotal, resetCart } = useCart();

  const { createOrder } = useOrder();

  const { tax, total, itemsTotal } = calculateTotal();

  const { setMenu } = useMenu();

  const { setDefault, address, getAddress } = useAddress();

  const currentDefaultAddress = address.find(
    (address) => address.default === true,
  );

  const handleRadioChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  useEffect(() => {
    getAddress();
  }, []);

  const handleOrder = (e) => {
    e.preventDefault();
    createOrder(currentDefaultAddress);
    resetCart();
  };
  return (
    <div
      // className={`flex flex-col items-center justify-center bg-[#F9F9F9] px-10 py-20 pt-40`}
      className={`flex flex-col items-center justify-center bg-[#F9F9F9] px-8 pb-20 pt-40 md:px-20 lg:px-24 xl:px-48 2xl:px-80`}
    >
      {isCheckingOut && isChangingAddress && (
        <div className="absolute inset-0 flex w-full justify-center bg-black bg-opacity-30 pt-[350px]">
          <div className="flex h-[400px] w-[600px] flex-col gap-4 rounded-md bg-white p-8">
            <div className="border-b border-b-red-400 pb-4">
              <p className="flex items-center gap-1 rounded-md font-semibold text-red-500">
                <span>
                  <IoLocationSharp />
                </span>
                My Address
              </p>
            </div>

            {address.length &&
              address
                .sort((a, b) => b.default - a.default)
                .map(
                  ({
                    firstName,
                    lastName,
                    _id: addressId,
                    phone,
                    address,
                    default: isDefault,
                    description,
                  }) => (
                    <div
                      key={addressId}
                      className="flex h-[140px] items-center justify-between gap-4"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex divide-x divide-red-300">
                          <p className="pr-2 font-semibold">{`${firstName} ${lastName}`}</p>
                          <p className="pl-2 text-slate-600">(+63) {phone}</p>
                        </div>
                        <p className="w-[400px] text-xs text-slate-600">
                          {address}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        {isDefault && (
                          <p className="w-[110px] border border-red-500 px-2 text-center text-sm text-red-500">
                            Default
                          </p>
                        )}

                        {!isDefault && (
                          <button
                            onClick={() => {
                              setDefault({
                                firstName,
                                lastName,
                                _id: addressId,
                                phone,
                                address,
                                description,
                                default: isDefault,
                              });
                              setIsChangingAddress(false);
                            }}
                            className="w-[110px] border border-slate-500 px-2 text-sm text-slate-500"
                          >
                            Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ),
                )}

            <div className="flex gap-4 self-end pt-4">
              <button
                className="w-fit self-end rounded-md border border-[#888888aa] px-4 py-2 text-[#888888]"
                onClick={() => setIsChangingAddress(false)}
              >
                Cancel
              </button>
              <Link
                to="/profile"
                className="w-fit self-end rounded-md border border-red-500 bg-red-500 px-4 py-2 font-semibold text-white"
              >
                Manage addresses
              </Link>
            </div>
          </div>
        </div>
      )}

      {!isCheckingOut && (
        <div className="w-full">
          <Link
            to="/order"
            className="flex w-fit items-center gap-1 self-start pb-6 font-semibold hover:underline sm:text-lg"
            onClick={() => setMenu("order")}
          >
            <MdKeyboardArrowLeft />
            Go back
          </Link>

          {/* <div className="divide-y divide-[#fcc6c6] rounded-md bg-[#fef4f4] p-2 md:p-8 lg:w-[800px]"> */}
          <div className="w-full divide-y divide-[#fcc6c6] rounded-md bg-[#fef4f4] p-2 md:p-8">
            <h3 className="px-10 pb-6 pt-4 text-center text-3xl font-bold text-[#311F09] sm:pb-8 sm:text-5xl">
              Order Summary
            </h3>

            <div className="flex w-full justify-between">
              {/* <p className="w-[100px] bg-[#fcc6c6] py-1 text-center text-sm font-semibold capitalize md:w-[300px] md:text-lg"> */}
              <p className="flex-[2] bg-[#fcc6c6] py-1 text-center text-sm font-semibold capitalize sm:text-lg">
                food
              </p>

              <p className="hidden flex-1 bg-[#fdd4d4] py-1 text-center text-sm font-semibold capitalize sm:inline-block sm:text-lg">
                quantity
              </p>

              <p className="flex-1 bg-[#fdd4d4] py-1 text-center text-sm font-semibold capitalize sm:hidden sm:text-lg">
                qty
              </p>

              <p className="flex-1 bg-[#fee3e3] py-1 text-center text-sm font-semibold capitalize sm:text-lg">
                price
              </p>

              <p className="hidden flex-1 bg-[#fef1f1] py-1 text-center text-sm font-semibold capitalize sm:inline-block sm:text-lg">
                actions
              </p>

              <p className="w-[25px] bg-[#fef1f1] py-1 text-center text-sm font-semibold capitalize sm:hidden sm:text-lg"></p>
            </div>

            {cart.length > 0 ? (
              cart.map((food) => <FoodSummaryItem key={food._id} food={food} />)
            ) : (
              <p className="flex h-[200px] items-center justify-center text-center text-sm font-semibold text-red-400">
                Select a food from our menu to start ordering now
              </p>
            )}

            <div className="flex w-full flex-col items-center gap-4">
              <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#fcc6c6] px-6 text-right">
                <div className="p-2 text-sm text-[#000000] text-opacity-55">
                  <p>Subtotal</p>
                </div>

                <div className="w-[240px] border-l border-dotted border-[#fcc6c6] px-2 py-3 text-opacity-10">
                  <div className="flex justify-end">
                    <p className="flex w-[80px] items-center justify-between gap-2 text-lg font-semibold">
                      <span>₱</span> {formatNumber(itemsTotal)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-end text-right">
                <div className="p-2 text-sm text-[#000000] text-opacity-55">
                  <p></p>
                </div>

                <div className="w-[240px] py-3 text-opacity-10">
                  <div className="flex justify-end">
                    <button
                      disabled={cart.length < 1 ? true : false}
                      onClick={() => {
                        setIsCheckingOut(true);
                      }}
                      className={` ${cart.length < 1 ? "cursor-not-allowed bg-[#aaaaaa]" : "bg-red-500"} mb-2 mt-4 w-[180px] rounded-lg p-2 text-lg font-bold text-white sm:mt-10 sm:w-full sm:text-2xl`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCheckingOut && (
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Link
            className="flex w-fit items-center gap-1 self-start text-lg font-semibold hover:underline"
            onClick={() => setIsCheckingOut(false)}
          >
            <MdKeyboardArrowLeft />
            Go back
          </Link>

          <h2 className="mb-4 text-3xl font-bold text-[#311F09] sm:mb-8 sm:text-5xl">
            Checkout
          </h2>

          <div className="flex min-h-[200px] w-full flex-col gap-4 rounded-md bg-[#faeded] p-8">
            <div>
              <p className="flex items-center gap-1 rounded-md font-semibold text-red-500">
                <span>
                  <IoLocationSharp />
                </span>
                My Address
              </p>
            </div>

            {address.length > 0 ? (
              <div
                key={currentDefaultAddress._id}
                className="flex flex-col gap-4 text-sm"
              >
                <div className="flex flex-col gap-2 rounded-md bg-[#f5f5f5] p-4">
                  <p className="font-bold">
                    {currentDefaultAddress.firstName}{" "}
                    {currentDefaultAddress.lastName}{" "}
                    {currentDefaultAddress.phone}
                  </p>

                  <p>{currentDefaultAddress.address}</p>

                  {currentDefaultAddress.default && (
                    <p className="w-fit border border-red-500 px-2 text-red-500">
                      default
                    </p>
                  )}
                </div>

                <p
                  className="cursor-pointer self-end pr-2 text-blue-600 hover:underline"
                  onClick={() => setIsChangingAddress(true)}
                >
                  Change
                </p>
              </div>
            ) : (
              <div className="flex h-[100px] items-center justify-center text-center">
                <p>
                  Add an address{" "}
                  <Link
                    to="/profile"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    here
                  </Link>{" "}
                  to place order
                </p>
              </div>
            )}
          </div>

          <div className="w-full">
            <form
              onSubmit={handleOrder}
              className="flex w-full flex-col divide-y divide-[#fcc6c6] rounded-md bg-[#fef4f4]"
            >
              <div className="flex w-full justify-between">
                <p className="flex-[2] bg-[#fcc6c6] py-1 text-center text-base font-semibold capitalize sm:text-lg xl:flex-1">
                  food
                </p>

                <p className="hidden flex-1 bg-[#fdd4d4] py-1 text-center text-base font-semibold capitalize sm:inline-block sm:text-lg">
                  quantity
                </p>

                <p className="flex-1 bg-[#fdd4d4] py-1 text-center text-base font-semibold capitalize sm:hidden sm:text-lg">
                  qty
                </p>

                <p className="flex-1 bg-[#fee3e3] py-1 text-center text-base font-semibold capitalize sm:text-lg">
                  price
                </p>
              </div>

              {cart.length > 0 ? (
                cart.map((food) => (
                  <div
                    key={food._id}
                    className="flex w-full items-center justify-between py-4"
                  >
                    <div className="flex flex-[2] items-center gap-4 xl:flex-1 xl:gap-8">
                      <img
                        className="h-8 w-8 rounded-md object-cover sm:h-16 sm:w-16 xl:h-24 xl:w-24"
                        src={food.image}
                        alt={food.foodName}
                      />
                      <p className="line-clamp-1 text-xs font-semibold italic sm:text-base xl:text-lg">
                        {food.foodName}
                      </p>
                    </div>

                    <div className="flex flex-1 items-center justify-center gap-6 font-thin">
                      <span className="rounded-md bg-[#fee3e3] px-4 py-1 text-sm font-bold">
                        {food.quantity}
                      </span>
                    </div>

                    <p className="flex flex-1 justify-center gap-1 text-center text-sm sm:gap-2 xl:text-base">
                      <span className="sm:w-[20px]">₱</span>{" "}
                      <span className="text-start sm:w-[50px]">
                        {formatNumber(food.price)}
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="flex h-[200px] items-center justify-center text-center text-sm font-semibold text-red-400">
                  Select a food from our menu to start ordering now
                </p>
              )}
            </form>

            <div className="flex w-full items-center justify-end border-b border-t border-dotted border-b-[#fcc6c6] border-t-[#fcc6c6] px-6 text-right">
              <div className="p-2 text-sm text-[#000000] text-opacity-55">
                <p>Subtotal</p>
              </div>

              <div className="w-[140px] border-l border-dotted border-[#fcc6c6] px-2 py-3 text-opacity-10 sm:w-[240px]">
                <div className="flex justify-end">
                  <p className="flex w-[90px] items-center justify-between gap-2 text-lg font-semibold">
                    <span>₱</span> {formatNumber(itemsTotal)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#fcc6c6] px-6 text-right">
              <div className="p-2 text-sm text-[#000000] text-opacity-55">
                <p>Delivery Fee</p>
              </div>

              <div className="w-[140px] border-l border-dotted border-[#fcc6c6] px-2 py-3 text-opacity-10 sm:w-[240px]">
                <div className="flex justify-end">
                  <p className="flex w-[90px] items-center justify-between gap-2 text-lg font-semibold">
                    <span>₱</span> {formatNumber(49)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#fcc6c6] px-6 text-right">
              <div className="p-2 text-sm text-[#000000] text-opacity-55">
                <p>Voucher</p>
              </div>

              <div className="w-[140px] border-l border-dotted border-[#fcc6c6] px-2 py-3 text-opacity-10 sm:w-[240px]">
                <div className="flex justify-end">
                  <p className="flex w-[90px] items-center justify-between gap-2 text-lg font-semibold">
                    <span>₱</span> {formatNumber(0)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#fcc6c6] px-6 text-right">
              <div className="p-2 text-sm text-[#000000] text-opacity-55">
                <p>Total</p>
              </div>

              <div className="w-[140px] border-l border-dotted border-[#fcc6c6] px-2 py-3 text-opacity-10 sm:w-[240px]">
                <div className="flex justify-end">
                  <p className="flex w-[90px] items-center justify-between gap-2 text-lg font-semibold text-red-500">
                    <span>₱</span> {formatNumber(+itemsTotal + 49)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex w-full flex-col rounded-md border border-[#fcc6c6] px-8 py-6">
            <h2 className="text-lg font-semibold">Voucher Code</h2>
            <div className="mt-2">
              <input
                type="text"
                // value={voucherCode}
                // onChange={handleInputChange}
                placeholder="Enter voucher code"
                className="w-full cursor-not-allowed rounded-md border p-2"
                disabled={true} // Temporarily disabled
              />
              <p className="mt-2 pl-1 text-xs text-gray-500">
                Vouchers are temporarily disabled. Please check back later.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 rounded-md border border-[#fcc6c6] px-8 py-6">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center">
                  <input
                    type="radio"
                    id={method.id}
                    name="paymentMethod"
                    value={method.label}
                    checked={method.label === "Cash on Delivery"}
                    onChange={
                      method.label === "Cash on Delivery"
                        ? handleRadioChange
                        : null
                    }
                    className={`${method.label !== "Cash on Delivery" ? "cursor-not-allowed" : ""} mr-2`}
                    disabled={method.label !== "Cash on Delivery"}
                  />
                  <label
                    htmlFor={method.id}
                    className={`text-sm ${method.label !== "Cash on Delivery" ? "text-gray-500" : ""}`}
                  >
                    {method.label}
                  </label>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Only cash on delivery is available as of the moment. Please check
              back later.
            </p>
          </div>

          <button
            className={`rounded-lg ${address.length > 0 ? "bg-red-500" : "cursor-not-allowed bg-[#888888aa]"} w-full p-4 font-bold uppercase text-white`}
            disabled={address.length < 1}
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
