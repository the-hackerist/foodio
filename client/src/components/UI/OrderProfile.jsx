import { Link } from "react-router-dom";
import { useMenu } from "../../contexts/MenuContext";
import { formatNumber } from "../../utils/NumberFormatter";

/* eslint-disable react/prop-types */
function OrderProfile({ order }) {
  const total = order.items.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  const { setMenu } = useMenu();

  return (
    <div className="flex w-full flex-col rounded-md">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col rounded-md border-dotted bg-[#f5f5f5]">
          <div className="flex flex-col items-center justify-between py-[6px] sm:flex-row">
            <Link
              to={`/order/${order._id}`}
              className="cursor-pointer px-4 py-2 font-semibold text-blue-600 hover:underline"
            >
              View Order
            </Link>

            <div className="flex flex-col items-center gap-2 divide-red-500 self-center p-4 text-center sm:flex-row sm:gap-0 sm:divide-x sm:self-end sm:text-start">
              <p className="bold text-xs uppercase sm:pr-4">
                <span className="font-bold">Order ID:</span> {order._id}
              </p>
              <p className="text-sm font-semibold uppercase text-red-500 sm:pl-4">
                order {order.status}
              </p>
            </div>
          </div>

          <div className="mx-4 h-[1px] bg-red-300"></div>

          <div className="flex flex-col gap-4 rounded-md p-4 sm:p-8">
            {order.items.map((orderItem) => (
              <div
                key={orderItem._id}
                className="flex flex-col items-center justify-between gap-1 sm:flex-row sm:gap-4"
              >
                <div className="flex gap-4">
                  {/* <div className="h-12 w-12 overflow-hidden rounded-md border border-[#00000042] sm:h-24 sm:w-24"> */}
                  <img
                    className="h-12 w-12 rounded-md object-cover sm:h-24 sm:w-24"
                    alt="food image"
                    src={orderItem.image}
                  />
                  {/* </div> */}

                  <div className="self-center sm:self-start">
                    <p className="text-sm font-semibold sm:text-lg">
                      {orderItem.foodName}
                    </p>
                    <p className="line-clamp-3 pt-1 text-xs sm:pt-0 sm:text-sm">
                      {orderItem.description}
                    </p>
                    <p className="pt-1 text-sm font-semibold sm:pt-0 sm:text-base">
                      x{orderItem.quantity}
                    </p>
                    <p className="flex w-[80px] items-center justify-between sm:hidden">
                      <span>₱</span> {formatNumber(orderItem.price)}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <p className="flex w-[80px] items-center justify-between">
                    <span>₱</span> {formatNumber(orderItem.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-md border border-dotted bg-[#FFFCF5] p-4">
          <div className="flex w-full flex-col gap-4">
            <div className="flex items-center justify-between gap-3 self-center sm:w-[200px] sm:items-end sm:gap-0 sm:self-end">
              <p className="text-sm text-[#888888]">Order Total: </p>
              <p className="text-lg font-semibold text-red-500 sm:text-xl">
                ₱ {formatNumber(total + 49)}
              </p>
            </div>

            <div className="flex w-full justify-end">
              <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row sm:gap-0">
                <p className="flex w-fit flex-col text-nowrap text-xs text-[#888888ff]">
                  <span className="w-full text-center font-semibold sm:text-start">
                    Order Date:
                  </span>{" "}
                  {order.orderDate.slice(0, 10)} {order.orderDate.slice(11, 19)}
                </p>

                <div className="flex w-full flex-col justify-end gap-2 sm:flex-row sm:gap-4">
                  <Link
                    to="/order"
                    onClick={() => setMenu("order")}
                    className="cursor-pointer rounded-md bg-red-500 py-2 text-center text-sm font-semibold text-white sm:px-4 sm:text-base"
                  >
                    Order Again
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={() => setMenu("contact-us")}
                    className="cursor-pointer rounded-md border border-[#00000015] bg-[#fff] py-2 text-center text-sm font-semibold text-[#555555] sm:px-4 sm:text-base"
                  >
                    Contact Restaurant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProfile;
