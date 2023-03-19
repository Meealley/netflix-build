import React from "react";

const AuthContext = React.createContext({
  isSignedIn: false,
  onSignIn: (email, password) => {},
  onLogout : () => {}
});

export default AuthContext;
