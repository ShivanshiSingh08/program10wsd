// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=cc1f46cf&s=avengers`)
      .then((response) => {
        setMovies(response.data.Search);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
