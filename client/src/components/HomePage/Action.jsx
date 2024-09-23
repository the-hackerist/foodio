function Action() {
  return (
    <div className="flex items-center justify-center bg-[#F9F9F9] p-20">
      <div className="flex flex-col items-center justify-center gap-10 rounded-2xl border bg-[#FDD9D9] p-10 lg:px-40 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-[#311F09] md:text-start">
          Hungry? We are open now...
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-10">
          <button className="w-full rounded-xl bg-red-500 px-4 py-3 text-lg font-semibold text-white sm:px-10 md:w-fit">
            Order now
          </button>
          <button className="w-full rounded-xl bg-[#FEECEC] px-4 py-3 text-lg font-semibold text-red-500 sm:px-10 md:w-fit">
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Action;
