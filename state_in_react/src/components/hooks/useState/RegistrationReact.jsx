import { useState } from "react";
import "./Registration.css";

export const RegistrationFormReact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((preveious) => ({ ...preveious, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <>
      {/* marginTop: "30px" */}
      <section className="summary" style={{ textAlign: "center" }}>
        <p>
          Hello, my name is{" "}
          <span>
            {user.firstName} {user.lastName}
          </span>
          .My email address is <span>{user.email}</span> and my phone number is{" "}
          <span>{user.phoneNumber}</span>.
        </p>
      </section>

      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account!</p>

          <div className="input-field">
            <label htmlFor="firstName">
              <b>First Name</b>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter firstname"
              required
              value={user.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter lastName"
              required
              value={user.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              value={user.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={user.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="phone">
              <b>Phone Number</b>
            </label>
            <input
              type="phone"
              name="phone"
              placeholder="9876543211"
              required
              value={user.phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
