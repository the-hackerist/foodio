import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1B1919] flex flex-col gap-10 text-white p-20 items-center">
      <div className="flex gap-10 flex-col md:flex-row items-center md:items-start">
        <div>
          <div className="flex gap-2 items-center md:justify-start justify-center mb-8">
            <div className="bg-[#F54748] rounded-full rotate-[-20deg] flex items-center justify-center h-10 w-10">
              <span className="p-2 text-white font-semibold text-xl">F</span>
            </div>
            <p className="text-white font-bold">
              Foodio<span className="text-red-500">.</span>
            </p>
          </div>

          <p className="w-[200px]  text-center md:text-start">
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>

          <div className="mt-6">
            <ul className="flex gap-6 text-black">
              <li className="bg-slate-200 p-3 text-2xl rounded-full cursor-pointer">
                <FaTwitter />
              </li>
              <li className="bg-slate-200 p-3 text-2xl rounded-full cursor-pointer">
                <FaInstagram />
              </li>
              <li className="bg-slate-200 p-3 text-2xl rounded-full cursor-pointer">
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center md:items-start md:justify-start flex-col">
          <h3 className="text-xl font-bold text-red-500 mb-6">Page</h3>
          <ul className="flex flex-col gap-3 items-center justify-center md:items-start md:justify-start">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Order</li>
            <li className="cursor-pointer">Reservation</li>
          </ul>
        </div>

        <div className="flex items-center justify-center flex-col md:items-start md:justify-start">
          <h3 className="text-xl font-bold text-red-500 mb-6">Information</h3>
          <ul className="flex flex-col gap-3 items-center justify-center md:items-start md:justify-start">
            <li className="cursor-pointer">About us</li>
          </ul>
        </div>

        <div className="w-[180px] text-center md:text-start ">
          <h3 className="text-xl font-bold text-red-500 mb-6">Get in touch</h3>
          <ul className="flex flex-col gap-3">
            <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
            <li>abc@example.com</li>
            <li>+123 4567 8901</li>
          </ul>
        </div>
      </div>

      <p className="font-bold text-xs">Copyright &copy; 2022</p>
    </footer>
  );
}

export default Footer;
