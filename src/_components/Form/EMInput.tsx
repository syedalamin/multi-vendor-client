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
}: IInputProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field, fieldState:{error}}) => <TextField 
          {...field}
          label= {label}
          sx={{...sx}}
          type={type}
          variant="outlined"
          size={size}
          placeholder={placeholder || label}
          fullWidth={fullWidth}
          required={required}
          error={!!error?.message}
        />}
      />
    </>
  );
};

export default EMInput;
