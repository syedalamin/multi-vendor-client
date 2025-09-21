/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useGetAllOrderIdsMutation,
  useGetMyOrdersQuery,
 
} from "@/redux/api/orderApi";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ThankYou = () => {
  const { data: myOrder } = useGetMyOrdersQuery({});
  const [getAllOrderIds] = useGetAllOrderIdsMutation();
  const [ordersAll, setOrdersAll] = useState<any>(null);
  const orders = myOrder?.data || [];

  let orderGroups;

  if (orders.length > 0) {
    const sortedOrders = orders
      .slice()
      .sort(
        (a: any, b: any) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

    const firstOrderTime = new Date(sortedOrders[0].createdAt).getTime();

    const groupOrders = sortedOrders.filter((order: any) => {
      const orderTime = new Date(order.createdAt).getTime();
      const diffMinutes = (orderTime - firstOrderTime) / (1000 * 60);
      return diffMinutes <= 2;
    });

    orderGroups = groupOrders || [];
  }
  const orderIds = orderGroups?.map((order: any) => order.id);


  console.log(orderIds);


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrderIds(orderIds).unwrap();
        setOrdersAll(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

console.log(ordersAll);
 

  const d = new Date(ordersAll?.data?.createdAt[0]);

  const formattedDate = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

  // console.log(singleOrder?.success);

  return (
    <Stack>
      {/* Always show Thank You */}
      <Typography
        py={3}
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#2e7d32",
          letterSpacing: 0.5,
          fontSize: {
            xs: "1.5rem",
            sm: "2.5rem",
          },
        }}
      >
        Thank You
      </Typography>

      {ordersAll?.success ? (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              maxWidth: 800,
              width: "100%",
              borderRadius: 3,
              border: "1px solid #e0e0e0",
              background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
            }}
          >
            <Box
              sx={{
                borderRadius: "3px",
                border: "1px dashed #9e9e9e",
              }}
            >
              <Typography
                py={1}
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#2e7d32",
                  letterSpacing: 0.5,
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                  },
                }}
              >
                Your order has been received
              </Typography>
            </Box>
            <Grid container py={2}>
              {/* Order Id */}
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{ borderRight: "1px dashed #9e9e9e" }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    color: "#9e9e9e",
                    fontWeight: "bold",
                  }}
                >
                  Order Id
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#2e7d32",
                  }}
                >
                  {ordersAll?.data?.ids && ordersAll.data.ids.length > 1
                    ? ordersAll.data.ids.map((id: string, index: number) => (
                        <span key={index}>
                          {id}
                          {index < ordersAll.data.ids.length - 1 ? " , " : ""}
                        </span>
                      ))
                    : ordersAll?.data?.ids?.[0]}
                </Typography>
              </Grid>

              {/* Date */}
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{ borderRight: "1px dashed #9e9e9e" }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    color: "#9e9e9e",
                    fontWeight: "bold",
                  }}
                >
                  Date
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#2e7d32",
                  }}
                >
                  {formattedDate}
                </Typography>
              </Grid>

              {/* Total */}
              <Grid
                size={{ xs: 12, sm: 3 }}
                sx={{ borderRight: "1px dashed #9e9e9e" }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    color: "#9e9e9e",
                    fontWeight: "bold",
                  }}
                >
                  Total
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#2e7d32",
                  }}
                >
                  ৳ {ordersAll?.data?.totalAmount}
                </Typography>
              </Grid>

              {/* Payment Method */}
              <Grid size={{ xs: 12, sm: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    color: "#9e9e9e",
                    fontWeight: "bold",
                  }}
                >
                  Payment Method
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#2e7d32",
                  }}
                >
                  Cash on Delivery
                </Typography>
              </Grid>
            </Grid>
            <Typography
              py={5}
              variant="subtitle2"
              sx={{
                color: "#9e9e9e",
                letterSpacing: 0.5,
                fontWeight: "bold",
              }}
            >
              Pay with cash upon delivery.
            </Typography>
            <Box sx={{ px: 4 }}>
              <Typography
                py={2}
                variant="subtitle1"
                sx={{
                  color: "#9e9e9e",

                  fontWeight: "bold",
                }}
              >
                Order Details
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1.2,
                  borderRadius: 2,
                  backgroundColor: "#ffffff",
                  borderBottom: "1px dashed #9e9e9e",
                }}
              >
                <Typography sx={{ color: "#9e9e9e" }}>Product</Typography>
                <Typography sx={{ color: "#9e9e9e" }}>Total</Typography>
              </Box>

              {ordersAll?.data?.orderItem.map((item: any) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1.2,
                    borderRadius: 2,
                    backgroundColor: "#ffffff",
                    borderBottom: "1px dashed #9e9e9e",
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                    {item?.product?.name.length > 10
                      ? item?.product?.name.slice(0, 10)
                      : item?.product?.name}{" "}
                    x {item?.quantity}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#2e7d32",
                    }}
                  >
                    ৳ {item?.discountPrice}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1.2,
                }}
              >
                <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                  Delivery Charge
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#2e7d32",
                  }}
                >
                  ৳ {ordersAll?.data?.deliveryCharge}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1.2,
                }}
              >
                <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                  Total
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#2e7d32",
                  }}
                >
                  ৳ {ordersAll?.data?.totalAmount}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1.2,
                }}
              >
                <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                  Payment Method
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#2e7d32",
                  }}
                >
                  Cash on Delivery
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      ) : (
        <Typography
          py={5}
          variant="subtitle1"
          sx={{
            textAlign: "center",
            color: "#9e9e9e",
            fontWeight: "bold",
          }}
        >
          No Order Found
        </Typography>
      )}
    </Stack>
  );
};

export default ThankYou;
