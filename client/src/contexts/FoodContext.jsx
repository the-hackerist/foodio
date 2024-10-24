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

    case "food/end":
      return { ...state, loading: false };

    default:
      throw new Error("Unknown action!");
  }
}

function FoodProvider({ children }) {
  const [{ food, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const getAllFood = async () => {
    try {
      dispatch({ type: "food/start" });

      const res = await fetch(`/api/v1/order/get/get-all-food`);

      const data = await res.json();

      dispatch({ type: "food/end" });
      return data;
    } catch (error) {
      dispatch({ type: "food/error", payload: error.message });
      return;
    }
  };

  const getFood = async (foodId) => {
    try {
      dispatch({ type: "food/start" });

      const res = await fetch(`/api/v1/order/menu/${foodId}`);

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
