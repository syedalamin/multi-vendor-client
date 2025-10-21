/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Box,
  Divider,
  Stack,
  Chip,
} from "@mui/material";

import ResponsiveDialog from "@/_components/Shared/Modal/FullScreenModal";
 
import EditAdminProfile from "./EditAdminProfile";

export default function ProfileCard({ item }: { item: any }) {
  const [open, setOpen] = React.useState(false);

  const {
    profilePhoto,
    firstName,
    lastName,
    email,
    contactNumber,
    address,
    gender,

    status,
    role,
  } = item || {};

  return (
    <Card
      sx={{
        overflow: "hidden",
        borderRadius: "2px",
        mt: 3,
        width: "100%",
        mx: "auto",
        textAlign: "center",
        p: 3,
      }}
    >
      {/* Profile Photo */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Avatar
          src={profilePhoto || ""}
          alt={`${firstName} ${lastName}`}
          sx={{
            width: 120,
            height: 120,
            border: "4px solid white",
            boxShadow: 2,
            bgcolor: "warning.main",
            fontSize: "2rem",
          }}
        />
      </Box>

      {/* Name */}
      <Typography variant="h6" fontWeight="bold" mt={2}>
        {firstName} {lastName}
      </Typography>

      {/*  Status */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        <Chip label={role} color="warning" size="small" />{" "}
        <Chip label={status} color="success" size="small" />
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Info Section */}
      <CardContent sx={{ textAlign: "left", px: { xs: 2, sm: 4 } }}>
        <Stack spacing={1.4}>
          {[
            { label: "Name", value: `${firstName} ${lastName}` },
            { label: "Email", value: email },
            { label: "Contact Number", value: contactNumber },
            { label: "Address", value: address },
            { label: "Gender", value: gender },
          ].map(({ label, value }) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { sm: "center" },
                gap: 1,
                py: 1,
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  minWidth: { sm: "130px" },
                  color: "text.secondary",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {label} :
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
              >
                {value || "-"}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
      {/* Actions */}
      <CardActions
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          pb: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: "30px",
            px: { xs: 1, sm: 3 },
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
            backgroundColor: "#2e7d32",
            "&:hover": { backgroundColor: "#1b5e20" },
          }}
        >
          Edit Profile
        </Button>
      </CardActions>

      <ResponsiveDialog open={open} setOpen={setOpen} title="Edit Profile">
        <EditAdminProfile setOpen={setOpen} />
      </ResponsiveDialog>
    </Card>
  );
}

 