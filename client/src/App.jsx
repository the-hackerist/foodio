import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
