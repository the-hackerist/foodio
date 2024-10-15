import { Link } from "react-router-dom";
import { useMenu } from "../../contexts/MenuContext";

/* eslint-disable react/prop-types */
function OrderProfile({ order }) {
  const total = order.items
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);

  const { setMenu } = useMenu();

  return (
    <div className="flex w-full flex-col rounded-md">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col rounded-md border-dotted bg-[#f5f5f5]">
          <div className="flex items-center justify-between py-[6px]">
            <Link
              to={`/order/${order._id}`}
              className="cursor-pointer px-4 py-2 font-semibold text-blue-600 hover:underline"
            >
              View Order
            </Link>
            <div className="flex items-center divide-x divide-red-500 self-end p-4">
              <p className="bold pr-4 text-xs uppercase">
                <span className="font-bold">Order ID:</span> {order._id}
              </p>
              <p className="pl-4 text-sm font-semibold uppercase text-red-500">
                order {order.status}
              </p>
            </div>
          </div>

          <div className="mx-4 h-[1px] bg-red-300"></div>

          <div className="flex flex-col gap-4 rounded-md p-8">
            {order.items.map((orderItem) => (
              <div
                key={orderItem._id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-md border border-[#00000042]">
                    <img
                      className="object-cover"
                      alt="food image"
                      src={orderItem.image}
                    />
                  </div>

                  <div className="self-center">
                    <p className="text-lg font-semibold">
                      {orderItem.foodName}
                    </p>
                    <p className="line-clamp-1 w-[550px] text-sm">
                      {orderItem.description}
                    </p>
                    <p>x{orderItem.quantity}</p>
                  </div>
                </div>

                <div>
                  <p className="flex w-[80px] items-center justify-between">
                    <span>₱</span> {orderItem.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-md border border-dotted bg-[#FFFCF5] p-4">
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-[170px] items-end justify-between self-end">
              <p className="text-sm text-[#888888]">Order Total: </p>
              <p className="text-xl font-semibold text-red-500">₱ {total}</p>
            </div>

            <div className="flex w-full justify-end">
              <div className="flex w-full items-center justify-between">
                <p className="text-xs text-[#888888ff]">
                  <span className="font-semibold">Order Date:</span>{" "}
                  {order.orderDate.slice(0, 10)} {order.orderDate.slice(11, 19)}
                </p>
                <div className="flex gap-8">
                  <Link
                    to="/order"
                    onClick={() => setMenu("order")}
                    className="w-[200px] cursor-pointer rounded-md bg-red-500 py-2 text-center font-semibold text-white"
                  >
                    Order Again
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={() => setMenu("contact-us")}
                    className="w-[200px] cursor-pointer rounded-md border border-[#00000015] bg-[#fff] py-2 text-center font-semibold text-[#555555]"
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
