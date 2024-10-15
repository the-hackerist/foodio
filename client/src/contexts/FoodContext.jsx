/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const FoodContext = createContext();

const initialState = { food: null, loading: false, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case "food/set":
      return { ...state, food: action.payload, loading: false, error: "" };

    case "food/start":
      return { ...state, food: null, loading: true, error: "" };

    case "food/error":
      return { ...state, food: null, loading: false, error: action.payload };

    default:
      throw new Error("Unknown action!");
  }
}

function FoodProvider({ children }) {
  const [{ food, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const BASE_URL = "http://localhost:3000/api/v1";

  const getAllFood = async () => {
    try {
      const res = await fetch(`${BASE_URL}/order/get/get-all-food`);

      const data = await res.json();

      return data;
    } catch (error) {
      dispatch({ type: "food/error", payload: error.message });
      return;
    }
  };

  const getFood = async (foodId) => {
    try {
      dispatch({ type: "food/start" });

      const res = await fetch(`${BASE_URL}/order/menu/${foodId}`);

      const data = await res.json();

      if (!data) {
        dispatch({ type: "food/error", payload: error.message });
        return;
      }

      dispatch({ type: "food/set", payload: data });
    } catch (error) {
      dispatch({ type: "food/error", payload: error.message });

      return;
    }
  };

  return (
    <FoodContext.Provider value={{ food, loading, error, getFood, getAllFood }}>
      {children}
    </FoodContext.Provider>
  );
}

function useFood() {
  const context = useContext(FoodContext);

  if (context === undefined) {
    throw new Error("Context was used outside of its scope.");
  }

  return context;
}

export { FoodProvider, useFood };
