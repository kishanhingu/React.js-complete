import { useState } from "react";

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];
export const State_practice = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  return (
    <>
      <div className="main-div">
        <h1>Users List</h1>
        <ul>
          {users.map((curEle, index) => {
            return (
              <li key={index}>
                {curEle.name} - {curEle.age} year old
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
