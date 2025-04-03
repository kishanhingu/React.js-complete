import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>H.K.TECHNICAL</h1>
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="nav-menu">
            <button onClick={handleButtonToggle}>
              {showMenu ? <IoMdClose /> : <IoIosMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
