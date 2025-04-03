import { useMemo, useState } from "react";
import "./index.css";

// eslint-disable-next-line react/display-name
const ExpensiveComponetn = () => {
  // Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  //   useMemo()
  const total = useMemo(() => sum(), []);

  //   const total = sum();
  return <p>Sum : {total}</p>;
};

export const MemoParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="memo-section">
      <ExpensiveComponetn />
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      <p>Parent re-renders : {count}</p>
    </section>
  );
};
