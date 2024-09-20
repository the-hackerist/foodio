import food from "../assets/food-2.jpg";

function Reservation() {
  return (
    <div className="py-20">
      <div className="h-screen flex items-center justify-center gap-10">
        <div className="w-[450px] h-[550px] overflow-hidden rounded-3xl">
          <img className="object-cover" src={food} alt="restaurant image" />
        </div>

        <div className="flex flex-col items-center justify-between gap-6 h-[550px] w-[350px]">
          <h2 className="text-5xl font-bold">Book a table</h2>
          {/* date selector */}
          {/* time selector */}
          <input
            className="p-6 w-full border rounded-xl"
            type="text"
            placeholder="date"
          />
          <input
            className="p-6 w-full border rounded-xl"
            type="text"
            placeholder="time"
          />
          <input
            className="p-6 w-full border rounded-xl"
            type="number"
            placeholder="part size"
          />
          <button className="p-6 text-white font-bold bg-red-500 w-full rounded-xl">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
