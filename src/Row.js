import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.orginal_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            // src={`${base_url}${movie.poster_path}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
