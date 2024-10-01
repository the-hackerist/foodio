import { useAuth } from "../contexts/UserContext";

import profile_img from "../assets/profile.svg";
import { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("orders");

  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center gap-2 bg-[#F9F9F9] px-10 py-20 pt-40 md:px-20 lg:gap-10 xl:gap-20">
      <div className="flex max-h-[550px] w-[1000px] flex-col gap-4 rounded-lg bg-[#FEE2E2] p-6 lg:flex-row">
        <div className="flex w-full flex-col items-center gap-2 rounded-lg bg-white p-4 lg:max-w-[300px]">
          <div className="h-60 w-60 overflow-hidden rounded-full">
            <img
              className="object-cover"
              src="https://images.pexels.com/photos/9117796/pexels-photo-9117796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

        <div className="w-full overflow-hidden rounded-lg bg-white">
          <div className="flex w-full">
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
          <div className="h-[355px] w-full">
            {activeTab === "orders" && (
              <>
                <form className="bg-red-200 p-4">
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

                <div className="flex h-full flex-col gap-4 overflow-y-scroll bg-red-300 p-6">
                  <div className="flex items-center justify-between rounded-lg border-2 border-black p-4">
                    <div className="flex h-full flex-col justify-evenly">
                      <p>id:aklsdjfliral213805yh</p>
                      <p>status: pending</p>
                      <a className="cursor-pointer hover:underline">
                        show more details...
                      </a>
                    </div>

                    <div className="flex h-full flex-col items-center gap-2">
                      <div className="w-full rounded-lg border-2 border-red-500 px-6 py-2 text-center">
                        <button>edit</button>
                      </div>

                      <div className="w-full rounded-lg border-2 border-red-500 px-6 py-2 text-center">
                        <button>delete</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border-2 border-black p-4">
                    <div className="flex h-full flex-col justify-evenly">
                      <p>id:aklsdjfliral213805yh</p>
                      <p>status: pending</p>
                      <a className="cursor-pointer hover:underline">
                        show more details...
                      </a>
                    </div>

                    <div className="flex h-full flex-col items-center gap-2">
                      <div className="w-full rounded-lg border-2 border-red-500 px-6 py-2 text-center">
                        <button>edit</button>
                      </div>

                      <div className="w-full rounded-lg border-2 border-red-500 px-6 py-2 text-center">
                        <button>delete</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border-2 border-black p-4">
                    <div className="flex h-full flex-col justify-evenly">
                      <p>id:aklsdjfliral213805yh</p>
                      <p>status: pending</p>
                      <a className="cursor-pointer hover:underline">
                        show more details...
                      </a>
                    </div>

                    <div className="flex h-full flex-col items-center gap-2">
                      <div className="w-full rounded-lg border-2 border-red-500 px-6 py-2 text-center">
                        <button>edit</button>
                      </div>

                      <div className="w-full rounded-lg border-2 border-red-500 px-6 py-2 text-center">
                        <button>delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "reservations" && (
              <div>
                <p>reservations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
