import React, { useEffect, useState } from "react";
import axios from "../axios.js";
import './Row.css';

const baseImgUrl = "https://image.tmdb.org/t/p/original"; 

function Row({ title, fetchUrl, isLargoeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies && movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargoeRow && "row_posterLarge"}`}
            src={`${baseImgUrl}${isLargoeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
          ))}
      </div>
    </div>
  );
}

export default Row;