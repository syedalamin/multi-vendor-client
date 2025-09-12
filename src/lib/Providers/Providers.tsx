"use client";
import { store } from "@/redux/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { theme } from "../Theme/theme";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <CssBaseline />
        <Toaster position="top-center" richColors />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
