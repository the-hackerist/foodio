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
            Our menu features a variety of dishes, each thoughtfully crafted to
            highlight the rich flavors and health benefits of wholesome
            ingredients like quinoa.
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
          Not only does quinoa serve as a versatile base for our meals, but it
          also supports a balanced diet by offering essential amino acids,
          fiber, and vital nutrients. We are committed to bringing you meals
          that not only satisfy your cravings but also nourish your body. Join
          us on a culinary journey that celebrates health and flavor in every
          bite!
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
            As a passionate advocate for healthy eating, I understand the
            importance of quality ingredients in our daily diets. Our team is
            dedicated to sourcing the finest ingredients, like nutrient-packed
            quinoa, to ensure that every dish not only delights your taste buds
            but also fuels your body.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
