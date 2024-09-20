import img from "../assets/chef_cooking.jpg";
import food from "../assets/food.jpg";
import owner from "../assets/owner.jpg";

function AboutUs() {
  return (
    <div className="bg-[#F9F9F9] px-20 pt-40 pb-20">
      <div className="flex items-center gap-32 justify-center">
        <div className="w-[475px] h-[475px] bg-[#F5F5F5] flex items-center justify-center rounded-full">
          <div className="w-[400px] h-[400px] bg-[#EEEDEC] flex items-center justify-center rounded-full ">
            <div className="w-[325px] h-[325px] flex items-center rounded-full overflow-hidden">
              <img className="" src={img} alt="restaurant image" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-bold leading-snug">
            About Our <br />
            <span className="text-red-500">Restaurant</span>
          </h2>
          <p className="text-lg w-[340px] mt-4 text-[#5C4429]">
            This dish is full of flavor and nutrition! Quinoa is a complete
            protein, providing all the essential amino acids your body needs,
            and is also a good source of fiber.
          </p>
          <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl mt-8">
            Order now
          </button>
        </div>
      </div>

      <div className="flex items-center gap-32 justify-center mt-40">
        <p className="text-lg w-[350px] mt-4 text-[#5C4429]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>

        <div className="w-[475px] h-[475px] bg-[#F5F5F5] flex items-center justify-center rounded-full">
          <div className="w-[400px] h-[400px] bg-[#EEEDEC] flex items-center justify-center rounded-full ">
            <div className="w-[325px] h-[325px] flex items-center rounded-full overflow-hidden">
              <img
                className="bg-red-400 scale-150"
                src={food}
                alt="restaurant image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-16 mt-40">
        <img
          className="w-[375px] h-[425px] object-contain"
          src={owner}
          alt="owner image"
        />
        <div className="w-[500px]">
          <h2 className="text-5xl font-bold">
            <span className="text-red-500">Owner </span>& Executive Chef
          </h2>
          <p className="mt-4 text-3xl">Ismail Marzuki</p>
          <p className="text-2xl font-thin italic mt-8 w-[320px] leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
