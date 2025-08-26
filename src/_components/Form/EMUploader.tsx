import * as React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Input, SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

const EMUploader = ({ name, label, sx }: TProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <Button
          fullWidth
          sx={{
            ...sx,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            background: "#43a047",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "12px",
            py: 1.2,
            px: 2,
            minHeight: 48,
          
          }}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon sx={{ fontSize: 22 }} />}
        >
          {value ? value.name : label || "Upload file"}
          <Input
            {...field}
            type="file"
            onChange={(e) =>
              onChange((e?.target as HTMLInputElement).files?.[0])
            }
            style={{ display: "none" }}
          />
        </Button>
      )}
    />
  );
};

export default EMUploader;
