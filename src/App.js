import React, { useEffect } from "react";

import "./App.css";

import HomeScreen from "./Components/Home/HomeScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import SignUp from "./Components/SignUp/SignUp";
import { auth } from "./Components/SignUp/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Components/Profile/ProfileScreen";

const App = (props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const storeUserInfo = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logout
        dispatch(logout());
      }
    });

    return storeUserInfo;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          // <Routes>
          //   <Route path="/login" index element={<SignUp />}></Route>
          // </Routes>
          <SignUp />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route exact path="/" element={<HomePage />}></Route>

            <Route path="/browse" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
