import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeCart,
} from "../../features/cart/CartSlice";
import toast from "react-hot-toast";

export const CartItem = ({ curCart }) => {
  const { img, name, price, qty } = curCart;

  const dispatch = useDispatch();

  return (
    <div className="p-2 rounded-md mt-3 flex items-center gap-2 shadow-xl border border-gray-300">
      <img src={img} alt={name} className="w-[50px] h-[50px]" />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-600 text-lg">{name}</h2>
          <MdDelete
            className="text-gray-600 cursor-pointer text-lg"
            onClick={() => {
              dispatch(removeCart(curCart));
              toast.success(`Remove ${name}`);
            }}
          />
        </div>
        <div className="flex justify-between items-center font-extrabold">
          <span className="text-green-500 text-lg">{`₹${price}`}</span>
          <div className="flex justify-center items-center gap-2 text-lg">
            <FaPlus
              className="border-2 border-gray-600 text-gray-600 p-1 text-xl rounded-lg 
          hover:text-white hover:bg-green-500 hover:border-none cursor-pointer transition-all ease-linear"
              onClick={() => dispatch(incrementQty(curCart))}
            />
            <span>{qty}</span>
            <FaMinus
              className="border-2 border-gray-600 text-gray-600 p-1 text-xl rounded-lg 
          hover:text-white hover:bg-green-500 hover:border-none cursor-pointer transition-all ease-linear"
              onClick={() => qty > 1 && dispatch(decrementQty(curCart))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
