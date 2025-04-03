//* State Syntax *//
// const [count, setCount] = useState(0);

// *useState import
import { useState } from "react";

export const State = () => {
  // let value = 0;
  // const handleButtonClick = () => {
  //   value++;
  //   console.log(value);
  // };
  // console.log(useState());
  console.log("State Components Rendered");

  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
      </section>
      <ChildComponents />
    </>
  );
};
const ChildComponents = () => {
  console.log("Child Components Rendered");
  return (
    <div className="main-div">
      <h2>Child-Components</h2>
    </div>
  );
};
