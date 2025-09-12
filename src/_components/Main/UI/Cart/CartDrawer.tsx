"use client";
import { CloseOutlinedIcon } from "@/_Icons";
import { useGetAllCartQuery, useGetTotalCartQuery } from "@/redux/api/cartApi";
import {
  Box,
  Button,
  CardMedia,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { data: cartData } = useGetAllCartQuery({});
  const allCart = cartData?.data || [];
  const { data: totalCart } = useGetTotalCartQuery({});

  return (
    <div>
      {!open && allCart.length > 0 && (
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            backgroundColor: "#2e7d32",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            px: 2,
            py: 1,
            borderRadius: 3,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#1b5e20",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 14px rgba(0,0,0,0.2)",
            },
          }}
        >
          ({allCart.length}) <br /> View Cart
        </Button>
      )}

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
          disableScrollLock: true,
        }}
      >
        <Stack
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: "#ffffff",
            border: "1px solid #f0f0f0",
            minWidth: { xs: 280, sm: 350 },
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  fontWeight: 600,
                }}
              >
                Shipping ({allCart.length})
              </Typography>
              <Button
                onClick={toggleDrawer(false)}
                disableRipple
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "white",
                    boxShadow: 0,
                  },
                  padding: 0,
                  margin: 0,
                  minWidth: 0,
                  boxShadow: 0,
                }}
              >
                <CloseOutlinedIcon />
              </Button>
            </Stack>
            {allCart.map((item) => (
              <Stack key={item.id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pb: "5px",
                    pt: "2px",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <CardMedia
                      sx={{
                        width: { xs: "42px", sm: "45px" },
                        height: { xs: "42px", sm: "45px" },
                        borderRadius: 2,
                      }}
                      component="img"
                      alt={item?.productName}
                      image={item?.productImage}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.90rem" },
                        fontWeight: 600,
                      }}
                    >
                      {item.productName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "0.80rem" },
                        fontWeight: 500,
                        color: "gray",
                      }}
                    >
                      x{item.quantity}
                    </Typography>
                  </Stack>

                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                      color: "#2e7d32",
                    }}
                  >
                    ৳{" "}
                    {Number(item.discountPrice) > 0
                      ? item.discountPrice
                      : item.price}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>

          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                width: "100%",
                pb: "5px",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: 600,
                }}
              >
                Sub Total
              </Typography>
              <Typography
                fontWeight="bold"
                color="success.main"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: 600,
                }}
              >
                ৳ {totalCart?.data?.data?.totalDiscountPrice ?? 0}
              </Typography>
            </Stack>
            <Stack py={{ xs: 1 }} sx={{ width: "100%" }} spacing={{ xs: 1 }}>
              <Button
                component={Link}
                href={"/shipping"}
                onClick={toggleDrawer(false)}
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#4caf50",
                  color: "#fff",
                  padding: { xs: "6px 10px", sm: "8px 10px" },
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#43a047",
                  },
                }}
              >
                Checkout
              </Button>

              <Button
                component={Link}
                href={"/cart"}
                onClick={toggleDrawer(false)}
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#2e7d32",
                  background: "#f1f8f4",
                  border: "1px solid #2e7d32",
                  padding: { xs: "6px 10px", sm: "8px 10px" },
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#e8f5e9",
                  },
                }}
              >
                Go To Cart
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </div>
  );
}

// onClick={toggleDrawer(false)}
