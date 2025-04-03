// import "./Netflix.css";

import style from "./Netflix.module.css";

import styled from "styled-components";

export const SeriesCard = (props) => {
  // console.log(props);
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    props.data;

  //! Inline CSS
  // const btn_style = {
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // };

  //! styled-components Useing Object
  // const WatchBtn = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  //! styled-components Useing Template litrels
  const WatchBtn = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;

  const ratingClass = rating >= 8.5 ? style.super_hit : style.average;

  return (
    // <li className="series-card">
    <li className={style["series-card"]}>
      <div>
        <img src={img_url} alt={id} width="40%" height="40%" />
      </div>
      <div className={style["card-content"]}>
        <h2>Name : {name}</h2>
        <h3>
          Rating :
          <span className={`${style.rating}  ${ratingClass}`}>{rating}</span>
        </h3>
        <p>Summary : {description}</p>
        <p>Genre : {genre.join(",")}</p>
        <p>Cast : {cast.join(",")}</p>
        <a href={watch_url} target="_blank">
          {/* //! Inline Css */}
          {/* <button style={btn_style}>Watch Now</button> */}

          {/* //! styled-components Use Object*/}
          {/* <WatchBtn>Watch Now</WatchBtn> */}

          {/* //! styled-components Use Template litrels*/}
          <WatchBtn rating={rating}>Watch Now</WatchBtn>
        </a>
      </div>
    </li>
  );
};
