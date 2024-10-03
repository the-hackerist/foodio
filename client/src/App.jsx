import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AddressProvider } from "./contexts/AddressContext.jsx";
import { OrderProvider } from "./contexts/OrderContext.jsx";

import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./pages/PrivateRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile.jsx";
import OrderStatus from "./pages/OrderStatus.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <AddressProvider>
            <OrderProvider>
              <div className="relative">
                <Header />
                <Routes>
                  <Route index element={<HomePage />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/log-in" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/order/:id" element={<OrderStatus />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/cart" element={<Cart />} />
                  </Route>
                </Routes>
                <Footer />
              </div>
            </OrderProvider>
          </AddressProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
