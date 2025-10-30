/* eslint-disable @typescript-eslint/no-explicit-any */

import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import { Product } from "@/types/common";
import { Store } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const ShopDetails = ({ item }: { item: any }) => {
  const { shopName, logo, banner, description, isVerified, user } = item || {};
  const router = useRouter();
  if (!item) {
    router.replace("/");
    return null;  
  }

  return (
    <Stack mb={4}>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: -7, sm: -10, md: -13 },
        }}
      >
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

      <CardContent>
        <Box textAlign="center">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              }}
            >
              {shopName}
            </Typography>

            {isVerified && (
              <Chip
                label="Verified"
                color="success"
                size="small"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.9rem" },
                  height: { xs: 20, sm: 24, md: 28 },
                }}
              />
            )}
          </Stack>
        </Box>
        {description && (
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontStyle: "italic",
              color: "text.secondary",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            {description}
          </Typography>
        )}
      </CardContent>

      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={2} alignItems={"center"}>
        {user?.product && user.product.length > 0 ? (
          user?.product?.map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3, lg: 12 / 5 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))
        ) : (
          <Grid size={{ xs: 12 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              No product
            </Typography>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

export default ShopDetails;
