import { memo, useRef } from "react";
import "./index.css";
const Count = ({ biodata }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="MemoCount">
      <p>Nothing changed here but Ive now rendered:</p>
      <span>{renderCount.current++} time(s)</span>
      <p>My name is {biodata.name}</p>
    </div>
  );
};
export default memo(Count);
