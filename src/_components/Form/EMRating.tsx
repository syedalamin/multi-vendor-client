"use client";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Rating, SxProps } from "@mui/material";

type IRatingProps = {
  name: string;
  defaultValue?: number;
  precision?: number;
  size?: "small" | "medium" | "large";
  sx?: SxProps;
};

const EMRating = ({
  name,
  defaultValue = 0,
  precision = 0.5,
  size = "medium",
  sx,
}: IRatingProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Rating
          {...field}
          value={field.value || 0}
          onChange={(_, value) => field.onChange(value)}  
          precision={precision}
          size={size}
          sx={sx}
        />
      )}
    />
  );
};

export default EMRating;
