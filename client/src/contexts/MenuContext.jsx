/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const MenuContext = createContext();

const initialState = {
  navigation: localStorage.getItem("navigation") || "",
};

function reducer(state, action) {
  switch (action.type) {
    case "menu/set":
      return { ...state, navigation: action.payload };

    case "menu/reset":
      return { navigation: "" };

    default:
      throw new Error("Unknown action!");
  }
}

function MenuProvider({ children }) {
  const [{ navigation }, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    const savedMenu = localStorage.getItem("navigation");

    if (savedMenu === "home") {
      navigate("/");
      return;
    }

    navigate(`/${savedMenu}`);
  }, []);

  const setMenu = (value) => {
    dispatch({ type: "menu/set", payload: value });

    localStorage.setItem("navigation", value);
  };

  const resetMenu = () => {
    dispatch({ type: "menu/reset" });
    localStorage.removeItem("navigation");
  };

  return (
    <MenuContext.Provider value={{ navigation, setMenu, resetMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);

  if (context === undefined) throw "Context used outside of its scope.";

  return context;
}

export { MenuProvider, useMenu };
