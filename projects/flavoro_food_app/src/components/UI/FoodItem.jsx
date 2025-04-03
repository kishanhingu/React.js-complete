import { useSelector } from "react-redux";
import foodData from "../../API/foodData.json";
import { FoodSingleItem } from "./FoodSingleItem";

export const FoodItem = () => {
  const selectedCategory = useSelector(
    (state) => state.categoryReducer.category
  );

  const search = useSelector((state) => state.searchReducer.search);

  const handleFoodCategory = foodData.filter((curFood) => {
    if (selectedCategory === "All") {
      if (search === "") {
        return curFood;
      } else {
        return curFood.name.toLowerCase().includes(search.toLowerCase());
      }
    } else {
      return (
        selectedCategory === curFood.category &&
        curFood.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-8 gap-6">
      {handleFoodCategory.map((curFood) => {
        return <FoodSingleItem key={curFood.id} curFood={curFood} />;
      })}
    </div>
  );
};
