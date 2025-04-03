// * First ways: 1
// export const App = () => {
//   return <h1>Hello, Kishan Hingu! Welcome to React V19 Series.</h1>;
// };

// * Second ways: 2
// import React from "react";

// export const App = () => {
//   return React.createElement(
//     "h1",
//     null,
//     "Hello, Kishan Hingu! Welcome to React V19 Series."
//   );
// };

// * Create Netflix card
export const App = () => {
  return (
    <div>
      <div>
        <img src="../public/qot.jpg" alt="qot img" />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Ratings: 8.2</h3>
      <p>
        Sumamry: Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
        both at home and at work. But upon deciding his future, Hyun-woo pays a
        visit to his family.
      </p>
    </div>
  );
};
