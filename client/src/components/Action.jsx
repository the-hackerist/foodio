function Action() {
  return (
    <div className="h-[300px] bg-[#F9F9F9] flex items-center justify-center p-20">
      <div className="flex items-center justify-center flex-col gap-10 border py-16 px-44 rounded-2xl bg-[#FDD9D9]">
        <h2 className="font-bold text-4xl text-[#311F09]">
          Hungry? We are open now..
        </h2>
        <div className="flex items-center justify-center gap-6">
          <button className="text-white px-10 font-semibold text-lg bg-red-500 py-3 rounded-xl">
            Order now
          </button>
          <button className="text-red-500 px-10 font-semibold text-lg bg-[#FEECEC] py-3 rounded-xl">
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Action;
