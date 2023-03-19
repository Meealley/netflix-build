import React from "react";
import Faq from "./Faq";
import "./HomeFeatures.css";

const HomeFeatures = () => {
  return (
    <>
      <div className="features">
        <div className="row">
          <div className="text_col">
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="img_col">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="features1"
            />
          </div>
        </div>
        <div className="row">
          <div className="img_col">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="features1"
            />
          </div>
          <div className="text_col">
            <h2>Download your shows to watch offline.</h2>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="row">
          {/* <div className="img_col">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="features1"
          />
        </div> */}
          <div className="text_col">
            <h2>Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text_col">
            <h2>Create profiles for kids.</h2>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <div className="img_col">
            <img
              src="https://occ-0-4616-1009.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt="features1"
            />
          </div>
        </div>
      </div>
      <Faq />
    </>
  );
};

export default HomeFeatures;
