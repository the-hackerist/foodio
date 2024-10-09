/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const initialState = JSON.parse(localStorage.getItem("auth")) || {
  user: null,
  error: "",
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "reset-error":
      return { ...state, error: "" };

    case "get-user":
      return { ...state, user: action.payload, loading: false, error: false };

    case "auth/sign-in":
      return {
        ...state,
        user: action.payload,
        error: "",
        loading: false,
      };

    case "auth/sign-in/fail":
      return {
        ...state,
        user: null,
        error: action.payload,
        loading: false,
      };

    case "auth/sign-in/start":
      return {
        ...state,
        user: null,
        error: "",
        loading: true,
      };

    case "auth/sign-up":
      return {
        ...state,
        user: null,
        loading: false,
        error: "",
      };

    case "auth/sign-up/start":
      return {
        ...state,
        user: null,
        loading: true,
        error: "",
      };

    case "auth/sign-up/fail":
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };

    case "auth/sign-out":
      return { user: null, loading: false, error: "" };

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

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { _id } = user;

    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/auth/get-user/${_id}`,
      );

      const data = await res.json();

      if (!data) {
        console.log("error in getUser function of UserContext");
        return;
      }

      dispatch({ type: "get-user", payload: data });

      console.log("data here:", data);

      localStorage.setItem(
        "auth",
        JSON.stringify({ user: data, loading: false, error: "" }),
      );

      return data;
    } catch (error) {
      console.log(error.message);
      return;
    }
  };

  const signIn = async (email, password) => {
    try {
      dispatch({ type: "auth/sign-in/start" });

      if (!email || !password) {
        dispatch({
          type: "auth/sign-in/fail",
          payload: "Any input fields shouldn't be empty.",
        });
        return;
      }

      const res = await fetch("http://localhost:3000/api/v1/auth/sign-in", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch({ type: "auth/sign-in/fail", payload: data.message });
        return;
      }

      dispatch({ type: "auth/sign-in", payload: data });

      localStorage.setItem(
        "auth",
        JSON.stringify({ user: data, loading: false, error: "" }),
      );
      navigate("/");
    } catch (error) {
      dispatch({ type: "auth/sign-in/fail", payload: error.message });
      return;
    }
  };

  const signUp = async (user) => {
    const { username, email, password, confirmPassword } = user;

    try {
      dispatch({ type: "auth/sign-up/start" });

      if (username.length < 4) {
        dispatch({
          type: "auth/sign-up/fail",
          payload: "Username must be at least 4 characters.",
        });
        return;
      }

      if (password.length < 8) {
        dispatch({
          type: "auth/sign-up/fail",
          payload: "Password must be at least 8 characters.",
        });
        return;
      }

      if (confirmPassword !== password) {
        dispatch({
          type: "auth/sign-up/fail",
          payload: "Password do not match.",
        });
        return;
      }

      const res = await fetch("http://localhost:3000/api/v1/auth/sign-up", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch({
          type: "auth/sign-up/fail",
          payload: data.message,
        });
        return;
      }

      dispatch({ type: "auth/sign-up" });
      navigate("/log-in");
    } catch (error) {
      dispatch({
        type: "auth/sign-up/fail",
        payload: error.message,
      });
      return;
    }
  };

  const signOut = () => {
    localStorage.removeItem("auth");
    dispatch({ type: "auth/sign-out" });
  };

  const resetError = () => dispatch({ type: "reset-error" });

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        loading,
        signIn,
        signOut,
        signUp,
        resetError,
        getUser,
      }}
    >
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
