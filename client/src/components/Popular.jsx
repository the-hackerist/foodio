import popular_img from "../assets/popular_pasta.png";

function Popular() {
  return (
    <div className="bg-[#E7F7ED] flex gap-20 justify-center p-20">
      <div>
        <img className="w-[500px]" src={popular_img} alt="popular dish" />
      </div>
      <div>
        <h2 className="text-5xl font-bold leading-snug">
          Our Most <br /> Popular
          <span className="text-red-500"> Dish.</span>
        </h2>
        <p className="text-[#5C4429] w-[370px] leading-8 mt-6 text-lg">
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
