import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between px-20 py-8">
      <div className="flex gap-2 items-center">
        <div className="bg-red-500 rounded-full rotate-[-20deg] flex items-center justify-center h-10 w-10">
          <span className="p-2 text-white font-semibold text-xl">F</span>
        </div>
        <p className="text-[#523E2C] font-bold">
          Foodio<span className="text-red-500">.</span>
        </p>
      </div>

      <div>
        <ul className="flex text-xs gap-2">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/order">Order online</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="bg-red-700">
          <span>F</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
