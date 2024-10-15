import chef_1 from "../../assets/chef_1.jpg";
import chef_2 from "../../assets/chef_2.jpg";
import chef_3 from "../../assets/chef_3.jpg";

function Chef() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#F9F9F9] p-20 pb-40">
      <h2 className="mb-10 text-center text-5xl font-bold sm:text-start">
        Our Popular Chefs
      </h2>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center text-lg">
          <div className="mb-4 h-[400px] w-[300px] overflow-hidden rounded-lg">
            <img className="object-cover" src={chef_1} alt="chef" />
          </div>
          <p className="font-bold">Betran Komar</p>
          <p className="font-semibold text-slate-500">Head chef</p>
        </div>

        <div className="flex flex-col items-center justify-center text-lg">
          <div className="mb-4 h-[400px] w-[300px] overflow-hidden rounded-lg">
            <img className="object-cover" src={chef_3} alt="chef" />
          </div>
          <p className="font-bold">Iswan Dracho</p>
          <p className="font-semibold text-slate-500">Chef</p>
        </div>

        <div className="flex flex-col items-center justify-center text-lg">
          <div className="mb-4 h-[400px] w-[300px] overflow-hidden rounded-lg">
            <img className="object-cover" src={chef_2} alt="chef" />
          </div>
          <p className="font-bold">Ferry Sauwi</p>
          <p className="font-semibold text-slate-500">Chef</p>
        </div>
      </div>
      {/* <button className="mt-12 w-full rounded-lg bg-red-500 px-16 py-4 text-lg font-bold text-white md:w-[300px]">
        View all
      </button> */}
    </div>
  );
}

export default Chef;
