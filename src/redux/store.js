import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postSlice"

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
