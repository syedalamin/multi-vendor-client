"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

interface CountDownProps {
  hours: number;
  minutes: number;
  title: string;
}

export default function CountDown({ title, hours, minutes }: CountDownProps) {
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    const total = hours * 3600 + minutes * 60;
    setSecondsLeft(total);
  }, [hours, minutes]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatParts = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return [
      String(h).padStart(2, "0"),
      String(m).padStart(2, "0"),
      String(s).padStart(2, "0"),
    ];
  };

  const [h, m, s] = formatParts(secondsLeft);

  return (
    <Stack sx={{ width: "100%" }}>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          justifyItems: "center",
          pb: 1,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: {
              xs: "1.2rem",
              sm: "1.3rem",
            },
            fontWeight: {
              xs: 600,
              md: 700,
            },

            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Box>
          <Stack direction="row" spacing={0.8} alignItems="center">
            {[h, m, s].map((value, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "6px",
                  px: 1.5,
                  py: 0.5,
                  minWidth: 36,
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: "1rem",
                  fontFamily: "monospace",
                }}
              >
                {value}
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
