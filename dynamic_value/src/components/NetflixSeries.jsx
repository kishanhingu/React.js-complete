// * Dynamic Value = function ni ander variable define karvama aave chhe. aa veriable ni value dynamical JSX na code get kari sakay chhe.

const NetflixSeries = () => {
  // Variable asign
  const webSeriesName = "Sacred Games";
  // const rating = 8.5;
  const summary =
    "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.";

  const Starring = () => {
    const straName = "Saif Ali Khan, Nawazuddin Siddiqui, Pankaj Tripathi";
    return straName;
  };

  return (
    <div>
      <div>
        <img src="../public/sacred Games.jpg" width="40%" />
      </div>
      {/* get value from variable */}
      <h2>Name : {webSeriesName}</h2>

      {/* Expressions */}
      <h3>Rating : {3 + 5.5}</h3>

      <p>Summary : {summary}</p>

      {/* Function call get value */}
      <p>Starring : {Starring()}</p>
    </div>
  );
};

// ? 1 :- Default export :
export default NetflixSeries;

// ? 2:- Named export
export const Header = () => {
  return <p>Its Header</p>;
};
