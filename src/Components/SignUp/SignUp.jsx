import React, { useRef } from "react";
import Footer from "../HomePage/Footer";
import "./SignUp.css";
import { auth } from "./firebase";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="header">
        <nav>
          <div className="nav_contents">
            <img
              className="nav_logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="netflix"
            />
          </div>
        </nav>

        <div className="signup">
          <form onSubmit={submitFormHandler}>
            <h1>sign in</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button onClick={signin} type='submit'>Sign In</button>

            <div className="remb">
              <div className="rmb">
                <input type="checkbox" />
                <small>Remember me</small>
              </div>
              <div className="rmb">
                <small>Need help?</small>
              </div>
            </div>

            <div className="newto_netflix">
              <p>
                New to Netflix?{" "}
                <span style={{ color: "#fff", cursor : "pointer" }} onClick={register}>
                  Sign Up Now
                </span>
              </p>
            </div>

            <div
              className="google_frm"
              style={{ marginTop: "20px", textAlign: "left" }}
            >
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </small>
            </div>
          </form>
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
};

export default SignUp;
