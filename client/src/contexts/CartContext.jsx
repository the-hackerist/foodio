/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useReducer } from "react";

import { useAuth } from "../contexts/UserContext.jsx";

const CartContext = createContext();

const initialState = { cart: null, loading: false, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case "cart/get-cart":
      return { ...state, cart: action.payload, loading: false, error: "" };

    case "cart/get-cart/start":
      return { ...state, cart: null, loading: true, error: "" };

    case "cart/get-cart/fail":
      return {
        ...state,
        cart: null,
        loading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action!");
  }
}

function CartProvider({ children }) {
  const [{ cart, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const { user } = useAuth();

  const getCart = async () => {
    try {
      dispatch({ type: "cart/get-cart/start" });

      const res = await fetch("http://localhost:3000/api/v1/cart/get-cart", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ _id: user._id }),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch({ type: "cart/get-cart/fail", payload: data.message });
        return;
      }

      dispatch({ type: "cart/get-cart", data });
    } catch (error) {
      dispatch({ type: "cart/get-cart/fail", payload: error.message });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("Context was used outside of its scope.");

  return context;
}

export { CartProvider, useCart };
