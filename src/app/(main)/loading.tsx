import { Stack } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Loading...
    </Stack>
  );
};

export default loading;
