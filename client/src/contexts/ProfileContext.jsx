/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./UserContext";

const ProfileContext = createContext();

const initialState = {
  profile: null,
  loading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "profile/set":
      return { ...state, profile: action.payload, loading: false, error: "" };

    case "profile/error":
      return { ...state, loading: false, error: action.payload };

    case "profile/start":
      return { ...state, loading: true, error: "" };

    case "profile/reset":
      return initialState;
  }
}

function ProfileProvider({ children }) {
  const [{ profile, loading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const { user, getUser } = useAuth();

  useEffect(() => {
    getUser();
  }, []);
  // causes constant re-render

  const updateProfile = async (profileData) => {
    const body = { _id: user._id, ...profileData };

    try {
      dispatch({ type: "profile/start" });

      const res = await fetch(`http://localhost:3000/profile/update`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!data.success) {
        dispatch({ type: "profile/error", payload: data.message });
        return;
      }

      dispatch({ type: "profile/update", data });
    } catch (error) {
      dispatch({ type: "profile/error", payload: error.message });
      console.log(error.message);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, loading, error, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);

  if (context === undefined)
    throw new Error("Context was used outside of its scope.");
  return context;
}

export { ProfileProvider, useProfile };
