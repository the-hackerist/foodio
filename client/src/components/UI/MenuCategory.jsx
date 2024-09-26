/* eslint-disable react/prop-types */
const activeCategoryStyle = "text-white bg-red-500";

function MenuCategory({ setCategory, category }) {
  return (
    <ul className="mt-4 flex flex-wrap items-center gap-6 text-lg">
      <li onClick={() => setCategory("all")}>
        <button
          className={`${
            category === "all" ? activeCategoryStyle : "border"
          } rounded-lg p-4 lg:min-w-[150px]`}
        >
          All category
        </button>
      </li>

      <li onClick={() => setCategory("dinner")}>
        <button
          className={`${
            category === "dinner" ? activeCategoryStyle : "border"
          } rounded-lg p-4 lg:min-w-[150px]`}
        >
          Dinner
        </button>
      </li>

      <li onClick={() => setCategory("lunch")}>
        <button
          className={`${
            category === "lunch" ? activeCategoryStyle : "border"
          } rounded-lg p-4 lg:min-w-[150px]`}
        >
          Lunch
        </button>
      </li>

      <li onClick={() => setCategory("dessert")}>
        <button
          className={`${
            category === "dessert" ? activeCategoryStyle : "border"
          } rounded-lg p-4 lg:min-w-[150px]`}
        >
          Dessert
        </button>
      </li>

      <li onClick={() => setCategory("drink")}>
        <button
          className={`${
            category === "drink" ? activeCategoryStyle : "border"
          } rounded-lg p-4 lg:min-w-[150px]`}
        >
          Drink
        </button>
      </li>
    </ul>
  );
}

export default MenuCategory;
