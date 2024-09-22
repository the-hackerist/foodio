import img from "../../assets/pasta.png";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#F8DBDC] via-[#F8E7E7]to-[#F9F9F9] h-screen px-10 py-20 flex items-center justify-center gap-2 lg:gap-10 xl:gap-20 md:px-20">
      <div className="flex justify-center flex-col w-[350px] sm:w-[450px] text-center md:text-start">
        <h1 className="text-5xl font-bold leading-snug">
          Best Restaurant
          <br />
          In <span className="text-red-500">Town.</span>
        </h1>

        <p className="text-[#5C4429] mt-6 text-lg md:text-base lg:text-lg">
          We provide best food in town, we provide home delivery and dine in
          services.
        </p>

        <div className="flex gap-4 mt-10 md:gap-2 justify-center md:justify-start">
          <button className="text-white px-4 font-semibold text-lg bg-red-500 py-3 rounded-xl md:px-4 md:text-base lg:px-10 lg:text-lg">
            Order now
          </button>
          <button className="text-red-500 px-4 font-semibold text-lg bg-[#F9E1E1] py-3 rounded-xl md:px-4 md:text-base lg:px-10 lg:text-lg">
            Reservation
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <img className="w-[350px] object-contain" src={img} alt="hero img" />
      </div>
    </div>
  );
}

export default Hero;
