import { configureStore } from "@reduxjs/toolkit";
import {login} from "./slices/loginSlice";

const store = configureStore({
  reducer: { login, },
});

export default store;
