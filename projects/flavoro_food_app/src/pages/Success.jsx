import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

export const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className="h-screen py-8 px-6 place-items-center flex flex-col justify-center">
      {loading ? (
        <PropagateLoader color="#22c55e" />
      ) : (
        <>
          <h2 className="text-xl font-semibold">Order Successful!</h2>
          <p className="text-lg">Your order has been successfully placed</p>
        </>
      )}
    </section>
  );
};
