import { useEffect } from "react";

import Action from "../components/HomePage/Action";
import Chef from "../components/HomePage/Chef";
import Hero from "../components/HomePage/Hero";
import Menu from "../components/HomePage/Menu";
import Popular from "../components/HomePage/Popular";

import { useCart } from "../contexts/CartContext";

function HomePage() {
  const { getCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <main>
      <Hero />
      <Popular />
      <Menu />
      <Chef />
      <Action />
    </main>
  );
}

export default HomePage;
