import React from "react";
import "./HomePage.css";
import HomeFeatures from "./HomeFeatures";
import Footer from "./Footer";
// import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";
// import SignUp from "../SignUp/SignUp";

const HomePage = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);
  // const ctx = useContext(AuthContext);

  return (
    <div className="homepage">
      <div className="header">
        <nav>
          <div className="nav_contents">
            <img
              className="nav_logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="netflix"
            />
            <div className="nav_button">
              <button>
                <Link
                  to="/browse"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Browse
                </Link>
              </button>
            </div>
          </div>
        </nav>

        <div className="header_content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel Anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="email_signup">
            <input type="email" placeholder="Email Address" required />
            <Link to="/">
              <button type="submit">Get Started</button>
            </Link>
          </form>
        </div>
      </div>

      <HomeFeatures />

      <Footer />
    </div>
  );
};

export default HomePage;
