import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";
import toast, { Toaster } from "react-hot-toast";

export const FoodSingleItem = ({ curFood }) => {
  const { id, img, name, price, desc, rating } = curFood;

  const dispatch = useDispatch();

  const handleToast = (itemName) => toast.success(`${itemName} added to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white p-5 flex flex-col gap-4 rounded-lg shadow-xl font-semibold">
        <img
          src={img}
          alt={name}
          className="hover:scale-90 transition-all duration-300 w-auto h-[280px] lg:h-[180px] xl:h-[220px]"
        />
        <div className="flex items-center justify-between text-xl font-semibold">
          <p className="font-bold">{name}</p>
          <p className="text-green-500">{`₹${price}`}</p>
        </div>
        <p className="text-sm">{desc.slice(0, 100)}...</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-between gap-1">
            <FaStar className="text-yellow-500" /> {rating}
          </span>
          <button
            className="text-sm py-1 px-2 bg-green-500 text-white hover:bg-green-600 rounded-lg"
            onClick={() => {
              dispatch(
                addToCart({ id, img, name, price, desc, rating, qty: 1 })
              );
              handleToast(name);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
