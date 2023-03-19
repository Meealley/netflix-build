import axios from "../../axios";
import React, { useState, useEffect } from "react";
import "./Banner.css";
import requests from "../../Request";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movies);

  const truncateHandler = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + ". . ." : string;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movies?.name || movies?.title || movies?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_desc">
            {truncateHandler(movies?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
};

export default Banner;
