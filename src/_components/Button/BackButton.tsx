"use client";
import { ArrowBackIosNew } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIosNew />}
      onClick={() => router.back()}
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        fontWeight: 600,

        borderRadius: "30px",
        textTransform: "none",
        px: 5,
        py: 1,
        my: 4,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
        "&:hover": {
          background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
          boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
        },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
