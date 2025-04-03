// ? React.js Fragment :
//! => Jyare App.jsx ma jyare parent <div></div> return kare chhe tyare DOM tree ma ak extra <div ni ander component no code jay chhe aa Extra div ne remove karvane React Fragment kahe chhe.
//* => React,js ma Component multiple elements return kartu nathi aa multiple elements ne parent <div></div> aapi return karvama aave chhe & te ak parent <div></div> return kare chhe.

// import { Fragment } from "react";

// import React from "react";

// * => React.js ma jyare Array ni ander multiple parent <div></div> return karvama aave chhe.
export const App = () => {
  // * 1
  // return [<NetflixSeries key="1" />, <NetflixSeries key="2" />];

  // * 2
  // return (
  //   <React.Fragment>
  //     <NetflixSeries />
  //     <NetflixSeries />
  //   </React.Fragment>
  // );

  // * 3
  // return (
  //   <Fragment>
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //   </Fragment>
  // );

  // * 4
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="../public/qot.jpg" />
      </div>
      <h2>Name : Queen of Tears</h2>
      <h3>Ratings: 8.2</h3>
      <p>
        Sumamry: Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
        both at home and at work. But upon deciding his future, Hyun-woo pays a
        visit to his family.
      </p>
    </div>
  );
};
