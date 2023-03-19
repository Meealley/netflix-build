import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
// import redux from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
