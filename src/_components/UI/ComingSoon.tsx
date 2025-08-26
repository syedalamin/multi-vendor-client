import { Stack, Typography } from "@mui/material";
import React from "react";

const ComingSoon = ({ name }: { name: string }) => {
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
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "4rem" },
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "4px",
          textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        🚀 {name} is Coming Soon 🚀
      </Typography>
    </Stack>
  );
};

export default ComingSoon;
