"use client";
import { useGetMyVendorMetaDataQuery } from "@/redux/api/metaDataApi";
import { Card, CardContent, Grid, Stack, Typography, Box } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const VendorPage = () => {
  const { data } = useGetMyVendorMetaDataQuery({});
  const meta = data?.data;

  const cards = [
    {
      title: "Total Orders",
      count: meta?.orderSummary?._count?.id ?? 0,
      amount: meta?.orderSummary?._sum?.totalAmount ?? 0,
      icon: <ShoppingCartIcon fontSize="large" />,
      color: "#1976d2",
    },
    {
      title: "Paid Orders",
      count: meta?.paidSummary?._count?.id ?? 0,
      amount: meta?.paidSummary?._sum?.totalAmount ?? 0,
      icon: <PaidIcon fontSize="large" />,
      color: "#2e7d32",
    },
    {
      title: "Pending Orders",
      count: meta?.pendingSummary?._count?.id ?? 0,
      amount: meta?.pendingSummary?._sum?.totalAmount ?? 0,
      icon: <PendingActionsIcon fontSize="large" />,
      color: "#ed6c02",
    },
    {
      title: "Failed Orders",
      count: meta?.failedSummary?._count?.id ?? 0,
      amount: meta?.failedSummary?._sum?.totalAmount ?? 0,
      icon: <ErrorOutlineIcon fontSize="large" />,
      color: "#d32f2f",
    },
    {
      title: "Paid Products",
      count: meta?.paidProductSummary?._count?.productId ?? 0,
      quantity: meta?.paidProductSummary?._sum?.quantity ?? 0,
      icon: <Inventory2Icon fontSize="large" />,
      color: "#0288d1",
    },
    {
      title: "Pending Products",
      count: meta?.pendingProductSummary?._count?.productId ?? 0,
      quantity: meta?.pendingProductSummary?._sum?.quantity ?? 0,
      icon: <HourglassEmptyIcon fontSize="large" />,
      color: "#f9a825",
    },
    {
      title: "Failed Products",
      count: meta?.failedProductSummary?._count?.productId ?? 0,
      quantity: meta?.failedProductSummary?._sum?.quantity ?? 0,
      icon: <CancelIcon fontSize="large" />,
      color: "#c2185b",
    },
  ];

  return (
    <Stack spacing={3}>
      <Grid container spacing={4} mt={2}>
    
        <Grid size={{xs: 12, sm: 6}}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Order Distribution
            </Typography>
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: meta?.orderSummary?._count?.id ?? 0,
                      label: "Total",
                    },
                    {
                      id: 1,
                      value: meta?.paidSummary?._count?.id ?? 0,
                      label: "Paid",
                    },
                    {
                      id: 2,
                      value: meta?.pendingSummary?._count?.id ?? 0,
                      label: "Pending",
                    },
                    {
                      id: 3,
                      value: meta?.failedSummary?._count?.id ?? 0,
                      label: "Failed",
                    },
                  ],
                },
              ]}
              
              height={280}
              colors={["#1976d2", "#2e7d32", "#ed6c02", "#d32f2f"]}
              sx={{ "& path": { transition: "all 0.3s ease-in-out" } , width: "100%"}}
            />
          </Card>
        </Grid>


        <Grid size={{xs: 12, sm: 6,}}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Product Quantity Overview
            </Typography>
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["Paid", "Pending", "Failed"] },
              ]}
              yAxis={[{ scaleType: "linear", width: 50 }]}
              series={[
                {
                  data: [
                    meta?.paidProductSummary?._sum?.quantity ?? 0,
                    meta?.pendingProductSummary?._sum?.quantity ?? 0,
                    meta?.failedProductSummary?._sum?.quantity ?? 0,
                  ],
                  label: "Quantity",
                  color: "#0288d1",
                },
              ]}

              height={250}
              sx={{ "& rect": { transition: "all 0.3s ease-in-out" } , width: "100%"}}
            />
          </Card>
        </Grid>
         <Grid container spacing={2}>
        {cards.map((item, i) => (
          <Grid key={i}  size={{xs: 6, sm: 4, md: 3}}>
            <Card
              sx={{
                height: "11rem",
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)", // smooth shadow
                transition: "all 0.25s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.01)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.12)", // subtle hover
                  background: `linear-gradient(135deg, ${item.color}10, #ffffff)`,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: item.color,
                      color: "white",
                      p: 1.5,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ lineHeight: 1.2, textAlign: "center" }}
                >
                  {item.count}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: "text.secondary", mt: 0.5, textAlign: "center" }}
                >
                  {item.amount
                    ? `৳ ${item.amount}`
                    : item.quantity
                    ? `Quantity: ${item.quantity}`
                    : "No Data"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Grid>
    </Stack>
  );
};

export default VendorPage;

// size={{xs: 6, sm: 4, md: 3}}
