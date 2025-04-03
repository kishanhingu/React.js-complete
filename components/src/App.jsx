// * Components :- Components atle JS no ak function banav vama aave chhe and tene ak HTML na Element rupe Call karva ma aave chhe tene Components kahe chhe. 

export const App = () => {
  return (
    <div>
      {/*  Components Call */}
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

// export default App;

// Define Components Function
const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="../public/images/qot.jpg" alt="qot img" />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Ratings: 8.2</h3>
      <p>
        Sumamry: Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
        both at home and at work. But upon deciding his future, Hyun-woo pays a
        visit to his family.
      </p>
      <hr />
    </div>
  );
};
