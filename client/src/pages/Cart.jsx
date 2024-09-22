import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  return (
    <div className="px-10 py-20 pt-40 bg-[#F9F9F9] flex items-center justify-center">
      {!isCheckingOut && (
        <div className="w-[300px] border bg-red-100 rounded-2xl h-fit lg:flex items-center justify-center flex-col p-6">
          <h3 className="text-4xl font-bold p-10 text-center">Order list</h3>

          <div className="bg-slate-500 h-[1px] w-full mb-10"></div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20 justify-between">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20 justify-between">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20 justify-between">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20 justify-between">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">Spaghetti</p>
              <FaRegTrashAlt className="text-red-500 text-lg cursor-pointer" />
            </div>
            <div className="flex items-center gap-20 justify-between">
              <div className="flex items-center justify-center font-thin gap-6">
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaMinus className="text-xs text-red-300 cursor-pointer" />
                </div>
                <span>1</span>
                <div className="p-1 bg-slate-100 shadow-md rounded-full flex items-center justify-center">
                  <FaPlus className="text-xs text-green-300 cursor-pointer" />
                </div>
              </div>
              <span>$35.7</span>
            </div>
          </div>

          <div className="bg-slate-500 h-[1px] w-full mb-10"></div>

          <div className="flex items-center flex-col justify-center gap-2">
            <p className="text-xl font-bold self-start">Voucher Code</p>
            <div className="flex items-center gap-2">
              <input
                className="p-2 rounded-lg"
                type="text"
                placeholder="FREETOEAT"
              />
              <button className="bg-blue-400 text-white font-thin p-3 rounded-lg">
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="bg-slate-500 h-[1px] w-full m-10"></div>

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Subtotal</p>
              <p className="text-slate-500 font-semibold">$78.3</p>
            </div>
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Tax fee</p>
              <p className="text-slate-500 font-semibold">$3.5</p>
            </div>
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Voucher</p>
              <p className="text-slate-500 font-semibold">$5.0</p>
            </div>
            <div className="text-xl font-bold flex justify-between w-full">
              <p className="">Subtotal</p>
              <p className="text-slate-500 font-semibold">$78.3</p>
            </div>
          </div>

          <button
            onClick={() => setIsCheckingOut(true)}
            className="text-2xl text-white w-full bg-red-500 rounded-lg font-bold p-2 mt-10 mb-2"
          >
            Checkout
          </button>
        </div>
      )}

      {isCheckingOut && (
        <div className="flex flex-col items-center justify-center  gap-6 w-screen max-w-[500px]">
          <h2 className="text-5xl font-bold text-[#311F09] mb-8">Checkout</h2>
          <p
            onClick={() => setIsCheckingOut(false)}
            className="text-slate-700 self-start text-lg hover:underline font-semibold"
          >
            Back to order list
          </p>

          <form className="flex flex-col w-full  gap-4">
            <input
              className="p-3 border rounded-lg"
              type="text"
              id="address"
              placeholder="address"
              required
            />

            <input
              className="p-3 border rounded-lg"
              type="text"
              id="firstName"
              placeholder="first name"
              required
            />

            <input
              className="p-3 border rounded-lg"
              type="text"
              id="lastName"
              placeholder="last name"
              required
            />

            <input
              className="p-3 border rounded-lg"
              type="email"
              id="email"
              placeholder="email"
              required
            />

            <div className="flex items-center border rounded-lg">
              <p className="text-sm text-slate-500 font-semibold p-3">+63</p>

              <input
                className="bg-transparent w-full p-3"
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                pattern="(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})"
                required
              />
            </div>

            <textarea
              className="p-3 border rounded-lg w-full min-h-[75px] max-h-[150px]"
              id="message"
              type="text"
              rows={4}
              placeholder="landmarks near you..."
            />

            <div className="flex flex-col justify-center gap-4 my-4">
              <h3 className="font-semibold">Mode of payment:</h3>
              <div className="flex gap-2 items-center">
                <input
                  id="payment"
                  type="checkbox"
                  className="w-6 h-6 border-gray-300 bg-white cursor-pointer"
                />
                <label htmlFor="payment" className="text-sm">
                  Cash on Delivery
                </label>
              </div>
            </div>

            <button className="p-4 uppercase bg-red-500 text-white font-bold rounded-lg">
              Order now
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
