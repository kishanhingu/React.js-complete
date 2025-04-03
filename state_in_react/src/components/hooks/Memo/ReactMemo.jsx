import { useMemo, useState } from "react";
import "./index.css";
import Count from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);
  // const bioData = {
  //   name: "Kishan",
  //   age: 19,
  // };

  const bioData = useMemo(() => {
    return { name: "Kishan", age: 19 };
  }, []);

  return (
    <>
      <div className="container memo-section">
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <Count biodata={bioData} />
    </>
  );
};
