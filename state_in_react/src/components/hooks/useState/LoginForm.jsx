import { useState } from "react";
import "./Registration.css";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    console.log(userData);
  };
  return (
    <div>
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
