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
import {
  Phone,
  Email,
  LocationOn,
  Person,
  Shield,
} from "@mui/icons-material";

export default function CustomerProfileCard({ item }: { item: any }) {
  console.log(item);
  const {
    firstName,
    lastName,
    profilePhoto,
    email,
    contactNumber,
    address,
    gender,
    role,
    status,
  } = item || {};

  return (
    <Card
      sx={{
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: 5,
        maxWidth: 420,
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

      {/* Role & Status */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        <Chip label={role} color="primary" size="small" />
        <Chip
          label={status}
          color={status === "ACTIVE" ? "success" : "default"}
          size="small"
        />
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Info Section */}
      <CardContent>
        <Stack spacing={1.5}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email color="warning" fontSize="small" />
            <Typography variant="body2">{email}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone color="warning" fontSize="small" />
            <Typography variant="body2">{contactNumber}</Typography>
          </Box>
          {address && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOn color="warning" fontSize="small" />
              <Typography variant="body2">{address}</Typography>
            </Box>
          )}
          {gender && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Person color="warning" fontSize="small" />
              <Typography variant="body2">{gender}</Typography>
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Shield color="warning" fontSize="small" />
            <Typography variant="body2">Customer</Typography>
          </Box>
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
          color="warning"
          sx={{ borderRadius: "30px", px: 3 }}
        >
          Edit Profile
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ borderRadius: "30px", px: 3 }}
        >
          Logout
        </Button>
      </CardActions>
    </Card>
  );
}
