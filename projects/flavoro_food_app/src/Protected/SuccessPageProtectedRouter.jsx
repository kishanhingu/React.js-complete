import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const SuccessPageProtectedRouter = ({ element }) => {
  const cartItem = useSelector((state) => state.cartReducer.cart);

  return cartItem.length > 0 ? element : <Navigate to="/" />;
};
