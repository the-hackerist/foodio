/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";

import OrderListItem from "../components/UI/OrderListItem";
import AddressItem from "../components/UI/AddressItem";

import { useCart } from "../contexts/CartContext";
import { useAddress } from "../contexts/AddressContext";
import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

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

function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [currentAddressId, setCurrentAddressId] = useState("");
  const [newAddressFormData, setNewAddressFormData] = useState(initialState);
  const [editAddressFormData, setEditAddressFormData] = useState(initialState);
  const [orderFormData, setOrderFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    description: "",
    payment: "",
  });

  const { cart, calculateTotal } = useCart();

  const { createOrder, order } = useOrder();
  // console.log("orders database: ", order);
  const { tax, total, itemsTotal } = calculateTotal();

  const { address, createAddress, getAddress, editAddress } = useAddress();

  const navigate = useNavigate();

  useEffect(() => {
    getAddress();

    const currentAddress = address.find((item) => item.default);

    if (currentAddress) {
      const { _id, ...rest } = currentAddress;
      setOrderFormData(rest);
    }
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

  const handleOrderFormData = (e) => {
    if (e.target.type === "text" || e.target.type === "textarea")
      setOrderFormData({
        ...orderFormData,
        [e.target.id]: e.target.value,
      });

    if (e.target.type === "checkbox")
      setOrderFormData({
        ...orderFormData,
        [e.target.id]: e.target.checked ? "cashOnDelivery" : "",
      });
  };

  const handleNewAddress = (e) => {
    e.preventDefault();

    if (isAnyPropertyEmpty(newAddressFormData)) return;

    createAddress(newAddressFormData);

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

  const handleOrder = (e) => {
    e.preventDefault();
    // navigate(`/order/orderId`);
    // console.log("Order submitted");
    // console.log(orderFormData);
    createOrder(orderFormData);

    // todo reset cart
  };

  const handleCancel = () => {
    if (isAddingAddress) setNewAddressFormData(initialState);
    setIsAddingAddress(false);
    setIsEditingAddress(false);
    setCurrentAddressId(null);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#F9F9F9] px-10 py-20 pt-40`}
    >
      {isCheckingOut && (isAddingAddress || isEditingAddress) && (
        <div className="absolute flex h-full w-full justify-center border-black bg-black bg-opacity-30 pt-[500px]">
          <div className="flex h-fit w-[400px] flex-col gap-4 rounded-lg border bg-white p-6">
            <p className="text-lg font-semibold">
              {isEditingAddress ? "Edit Address" : "New Address"}
            </p>

            <form
              onSubmit={isEditingAddress ? handleEditAddress : handleNewAddress}
              className="flex flex-col gap-4"
            >
              <input
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
                className="rounded-lg border p-3"
                id="firstName"
                required
                type="text"
                placeholder="First Name"
              />
              <input
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
                className="rounded-lg border p-3"
                id="lastName"
                required
                type="text"
                placeholder="Last Name"
              />
              <input
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
                className="rounded-lg border p-3"
                id="phone"
                required
                type="text"
                placeholder="Phone Number"
              />
              <input
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
                className="rounded-lg border p-3"
                id="address"
                required
                type="text"
                placeholder="Address"
              />
              <textarea
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
                id="description"
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

      {!isCheckingOut && (
        <>
          <h3 className="mb-8 hidden px-10 pb-10 text-center text-5xl font-bold text-[#311F09] md:inline-block">
            Order list
          </h3>
          <div className="flex max-w-[800px] flex-col items-center justify-center rounded-2xl bg-red-100 p-4 md:h-[500px] md:max-h-[500px] md:w-[650px] md:flex-row md:gap-10 md:p-10 lg:w-[800px]">
            <h3 className="px-10 pt-10 text-center text-4xl font-bold md:hidden">
              Order list
            </h3>

            <div className="my-10 h-[1px] w-full bg-slate-500 md:hidden"></div>

            <div className="flex h-[500px] w-full flex-col gap-2 divide-y divide-red-200 overflow-y-scroll rounded-lg bg-[#F5F5F5] px-6 py-2 md:h-full md:overflow-x-hidden md:overflow-y-scroll">
              {cart.map((menu) => (
                <OrderListItem key={menu.foodName} food={menu} />
              ))}
            </div>

            <div className="my-10 h-[1px] w-full bg-slate-500 md:hidden"></div>

            <div className="h-full px-6 py-4">
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

              <div className="my-10 h-[1px] w-full bg-slate-500"></div>

              <div className="flex w-full flex-col items-center gap-4">
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Subtotal</p>
                  <p className="font-semibold text-red-500">+ $ {itemsTotal}</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Tax fee</p>
                  <p className="font-semibold text-red-500">+ $ {tax}</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Voucher</p>
                  <p className="font-semibold text-green-500">- $5.0</p>
                </div>
                <div className="flex w-full justify-between text-xl font-bold">
                  <p className="">Total</p>
                  <p className="font-semibold text-slate-500">${total}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCheckingOut(true);
                }}
                className="mb-2 mt-10 w-full rounded-lg bg-red-500 p-2 text-2xl font-bold text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {isCheckingOut && (
        <div className="flex w-screen max-w-[500px] flex-col items-center justify-center gap-6">
          <h2 className="mb-8 text-5xl font-bold text-[#311F09]">Checkout</h2>

          <div className="flex w-full flex-col gap-3 rounded-lg bg-red-200 px-6 py-4 pt-8 shadow-md">
            <div className="flex items-center justify-between px-3">
              <p className="font-bold">My addresses</p>
              <button
                onClick={() => setIsAddingAddress(true)}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-bold uppercase text-white"
              >
                <FaPlus /> Add new address
              </button>
            </div>

            <div className="flex flex-col gap-2 p-3">
              {address.length ? (
                address.map((address) => (
                  <AddressItem
                    key={address._id}
                    address={address}
                    setEditAddressFormData={setEditAddressFormData}
                    setIsEditingAddress={setIsEditingAddress}
                    setCurrentAddressId={setCurrentAddressId}
                    setOrderFormData={setOrderFormData}
                  />
                ))
              ) : (
                <p>No address saved</p>
              )}
            </div>
          </div>

          <p
            onClick={() => setIsCheckingOut(false)}
            className="self-start text-lg font-semibold text-slate-700 hover:underline"
          >
            Back to order list
          </p>

          <form onSubmit={handleOrder} className="flex w-full flex-col gap-4">
            <input
              onChange={handleOrderFormData}
              value={orderFormData.address}
              className="rounded-lg border p-3"
              type="text"
              id="address"
              placeholder="address"
              required
            />

            <input
              onChange={handleOrderFormData}
              value={orderFormData.firstName}
              className="rounded-lg border p-3"
              type="text"
              id="firstName"
              placeholder="first name"
              required
            />

            <input
              onChange={handleOrderFormData}
              value={orderFormData.lastName}
              className="rounded-lg border p-3"
              type="text"
              id="lastName"
              placeholder="last name"
              required
            />

            <div className="flex items-center rounded-lg border">
              <p className="p-3 text-sm font-semibold text-slate-500">+63</p>

              <input
                onChange={handleOrderFormData}
                value={orderFormData.phone}
                className="w-full bg-transparent p-3"
                type="text"
                id="phone"
                placeholder="912 345 6789"
                // pattern="^9[0-9]{2} [0-9]{3} [0-9]{4}"
                required
              />
            </div>

            <textarea
              onChange={handleOrderFormData}
              value={orderFormData.description}
              className="max-h-[150px] min-h-[75px] w-full rounded-lg border p-3"
              id="description"
              type="text"
              rows={4}
              placeholder="landmarks near you..."
            />

            <div className="my-4 flex flex-col justify-center gap-4">
              <h3 className="font-semibold">Mode of payment:</h3>
              <div className="flex items-center gap-2">
                <input
                  onChange={handleOrderFormData}
                  checked={!orderFormData.payment ? false : true}
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
