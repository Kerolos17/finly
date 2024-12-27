"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./redux-system/store";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  );
}
