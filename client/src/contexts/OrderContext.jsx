/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

import { useAuth } from "./UserContext";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const OrderContext = createContext();

const initialState = {
  ordersList: [],
  currentOrder: null,
  loading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "order/create-order":
      return {
        ...state,
        ordersList: [...state.ordersList, action.payload],
        loading: false,
        error: "",
      };

    case "order/create-order/start":
      return {
        ...state,
        ordersList: state.ordersList,
        loading: true,
        error: "",
      };

    case "order/create-order/fail":
      return {
        ...state,
        ordersList: state.ordersList,
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

  const navigate = useNavigate();

  const getOrder = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/order/${id}`);

      const { data } = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getOrdersList = async () => {
    try {
      const res = await fetch(`${BASE_URL}/order/get-orders-list/${user._id}`);

      const data = await res.json();


      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async (userAddress) => {
    const { payment, ...customerInfo } = userAddress;

    const body = {
      userIdRef: user._id,
      items: cart,
      customerInfo,
      paymentMethod: payment,
      deliveryFee: 49,
    };

    try {
      dispatch({ type: "order/create-order/start" });
      const res = await fetch(`${BASE_URL}/order/create-order`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const { data, success } = await res.json();

      if (!success) {
        dispatch({ type: "order/create-order/fail", payload: data.message });
        return;
      }

      dispatch({ type: "order/create-order", payload: [] });
      navigate(`/order/${data._id}`);
    } catch (error) {
      dispatch({ type: "order/create-order/fail", payload: error.message });
    }
  };

  return (
    <OrderContext.Provider
      value={{ order, loading, error, createOrder, getOrdersList, getOrder }}
    >
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
