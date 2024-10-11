import popular_img from "../../assets/popular_pasta.png";

function Popular() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-[#E7F7ED] px-10 py-20 md:flex-row lg:gap-10 xl:gap-20">
      <div>
        <img
          className="w-[300px] md:w-[400px]"
          src={popular_img}
          alt="popular dish"
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-center text-5xl font-bold leading-snug md:text-start">
          Our Most <br /> Popular
          <span className="text-red-500"> Dish.</span>
        </h2>
        <p className="mt-6 max-w-[370px] text-center text-lg leading-8 text-[#5C4429] md:text-start">
          This dish is full of flavor and nutrition! Quinoa is a complete
          protein, providing all the essential amino acids your body needs, and
          is also a good source of fiber.
        </p>
      </div>
    </div>
  );
}

export default Popular;
