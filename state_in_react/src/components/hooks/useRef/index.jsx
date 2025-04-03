import "./index.css";
import { useRef } from "react";
export const UseRef = () => {
  // JavaScript Ways
  //   const usernameForm = document.getElementById("username");
  //   const passwordForm = document.getElementById("password");

  //   React Ways
  const username = useRef(null);
  const password = useRef(null);

//   console.log(username.current);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="text" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};
