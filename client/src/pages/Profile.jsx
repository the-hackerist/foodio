/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { RiPencilFill, RiDiscountPercentLine } from "react-icons/ri";
import { FaRegUser, FaPlus } from "react-icons/fa";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

import { useAuth } from "../contexts/UserContext";
import { useOrder } from "../contexts/OrderContext";
import { useAddress } from "../contexts/AddressContext";

import Account from "../components/UI/Account";
import ChangePassword from "../components/UI/ChangePassword";
import OrderProfile from "../components/UI/OrderProfile";
import UnderConstruction from "../components/UI/UnderConstruction";
import Loader from "../components/UI/Loader";
import { Link } from "react-router-dom";
import { useMenu } from "../contexts/MenuContext";
// import { Link } from "react-router-dom";

import defaultImage from "../assets/defaultImage.png";

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
  description: "",
  default: false,
};

const isAnyPropertyEmpty = (objData) =>
  Object.values(objData).some((val) => val === "");

function Profile() {
  const [ordersList, setOrdersList] = useState([]);
  const [view, setView] = useState("account");
  const [subView, setSubView] = useState("profile");
  const [currentAddressId, setCurrentAddressId] = useState("");
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [newAddressFormData, setNewAddressFormData] = useState(initialState);
  const [editAddressFormData, setEditAddressFormData] = useState(initialState);

  const { user, getUser } = useAuth();

  const { getOrdersList } = useOrder();

  const { setMenu } = useMenu();

  const {
    address,
    createAddress,
    editAddress,
    deleteAddress,
    setDefault,
    loading,
  } = useAddress();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getOrdersList();

      setOrdersList(data);
    };

    fetch();
    getUser();
  }, []);

  useEffect(() => {
    getUser();
  }, [user]);

  const handleNewAddressFormData = (e) => {
    if (e.target.type === "text" || e.target.type === "textarea")
      setNewAddressFormData({
        ...newAddressFormData,
        [e.target.id]: e.target.value || "",
      });

    if (e.target.type === "checkbox")
      setNewAddressFormData({
        ...newAddressFormData,
        [e.target.id]: e.target.checked,
      });
  };

  const handleEditAddressFormData = (e) => {
    if (e.target.type === "text" || e.target.type === "textarea")
      setEditAddressFormData({
        ...editAddressFormData,
        [e.target.id]: e.target.value,
      });

    if (e.target.type === "checkbox")
      setEditAddressFormData({
        ...editAddressFormData,
        [e.target.id]: e.target.checked,
      });
  };

  const handleNewAddress = (e) => {
    e.preventDefault();

    if (isAnyPropertyEmpty(newAddressFormData)) return;

    createAddress(newAddressFormData);

    // reset state values
    setNewAddressFormData(initialState);
    setIsAddingAddress(false);
    setCurrentAddressId(null);
  };

  const handleEditAddress = (e) => {
    e.preventDefault();

    if (isAnyPropertyEmpty(editAddressFormData)) return;

    const updatedAddress = { _id: currentAddressId, ...editAddressFormData };

    editAddress(updatedAddress);

    setIsEditingAddress(false);
    setCurrentAddressId(null);
  };

  const handleEdit = (addresses) => {
    const { addressId: _id, ...userAddress } = addresses;

    setIsEditingAddress(true);
    setCurrentAddressId(_id);
    setEditAddressFormData(userAddress);
  };

  const handleDelete = (addressId) => {
    deleteAddress(addressId);
  };

  const handleSetDefault = (address) => {
    setDefault(address);
  };

  const handleCancel = () => {
    if (isAddingAddress) setNewAddressFormData(initialState);
    setIsAddingAddress(false);
    setIsEditingAddress(false);
    setCurrentAddressId(null);
  };

  return (
    <div className="flex items-center justify-center gap-2 bg-[#F9F9F9] px-8 pb-20 pt-40 md:px-20 lg:gap-10 lg:px-24 xl:gap-20 xl:px-48 2xl:px-80">
      {(isAddingAddress || isEditingAddress) && (
        <div className="absolute inset-0 flex justify-center bg-black bg-opacity-30 px-8 pb-20 pt-60 md:px-20 lg:gap-10 lg:px-24 xl:gap-20 xl:px-48 2xl:px-8">
          <div className="flex h-fit w-[500px] flex-col gap-4 rounded-md bg-white p-6">
            <p className="text-lg font-semibold">
              {isEditingAddress ? "Edit Address" : "New Address"}
            </p>

            <form
              onSubmit={isEditingAddress ? handleEditAddress : handleNewAddress}
              className="flex flex-col gap-4"
            >
              <input
                className="rounded-lg border p-3"
                onChange={
                  isEditingAddress
                    ? handleEditAddressFormData
                    : handleNewAddressFormData
                }
                value={
                  isEditingAddress
                    ? editAddressFormData?.firstName
                    : newAddressFormData?.firstName
                }
                id="firstName"
                required
                type="text"
                placeholder="First Name"
              />
              <input
                className="rounded-lg border p-3"
                onChange={
                  isEditingAddress
                    ? handleEditAddressFormData
                    : handleNewAddressFormData
                }
                value={
                  isEditingAddress
                    ? editAddressFormData?.lastName
                    : newAddressFormData?.lastName
                }
                id="lastName"
                required
                type="text"
                placeholder="Last Name"
              />
              <input
                className="rounded-lg border p-3"
                onChange={
                  isEditingAddress
                    ? handleEditAddressFormData
                    : handleNewAddressFormData
                }
                value={
                  isEditingAddress
                    ? editAddressFormData?.phone
                    : newAddressFormData?.phone
                }
                id="phone"
                required
                type="text"
                placeholder="Phone Number"
              />
              <input
                className="rounded-lg border p-3"
                onChange={
                  isEditingAddress
                    ? handleEditAddressFormData
                    : handleNewAddressFormData
                }
                value={
                  isEditingAddress
                    ? editAddressFormData?.address
                    : newAddressFormData?.address
                }
                id="address"
                required
                type="text"
                placeholder="Address"
              />
              <textarea
                id="description"
                onChange={
                  isEditingAddress
                    ? handleEditAddressFormData
                    : handleNewAddressFormData
                }
                value={
                  isEditingAddress
                    ? editAddressFormData?.description
                    : newAddressFormData?.description
                }
                rows={5}
                className="max-h-[150px] min-h-[75px] w-full rounded-lg border p-3"
                placeholder="Landmarks near you..."
              />

              {!isEditingAddress && (
                <div className="flex items-center gap-2">
                  <input
                    onChange={handleNewAddressFormData}
                    checked={newAddressFormData.default}
                    id="default"
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <label htmlFor="default" className="text-sm text-[#7f8183]">
                    Set as Default Address
                  </label>
                </div>
              )}

              <input
                className="cursor-pointer bg-red-500 px-4 py-2 text-xs font-semibold uppercase text-white"
                type="submit"
                value={isEditingAddress ? "Update" : "Submit"}
              />

              <button
                role="button"
                className="px-4 py-2 text-xs font-semibold uppercase hover:bg-slate-200"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex w-full max-w-[950px] flex-col gap-4 lg:flex-row">
        {/* <aside className="flex w-full flex-col divide-y divide-red-300 self-start  px-4 pt-4 sm:w-[300px]"> */}
        <aside className="relative flex w-full flex-col divide-y divide-red-300 self-start px-4 pt-4 lg:w-[240px]">
          <div className="flex items-center gap-4 px-2 py-5">
            <img
              className={`${!user.profileImage ? "p-3" : ""} h-10 w-10 rounded-full object-cover`}
              src={!user.profileImage ? defaultImage : user.profileImage}
              alt="profile image"
            />

            <div className="flex flex-col">
              <p className="text-md font-semibold">
                {user.username || "no user"}
              </p>

              <p
                className="flex cursor-pointer items-center gap-1 text-nowrap text-xs text-[#888888] hover:underline"
                onClick={() => {
                  setView("account");
                  setSubView("profile");
                }}
              >
                <span>
                  <RiPencilFill />
                </span>
                Edit Profile
              </p>
            </div>
          </div>

          <div className="text-md flex w-full gap-1 overflow-y-scroll py-4 pt-4 sm:overflow-y-auto lg:flex-col">
            <div>
              <p
                onClick={() => {
                  setView("account");
                  setSubView("profile");
                }}
                className="flex h-8 cursor-pointer items-center text-nowrap rounded-md px-2 hover:bg-[#faeded]"
              >
                <span className="w-[25px] text-red-400">
                  <FaRegUser />
                </span>
                My Account
              </p>

              <ul
                className={`${view === "account" ? "lg:flex" : "lg:hidden"} ml-8 hidden flex-col gap-1 py-1 text-sm text-[#000000A6]`}
              >
                <li
                  onClick={() => setSubView("profile")}
                  className={`cursor-pointer hover:text-red-400 ${subView === "profile" && "font-semibold text-red-400"}`}
                >
                  Profile
                </li>
                <li
                  onClick={() => setSubView("address")}
                  className={`cursor-pointer hover:text-red-400 ${subView === "address" && "font-semibold text-red-400"}`}
                >
                  Addresses
                </li>
                <li
                  onClick={() => setSubView("changePassword")}
                  className={`cursor-pointer text-nowrap hover:text-red-400 ${subView === "changePassword" && "font-semibold text-red-400"}`}
                >
                  Change Password
                </li>
              </ul>
            </div>

            <div
              className="cursor-pointer rounded-md px-2 hover:bg-[#faeded]"
              onClick={() => setView("orders")}
            >
              <p
                className={`flex h-8 items-center ${view === "orders" && "font-semibold text-red-400"}`}
              >
                <span className="w-[25px] text-red-400">
                  <IoFastFoodOutline />
                </span>
                Orders
              </p>
            </div>

            <div
              className="cursor-pointer rounded-md px-2 hover:bg-[#faeded]"
              onClick={() => setView("reservations")}
            >
              <p
                className={`flex h-8 items-center ${view === "reservations" && "font-semibold text-red-400"}`}
              >
                <span className="w-[25px] text-red-400">
                  <MdOutlineTableRestaurant />
                </span>
                Reservations
              </p>
            </div>

            <div
              className="cursor-pointer rounded-md px-2 hover:bg-[#faeded]"
              onClick={() => setView("vouchers")}
            >
              <p
                className={`flex h-8 items-center ${view === "vouchers" && "font-semibold text-red-400"}`}
              >
                <span className="w-[25px] text-red-400">
                  <RiDiscountPercentLine />
                </span>
                Vouchers
              </p>
            </div>
          </div>

          <div>
            <ul
              className={`${view === "account" ? "flex" : "hidden"} flex-wrap gap-2 py-4 text-sm text-[#000000A6] lg:hidden`}
            >
              <li
                onClick={() => setSubView("profile")}
                className={`flex-1 cursor-pointer rounded-md border border-red-200 p-1 px-8 text-center hover:text-red-400 ${subView === "profile" && "font-semibold text-red-400"}`}
              >
                Profile
              </li>
              <li
                onClick={() => setSubView("address")}
                className={`flex-1 cursor-pointer rounded-md border border-red-200 px-8 py-1 text-center hover:text-red-400 ${subView === "address" && "font-semibold text-red-400"}`}
              >
                Addresses
              </li>
              <li
                onClick={() => setSubView("changePassword")}
                className={`flex-1 cursor-pointer text-nowrap rounded-md border border-red-200 px-8 py-1 text-center hover:text-red-400 ${subView === "changePassword" && "font-semibold text-red-400"}`}
              >
                Change Password
              </li>
            </ul>
          </div>
        </aside>

        <div
          className={`min-h-[500px] w-full space-y-4 rounded-md bg-[#faeded] pb-8 ${view === "orders" ? "p-8" : ""} ${view === "vouchers" || view === "reservations" ? "flex items-center justify-center" : ""}`}
        >
          {view === "account" && subView === "profile" && <Account />}
          {view === "account" && subView === "address" && (
            <div className="flex w-full flex-col divide-y divide-red-300 px-8 pb-8 pt-4">
              <div className="flex flex-col items-start justify-between py-4 sm:flex-row sm:items-center">
                <div className="pb-2 sm:pb-0">
                  <p className="text-xl font-semibold">My Addresses</p>
                  <p className="text-sm">Manage and check your addresses</p>
                </div>

                <button
                  onClick={() => setIsAddingAddress(true)}
                  className="flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold uppercase text-white"
                >
                  <FaPlus /> Add New Address
                </button>
              </div>

              <div className="flex max-h-[800px] flex-col gap-2 divide-y divide-red-200 py-4 pt-6">
                {loading ? (
                  <Loader />
                ) : address.length ? (
                  address
                    .sort((a, b) => b.default - a.default)
                    .map(
                      ({
                        firstName,
                        lastName,
                        _id: addressId,
                        phone,
                        address,
                        default: isDefault,
                        description,
                      }) => (
                        <div
                          key={addressId}
                          className="flex h-fit flex-col justify-between gap-4 py-[18px] sm:flex-row"
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col divide-red-300 sm:flex-row sm:divide-x">
                              <p className="font-semibold sm:pr-2">{`${firstName} ${lastName}`}</p>
                              <p className="text-slate-600 sm:pl-2">
                                (+63) {phone}
                              </p>
                            </div>
                            <p className="line-clamp-3 w-full text-xs text-slate-600 sm:w-[400px]">
                              {address}
                            </p>

                            {isDefault && (
                              <p className="w-fit border border-red-500 px-2 text-sm text-red-500">
                                Default
                              </p>
                            )}
                          </div>

                          <div className="flex justify-between gap-3 sm:flex-col sm:justify-start">
                            <div className="flex justify-end gap-3 text-sm">
                              <button
                                onClick={() =>
                                  handleEdit({
                                    firstName,
                                    lastName,
                                    addressId,
                                    phone,
                                    address,
                                    description,
                                    default: isDefault,
                                  })
                                }
                                className="text-blue-500 hover:underline"
                              >
                                Edit
                              </button>
                              {!isDefault && (
                                <button
                                  onClick={() => handleDelete(addressId)}
                                  className="text-red-500 hover:underline"
                                >
                                  Delete
                                </button>
                              )}
                            </div>

                            {!isDefault && (
                              <button
                                onClick={() =>
                                  handleSetDefault({
                                    firstName,
                                    lastName,
                                    _id: addressId,
                                    phone,
                                    address,
                                    description,
                                    default: isDefault,
                                  })
                                }
                                className="border border-slate-500 px-2 text-sm text-slate-500"
                              >
                                Set as Default
                              </button>
                            )}
                          </div>
                        </div>
                      ),
                    )
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="py-20 text-center text-lg sm:text-start">
                      You haven&apos;t added any{" "}
                      <span className="font-semibold text-red-500">
                        address
                      </span>{" "}
                      yet, start adding now.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {view === "account" && subView === "changePassword" && (
            <ChangePassword />
          )}

          {view === "orders" && ordersList.length >= 1
            ? ordersList
                .sort((a, b) => b.orderDate.localeCompare(a.orderDate))
                .map((order) => <OrderProfile key={order._id} order={order} />)
            : view === "orders" && (
                <div className="flex h-full w-full items-center justify-center">
                  <p className="text-lg">
                    Order{" "}
                    <Link
                      to="/order"
                      onClick={() => setMenu("order")}
                      className="cursor-pointer font-semibold text-blue-600 hover:underline"
                    >
                      here
                    </Link>{" "}
                    to start tracking your orders
                  </p>
                </div>
              )}

          {view === "reservations" && <UnderConstruction />}
          {view === "vouchers" && <UnderConstruction />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
