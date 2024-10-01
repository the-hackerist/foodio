/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";

import { useAuth } from "../contexts/UserContext.jsx";

const CartContext = createContext();

const initialState = { cart: [], loading: false, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case "cart/get-cart":
      return {
        ...state,
        cart: action.payload,
        loading: false,
        error: "",
      };

    case "cart/get-cart/start":
      return { ...state, loading: true, cart: state.cart, error: "" };

    case "cart/get-cart/fail":
      return {
        ...state,
        loading: false,
        cart: state.cart,
        error: action.payload,
      };

    case "cart/update-cart":
      return {
        ...state,
        cart: action.payload,
        loading: false,
        error: "",
      };

    case "cart/update-cart/start":
      return { ...state, loading: true, cart: state.cart, error: "" };

    case "cart/update-cart/fail":
      return {
        ...state,
        loading: false,
        cart: state.cart,
        error: action.payload,
      };

    case "cart/reset-cart":
      return initialState;

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

  useEffect(() => {
    getCart();
  }, []);

  const BASE_URL = "http://localhost:3000/api/v1";

  async function getCart() {
    if (!user) return;

    const body = { _id: user._id };

    try {
      dispatch({ type: "cart/get-cart/start" });

      if (!user)
        dispatch({
          type: "cart/get-cart/fail",
          payload: "There is no user logged in.",
        });

      const res = await fetch(`${BASE_URL}/cart/get-cart`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch({ type: "cart/get-cart/fail", payload: data.message });
        return;
      }

      dispatch({ type: "cart/get-cart", payload: data.cart });
    } catch (error) {
      dispatch({ type: "cart/get-cart/fail", payload: error.message });
      return;
    }
  }

  const updateCart = async (food, quantity, action = "addItem") => {
    const { foodId: id, id: foodId, foodName, stock, price } = food;

    let cartList;

    console.log(1, action);

    switch (action) {
      case "addItem": {
        console.log(2, "adding", food);
        cartList = [...cart, { foodId, foodName, stock, price, quantity }];
        break;
      }

      case "updateQty": {
        console.log(2, "updating", food);
        cartList = cart.map((item) =>
          item.foodName === foodName ? { ...item, quantity } : item,
        );
        break;
      }

      case "removeItem": {
        cartList = cart.filter((menu) => menu.foodId !== id);
        break;
      }

      default:
        cartList = [];
    }

    console.log(3, "cartList: ", cartList);

    const body = { _id: user._id, cartList };

    try {
      dispatch({ type: "cart/update-cart/start" });

      const res = await fetch(`${BASE_URL}/cart/update-cart`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch({ type: "cart/update-cart/fail", payload: data.message });
        return;
      }

      dispatch({ type: "cart/update-cart", payload: data });
    } catch (error) {
      dispatch({ type: "cart/update-cart/fail", payload: error.message });
      return;
    }
  };

  const calculateTotal = () => {
    const VALUE_ADDED_TAX_PERCENTAGE = 5;
    const itemsTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    const tax = (itemsTotal * VALUE_ADDED_TAX_PERCENTAGE) / 100;

    const total = itemsTotal + tax;

    return {
      tax: tax.toFixed(2),
      itemsTotal: itemsTotal.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const resetCart = () => dispatch({ type: "cart/reset-cart" });

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        getCart,
        updateCart,
        resetCart,
        calculateTotal,
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
