/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const initialState = { user: null, error: "", loading: false };

function reducer(state, action) {
  switch (action.type) {
    case "auth/success":
      return { ...state, user: action.payload, loading: false, error: "" };

    case "auth/fail":
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      };

    case "auth/start":
      return {
        ...state,
        user: null,
        error: "",
        loading: true,
      };

    case "auth/sign-out":
      return initialState;

    default:
      throw new Error("Unknown action");
  }
}

function UserProvider({ children }) {
  const [{ user, error, loading }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const navigate = useNavigate();

  const signIn = async (email, password) => {
    try {
      dispatch({ type: "auth/start" });

      const res = await fetch("http://localhost:3000/api/v1/auth/sign-in", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      console.log(data);

      if (data.success === false) {
        dispatch({ type: "auth/fail", payload: data.message });
        return;
      }

      dispatch({ type: "auth/success", payload: data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "auth/fail", payload: error.message });
      return;
    }
  };

  const signOut = () => {
    dispatch({ type: "auth/sign-out" });
  };
  return (
    <UserContext.Provider value={{ user, error, loading, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("Context was used outside of its scope.");

  return context;
};

export { UserProvider, useAuth };
