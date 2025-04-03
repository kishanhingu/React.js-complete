import "./CleanUp.css";
import { useEffect, useState } from "react";

export const CleanUp = () => {
  const [conut, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on YouTube</p>
        <div className="odometer" id="odometer">
          {conut}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
