// import "./App.css";
// export const App = () => {
//   return (
//     <section className="container dark-light-section">
//       <h1>Dark Light Mode Website</h1>
//       <p>Hello!! My React v19 Fans</p>
//       <button className="btn">Switch to Light Mode</button>
//     </section>
//   );
// };

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  //   Define handleToggleTheme
  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <section
      className={`container dark-light-section ${
        theme === "dark" ? "dark-bg" : "light-bg"
      }`}
    >
      <h1>Dark Light Mode Website</h1>
      <p>Hello!! My React v19 Fans 👍</p>
      <button className="btn" onClick={handleToggleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </section>
  );
};
