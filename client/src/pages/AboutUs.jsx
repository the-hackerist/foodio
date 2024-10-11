import { Link } from "react-router-dom";
import img from "../assets/chef_cooking.jpg";
import food from "../assets/food.jpg";
import owner from "../assets/owner.jpg";
import { useMenu } from "../contexts/MenuContext";

function AboutUs() {
  const { setMenu } = useMenu();

  return (
    <div className="flex flex-col gap-10 bg-[#F9F9F9] px-10 pb-20 pt-40 md:px-4 lg:px-20">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-20">
        <div className="flex h-[350px] w-[350px] items-center justify-center rounded-full bg-[#F5F5F5] lg:h-[475px] lg:w-[475px]">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#EEEDEC] lg:h-[400px] lg:w-[400px]">
            <div className="flex h-[250px] w-[250px] items-center overflow-hidden rounded-full lg:h-[325px] lg:w-[325px]">
              <img
                className=""
                src={img}
                alt="restaurant image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-5xl font-bold leading-snug">
            About Our <br />
            <span className="text-red-500">Restaurant</span>
          </h2>
          <p className="mt-4 max-w-[350px] text-center text-xl text-[#5C4429] md:text-start md:text-lg">
            This dish is full of flavor and nutrition! Quinoa is a complete
            protein, providing all the essential amino acids your body needs,
            and is also a good source of fiber.
          </p>
          <Link
            to="/order"
            onClick={() => setMenu("order")}
            className="mt-8 rounded-xl bg-red-500 px-10 py-3 text-lg font-semibold text-white"
          >
            Order now
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-20">
        <p className="mt-4 max-w-[350px] text-center text-xl text-[#5C4429] md:text-start md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>

        <div className="flex h-[350px] w-[350px] items-center justify-center rounded-full bg-[#F5F5F5] lg:h-[475px] lg:w-[475px]">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full bg-[#EEEDEC] lg:h-[400px] lg:w-[400px]">
            <div className="flex h-[250px] w-[250px] items-center overflow-hidden rounded-full lg:h-[325px] lg:w-[325px]">
              <img
                className="scale-150 bg-red-400"
                src={food}
                alt="restaurant image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row lg:gap-20">
        <img
          className="h-[425px] w-[375px] rounded-xl object-cover shadow-md"
          src={owner}
          alt="owner image"
          loading="lazy"
        />

        <div className="flex flex-col items-center text-center md:w-[350px] md:text-start">
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="text-red-500">Owner </span>& Executive Chef
          </h2>
          <p className="mt-4 w-full text-2xl md:text-2xl">Ismail Marzuki</p>
          <p className="mt-8 text-2xl font-thin italic leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
