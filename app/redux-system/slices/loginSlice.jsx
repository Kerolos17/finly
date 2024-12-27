import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: typeof window !== "undefined" ? localStorage.getItem("userToken") : null,
  error: null,
  isLoading: false,
  userData: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("userData")) : null,
};

// Create the login slice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userToken = action.payload.token;
      state.userData = action.payload.userData;
      if (typeof window !== "undefined") {
        localStorage.setItem("userToken", action.payload.token);
        localStorage.setItem("userData", JSON.stringify(action.payload.userData));
      }
      state.error = null;
      state.isLoading = false;
    },
    setLogout: (state) => {
      state.userToken = null;
      state.userData = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userData");
      }
      state.error = null;
      state.isLoading = false;
    },
    setLoginError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLogin, setLogout, setLoginError, setLoading } = loginSlice.actions;
export const login = loginSlice.reducer;
