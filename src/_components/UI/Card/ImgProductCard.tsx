"use client";
import * as React from "react";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/common";
import { Box, CardActionArea, Rating, Stack } from "@mui/material";
import Link from "next/link";
import AddToCart from "@/lib/Button/AddToCart";

export default function ImgProductCard({ item }: { item: Product }) {
  const formattedPrice = Number(item.price)

  return (
    <Box
      sx={{
        height: "100%",
        border: "1px solid #e0e0e0",
        display: "flex",
        borderRadius: "8px",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s , border 0.3s ",
        "&:hover": {
          border: "1px solid #2e7d32",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardActionArea
        sx={{
          alignItems: "stretch",
        }}
      >
        <Link
          href={`/product/${item?.slug}`}
          style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              alt={item.name}
              image={item.productImages[0]}
              sx={{
                width: "100%",
                height: { xs: "150px", sm: "180px" },
                objectFit: "cover",
                flexShrink: 0,
              }}
            />

            {item.discount > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: 7,
                  left: 7,
                  borderRadius: "4px",
                  background: "linear-gradient(145deg, #ff4d4d, #d32f2f)",
                  color: "white",
                  px: 1,
                  py: 0.2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 600 }}>
                  Sale {item.discount}%
                </Typography>
              </Box>
            )}
          </Box>
          <Stack
            pt={2}
            px={2}
            spacing={1}
            justifyContent="space-between"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box>
              <Typography
                noWrap
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  fontWeight: 600,
                  mb: 0.5,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name.length > 20
                  ? item.name.slice(0, 19) + "..."
                  : item.name}
              </Typography>

              <Box
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                textAlign="center"
                gap={1}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.3rem" },
                    fontWeight: "bold",
                    color: "#2e7d32",
                  }}
                >
                  ৳{item.price * (1 - item.discount / 100)}
                </Typography>

                {item.discount > 0 && (
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "#888",
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    }}
                  >
                    ৳{formattedPrice}
                  </Typography>
                )}
              </Box>
              <Rating
                name="half-rating-read"
                defaultValue={item.averageRating}
                precision={0.5}
                readOnly
                size="small"
              />
            </Box>
          </Stack>
        </Link>
        <Stack
          pb={2}
          px={2}
          spacing={1}
          justifyContent="space-between"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <AddToCart
              id={item?.id}
              name="Add To Cart"
              stock={item?.stock}
              sx={{ padding: "8px 20px", fontSize: "0.8rem" }}
            />
          </Box>
        </Stack>
      </CardActionArea>
    </Box>
  );
}
