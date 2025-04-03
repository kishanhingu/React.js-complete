import { useState } from "react";

export const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>useState Challenge</h1>

      <p>
        Count : <span> {count} </span>
      </p>

      <div>
        <label>
          Step :{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <button onClick={handleIncrement} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
