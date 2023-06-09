import React from "react";
import "./HomeScreen.css";
import Navigation from "./Navigation/Navigation";
import Banner from "../Banner/Banner";
import requests from "../../Request";
import Row from "../Row/Row";
import Footer from "../HomePage/Footer";

const HomeScreen = () => {
  return (
    <>
      <div className="homescreen">
        <Navigation />
        <Banner />

        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top-Rated Movies" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
