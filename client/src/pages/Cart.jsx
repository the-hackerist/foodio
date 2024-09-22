import { useState } from "react";

function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  return (
    <div className="px-10 py-20 pt-40 bg-[#F9F9F9] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center  gap-6 w-screen">
        <h2 className="text-5xl font-bold text-[#311F09] mb-8">Checkout</h2>

        <form className="flex flex-col w-full max-w-[500px] gap-4">
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
    </div>
  );
}

export default Cart;
