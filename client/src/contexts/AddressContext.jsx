/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

import { useAuth } from "./UserContext";

const AddressContext = createContext();

const initialState = { address: [], loading: false, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case "address/get-address":
      return { ...state, address: action.payload, loading: false, error: "" };

    case "address/get-address/start":
      return { ...state, address: state.address, loading: true, error: "" };

    case "address/get-address/fail":
      return {
        ...state,
        address: state.address,
        loading: false,
        error: action.payload,
      };

    case "address/create-address":
      return { ...state, address: action.payload, loading: false, error: "" };

    case "address/create-address/start":
      return { ...state, address: state.address, loading: true, error: "" };

    case "address/create-address/fail":
      return {
        ...state,
        address: state.address,
        loading: false,
        error: action.payload,
      };

    case "address/delete-address":
      return { ...state, address: action.payload, loading: false, error: "" };

    case "address/delete-address/start":
      return { ...state, address: state.address, loading: true, error: "" };

    case "address/delete-address/fail":
      return {
        ...state,
        address: state.address,
        loading: false,
        error: action.payload,
      };

    case "address/edit-address":
      return { ...state, address: action.payload, loading: false, error: "" };

    case "address/edit-address/start":
      return { ...state, address: state.address, loading: true, error: "" };

    case "address/edit-address/fail":
      return {
        ...state,
        address: state.address,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown Action");
  }
}

function AddressProvider({ children }) {
  const [{ address, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const { user } = useAuth();

  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = async () => {
    if (!user) return;

    const body = { _id: user._id };

    try {
      dispatch({ type: "address/get-address/start" });

      if (!user) {
        dispatch({
          type: "address/get-address/fail",
          payload: "There is no user logged in.",
        });
        return;
      }

      const res = await fetch(`/api/v1/address/get-address`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch({ type: "address/get-address/fail", payload: data.message });
        return;
      }

      dispatch({ type: "address/get-address", payload: data.address });
    } catch (error) {
      dispatch({ type: "address/get-address/fail", payload: error.message });
    }
  };

  const createAddress = async (addressData) => {
    const body = {
      _id: user._id,
      currentAddressList: address,
      newAddress: { ...addressData },
    };

    try {
      dispatch({ type: "address/create-address/start" });

      const res = await fetch(`/api/v1/address/create-address`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      dispatch({ type: "address/create-address", payload: data });
    } catch (error) {
      dispatch({ type: "address/create-address/fail", payload: error.message });
    }
  };

  const deleteAddress = async (addressId) => {
    const body = { _id: user._id, addressId, addressList: address };

    try {
      dispatch({ type: "address/delete-address/start" });

      const res = await fetch(`/api/v1/address/delete-address`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      dispatch({ type: "address/delete-address", payload: data });
    } catch (error) {
      dispatch({ type: "address/delete-address/fail", payload: error.message });
    }
  };

  const editAddress = async (updatedAddress) => {
    const body = {
      _id: user._id,
      updatedAddress,
      addressList: address,
      settingDefault: false,
    };

    try {
      dispatch({ type: "address/edit-address/start" });

      const res = await fetch(`/api/v1/address/edit-address`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      dispatch({ type: "address/edit-address", payload: data });
    } catch (error) {
      dispatch({ type: "address/edit-address/fail", payload: error.message });
    }
  };

  const setDefault = async (updatedAddress) => {
    const body = {
      _id: user._id,
      updatedAddress,
      addressList: address,
      settingDefault: true,
    };

    try {
      dispatch({ type: "address/edit-address/start" });

      const res = await fetch(`/api/v1/address/edit-address`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      dispatch({ type: "address/edit-address", payload: data });
    } catch (error) {
      dispatch({ type: "address/edit-address/fail", payload: error.message });
    }
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        loading,
        error,
        createAddress,
        getAddress,
        deleteAddress,
        editAddress,
        setDefault,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

function useAddress() {
  const context = useContext(AddressContext);

  if (context === undefined)
    throw new Error("Context used outside of its scope");

  return context;
}

export { useAddress, AddressProvider };
