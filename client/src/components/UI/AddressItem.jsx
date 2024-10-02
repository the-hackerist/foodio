import { useAddress } from "../../contexts/AddressContext";

/* eslint-disable react/prop-types */
function AddressItem({ address }) {
  const {
    firstName,
    lastName,
    _id: addressId,
    phone,
    address: currentAddress,
    default: isDefault,
  } = address;

  const { deleteAddress } = useAddress();

  const handleDelete = () => {
    deleteAddress(addressId);
  };

  return (
    <div className="flex h-full w-full justify-between gap-4 rounded-lg bg-slate-200/70 p-4">
      <div className="flex flex-col gap-2">
        <div className="flex divide-x-2 divide-red-300 text-sm">
          <p className="pr-2 font-semibold">{`${firstName} ${lastName}`}</p>
          <p className="pl-2 text-slate-600">(+63) {phone}</p>
        </div>
        <p className="text-xs text-slate-600">{currentAddress}</p>

        {isDefault && (
          <p className="w-fit border border-red-500 px-2 text-sm text-red-500">
            Default
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-end gap-3">
          <button className="text-blue-500 hover:underline">Edit</button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
        {!isDefault && (
          <button className="border border-slate-500 px-2 text-sm text-slate-500">
            Set as Default
          </button>
        )}
      </div>
    </div>
  );
}

export default AddressItem;
