import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState Hooks!</h1>
      <br />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
