/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Pagination from "../UI/Pagination.jsx";
import MenuCategory from "../UI/MenuCategory.jsx";
import MenuItem from "../UI/MenuItem.jsx";
import { useFood } from "../../contexts/FoodContext.jsx";

function Menu() {
  const [category, setCategory] = useState("all");
  const [activePage, setActivePage] = useState(1);
  const [foodList, setFoodList] = useState(null);

  const { getAllFood } = useFood();

  useEffect(() => {
    const fetchFood = async () => {
      const data = await getAllFood();

      setFoodList(data);
    };

    fetchFood();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 bg-[#F9F9F9] p-20">
      <h2 className="text-5xl font-bold">Our Menu</h2>

      <MenuCategory setCategory={setCategory} category={category} />

      <div className="flex max-w-[1000px] flex-wrap items-center justify-center gap-4">
        {foodList &&
          foodList.map((food) => <MenuItem key={food._id} food={food} />)}
      </div>

      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default Menu;
