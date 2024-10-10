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
import { useProfile } from "../contexts/ProfileContext";

const profileImage =
  "https://images.pexels.com/photos/9117796/pexels-photo-9117796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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

  const { address, createAddress, editAddress, deleteAddress, setDefault } =
    useAddress();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await getOrdersList();

      setOrdersList(data);
    };

    fetch();
    getUser();
  }, []);

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
    console.log(currentAddressId);

    console.log(editAddressFormData);

    const updatedAddress = { _id: currentAddressId, ...editAddressFormData };

    console.log(updatedAddress);

    editAddress(updatedAddress);

    // reset state values
    setIsEditingAddress(false);
    setCurrentAddressId(null);
  };

  const handleEdit = (addresses) => {
    const { addressId: _id, ...userAddress } = addresses;
    console.log("click edits: ", addresses);
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

  // console.log("edit add", editAddressFormData);
  console.log("address from db: ", address);

  return (
    <div className="flex items-center justify-center gap-2 bg-[#F9F9F9] px-10 py-20 pt-40 md:px-20 lg:gap-10 xl:gap-20">
      {(isAddingAddress || isEditingAddress) && (
        <div
          className="absolute inset-0 flex justify-center bg-black bg-opacity-30 pt-[250px]"
          // onClick={() => setIsAddingAddress(false)}
        >
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
                placeholder="landmarks near you..."
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

      <div className="flex gap-4 p-10">
        <aside className="flex flex-col divide-y divide-red-300 px-4 pt-4">
          <div className="flex items-center justify-center gap-4 p-4">
            <div className="h-12 w-12 cursor-pointer overflow-hidden rounded-full">
              <img src={profileImage} alt="profile image" />
            </div>

            <div className="flex flex-col">
              <p className="text-md font-semibold">
                {user.username || "no user"}
              </p>

              <p
                className="flex cursor-pointer items-center gap-1 text-[#888888] hover:underline"
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

          <div className="text-md flex flex-col gap-1 pt-4">
            <div className="">
              <p
                onClick={() => {
                  setView("account");
                  setSubView("profile");
                }}
                className="flex h-8 cursor-pointer items-center rounded-md px-2 hover:bg-[#faeded]"
              >
                <span className="w-[25px] text-red-400">
                  <FaRegUser />
                </span>
                My Account
              </p>

              <ul
                className={`${view === "account" ? "flex" : "hidden"} ml-8 flex-col gap-1 py-1 text-sm text-[#000000A6]`}
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
                  className={`cursor-pointer hover:text-red-400 ${subView === "changePassword" && "font-semibold text-red-400"}`}
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
        </aside>

        <div className="max-h-[1000px] w-[900px] divide-y rounded-md bg-[#faeded] pb-8">
          {view === "account" && subView === "profile" && <Account />}
          {view === "account" && subView === "address" && (
            <div className="flex w-full flex-col divide-y divide-red-300 px-8 pb-8 pt-4">
              <div className="flex items-center justify-between py-4">
                <div className="">
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

              <div className="flex max-h-[800px] flex-col gap-2 divide-y divide-red-200 overflow-y-auto py-4 pt-6">
                {address.length ? (
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
                          className="flex h-[140px] justify-between gap-4 py-[18px]"
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex divide-x divide-red-300">
                              <p className="pr-2 font-semibold">{`${firstName} ${lastName}`}</p>
                              <p className="pl-2 text-slate-600">
                                (+63) {phone}
                              </p>
                            </div>
                            <p className="w-[400px] text-xs text-slate-600">
                              {address}
                            </p>

                            {isDefault && (
                              <p className="w-fit border border-red-500 px-2 text-sm text-red-500">
                                Default
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col gap-3">
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
                  <p>No address saved</p>
                )}
              </div>
            </div>
          )}

          {view === "account" && subView === "changePassword" && (
            <ChangePassword />
          )}
          {view === "orders" &&
            ordersList.map((el) => <p key={el._id}>{el.userIdRef}</p>)}
          {view === "reservations" && <p>reservations</p>}
          {view === "vouchers" && <p>vouchers</p>}
        </div>
      </div>
    </div>
  );
}

export default Profile;
