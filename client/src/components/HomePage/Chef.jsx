import chef_1 from "../../assets/chef_1.jpg";
import chef_2 from "../../assets/chef_2.jpg";
import chef_3 from "../../assets/chef_3.jpg";

function Chef() {
  return (
    <div className="w-full flex items-center justify-center flex-col p-20 bg-[#F9F9F9]">
      <h2 className="text-5xl font-bold mb-10">Our Popular Chef</h2>
      <div className="flex items-center justify-center gap-10 mt-6 flex-wrap">
        <div className="flex flex-col items-center justify-center text-lg">
          <div className="w-[300px] h-[400px] overflow-hidden rounded-lg mb-4">
            <img className="object-cover" src={chef_1} alt="chef" />
          </div>
          <p className="font-bold">Betran Komar</p>
          <p className="text-slate-500 font-semibold">Head chef</p>
        </div>

        <div className="flex flex-col items-center justify-center text-lg">
          <div className="w-[300px] h-[400px] overflow-hidden rounded-lg mb-4">
            <img className="object-cover" src={chef_3} alt="chef" />
          </div>
          <p className="font-bold">Iswan Dracho</p>
          <p className="text-slate-500 font-semibold">Chef</p>
        </div>

        <div className="flex flex-col items-center justify-center text-lg">
          <div className="w-[300px] h-[400px] overflow-hidden rounded-lg mb-4">
            <img className="object-cover" src={chef_2} alt="chef" />
          </div>
          <p className="font-bold">Ferry Sauwi</p>
          <p className="text-slate-500 font-semibold">Chef</p>
        </div>
      </div>
      <button className="px-16 py-4 bg-red-500 text-lg font-bold text-white mt-12 rounded-lg w-full md:w-[300px]">
        View all
      </button>
    </div>
  );
}

export default Chef;
