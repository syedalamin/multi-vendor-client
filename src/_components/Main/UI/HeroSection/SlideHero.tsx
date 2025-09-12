/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";

export default function MuiAutoSlider({
  data,
  mainSlide,
  subSlide,
  btnSlide,
}: {
  data: any;
  mainSlide: any;
  subSlide: any;
  btnSlide: any;
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
      {/* Responsive Image */}
      <Box
        component="img"
        src={data[activeStep]?.imgPath}
        alt={data[activeStep]?.label}
        sx={{
          height: { xs: "300px", sm: "400px", md: "477px",   },
          display: "block",
          width: "100%",
          objectFit: "cover",
          borderRadius: "8px",
          filter: "brightness(0.7)",
          transition: "height 0.3s ease",
        }}
      />

      {/* Overlay Content */}
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
        p={{ xs: 2, sm: 3, md: 6 }}
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

        <Button
          component={Link}
          href="/product"
          endIcon={<ArrowForward />}
          variant="text"
          size="small"
          sx={{
            ...btnSlide,
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
