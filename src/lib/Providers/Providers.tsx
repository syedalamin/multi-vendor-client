'use client'
import { store } from "@/redux/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { theme } from "../Theme/theme";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (

    <Provider store={store}>
      <CssBaseline/>
      <Toaster/>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
