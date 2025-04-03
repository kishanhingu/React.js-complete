import { IoCall } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";
import "../App.css";

import footerContact from "../Api/footerContact.json";

export const Footer = () => {
  const iconMap = {
    IoCall: <IoCall />,
    FaMapLocationDot: <FaMapLocationDot />,
    LuMailPlus: <LuMailPlus />,
  };
  return (
    <footer>
      <div className="container">
        <div className="grid grid-three-cols">
          {footerContact.map((curData) => {
            const { icon, title, details } = curData;
            return (
              <>
                <div className="footer-contact">
                  <div className="icon">{iconMap[icon]}</div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
