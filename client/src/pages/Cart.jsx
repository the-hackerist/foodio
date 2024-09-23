import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  return (
    <div className="flex items-center justify-center bg-[#F9F9F9] px-10 py-20 pt-40">
      {!isCheckingOut && (
        <div className="h-fit w-[300px] flex-col items-center justify-center rounded-2xl border bg-red-100 p-6 lg:flex">
          <h3 className="p-10 text-center text-4xl font-bold">Order list</h3>

          <div className="mb-10 h-[1px] w-full bg-slate-500"></div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
            </div>
            <div className="flex items-center justify-between gap-20">
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
            </div>
            <div className="flex items-center justify-between gap-20">
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
            </div>
            <div className="flex items-center justify-between gap-20">
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
            </div>
            <div className="flex items-center justify-between gap-20">
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="cursor-pointer text-lg text-red-500" />
            </div>
            <div className="flex items-center justify-between gap-20">
              <div className="flex items-center justify-center gap-6 font-thin">
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaMinus className="cursor-pointer text-xs text-red-300" />
                </div>
                <span>1</span>
                <div className="flex items-center justify-center rounded-full bg-slate-100 p-1 shadow-md">
                  <FaPlus className="cursor-pointer text-xs text-green-300" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="mb-10 h-[1px] w-full bg-slate-500"></div>

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

          <div className="m-10 h-[1px] w-full bg-slate-500"></div>

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
