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

import ResponsiveDialog from "@/_components/Shared/Modal/FullScreenModal";
import { Store } from "@mui/icons-material";
import EditVendorProfile from "./EditVendorProfile";

export default function VendorProfileCard({ item }: { item: any }) {
  const [open, setOpen] = React.useState(false);
  const {
    shopName,
    logo,
    banner,
    description,
    email,
    contactNumber,
    city,
    district,
    status,
    isVerified,
    isBlocked,
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
      {/* Banner */}
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: { xs: 150, sm: 200, md: 250 },
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
            width: { xs: 100, sm: 150, md: 200 },
            height: { xs: 100, sm: 150, md: 200 },
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
            sx={{
              mb: 2,
              fontStyle: "italic",
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            {description}
          </Typography>
        )}
      </CardContent>
      <CardContent sx={{ textAlign: "left", px: { xs: 2, sm: 4 } }}>
        <Stack spacing={1.4}>
          {[
            { label: "Email", value: email },
            { label: "Contact Number", value: contactNumber },
            { label: "District", value: district },
            { label: "City", value: city },
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
        <EditVendorProfile setOpen={setOpen} />
      </ResponsiveDialog>
    </Card>
  );
}
