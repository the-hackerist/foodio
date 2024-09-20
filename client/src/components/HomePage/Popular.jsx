import popular_img from "../../assets/popular_pasta.png";

function Popular() {
  return (
    <div className="bg-[#E7F7ED] flex flex-col items-center md:flex-row gap-2 lg:gap-10 xl:gap-20 justify-center p-20">
      <div>
        <img
          className="w-[300px] md:w-[400px]"
          src={popular_img}
          alt="popular dish"
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-5xl font-bold leading-snug text-center md:text-start">
          Our Most <br /> Popular
          <span className="text-red-500"> Dish.</span>
        </h2>
        <p className="text-[#5C4429] w-[370px] leading-8 mt-6 text-lg text-center md:text-start">
          This dish is full of flavor and nutrition! Quinoa is a complete
          protein, providing all the essential amino acids your body needs, and
          is also a good source of fiber.
        </p>
        <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl mt-8">
          Order now
        </button>
      </div>
    </div>
  );
}

export default Popular;
