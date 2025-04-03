import { useState } from "react";
import "./ToggleSwitch.css";
import { IoMdSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";

  const backgroundColor = {
    backgroundColor: isOn ? "#53c453" : "#f33f40",
  };

  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch Button
        <IoMdSwitch />
      </h1>
      <div
        className="toggle-switch"
        style={backgroundColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
