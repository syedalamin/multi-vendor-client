
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

  // main image state
  const [mainImage, setMainImage] = useState(productImages[0]);


  const sideImages = [...productImages].slice(0, 4);
  const formattedPrice = Number(price).toFixed(2);



  return (
    <Stack py={5}>
      <Grid
        container
        spacing={2}
        sx={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.15)", borderRadius: 2 }}
      >
        <Grid size={{ xs: 12, md: 6 }} sx={{}}>
          <Grid
            container
            spacing={2}
            p={2}
            borderRadius={2}
            sx={{
              backgroundColor: "#fafafa",
              height: "100%",
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
                      height: "10%",
                      borderRadius: 1,
                      objectFit: "initial",
                      cursor: "pointer",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        transform: "scale(1)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      },
                    }}
                    component="img"
                    alt={`${name}${idx + 1}`}
                    image={slug}
                  />
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 9 }}>
              <CardMedia
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
                component="img"
                alt={name}
                image={mainImage}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack spacing={2} p={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography
                py={2}
                variant="h4"
                component="h1"
                sx={{
                  fontSize: {
                    xs: "1.8rem",
                    md: "2.2rem",
                    lg: "2.5rem",
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
             
            >
              <AddToCart id={id} name="Add To Cart" sx={{py: "10px"}}/>
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
