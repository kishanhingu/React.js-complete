import { useState } from "react";

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];
export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);
  //? DerivedState Variable : jema useState ni help thi variable banav vama aave chhe.
  const totalUsers = users.length;
  const userAgeAverage =
    users.reduce((accum, user) => accum + user.age, 0) / totalUsers;

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
        <h2>Total Users : {totalUsers}</h2>
        <h2>Users Age Average : {userAgeAverage}</h2>
      </div>
    </>
  );
};
