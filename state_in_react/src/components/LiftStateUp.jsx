import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponents inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponents inputValue={inputValue} />
    </>
  );
};

const InputComponents = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponents = ({ inputValue }) => {
  return <p>The Current input value is : {inputValue}</p>;
};
