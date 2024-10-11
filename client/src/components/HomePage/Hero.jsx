import { Link } from "react-router-dom";
import img from "../../assets/pasta.png";
import { useMenu } from "../../contexts/MenuContext";

function Hero() {
  const { setMenu } = useMenu();

  return (
    <div className="flex h-screen items-center justify-center gap-2 bg-gradient-to-b from-[#F8DBDC] via-[#F8E7E7] to-[#F9F9F9] px-10 py-20 pt-40 md:px-20 lg:gap-10 xl:gap-20">
      <div className="flex w-[350px] flex-col justify-center text-center sm:w-[450px] md:text-start">
        <h1 className="text-5xl font-bold leading-snug">
          Best Restaurant
          <br />
          In <span className="text-red-500">Town.</span>
        </h1>

        <p className="mt-6 max-w-[380px] text-lg text-[#5C4429] md:text-base lg:text-lg">
          We provide best food in town, we provide home delivery and dine in
          services.
        </p>

        <div className="mt-10 flex justify-center gap-4 md:justify-start md:gap-2">
          <Link
            to="/order"
            onClick={() => setMenu("order")}
            className="rounded-xl bg-red-500 px-4 py-3 text-lg font-semibold text-white md:px-4 md:text-base lg:px-10 lg:text-lg"
          >
            Order now
          </Link>

          <Link
            to="/reservation"
            onClick={() => setMenu("reservation")}
            className="rounded-xl bg-[#F9E1E1] px-4 py-3 text-lg font-semibold text-red-500 md:px-4 md:text-base lg:px-10 lg:text-lg"
          >
            Reservation
          </Link>
        </div>
      </div>

      <div className="hidden items-center justify-center md:flex">
        <img className="w-[350px] object-contain" src={img} alt="hero img" />
      </div>
    </div>
  );
}

export default Hero;
