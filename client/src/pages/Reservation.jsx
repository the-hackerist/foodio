import food from "../assets/food-2.jpg";

function Reservation() {
  return (
    <div className="pt-20">
      <div className="flex flex-row items-center justify-center gap-10 p-10 py-20 pt-20">
        <div className="hidden h-[550px] w-[450px] overflow-hidden rounded-3xl lg:inline-block">
          <img className="object-contain" src={food} alt="restaurant image" />
        </div>

        <div className="flex flex-col items-center gap-10 text-center md:h-[550px] md:w-[350px] md:justify-between md:text-start">
          <h2 className="text-5xl font-bold">Book a table</h2>

          {/* date selector */}
          <input
            className="w-full rounded-xl border px-6 py-4 md:p-6"
            type="text"
            placeholder="date"
          />

          {/* time selector */}
          <input
            className="w-full rounded-xl border px-6 py-4 md:p-6"
            type="text"
            placeholder="time"
          />
          <input
            className="w-full rounded-xl border px-6 py-4 md:p-6"
            type="number"
            defaultValue={1}
            placeholder="party size"
          />
          <button className="w-full rounded-xl bg-red-500 px-6 py-4 font-bold text-white md:p-6">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
