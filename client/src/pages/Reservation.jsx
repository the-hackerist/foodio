// import food from "../assets/food-2.jpg";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UnderConstruction from "../components/UI/UnderConstruction";

function Reservation() {
  return <UnderConstruction />;

  // return (
  //   <div className="pt-20">
  //     <div className="flex flex-row items-center justify-center gap-10 p-10 py-20 pt-20">
  //       <div className="hidden h-[550px] w-[450px] overflow-hidden rounded-3xl lg:inline-block">
  //         <img className="object-contain" src={food} alt="restaurant image" />
  //       </div>

  //       <div className="flex flex-col gap-10 text-center md:h-[550px] md:w-[350px] md:justify-between md:text-start">
  //         <h2 className="text-center text-5xl font-bold">Book a table</h2>

  //         <DatePicker
  //           wrapperClassName="w-full"
  //           placeholderText="select date and time"
  //           customInput={
  //             <input className="w-full rounded-xl border px-6 py-4 md:p-6" />
  //           }
  //         />

  //         <input
  //           className="w-full rounded-xl border px-6 py-4 md:p-6"
  //           type="number"
  //           placeholder="party size"
  //         />

  //         <button className="w-full rounded-xl bg-red-500 px-6 py-4 font-bold text-white md:p-6">
  //           Book now
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Reservation;
