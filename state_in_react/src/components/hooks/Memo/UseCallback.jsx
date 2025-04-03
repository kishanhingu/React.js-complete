import { memo, useCallback, useState } from "react";
import "./UseCallback.css";

export const UseCallback = () => {
  const [count, setCount] = useState(0);
  //   const increment = () => {
  //     console.log("rander Increment");
  //     setCount((prev)=>prev + 1);
  //   };

  const increment = useCallback(() => {
    console.log("rander Increment");
    setCount((prev) => prev + 1);
  }, []);

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  const decrement = useCallback(() => {
    console.log("rander decrement");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="useCallback-section">
      <h1>Count : {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

// Button Components
// eslint-disable-next-line react/display-name
const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);

  return (
    <button
      className={`useCallback-btn ${
        children === "Increment"
          ? "useCallback-Increment"
          : "useCallback-Decrement"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
