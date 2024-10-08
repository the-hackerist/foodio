import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
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

          <p className="w-[200px] text-center md:text-start">
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
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
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Order</li>
            <li className="cursor-pointer">Reservation</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h3 className="mb-6 text-xl font-bold text-red-500">Information</h3>
          <ul className="flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
            <li className="cursor-pointer">About us</li>
          </ul>
        </div>

        <div className="w-[180px] text-center md:text-start">
          <h3 className="mb-6 text-xl font-bold text-red-500">Get in touch</h3>
          <ul className="flex flex-col gap-3">
            <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
            <li>abc@example.com</li>
            <li>+123 4567 8901</li>
          </ul>
        </div>
      </div>

      <p className="text-xs font-bold">Copyright &copy; 2022</p>
    </footer>
  );
}

export default Footer;
