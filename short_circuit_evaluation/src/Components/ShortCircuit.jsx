import { useState } from "react";
import "./Hooks.css";
export const ShortCircuitExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
      {/* && operator */}
      {isLoggedIn && <p>You are logged in!</p>}
      {/* || operator */}

      {/* Another example of short circuit evaluation */}
      {user ? `Hello ${user}` : "Plz Set User🙏"}

      <div className="btn">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={() => setUser("Kishan Hingu")}>Set User</button>
        <button onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  );
};
