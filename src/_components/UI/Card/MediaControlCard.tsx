"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/common";
import { CardActionArea, Grid, Rating } from "@mui/material";
import Link from "next/link";

export default function MediaControlCard({ item }: { item: Product }) {
  const formattedPrice = Number(item.price);
  return (
    <Box>
      <CardActionArea>
        <Link href={`/product/${item?.slug}`}>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  alt={item.name}
                  image={item.productImages[0]}
                  sx={{
                    width: "120px",
                    height: "100px",
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
                    <Typography sx={{ fontSize: "0.7rem", fontWeight: 600 }}>
                        {item.discount}%
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid size={8} alignContent={"center"} alignItems={"center"}>
              <Box>
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
                      ? item.name.slice(0, 20) + "..."
                      : item.name}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem" },
                        fontWeight: "bold",
                        color: "#2e7d32",
                      }}
                    >
                     ৳{(item.price * (1 - item.discount / 100))}
                    </Typography>

                    {item.discount > 0 && (
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "#888",
                          fontSize: { xs: "0.9rem" },
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
              </Box>
            </Grid>
          </Grid>
        </Link>
      </CardActionArea>
    </Box>
  );
}
