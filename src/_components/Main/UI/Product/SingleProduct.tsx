"use client";
import { Product } from "@/types/common";
import { Box, CardMedia, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddToCart from "@/lib/Button/AddToCart";

const SingleProduct = ({ singleProduct }: { singleProduct: Product }) => {
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

  const [mainImage, setMainImage] = useState(productImages[0]);
  const sideImages = [...productImages].slice(0, 4);
  const formattedPrice = Number(price).toFixed(2);

  return (
    <Stack py={5}>
      <Grid
        container
        spacing={2}
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          border: "1px solid #e0e0e0",
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid
            container
            spacing={2}
            p={2}
            borderRadius={2}
            sx={{
              backgroundColor: "#fff",
              height: "100%",
              boxShadow: "inset 0px 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <Grid size={{ xs: 3 }}>
              <Box display="flex" gap={1.5} flexWrap="wrap">
                {sideImages.map((slug, idx) => (
                  <CardMedia
                    key={idx}
                    onClick={() => setMainImage(slug)}
                    sx={{
                      width: "100%",
                      height: { xs: 60, sm: 81, md: 91 },
                      borderRadius: 2,
                      objectFit: "cover",
                      cursor: "pointer",
                      aspectRatio: "1 / 1",
                      border:
                        mainImage === slug
                          ? "2px solid #2e7d32"
                          : "1px solid #ddd",
                      transition:
                        "transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      },
                    }}
                    component="img"
                    alt={`${name}${idx + 1}`}
                    image={slug}
                  />
                ))}
              </Box>
            </Grid>

            {/* Main Image */}
            <Grid size={{ xs: 9 }}>
              <CardMedia
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  height: { xs: 276, sm: 360, md: 400 },
                  borderRadius: 3,
                  objectFit: "cover",
                  border: "1px solid #ddd",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
                }}
                component="img"
                alt={name}
                image={mainImage}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack
            spacing={2}
            p={3}
            justifyContent={"space-around"}
            display={"flex"}
            sx={{
              height: "100%",
            }}
          >
            <Stack spacing={2}>
              <Box
                display="flex"
                alignItems={{ xs: "flex-start", md: "center" }}
                flexDirection={{ xs: "column", md: "row" }} //
                gap={1.5}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 700,
                    color: "#222",
                  }}
                >
                  {name}
                </Typography>

                <Typography
                  sx={{
                    padding: "3px 10px",
                    borderRadius: "12px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  {status}
                </Typography>
              </Box>

              <Stack direction="row" spacing={3} alignItems="center">
                <Rating
                  name="half-rating-read"
                  defaultValue={averageRating}
                  readOnly
                  size="small"
                />
                <Typography color="#555" fontSize="0.9rem">
                  SKU: {sku}
                </Typography>
              </Stack>
              <Box display="flex" alignItems="center" gap={1.5}>
                {discount > 0 && (
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "#999",
                      fontSize: "1rem",
                    }}
                  >
                    ${formattedPrice}
                  </Typography>
                )}
                <Typography
                  sx={{
                    fontSize: "1.6rem",
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
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    -{discount}%
                  </Typography>
                )}
              </Box>
            </Stack>

            {/* Short Description */}
            <Box>
              <Typography component="p" sx={{ color: "#555", lineHeight: 1.6 }}>
                {description?.slice(0, 200)}
              </Typography>
            </Box>

            <Stack>
              <AddToCart
                id={id}
                name="Add To Cart"
                sx={{ py: "8px", fontSize: "14px" }}
              />
            </Stack>

            <Box>
              <Typography component="p" fontWeight={600}>
                Category:{" "}
                <Typography component="span" sx={{ color: "#444" }}>
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
