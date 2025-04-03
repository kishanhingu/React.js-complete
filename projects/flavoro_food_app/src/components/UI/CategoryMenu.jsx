import { useEffect, useState } from "react";
import foodData from "../../API/foodData.json";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../features/category/CategorySlice";

export const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(foodData.map((curFood) => curFood.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categoryReducer.category
  );

  return (
    <>
      <h3 className="text-xl font-bold">Find the best food</h3>
      <div className="flex justify-center items-center gap-1 lg:gap-3 mt-7">
        <button
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 ${
            selectedCategory === "All" &&
            "bg-green-500 text-white -translate-y-2"
          }`}
          onClick={() => dispatch(setCategory("All"))}
        >
          All
        </button>
        {categories.map((curCategory, index) => {
          return (
            <button
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 ${
                selectedCategory === curCategory &&
                "bg-green-500 text-white -translate-y-2"
              }`}
              onClick={() => dispatch(setCategory(curCategory))}
            >
              {curCategory}
            </button>
          );
        })}
      </div>
    </>
  );
};
