import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMenu } from "../../contexts/MenuContext";

function Footer() {
  const { setMenu } = useMenu();

  return (
    <footer className="flex flex-col items-center gap-10 bg-[#1B1919] p-20 text-white">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        <div>
          <div className="mb-8 flex items-center justify-center gap-2 md:justify-start">
            <div className="flex h-10 w-10 rotate-[-20deg] items-center justify-center rounded-full bg-[#F54748]">
              <span className="p-2 text-xl font-semibold text-white">F</span>
            </div>
            <p className="font-bold text-white">
              Foodio<span className="text-red-500">.</span>
            </p>
          </div>

          <p className="w-[200px] text-center text-sm md:text-start">
            Delicious meals delivered to your door! Order your favorite cuisines
            with ease today!
          </p>

          <div className="mt-6">
            <ul className="flex gap-6 text-black">
              <li className="cursor-pointer rounded-full bg-slate-200 p-3 text-2xl">
                <FaTwitter />
              </li>
              <li className="cursor-pointer rounded-full bg-slate-200 p-3 text-2xl">
                <FaInstagram />
              </li>
              <li className="cursor-pointer rounded-full bg-slate-200 p-3 text-2xl">
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h3 className="mb-6 text-xl font-bold text-red-500">Page</h3>
          <ul className="flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
            <li className="cursor-pointer">
              <Link onClick={() => setMenu("home")} to="/">
                Home
              </Link>
            </li>
            {/* <li className="cursor-pointer">
              <Link onClick={() => setMenu("menu")} to="/menu">
                Menu
              </Link>
            </li> */}
            <li className="cursor-pointer">
              <Link onClick={() => setMenu("order")} to="/order">
                Order
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link onClick={() => setMenu("reservation")} to="/reservation">
                Reservation
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h3 className="mb-6 text-xl font-bold text-red-500">Information</h3>
          <ul className="flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
            <li className="cursor-pointer">
              <Link to="/about-us" onClick={() => setMenu("about-us")}>
                About us
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[180px] text-center md:text-start">
          <h3 className="mb-6 text-xl font-bold text-red-500">Get in touch</h3>
          <ul className="flex flex-col gap-3">
            <li>Makahiya St., Brgy. San Isidro, Quezon City</li>
            <li>foodioresto@gmail.com</li>
            <li>+63 924 983 2755</li>
          </ul>
        </div>
      </div>

      <p className="text-xs font-bold">Copyright &copy; 2022</p>
    </footer>
  );
}

export default Footer;
