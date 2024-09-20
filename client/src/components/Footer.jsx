import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1B1919] flex flex-col gap-10 text-white p-20 items-center">
      <div className="flex gap-10">
        <div className="w-[250px]">
          <div className="flex gap-2 items-center mb-8">
            <div className="bg-[#F54748] rounded-full rotate-[-20deg] flex items-center justify-center h-10 w-10">
              <span className="p-2 text-white font-semibold text-xl">F</span>
            </div>
            <p className="text-white font-bold">
              Foodio<span className="text-red-500">.</span>
            </p>
          </div>

          <p>
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>

          <div className="mt-6">
            <ul className="flex gap-6 text-black">
              <li className="bg-slate-200 p-3 text-2xl rounded-full">
                <FaTwitter />
              </li>
              <li className="bg-slate-200 p-3 text-2xl rounded-full">
                <FaInstagram />
              </li>
              <li className="bg-slate-200 p-3 text-2xl rounded-full">
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-red-500 mb-6">Page</h3>
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>Menu</li>
            <li>Order</li>
            <li>Reservation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-red-500 mb-6">Information</h3>
          <ul>
            <li>About us</li>
          </ul>
        </div>

        <div className="w-[180px]">
          <h3 className="text-xl font-bold text-red-500 mb-6">Get in touch</h3>
          <ul className="flex flex-col gap-3">
            <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
            <li>abc@example.com</li>
            <li>+123 4567 8901</li>
          </ul>
        </div>
      </div>

      <p>Copyright &copy; 2022</p>
    </footer>
  );
}

export default Footer;
