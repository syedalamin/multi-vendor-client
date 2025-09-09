/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function MuiAutoSlider({
  data,
  mainSlide,
  subSlide,
  btnSlide,
  height,
}: {
  data: any;
  mainSlide: any;
  subSlide: any;
  btnSlide: any;
  height: any;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  useEffect(() => {
    if (maxSteps > 0) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % maxSteps);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [maxSteps]);

  if (maxSteps === 0) {
    return <Box>No images found</Box>;
  }

  return (
    <Box position="relative" sx={{ overflow: "hidden" }}>
      <Box
        component="img"
        src={data[activeStep]?.imgPath}
        alt={data[activeStep]?.label}
        sx={{
          ...height,
          display: "block",
          width: "100%",
          objectFit: "cover",
          filter: "brightness(0.7)",
        }}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        textAlign="left"
        p={{ xs: 3, sm: 6 }}
      >
        <Box mb={2}>
          <Typography
            variant="subtitle1"
            component={"p"}
            sx={{
              ...subSlide,
            }}
          >
            {data[activeStep]?.subTitle}
          </Typography>

          <Typography sx={{ ...mainSlide }}>
            {data[activeStep]?.title}
          </Typography>
        </Box>

        <Typography
          component={Link}
          href="/product"
          sx={{
            ...btnSlide,
          }}
        >
          Shop Now
        </Typography>
      </Box>
    </Box>
  );
}
