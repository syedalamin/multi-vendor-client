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
  CardMedia,
  Chip,
} from "@mui/material";
import { Phone, Email, LocationOn, Star, Store } from "@mui/icons-material";

export default function VendorProfileCard({ item }: { item: any }) {
  const {
    shopName,
    logo,
    banner,
    description,
    email,
    contactNumber,
    address,

    status,
    rating,
    isVerified,
    isBlocked,
  } = item || {};

  return (
    <Card
      sx={{
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: 5,
        width: 1000,
        mx: "auto",
      }}
    >
      {/* Banner */}
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: 200,
          border: "4px solid white",
          bgcolor: "warning.main",
        }}
        image={banner}
        alt={shopName}
      />

      {/* Logo */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: -7 }}>
        <Avatar
          src={logo || ""}
          alt={shopName}
          sx={{
            width: 200,
            height: 200,
            border: "4px solid green",
            bgcolor: "warning.main",
          }}
        >
          {!logo && <Store fontSize="large" />}
        </Avatar>
      </Box>

      {/* Shop Name */}
      <Box textAlign="center" mt={1}>
        <Typography variant="h6" fontWeight="bold">
          {shopName}
        </Typography>

        {/* Verified & Status */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          mt={1}
        >
          {isVerified && <Chip label="Verified" color="success" size="small" />}
          {isBlocked ? (
            <Chip label="Blocked" color="error" size="small" />
          ) : (
            <Chip label={status} color="warning" size="small" />
          )}
        </Stack>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Info Section */}
      <CardContent>
        {/* Description */}
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, fontStyle: "italic" }}
          >
            {description}
          </Typography>
        )}

        <Stack spacing={1.5}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email color="warning" fontSize="small" />
            <Typography variant="body2">{email}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone color="warning" fontSize="small" />
            <Typography variant="body2">{contactNumber}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn color="warning" fontSize="small" />
            <Typography variant="body2">{address}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Star color="warning" fontSize="small" />
            <Typography variant="body2">
              {rating || "0"} / 5.0 (Average Rating)
            </Typography>
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
          Edit Shop
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ borderRadius: "30px", px: 3 }}
        >
          Delete Shop
        </Button>
      </CardActions>
    </Card>
  );
}
