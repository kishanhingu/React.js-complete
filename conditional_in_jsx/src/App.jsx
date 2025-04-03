// * Conditional_in_JSX : conditional in jsx ma conditional operator or bija condition vala operator no use thay chhe.

export const App = () => {
  return (
    <>
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

const NetflixSeries = () => {
  const webSeriesName = "Sacred Games";
  const rating = 8.5;
  const summary =
    "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.";
  const starName = "Saif Ali Khan, Nawazuddin Siddiqui, Pankaj Tripathi";

  let age = 17;
  //* 3 mate use thayu chhe.
  // let canWatch = "You are not watching this series";
  // if (age >= 18) {
  //   canWatch = "Watch now";
  // }
  //* 4 mate function
  const canWatch = () => {
    if (age >= 18) return "Watch now";
    return "You are not watching this series";
  };
  {
    /* conditional_in_jsx start here */
  }
  //* 1 : Using if_else Condition
  // if (age >= 18) {
  //   return (
  //     <div>
  //       <div>
  //         <img src="../public/Sacred Games.jpg" width="40%" />
  //       </div>
  //       <h2>Name : {webSeriesName}</h2>
  //       <h3>Rating : {rating}</h3>
  //       <p>Summary : {summary}</p>
  //       <p>Starring : {starName}</p>
  //       <button>Watch Now</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <div>
  //       <img src="../public/Sacred Games.jpg" width="40%" />
  //     </div>
  //     <h2>Name : {webSeriesName}</h2>
  //     <h3>Rating : {rating}</h3>
  //     <p>Summary : {summary}</p>
  //     <p>Starring : {starName}</p>
  //     <button>You are not watching this series  </button>
  //   </div>
  // );

  //* 2 : Using ternory operator
  // return (
  //   <div>
  //     <div>
  //       <img src="../public/Sacred Games.jpg" width="40%" />
  //     </div>
  //     <h2>Name : {webSeriesName}</h2>
  //     <h3>Rating : {rating}</h3>
  //     <p>Summary : {summary}</p>
  //     <p>Starring : {starName}</p>
  //     <button>
  //       {age >= 18 ? "Watch now" : "You are not watching this series "}
  //     </button>
  //   </div>
  // );

  //* 3 : Variable value by default
  // return (
  //   <div>
  //     <div>
  //       <img src="../public/Sacred Games.jpg" width="40%" />
  //     </div>
  //     <h2>Name : {webSeriesName}</h2>
  //     <h3>Rating : {rating}</h3>
  //     <p>Summary : {summary}</p>
  //     <p>Starring : {starName}</p>
  //     <button>{canWatch}</button>
  //   </div>
  // );

  //* 4 : Using function
  return (
    <div>
      <div>
        <img src="../public/Sacred Games.jpg" width="40%" />
      </div>
      <h2>Name : {webSeriesName}</h2>
      <h3>Rating : {rating}</h3>
      <p>Summary : {summary}</p>
      <p>Starring : {starName}</p>
      <button>{canWatch()}</button>
    </div>
  );
};
