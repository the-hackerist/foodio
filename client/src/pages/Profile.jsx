import { useEffect, useState } from "react";

import { RiPencilFill, RiDiscountPercentLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosRestaurant } from "react-icons/io";

import { useAuth } from "../contexts/UserContext";
import { useOrder } from "../contexts/OrderContext";

const profileImage =
  "https://images.pexels.com/photos/9117796/pexels-photo-9117796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function Profile() {
  const [activeTab, setActiveTab] = useState("orders");
  const [ordersList, setOrdersList] = useState([]);

  const { user } = useAuth();
  const { getOrdersList } = useOrder();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getOrdersList();

      setOrdersList(data);
    };

    fetch();
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 bg-[#F9F9F9] px-10 py-20 pt-40 md:px-20 lg:gap-10 xl:gap-20">
      <div className="flex gap-4 border border-black p-10">
        <aside className="flex flex-col divide-y px-4">
          <div className="flex items-center justify-center gap-4 p-4">
            <div className="h-12 w-12 cursor-pointer overflow-hidden rounded-full">
              <img src={profileImage} alt="profile image" />
            </div>

            <div className="flex flex-col">
              <p className="text-md font-semibold">{user.username}</p>

              <p className="flex cursor-pointer items-center gap-1 text-[#888888] hover:underline">
                <span>
                  <RiPencilFill />
                </span>
                Edit Profile
              </p>
            </div>
          </div>

          <div className="text-md flex flex-col gap-1 pt-4">
            <div className="cursor-pointer rounded-md px-2 hover:bg-slate-200">
              <p className="flex h-8 items-center">
                <span className="w-[25px] text-red-400">
                  <FaRegUser />
                </span>
                My Account
              </p>

              <ul className="hidden">
                <li>Profile</li>
                <li>Addresses</li>
                <li>Change Password</li>
              </ul>
            </div>

            <div className="cursor-pointer rounded-md px-2 hover:bg-slate-200">
              <p className="flex h-8 items-center">
                <span className="w-[25px] text-red-400">
                  <IoFastFoodOutline />
                </span>
                My Orders
              </p>
            </div>

            <div className="cursor-pointer rounded-md px-2 hover:bg-slate-200">
              <p className="flex h-8 items-center">
                <span className="w-[25px] text-red-400">
                  <MdOutlineTableRestaurant />
                </span>
                My Reservations
              </p>
            </div>

            <div className="cursor-pointer rounded-md px-2 hover:bg-slate-200">
              <p className="flex h-8 items-center">
                <span className="w-[25px] text-red-400">
                  <RiDiscountPercentLine />
                </span>
                My Vouchers
              </p>
            </div>
          </div>
        </aside>

        <div className="h-[500px]">
          {/* account */}
          <div className="flex flex-col divide-y px-8">
            <div className="py-4">
              <p className="text-xl font-semibold">My Profile</p>
              <p className="text-sm">Manage and protect your account</p>
            </div>

            <div className="flex w-[800px] divide-x">
              <form className="flex divide-x p-2">
                <table className="w-[500px]">
                  <tr>
                    <td className="px-2 py-4">
                      <p className="text-end text-[#555555CC]">Username</p>
                    </td>
                    <td className="px-2 py-4">
                      <p>{user.username}</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-4">
                      <p className="text-end text-[#555555CC]">Name</p>
                    </td>
                    <td className="px-2">
                      <input
                        className="w-full border bg-transparent p-2"
                        type="text"
                        defaultValue={user.username}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-4">
                      <p className="text-end text-[#555555CC]">Email</p>
                    </td>
                    <td className="flex gap-2 px-2 py-4">
                      <p>{user.email}</p>
                      <p className="cursor-pointer text-blue-400 underline">
                        Change
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-4">
                      <p className="text-end text-[#555555CC]"> Phone Number</p>
                    </td>
                    <td className="flex gap-2 px-2 py-4">
                      <p>{user.phone || "09270089269"}</p>
                      <p className="cursor-pointer text-blue-400 underline">
                        Change
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-2 py-4"></td>
                    <td className="flex gap-2 px-2 py-4">
                      <button className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white">
                        Save
                      </button>
                    </td>
                  </tr>
                </table>
              </form>

              <div className="flex w-[300px] flex-col items-center justify-center gap-6">
                <div className="h-[100px] w-[100px] cursor-pointer overflow-hidden rounded-full">
                  <img src={profileImage} alt="profile image" />
                </div>

                <button className="rounded-md border bg-transparent px-4 py-2 text-[#555555]">
                  Select Image
                </button>

                <div>
                  <p className="text-md text-[#999999]">
                    File size: maximum 1 MB
                  </p>
                  <p className="text-md text-[#999999]">
                    File extension: .JPEG, .PNG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex h-[550px] max-h-[550px] w-[1000px] flex-col gap-4 rounded-lg bg-[#FEE2E2] p-6 lg:flex-row">
        <div className="flex w-full flex-col items-center gap-2 rounded-lg bg-white p-4 lg:max-w-[300px]">
          <div className="h-60 w-60 overflow-hidden rounded-full">
            <img
              className="object-cover"
              src={profileImage}
              alt="profile image"
            />
          </div>

          <h3 className="text-lg font-bold">Profile Details</h3>

          <div className="my-2 h-[1px] w-full bg-slate-700"></div>

          <div className="text-md w-full">
            <p className="truncate">
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p className="truncate">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>

          <div className="mt-2 flex w-full flex-col gap-2 text-xs">
            <button className="w-full rounded-lg bg-red-500 p-3 font-bold uppercase text-white">
              reset password
            </button>
            <button className="w-full rounded-lg bg-red-500 p-3 font-bold uppercase text-white">
              set order details
            </button>
          </div>
        </div>

        
        <div className="flex h-[500px] w-full flex-col overflow-hidden rounded-lg">
          <div className="flex h-[50px] w-full">
            <div
              className={`${activeTab === "orders" ? "bg-red-500" : "bg-slate-400"} flex w-full cursor-pointer items-center justify-evenly p-4 font-bold text-white`}
              onClick={() => setActiveTab("orders")}
            >
              <p to="/orders">Orders</p>
            </div>

            <div
              className={`${activeTab === "reservations" ? "bg-red-500" : "bg-slate-400"} flex w-full cursor-pointer items-center justify-evenly p-4 font-bold text-white`}
              onClick={() => setActiveTab("reservations")}
            >
              <p>Reservations</p>
            </div>
          </div>

          {activeTab === "orders" && (
            <form className="h-[100px] bg-red-200 p-4">
              <input
                type="text"
                placeholder="order id"
                className="rounded-lg border p-3"
              />

              <input id="all" type="checkbox" />
              <label htmlFor="all">show all</label>

              <input id="current" type="checkbox" />
              <label htmlFor="current">current</label>

              <input id="past" type="checkbox" />
              <label htmlFor="past">past</label>
            </form>
          )}

          <div className="w-full overflow-y-auto bg-red-300 p-6">
            <div className="flex flex-col gap-4">
              <div className="h-[200px] border border-black"></div>
              <div className="h-[200px] border border-black"></div>
            </div>
          </div>

          {activeTab === "reservations" && (
            <div>
              <p>reservations</p>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
