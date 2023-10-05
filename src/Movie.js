import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = ({ match }) => {
  const [movie, setMovie] = useState({});
  const { params } = match;

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=cc1f46cf&i=${params.id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Plot: {movie.Plot}</p>
      <p>Director: {movie.Director}</p>
    </div>
  );
};

export default Movie;
