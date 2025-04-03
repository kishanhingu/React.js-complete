import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CartItem } from "./CartItem.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const data = useSelector((state) => state.cartReducer.cart);
  const totalQty = data.reduce((accu, item) => accu + item.qty, 0);
  const totalPrice = data.reduce(
    (total, items) => total + items.qty * items.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] h-full bg-white p-5 rounded-xl ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-linear`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">My order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="p-1 text-xl font-bold text-gray-600 border-2 border-gray-600 rounded-lg cursor-pointer hover:text-red-300 hover:border-red-300"
          />
        </div>

        {data.length > 0 ? (
          data?.map((curCart) => {
            return <CartItem key={curCart.id} curCart={curCart} />;
          })
        ) : (
          <h1 className="mt-4 text-xl font-semibold text-center">
            Your Cart is empty
          </h1>
        )}

        {/* <div className="absolute bottom-5"> */}
        <div className="mt-5">
          <p className="text-base font-bold text-gray-800">Items: {totalQty}</p>
          <p className="text-base font-bold text-gray-800">
            Total Amount: {totalPrice}
          </p>
          <hr className="my-3" />
          <button
            onClick={() => navigate("/success")}
            className="w-full px-3 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>

      {activeCart || (
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`fixed p-3 text-5xl text-white bg-green-500 shadow-lg rounded-2xl bottom-5 right-5 ${
            totalQty && "animate-bounce transition-all"
          }`}
        />
      )}
    </>
  );
};
