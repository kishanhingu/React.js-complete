// import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/UI/MovieCard";
import { getMovie } from "../services/GetService";

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState  (true);
  // const API =
  //   "http://www.omdbapi.com/?i=tt3896198&apikey=66e84107&s=titanic&page=1";

  const getMovieData = async () => {
    try {
      // const res = await axios.get(API);
      const res = await getMovie();
      //   console.log(res.data.Search);
      // const data = res.json();
      console.log(res);

      setMovie(res.data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.error("Error Message :- ", error.message);
      console.error("Error Status :- ", error.response.status);
      console.error("Error Message :- ", error.response.data);
      // setLoading(false);
    }
  };

  // const getMovieData = async () => {
  //   try {
  //     // const res = await axios.get(API);
  //     const res = await getMovie();
  //     console.log(res.data);
  //     // setMovie(res.data.data);
  //     // setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     console.error("Error Message :- ", error.message);
  //     console.error("Error Status :- ", error.response.status);
  //     console.error("Error Message :- ", error.response.data);
  //     // setLoading(false);
  //   }
  // };

  useEffect(() => {
    getMovieData();
  }, []);

  // useEffect(() => {
  //   getMovieData();
  // }, []);

  // console.log(movie);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <ul className="container grid grid-three-cols">
      {movie.map((curMovie) => {
        return <MovieCard key={curMovie.imdbID} movie={curMovie} />;
      })}
    </ul>
  );
};
