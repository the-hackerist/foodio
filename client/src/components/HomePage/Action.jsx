function Action() {
  return (
    <div className="bg-[#F9F9F9] flex items-center justify-center p-20 ">
      <div className="flex items-center justify-center flex-col gap-10 border p-10 lg:px-40 lg:py-20 rounded-2xl bg-[#FDD9D9]">
        <h2 className="font-bold text-4xl text-[#311F09] text-center md:text-start">
          Hungry? We are open now..
        </h2>
        <div className="flex items-center justify-center gap-2 sm:gap-10 flex-wrap">
          <button className="text-white px-4 sm:px-10 font-semibold  text-xs sm:text-lg bg-red-500 py-3 rounded-xl">
            Order now
          </button>
          <button className="text-red-500 px-4 sm:px-10 font-semibold text-xs sm:text-lg bg-[#FEECEC] py-3 rounded-xl">
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Action;
