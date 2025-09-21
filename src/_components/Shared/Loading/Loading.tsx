import { Stack } from "@mui/material";
import React from "react";

const Loading = () => {
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

export default Loading;
