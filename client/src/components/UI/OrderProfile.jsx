/* eslint-disable react/prop-types */
function OrderProfile({ order }) {
  return (
    <div className="flex w-full flex-col border border-black">
      <div className="PY-2 flex w-full flex-col">
        <div className="flex divide-x divide-red-500 self-end p-4">
          <p className="pr-4">Parcel has been delivered</p>
          <p className="pl-4">{order.status}</p>
        </div>

        <div className="h-[1px] bg-[#888888] px-4"></div>
      </div>

      <div></div>
    </div>
  );
}

export default OrderProfile;
