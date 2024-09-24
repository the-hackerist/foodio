import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const data = [
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
  { name: "spaghetti", qty: 1, cost: "35.7" },
];

function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] px-10 py-20 pt-40">
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

            <div className="flex h-[500px] w-full flex-col divide-y divide-red-200 overflow-y-scroll rounded-lg bg-[#F5F5F5] px-6 py-2 md:h-full md:overflow-x-hidden md:overflow-y-scroll">
              {data &&
                data.map((data, i) => (
                  <div key={i} className="flex flex-col gap-4 py-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">{data.name}</p>
                      <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
                    </div>

                    <div className="flex items-center justify-between gap-20 md:gap-0">
                      <div className="flex items-center justify-center gap-6 font-thin md:gap-2">
                        <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                          <FaMinus className="cursor-pointer text-xs text-red-300" />
                        </div>
                        <span>{data.qty}</span>
                        <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                          <FaPlus className="cursor-pointer text-xs text-green-300" />
                        </div>
                      </div>
                      <span>${data.cost}</span>
                    </div>
                  </div>
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
                  <p className="font-semibold text-slate-500">$78.3</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Tax fee</p>
                  <p className="font-semibold text-slate-500">$3.5</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Voucher</p>
                  <p className="font-semibold text-slate-500">$5.0</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Subtotal</p>
                  <p className="font-semibold text-slate-500">$78.3</p>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
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
          <p
            onClick={() => setIsCheckingOut(false)}
            className="self-start text-lg font-semibold text-slate-700 hover:underline"
          >
            Back to order list
          </p>

          <form className="flex w-full flex-col gap-4">
            <input
              className="rounded-lg border p-3"
              type="text"
              id="address"
              placeholder="address"
              required
            />

            <input
              className="rounded-lg border p-3"
              type="text"
              id="firstName"
              placeholder="first name"
              required
            />

            <input
              className="rounded-lg border p-3"
              type="text"
              id="lastName"
              placeholder="last name"
              required
            />

            <input
              className="rounded-lg border p-3"
              type="email"
              id="email"
              placeholder="email"
              required
            />

            <div className="flex items-center rounded-lg border">
              <p className="p-3 text-sm font-semibold text-slate-500">+63</p>

              <input
                className="w-full bg-transparent p-3"
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                pattern="(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})"
                required
              />
            </div>

            <textarea
              className="max-h-[150px] min-h-[75px] w-full rounded-lg border p-3"
              id="message"
              type="text"
              rows={4}
              placeholder="landmarks near you..."
            />

            <div className="my-4 flex flex-col justify-center gap-4">
              <h3 className="font-semibold">Mode of payment:</h3>
              <div className="flex items-center gap-2">
                <input
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
