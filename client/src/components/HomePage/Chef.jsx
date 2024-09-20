import chef_1 from "../../assets/chef_1.jpg";
import chef_2 from "../../assets/chef_2.jpg";
import chef_3 from "../../assets/chef_3.jpg";

function Chef() {
  return (
    <div className="w-full flex items-center justify-center flex-col p-20 bg-[#F9F9F9]">
      <h2 className="text-5xl font-bold">Our Popular Chef</h2>
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="flex flex-col items-center justify-center text-lg">
          <img
            className="w-[300px] h-[500px] object-contain"
            src={chef_1}
            alt="chef"
          />
          <p className="font-bold">Betran Komar</p>
          <p className="text-slate-500 font-semibold">Head chef</p>
        </div>

        <div className="flex flex-col items-center justify-center text-lg">
          <img
            className="w-[300px] h-[500px] object-contain"
            src={chef_3}
            alt="chef"
          />
          <p className="font-bold">Iswan Dracho</p>
          <p className="text-slate-500 font-semibold">Chef</p>
        </div>

        <div className="flex flex-col items-center justify-center text-lg">
          <img
            className="w-[300px] h-[500px] object-contain"
            src={chef_2}
            alt="chef"
          />
          <p className="font-bold">Ferry Sauwi</p>
          <p className="text-slate-500 font-semibold">Chef</p>
        </div>
      </div>
      <button className="px-16 py-4 bg-red-500 text-lg font-bold text-white mt-12 rounded-lg">
        View all
      </button>
    </div>
  );
}

export default Chef;
