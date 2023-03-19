import React, { useState, useEffect } from "react";
// import DropdownMenu from "./DropdownMenu";
import { Link, useHref } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  // const [open, setOpen] = useState(false);
  const history = useHref();

  const [isShowing, setIsShowing] = useState(false);
  const transitionHandler = () => {
    if (window.scrollY > 100) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  };

  // const openHandler = () => {
  //   setOpen((prev) => !prev);
  // };

  const historyHandler = () => {
    history.push("/profile");
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHandler);
    return () => {
      window.removeEventListener("scroll", transitionHandler);
    };
  }, []);

  return (
    <div className={`nav ${isShowing && "nav_black"}`}>
      <div className="nav_contents">
        <Link to="/">
          <img
            className="nav_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix"
          />
        </Link>

        <Link to="/profile">
          <img
            className="nav_avatar"
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt="netflix avatar"
            onClick={historyHandler}
          />
        </Link>
      </div>
      {/* {open && <DropdownMenu />} */}
    </div>
  );
};

export default Navigation;
