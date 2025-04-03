import { Cart } from "../components/UI/Cart";
import { CategoryMenu } from "../components/UI/CategoryMenu";
import { FoodItem } from "../components/UI/FoodItem";

export const Home = () => {
  return (
    <section className="py-8 px-6 place-items-center">
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </section>
  );
};
