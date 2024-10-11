/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// import Action from "../components/HomePage/Action";
import Chef from "../components/HomePage/Chef";
import Hero from "../components/HomePage/Hero";
import Menu from "../components/HomePage/Menu";
import Popular from "../components/HomePage/Popular";

import { useCart } from "../contexts/CartContext";
import { useAddress } from "../contexts/AddressContext";

function HomePage() {
  const { getCart } = useCart();
  const { getAddress } = useAddress();

  useEffect(() => {
    getCart();
    getAddress();
  }, []);

  return (
    <main>
      <Hero />
      <Popular />
      <Menu />
      <Chef />
      {/* <Action /> */}
    </main>
  );
}

export default HomePage;
