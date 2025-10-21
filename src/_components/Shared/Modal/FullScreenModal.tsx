"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, DialogTitle, Typography } from "@mui/material";
import { TModalProps } from "./EcoModal";

export default function ResponsiveDialog({
  open,
  setOpen,
  children,
  sx,
  title,
}: TModalProps) {
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Dialog
        fullScreen={false}
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          ...sx,
          "& .MuiDialog-paper": {
            width: { xs: "90%", sm: "80%", md: "60%" },
            margin: "auto",
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
          },
          
        }}
      >
        <DialogTitle textAlign={"center"} id="customized-dialog-title">
          <Typography component={"h2"}  variant="h5" fontWeight={600}>
            {title}
          </Typography>
        </DialogTitle>
        <Box p={4}>{children}</Box>
      </Dialog>
    </React.Fragment>
  );
}
