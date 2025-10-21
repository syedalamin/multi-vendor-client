"use client";

import { TextField, Box } from "@mui/material";
import React from "react";

interface EMSearchInputProps {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  align?: "left" | "center" | "right";
  width?: number | string;
}

const EMSearchInput: React.FC<EMSearchInputProps> = ({
  label = "Search",
  value,
  onChange,
  placeholder,
  align = "right",
  width,
}) => {
  return (
    <Box
      sx={{
        mb: 2,
        display: "flex",
        justifyContent:
          align === "left"
            ? "flex-start"
            : align === "center"
            ? "center"
            : "flex-end",
        px: {
          xs: 1,
          sm: 2,
          md: 0,
        },
      }}
    >
      <TextField
        label={label}
        variant="outlined"
        size="small"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{
          width: width || {
            xs: "100%",  
            sm: "80%",  
            md: "300px",  
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: 1,
            "& fieldset": {
              borderColor: "#e0e0e0",
            },
            "&:hover fieldset": {
              borderColor: "#2e7d32",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2e7d32",
              borderWidth: "2px",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "black",
          },
          "& .MuiInputLabel-root": {
            color: "#9e9e9e",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#2e7d32",
          },
        }}
      />
    </Box>
  );
};

export default EMSearchInput;
