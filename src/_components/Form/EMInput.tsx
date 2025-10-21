"use client";
import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
type IInputProps = {
  name: string;
  type?: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string | number;
  disabled?: boolean;
};
const EMInput = ({
  name,
  type = "text",
  label,
  size = "small",
  fullWidth,
  sx,
  placeholder,
  required,
  multiline,
  rows,
  defaultValue,
  disabled,
}: IInputProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ""}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={label}
            type={type}
            variant="outlined"
            size={size}
            value={field.value ?? ""}
            placeholder={placeholder || label}
            fullWidth={fullWidth}
            required={required}
            error={!!error?.message}
            multiline={multiline}
            rows={rows}
            disabled={disabled}
            sx={{
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
                  color: "#2e7d32",
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
              ...sx,
            }}
          />
        )}
      />
    </>
  );
};

export default EMInput;
