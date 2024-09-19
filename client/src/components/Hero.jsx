import img from "../assets/pasta.png";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#F8DBDC] via-[#F8E7E7]to-[#F9F9F9] h-screen pt-52 px-24 flex items-center justify-center gap-2">
      <div className="flex justify-center flex-col">
        <p className="text-5xl font-bold leading-snug">
          Best Restaurant
          <br />
          In <span className="text-red-500">Town.</span>
        </p>
        <p className="w-[440px] text-[#5C4429] mt-6 text-lg">
          We provide best food in town, we provide home delivery and dine in
          services.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
            Order now
          </button>
          <button className="text-red-500 px-10 font-semibold text-lg bg-[#F9E1E1] py-3 rounded-xl">
            Reservation
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img className="w-[350px] object-contain" src={img} alt="hero img" />
      </div>
    </div>
  );
}

export default Hero;
