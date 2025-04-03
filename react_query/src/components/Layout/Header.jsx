import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Navbar ko band karne ke liye
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              <p>reactquery</p>
            </NavLink>
          </div>

          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleLinkClick}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/trad" onClick={handleLinkClick}>
                  FetchOld
                </NavLink>
              </li>
              <li>
                <NavLink to="/rq" onClick={handleLinkClick}>
                  FetchRQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/infinite" onClick={handleLinkClick}>
                  InfiniteScroll
                </NavLink>
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
