"use client";
import { useGetAllCartQuery } from "@/redux/api/cartApi";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const OrderCartTable = () => {
  const { data: cartData } = useGetAllCartQuery({});
  const allCart = cartData?.data;

  return (
    <Stack
      spacing={1}
      sx={{
        p: 1.2,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        border: "1px solid #f0f0f0",
      }}
    >
      {allCart?.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={{ xs: 1 }} alignItems="center">
            <CardMedia
              sx={{
                width: { xs: "40px", sm: "45px" },
                height: { xs: "40px", sm: "45px" },
                borderRadius: 2,
              }}
              component="img"
              alt={item?.productName}
              image={item?.productImage}
            />
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.9rem",   },
                fontWeight: 500,
              }}
            >
              {item.productName}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.85rem",  },
                fontWeight: 500,
              }}
            >
             x{item.quantity}
            </Typography>
          </Stack>

          <Typography
            fontWeight="bold"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },
            }}
          >
            ৳ {Number(item.discountPrice) > 0 ? item.discountPrice : item.price}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default OrderCartTable;

