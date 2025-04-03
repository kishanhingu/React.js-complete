import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordian = () => {
  const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  //   handleButton
  const handleButton = (id) => {
    setActiveID((prev) => (prev === id ? false : id));
  };
  return (
    <>
      <h1>The Accordian</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ
              key={curElem.id}
              curElem={curElem}
              isActive={activeID === curElem.id}
              onToggle={() => handleButton(curElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
