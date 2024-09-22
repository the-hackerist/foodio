import food from "../assets/food-2.jpg";

function Reservation() {
  return (
    <div className="pt-20">
      <div className="p-10 pt-20  flex flex-row items-center justify-center gap-10">
        <div className="w-[450px] h-[550px] overflow-hidden rounded-3xl hidden lg:inline-block">
          <img className="object-contain" src={food} alt="restaurant image" />
        </div>

        <div className="flex flex-col items-center md:justify-between gap-10 md:h-[550px] md:w-[350px] text-center md:text-start">
          <h2 className="text-5xl font-bold">Book a table</h2>

          {/* date selector */}
          <input
            className="py-4 px-6 md:p-6 w-full border rounded-xl"
            type="text"
            placeholder="date"
          />

          {/* time selector */}
          <input
            className="py-4 px-6 md:p-6 w-full border rounded-xl"
            type="text"
            placeholder="time"
          />
          <input
            className="py-4 px-6 md:p-6 w-full border rounded-xl"
            type="number"
            defaultValue={1}
            placeholder="party size"
          />
          <button className="py-4 px-6 md:p-6 text-white font-bold bg-red-500 w-full rounded-xl">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
