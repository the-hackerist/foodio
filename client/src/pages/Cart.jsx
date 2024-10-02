import { useState } from "react";

import { FaPlus } from "react-icons/fa";

import OrderListItem from "../components/UI/OrderListItem";

import { useCart } from "../contexts/CartContext";

function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);

  const [orderFormData, setOrderFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    description: "",
    payment: "cashOnDelivery",
  });

  const [newAddressFormData, setNewAddressFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    description: "",
    default: false,
  });

  const { cart, calculateTotal } = useCart();

  const { tax, total, itemsTotal } = calculateTotal();

  const handleNewAddressFormData = (e) => {
    e.preventDefault();

    if (e.target.type === "text" || e.target.type === "textarea")
      setNewAddressFormData({
        ...newAddressFormData,
        [e.target.id]: e.target.value,
      });

    if (e.target.type === "checkbox")
      setNewAddressFormData({
        ...newAddressFormData,
        [e.target.id]: e.target.checked,
      });
  };

  const handleOrderFormData = (e) => {
    e.preventDefault();

    if (e.target.type === "text" || e.target.type === "textarea")
      setOrderFormData({
        ...orderFormData,
        [e.target.id]: e.target.value,
      });

    if (e.target.type === "checkbox")
      setOrderFormData({
        ...orderFormData,
        [e.target.id]: e.target.checked ? "cashOnDelivery" : "",
      });
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#F9F9F9] px-10 py-20 pt-40`}
    >
      {isCheckingOut && isAddingAddress && (
        <div className="absolute flex h-full w-full justify-center border-black bg-black bg-opacity-30 pt-[500px]">
          <div className="flex h-fit w-[400px] flex-col gap-4 rounded-lg border bg-white p-6">
            <p className="text-lg font-semibold">New Address</p>
            <form className="flex flex-col gap-4">
              <input
                onChange={handleNewAddressFormData}
                className="rounded-lg border p-3"
                id="firstName"
                required
                type="text"
                placeholder="First Name"
              />
              <input
                onChange={handleNewAddressFormData}
                className="rounded-lg border p-3"
                id="lastName"
                required
                type="text"
                placeholder="Last Name"
              />
              <input
                onChange={handleNewAddressFormData}
                className="rounded-lg border p-3"
                id="phone"
                required
                type="text"
                placeholder="Phone Number"
              />
              <input
                onChange={handleNewAddressFormData}
                className="rounded-lg border p-3"
                id="address"
                required
                type="text"
                placeholder="Address"
              />
              <textarea
                onChange={handleNewAddressFormData}
                id="description"
                rows={5}
                className="max-h-[150px] min-h-[75px] w-full rounded-lg border p-3"
                placeholder="landmarks near you..."
              />
              <div className="flex items-center gap-2">
                <input
                  onChange={handleNewAddressFormData}
                  id="default"
                  type="checkbox"
                  className="h-4 w-4"
                />
                <label htmlFor="default" className="text-sm text-[#7f8183]">
                  Set as Default Address
                </label>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsAddingAddress(false)}
                  className="px-4 py-2 text-xs font-semibold uppercase hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button className="bg-red-500 px-4 py-2 text-xs font-semibold uppercase text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!isCheckingOut && (
        <>
          <h3 className="mb-8 hidden px-10 pb-10 text-center text-5xl font-bold text-[#311F09] md:inline-block">
            Order list
          </h3>
          <div className="flex max-w-[800px] flex-col items-center justify-center rounded-2xl bg-red-100 p-4 md:h-[500px] md:max-h-[500px] md:w-[650px] md:flex-row md:gap-10 md:p-10 lg:w-[800px]">
            <h3 className="px-10 pt-10 text-center text-4xl font-bold md:hidden">
              Order list
            </h3>

            <div className="my-10 h-[1px] w-full bg-slate-500 md:hidden"></div>

            <div className="flex h-[500px] w-full flex-col gap-2 divide-y divide-red-200 overflow-y-scroll rounded-lg bg-[#F5F5F5] px-6 py-2 md:h-full md:overflow-x-hidden md:overflow-y-scroll">
              {cart.map((menu) => (
                <OrderListItem key={menu.foodName} food={menu} />
              ))}
            </div>

            <div className="my-10 h-[1px] w-full bg-slate-500 md:hidden"></div>

            <div className="h-full px-6 py-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="self-start text-xl font-bold">Voucher Code</p>
                <div className="flex items-center gap-2">
                  <input
                    className="rounded-lg p-2"
                    type="text"
                    placeholder="FREETOEAT"
                  />
                  <button className="rounded-lg bg-blue-400 p-3 font-thin text-white">
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="my-10 h-[1px] w-full bg-slate-500"></div>

              <div className="flex w-full flex-col items-center gap-4">
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Subtotal</p>
                  <p className="font-semibold text-red-500">+ $ {itemsTotal}</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Tax fee</p>
                  <p className="font-semibold text-red-500">+ $ {tax}</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Voucher</p>
                  <p className="font-semibold text-green-500">- $5.0</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Total</p>
                  <p className="font-semibold text-slate-500">${total}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCheckingOut(true);
                }}
                className="mb-2 mt-10 w-full rounded-lg bg-red-500 p-2 text-2xl font-bold text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {isCheckingOut && (
        <div className="flex w-screen max-w-[500px] flex-col items-center justify-center gap-6">
          <h2 className="mb-8 text-5xl font-bold text-[#311F09]">Checkout</h2>

          <div className="flex w-full flex-col gap-3 rounded-lg bg-red-200 px-6 py-4 pt-8 shadow-md">
            <div className="flex items-center justify-between px-3">
              <p className="font-bold">My addresses</p>
              <button
                onClick={() => setIsAddingAddress(true)}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-bold uppercase text-white"
              >
                <FaPlus /> Add new address
              </button>
            </div>

            <div className="flex flex-col gap-2 p-3">
              <div className="flex h-full w-full justify-between gap-4 rounded-lg bg-slate-200/70 p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex divide-x-2 divide-red-300 text-sm">
                    <p className="pr-2 font-semibold">Vince dela Pena</p>
                    <p className="pl-2 text-slate-600">(+63) 927 008 9269</p>
                  </div>
                  <p className="text-xs text-slate-600">
                    Pioneer St. cor EDSA, Pioneer Woodlands Condominium, Tower
                    3, unit 36D Barangka Ilaya, Mandaluyong City, Metro Manila,
                    Metro Manila, 1554
                  </p>
                  <p className="w-fit border border-red-500 px-2 text-sm text-red-500">
                    Default
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-end gap-3">
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex h-full w-full justify-between gap-4 rounded-lg bg-slate-200/70 p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex divide-x-2 divide-red-300 text-sm">
                    <p className="pr-2 font-semibold">Vince dela Pena</p>
                    <p className="pl-2 text-slate-600">(+63) 927 008 9269</p>
                  </div>
                  <p className="text-xs text-slate-600">
                    Pioneer St. cor EDSA, Pioneer Woodlands Condominium, Tower
                    3, unit 36D Barangka Ilaya, Mandaluyong City, Metro Manila,
                    Metro Manila, 1554
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-end gap-3">
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </div>

                  <button className="text-nowrap border border-slate-400 px-3 text-sm text-slate-500">
                    Set as default
                  </button>
                </div>
              </div>

              <div className="flex h-full w-full justify-between gap-4 rounded-lg bg-slate-200/70 p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex divide-x-2 divide-red-300 text-sm">
                    <p className="pr-2 font-semibold">Vince dela Pena</p>
                    <p className="pl-2 text-slate-600">(+63) 927 008 9269</p>
                  </div>
                  <p className="text-xs text-slate-600">
                    Pioneer St. cor EDSA, Pioneer Woodlands Condominium, Tower
                    3, unit 36D Barangka Ilaya, Mandaluyong City, Metro Manila,
                    Metro Manila, 1554
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-end gap-3">
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </div>

                  <button className="text-nowrap border border-slate-400 px-3 text-sm text-slate-500">
                    Set as default
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p
            onClick={() => setIsCheckingOut(false)}
            className="self-start text-lg font-semibold text-slate-700 hover:underline"
          >
            Back to order list
          </p>

          <form className="flex w-full flex-col gap-4">
            <input
              onChange={handleOrderFormData}
              className="rounded-lg border p-3"
              type="text"
              id="address"
              placeholder="address"
              required
            />

            <input
              onChange={handleOrderFormData}
              className="rounded-lg border p-3"
              type="text"
              id="firstName"
              placeholder="first name"
              required
            />

            <input
              onChange={handleOrderFormData}
              className="rounded-lg border p-3"
              type="text"
              id="lastName"
              placeholder="last name"
              required
            />

            <div className="flex items-center rounded-lg border">
              <p className="p-3 text-sm font-semibold text-slate-500">+63</p>

              <input
                onChange={handleOrderFormData}
                className="w-full bg-transparent p-3"
                type="text"
                id="phone"
                placeholder="912 345 6789"
                pattern="^9[0-9]{2} [0-9]{3} [0-9]{4}"
                required
              />
            </div>

            <textarea
              onChange={handleOrderFormData}
              className="max-h-[150px] min-h-[75px] w-full rounded-lg border p-3"
              id="description"
              type="text"
              rows={4}
              placeholder="landmarks near you..."
            />

            <div className="my-4 flex flex-col justify-center gap-4">
              <h3 className="font-semibold">Mode of payment:</h3>
              <div className="flex items-center gap-2">
                <input
                  onChange={handleOrderFormData}
                  id="payment"
                  type="checkbox"
                  className="h-6 w-6 cursor-pointer border-gray-300 bg-white"
                />
                <label htmlFor="payment" className="text-sm">
                  Cash on Delivery
                </label>
              </div>
            </div>

            <button className="rounded-lg bg-red-500 p-4 font-bold uppercase text-white">
              Order now
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
