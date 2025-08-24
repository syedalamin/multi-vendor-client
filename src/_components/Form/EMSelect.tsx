/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
type IInputProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  onChange?: (value: any) => void;
  required?: boolean;
  options: { label: string; value: string | number }[];
};
const EMSelect = ({
  name,
  label,
  size = "small",
  fullWidth,
  sx,
  required,
  onChange,
  options,
}: IInputProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormControl
            fullWidth={fullWidth}
            size={size}
            error={!!error}
            required={required}
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
          >
            <InputLabel>{label}</InputLabel>
            <Select
              {...field}
              label={label}
              value={field.value ?? ""}
              onChange={(e) => {
                field.onChange(e);
                if (onChange) onChange(e);
              }}
            >
              {options.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
    </>
  );
};

export default EMSelect;
