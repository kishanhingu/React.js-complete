import { useState, useEffect } from "react";

export const ReactUseEffect = () => {
  // * 2 Exmaple mate
  //   const [count, setCount] = useState(0);
  // * 3 Exmaple mate
  const [date, setDate] = useState(0);

  // * 2 Exmaple mate
  //   useEffect(() => {
  //     console.log("count value : ", count);
  //   }, [count]);

  // * 3 Exmaple mate
  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    // * 1 Example
    // <div>
    //   <h1>Hello, useEffect!</h1>
    // </div>

    // * 2 Example
    // <div className="container">
    //   <h1>useEffect Hook</h1>
    //   <p>Count : {count}</p>
    //   <button onClick={() => setCount(count + 1)}>Increment</button>
    // </div>

    // * 3 Example
    <div>
      <h1>Date : {date}</h1>
    </div>
  );
};
