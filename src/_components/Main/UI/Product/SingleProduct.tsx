/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateCartMutation } from "@/redux/api/cartApi";
import { getUserInfo } from "@/services/auth.services";
import { Product } from "@/types/common";
import { Box, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "sonner";

import { usePathname } from "next/navigation";

const SingleProduct = ({ singleProduct }: { singleProduct: Product }) => {
  const pathname = usePathname();
  const [createCart] = useCreateCartMutation();
  const userInfo = getUserInfo();
  const router = useRouter();

  const {
    name,
    productImages,
    discount,
    sku,
    status,
    description,
    price,
    id,
    subCategory,
    averageRating,
  } = singleProduct;

  // main image state
  const [mainImage, setMainImage] = useState(productImages[0]);

  // Random 4 images excluding first one
  const sideImages = [...productImages].slice(0, 4);
  const formattedPrice = Number(price).toFixed(2);

  const GenerateData = {
    productId: id,
    quantity: 1,
  };
  const handleRoute = () => {
    router.push(`/login?redirect=${pathname}`);
  };

  const handleCartSubmit = async () => {
    if (userInfo?.role) {
      const res: any = await createCart(GenerateData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } else {
      handleRoute();
    }
  };

  return (
    <Stack py={5}>
      <Grid container spacing={2}>
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 6 }} sx={{}}>
          <Grid
            container
            spacing={2}
            boxShadow={1}
            p={2}
            borderRadius={2}
            sx={{
              backgroundColor: "#fafafa",
              height: "100%",
            }}
          >
            {/* Side images */}
            <Grid size={{ xs: 3 }}>
              <Box display="flex" gap={1.5} flexWrap="wrap">
                {sideImages.map((slug, idx) => (
                  <CardMedia
                    key={idx}
                    onClick={() => setMainImage(slug)}
                    sx={{
                      width: "100%",
                      height: "10%",
                      borderRadius: 1,
                      objectFit: "cover",
                      cursor: "pointer",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.2s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                    component="img"
                    alt={`${name}${idx + 1}`}
                    image={slug}
                  />
                ))}
              </Box>
            </Grid>

            {/* Main image */}
            <Grid size={{ xs: 9 }}>
              <CardMedia
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  objectFit: "fill",
                }}
                component="img"
                alt={name}
                image={mainImage}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={2} p={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography
                py={2}
                variant="h4"
                component="h1"
                sx={{
                  fontSize: {
                    xs: "1.8rem",
                    md: "2.3rem",
                    lg: "2.4rem",
                  },
                  fontWeight: {
                    xs: 600,
                    md: 700,
                  },
                  lineHeight: {
                    xs: 1.4,
                    md: 1.6,
                  },
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#e6f4ea",
                  color: "#2e7d32",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                {status}
              </Typography>
            </Box>

            {/* Price & Discount */}
            <Box display="flex" alignItems="center" gap={1}>
              {discount > 0 && (
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "#888",
                    fontSize: "1rem",
                  }}
                >
                  {formattedPrice}
                </Typography>
              )}
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                ${(price * (1 - discount / 100)).toFixed(2)}
              </Typography>
              {discount > 0 && (
                <Typography
                  sx={{
                    backgroundColor: "#ffebee",
                    color: "#c62828",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                  }}
                >
                  -{discount}%
                </Typography>
              )}
            </Box>

            <Stack
              display={"flex"}
              justifyContent={"start"}
              spacing={4}
              alignItems={"center"}
              direction={"row"}
            >
              <Box>
                <Rating
                  name="half-rating-read"
                  defaultValue={averageRating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </Box>
              <Box color="#555">
                <Typography>SKU : {sku}</Typography>
              </Box>
            </Stack>

            <Box>
              <Typography component={"p"} fontWeight={600}>
                Brand:{" "}
                <Typography component={"span"} sx={{ color: "#444" }}>
                  {subCategory.name}
                </Typography>
              </Typography>

              <Typography component={"p"} sx={{ color: "#444" }}>
                {description}
              </Typography>
            </Box>
            <Stack
              flex={1}
              direction="row"
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100%" }}
              spacing={2}
            >
              <Typography 
                onClick={handleCartSubmit}
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#4caf50",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#43a047")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#4caf50")
                }
              >
                Add to Cart
              </Typography>
            </Stack>
            <Box>
              <Typography component={"p"} fontWeight={600}>
                Category:{" "}
                <Typography component={"span"} sx={{ color: "#444" }}>
                  {subCategory.name}
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SingleProduct;
