export const MovieCard = ({ movie }) => {
  const { Poster, Title, Type, Year } = movie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} alt={Title} className="poster" />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h3>Title : {Title}</h3>
            <p>Type : {Type}</p>
            <p>Year : {Year}</p>
            <a href="/">
              <button className="ticket__buy-btn">Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
