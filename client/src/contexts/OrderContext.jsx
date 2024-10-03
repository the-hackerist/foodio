/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

import { useAuth } from "./UserContext";
import { useCart } from "./CartContext";

const OrderContext = createContext();

const initialState = { order: [], loading: false, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case "order/create-order":
      return { ...state, order: action.payload, loading: false, error: "" };

    case "order/create-order/start":
      return { ...state, order: state.order, loading: true, error: "" };

    case "order/create-order/fail":
      return {
        ...state,
        order: state.order,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action!");
  }
}

function OrderProvider({ children }) {
  const [{ order, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const BASE_URL = `http://localhost:3000/api/v1`;

  const { user } = useAuth();

  const { cart } = useCart();

  const createOrder = async (userAddress) => {
    const body = { _id: user._id, cart, userAddress, order };
    console.log(order);
    try {
      dispatch({ type: "order/create-order/start" });

      const res = await fetch(`${BASE_URL}/order/create-order`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      dispatch({ type: "order/create-order", payload: data });
    } catch (error) {
      dispatch({ type: "order/create-order/fail", payload: error.message });
    }
  };

  return (
    <OrderContext.Provider value={{ order, loading, error, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

function useOrder() {
  const context = useContext(OrderContext);

  if (context === undefined)
    throw new Error("Context used outside of its scope");

  return context;
}

export { useOrder, OrderProvider };
