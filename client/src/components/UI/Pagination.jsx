/* eslint-disable react/prop-types */
import { IoIosArrowBack } from "react-icons/io";

function Pagination({ activePage, setActivePage }) {
  const activePageStyle = "text-white bg-black";

  return (
    <div className="flex items-center justify-center gap-3">
      <IoIosArrowBack className="cursor-pointer" />
      <span
        onClick={() => setActivePage(1)}
        className={`${
          activePage === 1 ? activePageStyle : "bg-slate-200"
        } flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm text-xs font-semibold`}
      >
        1
      </span>
      <span
        onClick={() => setActivePage(2)}
        className={`${
          activePage === 2 ? activePageStyle : "bg-slate-200"
        } flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm text-xs font-semibold`}
      >
        2
      </span>
      <span
        onClick={() => setActivePage(3)}
        className={`${
          activePage === 3 ? activePageStyle : "bg-slate-200"
        } flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm text-xs font-semibold`}
      >
        3
      </span>
      <span className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm bg-slate-200 text-xs font-semibold">
        ...
      </span>
      <IoIosArrowBack className="rotate-180 cursor-pointer" />
    </div>
  );
}

export default Pagination;
