import React, { useState } from "react";
import AuthContext from "./auth-context";
// import { auth } from "../Components/SignUp/firebase";

const AuthContextProvider = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

//   useEffect(() => {
//     const storeUserInfo = auth.onAuthStateChanged((userAuth) => {
//       if (userAuth) {
//         setIsSignedIn(true);
//         console.log(userAuth);
//       } else {
//         //log out
//         setIsSignedIn(false)
//       }
//     });
//     return storeUserInfo;
//   }, []);

  const signedInHandler = () => {
    setIsSignedIn(true);
  };
  const signedOutHandler = () => {
    setIsSignedIn(false)
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isSignedIn: isSignedIn,
          onSignIn: signedInHandler,
          onLogout : signedOutHandler
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
