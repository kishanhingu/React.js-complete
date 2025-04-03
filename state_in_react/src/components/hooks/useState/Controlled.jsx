import { useState } from "react";

export const Controlled = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //     const dataValue = document.querySelector("#inputName").value;
    //     console.log(dataValue);
    console.log(name);
  };
  return (
    <section>
      <h1>Controlled Components</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name :{" "}
          <input
            id="inputName"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
