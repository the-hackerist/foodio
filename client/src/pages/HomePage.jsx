import Chef from "../components/Chef";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Popular from "../components/Popular";

function HomePage() {
  return (
    <main>
      <Hero />
      <Popular />
      <Menu />
      <Chef />
    </main>
  );
}

export default HomePage;
