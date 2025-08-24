/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const CartTotal = (totalCart: any) => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          border: "1px solid #e0e0e0",
          background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            textAlign: "center",
            fontWeight: "bold",
            color: "primary.main",
            letterSpacing: 0.5,
          }}
        >
          Cart Summary
        </Typography>

        <Stack spacing={1.5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1.2,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              border: "1px solid #f0f0f0",
            }}
          >
            <Typography color="text.secondary">Total Items</Typography>
            <Typography fontWeight="bold">
              {totalCart?.totalCart?.data?.data?.totalItems ?? 0}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1.2,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              border: "1px solid #f0f0f0",
            }}
          >
            <Typography color="text.secondary">Total Quantity</Typography>
            <Typography fontWeight="bold">
              {totalCart?.totalCart?.data?.data?.totalQuantity ?? 0}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1.2,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              border: "1px solid #f0f0f0",
            }}
          >
            <Typography color="text.secondary">Sub Total</Typography>
            <Typography fontWeight="bold">
              ${totalCart?.totalCart?.data?.data?.totalPrice ?? 0}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1.5,
              borderRadius: 2,
              backgroundColor: "#f1f8e9",
              border: "1px solid #dcedc8",
            }}
          >
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold" color="success.main">
              ${totalCart?.totalCart?.data?.data?.totalDiscountPrice ?? 0}
            </Typography>
          </Box>

          <Stack
            py={2}
            flex={1}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%" }}
            spacing={2}
          >
            <Button
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#43a047")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#4caf50")
              }
            >
              Checkout
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
export default CartTotal;
