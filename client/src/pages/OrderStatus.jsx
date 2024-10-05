import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";
import { FaRegStar, FaRegHandshake } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
function OrderStatus() {
  return (
    <div className="flex w-full flex-col p-80 pt-40">
      <header className="flex items-center justify-between rounded-md border border-dotted p-4">
        {/* header */}
        <button className="flex items-center justify-center uppercase text-black text-opacity-50 hover:underline">
          <span className="text-3xl">
            <MdKeyboardArrowLeft />
          </span>
          Back
        </button>

        <div className="flex divide-x-4">
          <p className="pr-4">ORDER ID. 24080396XETHD2</p>
          <p className="pl-4 font-semibold text-red-500">ORDER CONFIRMED</p>
        </div>
      </header>

      {/* delivery status  */}
      <div className="flex justify-evenly rounded-md border border-dotted p-4 px-20 py-12">
        <div className="flex w-[200px] flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-green-500 text-3xl text-green-500">
            <PiNewspaperClipping />
          </div>
          <div className="flex flex-col items-center">
            <p>Order Placed</p>
            <p className="text-sm text-[#00000042]">08/03/2024 00:51</p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-green-500 text-3xl text-green-500">
            <IoMdCheckmark />
          </div>
          <div className="flex flex-col items-center">
            <p>Order Confirmed</p>
            <p className="text-sm text-[#00000042]">08/03/2024 00:51</p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-slate-500 text-3xl text-slate-500">
            <GrDeliver />
          </div>
          <div className="flex flex-col items-center">
            <p>Order Out for Delivery</p>
            <p className="text-sm text-[#00000042]">08/03/2024 00:51</p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-slate-500 text-3xl text-slate-500">
            <FaRegHandshake />
          </div>
          <div className="flex flex-col items-center">
            <p>Order Received</p>
            <p className="text-sm text-[#00000042]">08/03/2024 00:51</p>
          </div>
        </div>

        <div className="flex w-[200px] flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[4px] border-slate-500 text-3xl text-slate-500">
            <FaRegStar />
          </div>
          <div className="flex flex-col items-center">
            <p>Order Completed</p>
            <p className="text-sm text-[#00000042]">08/03/2024 00:51</p>
          </div>
        </div>
      </div>

      {/* buy again */}
      <div className="flex items-center justify-between rounded-md border border-dotted bg-[#FFFCF5] p-4">
        <p className="text-sm text-[#0000008A]">
          Thank you for shopping with Foodio!
        </p>
        <div className="flex gap-8">
          <button className="w-[200px] rounded-md bg-red-500 py-2 font-semibold text-white">
            Order Again
          </button>
          <button className="w-[200px] rounded-md border border-[#00000015] bg-[#fff] py-2 font-semibold text-[#555555]">
            Contact Restaurant
          </button>
        </div>
      </div>

      <div className="flex divide-x-2 rounded-md border border-dotted p-4">
        <div className="flex w-[30%] flex-col gap-2 pr-6">
          <p className="pb-2 text-2xl font-medium text-[#000000CC]">
            Delivery Address
          </p>
          <p className="text-lg">Vince dela Pena</p>
          <p className="text-sm text-[#0000008A]">(+63) 9270089269</p>
          <p className="text-sm text-[#0000008A]">
            Pioneer St. cor EDSA, Pioneer Woodlands Condominium, Tower 3, unit
            36D, Barangka Ilaya, Mandaluyong City, Metro Manila, Metro Manila,
            1554
          </p>
        </div>

        <div className="flex w-[70%] flex-col gap-4 pl-6">
          <p className="pb-2 text-2xl font-medium text-[#000000CC]">
            Order Summary
          </p>

          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <div className="h-24 w-24 overflow-hidden border border-[#00000042]">
                <img
                  className="object-cover"
                  alt="food image"
                  src="https://imgs.search.brave.com/RS3Xyj5LkwHnpivn8ZCZzGkRMB8_sJ4IfXQM44Go9sQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aXp6YS1mb29kXzE0/NDYyNy0zODYyMS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
                />
              </div>

              <div className="self-center">
                <p className="text-lg font-semibold">Margherita pizza</p>
                <p className="line-clamp-1 w-[550px] text-sm">
                  Classic pizza topped with fresh tomatoes, mozzarella cheese,
                  and basil. Classic pizza topped with fresh tomatoes,
                  mozzarella cheese, and basil.
                </p>
                <p>x1</p>
              </div>
            </div>

            <div>
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 1,099.00
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <div className="h-24 w-24 overflow-hidden border border-[#00000042]">
                <img
                  className="object-cover"
                  alt="food image"
                  src="https://imgs.search.brave.com/RS3Xyj5LkwHnpivn8ZCZzGkRMB8_sJ4IfXQM44Go9sQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aXp6YS1mb29kXzE0/NDYyNy0zODYyMS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
                />
              </div>

              <div className="self-center">
                <p className="text-lg font-semibold">Margherita pizza</p>
                <p className="line-clamp-1 w-[550px] text-sm">
                  Classic pizza topped with fresh tomatoes, mozzarella cheese,
                  and basil.Classic pizza topped with fresh tomatoes, mozzarella
                  cheese, and basil.
                </p>
                <p>x1</p>
              </div>
            </div>

            <div>
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 1,099.00
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <div className="h-24 w-24 overflow-hidden border border-[#00000042]">
                <img
                  className="object-cover"
                  alt="food image"
                  src="https://imgs.search.brave.com/RS3Xyj5LkwHnpivn8ZCZzGkRMB8_sJ4IfXQM44Go9sQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aXp6YS1mb29kXzE0/NDYyNy0zODYyMS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
                />
              </div>

              <div className="self-center">
                <p className="text-lg font-semibold">Margherita pizza</p>
                <p className="line-clamp-1 w-[550px] text-sm">
                  Classic pizza topped with fresh tomatoes, mozzarella cheese,
                  and basil.
                </p>
                <p>x1</p>
              </div>
            </div>

            <div>
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 1,099.00
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <div className="h-24 w-24 overflow-hidden border border-[#00000042]">
                <img
                  className="object-cover"
                  alt="food image"
                  src="https://imgs.search.brave.com/RS3Xyj5LkwHnpivn8ZCZzGkRMB8_sJ4IfXQM44Go9sQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aXp6YS1mb29kXzE0/NDYyNy0zODYyMS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
                />
              </div>

              <div className="self-center">
                <p className="text-lg font-semibold">Margherita pizza</p>
                <p className="line-clamp-1 w-[550px] text-sm">
                  Classic pizza topped with fresh tomatoes, mozzarella cheese,
                  and basil.
                </p>
                <p>x1</p>
              </div>
            </div>

            <div>
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 899.00
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <div className="h-24 w-24 overflow-hidden border border-[#00000042]">
                <img
                  className="object-cover"
                  alt="food image"
                  src="https://imgs.search.brave.com/RS3Xyj5LkwHnpivn8ZCZzGkRMB8_sJ4IfXQM44Go9sQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aXp6YS1mb29kXzE0/NDYyNy0zODYyMS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
                />
              </div>

              <div className="self-center">
                <p className="text-lg font-semibold">Margherita pizza</p>
                <p className="line-clamp-1 w-[550px] text-sm">
                  Classic pizza topped with fresh tomatoes, mozzarella cheese,
                  and basil.
                </p>
                <p>x1</p>
              </div>
            </div>

            <div>
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 999.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md border border-dotted">
        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="p-2 text-sm text-[#000000] text-opacity-55">
            <p>Sub Total</p>
          </div>

          <div className="border-l- w-[240px] border-l border-dotted px-2 py-3 text-opacity-10">
            <div className="flex justify-end">
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 1,099.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="p-2 text-sm text-[#000000] text-opacity-55">
            <p>Delivery fee</p>
          </div>

          <div className="border-l- w-[240px] border-l border-dotted px-2 py-3 text-opacity-10">
            <div className="flex justify-end">
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 49.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="p-2 text-sm text-[#000000] text-opacity-55">
            <p>Voucher</p>
          </div>

          <div className="border-l- w-[240px] border-l border-dotted px-2 py-3 text-opacity-10">
            <div className="flex justify-end">
              <p className="flex w-[80px] items-center justify-between">
                <span>₱</span> 39.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="p-2 text-sm text-[#000000] text-opacity-55">
            <p>Order Total</p>
          </div>

          <div className="border-l- w-[240px] border-l border-dotted px-2 py-5 text-opacity-10">
            <p className="text-3xl font-semibold">₱ 1,099</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-end border-b border-dotted border-b-[#00000015] px-6 text-right">
          <div className="p-2 text-sm text-[#000000] text-opacity-55">
            <p>Payment Method</p>
          </div>

          <div className="border-l- w-[240px] border-l border-dotted px-2 py-5 text-opacity-10">
            <p className="text-lg">Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
