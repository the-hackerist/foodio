import img from "../assets/chef_cooking.jpg";
import food from "../assets/food.jpg";
import owner from "../assets/owner.jpg";

function AboutUs() {
  return (
    <div className="bg-[#F9F9F9] px-10 md:px-4 lg:px-20 pt-40 pb-20 flex flex-col gap-10">
      <div className="flex items-center gap-4 lg:gap-20 justify-center flex-col md:flex-row">
        <div className="lg:w-[475px] lg:h-[475px] w-[350px] h-[350px] bg-[#F5F5F5] flex items-center justify-center rounded-full">
          <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-[#EEEDEC] flex items-center justify-center rounded-full ">
            <div className="lg:w-[325px] lg:h-[325px] w-[250px] h-[250px] flex items-center rounded-full overflow-hidden">
              <img className="" src={img} alt="restaurant image" />
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col md:items-start">
          <h2 className="text-5xl font-bold leading-snug">
            About Our <br />
            <span className="text-red-500">Restaurant</span>
          </h2>
          <p className="text-xl md:text-lg max-w-[350px] mt-4 text-[#5C4429] text-center md:text-start">
            This dish is full of flavor and nutrition! Quinoa is a complete
            protein, providing all the essential amino acids your body needs,
            and is also a good source of fiber.
          </p>
          <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl mt-8">
            Order now
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-20 justify-center flex-col md:flex-row">
        <p className="max-w-[350px] mt-4 text-[#5C4429] text-center md:text-start text-xl md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>

        <div className="lg:w-[475px] lg:h-[475px] w-[350px] h-[350px] bg-[#F5F5F5] flex items-center justify-center rounded-full">
          <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] bg-[#EEEDEC] flex items-center justify-center rounded-full ">
            <div className="lg:w-[325px] lg:h-[325px] w-[250px] h-[250px] flex items-center rounded-full overflow-hidden">
              <img
                className="bg-red-400 scale-150"
                src={food}
                alt="restaurant image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 lg:gap-20 flex-col md:flex-row">
        <img
          className="w-[375px] h-[425px] object-cover rounded-xl shadow-md"
          src={owner}
          alt="owner image"
        />

        <div className="flex flex-col items-center text-center md:text-start md:w-[350px]">
          <h2 className="text-4xl md:text-5xl font-bold ">
            <span className="text-red-500">Owner </span>& Executive Chef
          </h2>
          <p className="mt-4 text-2xl md:text-2xl w-full">Ismail Marzuki</p>
          <p className="text-2xl font-thin italic mt-8 leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
