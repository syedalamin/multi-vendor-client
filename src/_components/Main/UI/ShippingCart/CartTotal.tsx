/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CartTotal = (totalCart: any) => {
  // console.log(totalCart);
  // console.log(totalCart?.totalCart?.data?.data);

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
        >
          Cart Summary
        </Typography>

        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              boxShadow: 1,
            }}
          >
            <Typography>Total Items</Typography>
            <Typography fontWeight="bold">
              {totalCart?.totalCart?.data?.data?.totalItems ?? 0}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              boxShadow: 1,
            }}
          >
            <Typography>Total Quantity</Typography>
            <Typography fontWeight="bold">
              {totalCart?.totalCart?.data?.data?.totalQuantity ?? 0}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              boxShadow: 1,
            }}
          >
            <Typography>Sub Total </Typography>
            <Typography fontWeight="bold">
              ${totalCart?.totalCart?.data?.data?.totalPrice ?? 0}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              boxShadow: 1,
            }}
          >
            <Typography>Total </Typography>
            <Typography fontWeight="bold">
              ${totalCart?.totalCart?.data?.data?.totalDiscountPrice ?? 0}
            </Typography>
          </Box>
        </Stack>
        <Stack
          py={2}
          flex={1}
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%" }}
          spacing={2}
        >
          <Typography
            component={Link}
            href={"/shipping"}
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
            onMouseEnter={(e) => (e.currentTarget.style.background = "#43a047")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#4caf50")}
          >
            Checkout 
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};
export default CartTotal;
