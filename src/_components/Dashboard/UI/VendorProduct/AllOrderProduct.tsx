/* eslint-disable @typescript-eslint/no-explicit-any */
"use state";

import { VisibilityOutlinedIcon } from "@/_Icons";
import {
  useUpdateOrderPaymentStatusMutation,
  useUpdateOrderStatusMutation,
} from "@/redux/api/orderApi";

import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const AllOrderProduct = ({ data }: { data: any }) => {
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [updateOrderPaymentStatus] = useUpdateOrderPaymentStatusMutation();

  const statusStyles: Record<string, any> = {
    PENDING: { backgroundColor: "#ff9800", hoverColor: "#e68900" },
    SHIPPED: { backgroundColor: "#2196f3", hoverColor: "#1976d2" },
    DELIVERED: { backgroundColor: "#4caf50", hoverColor: "#388e3c" },
    CANCELLED: { backgroundColor: "#f44336", hoverColor: "#d32f2f" },
  };
  const paymentStatusStyles: Record<string, any> = {
    PENDING: { backgroundColor: "#ff9800", hoverColor: "#e68900" },
    PAID: { backgroundColor: "#4caf50", hoverColor: "#388e3c" },
    FAILED: { backgroundColor: "#f44336", hoverColor: "#d32f2f" },
  };

  const handleUpdate = async ({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => {
    try {
      let finalStatus;

      if (status == "PENDING") {
        finalStatus = "SHIPPED";
      } else if (status == "SHIPPED") {
        finalStatus = "DELIVERED";
      }
      const updated = await updateOrderStatus({
        id: id,
        status: finalStatus,
      }).unwrap();
      toast.success(updated?.message);
    } catch (err: any) {
      console.log(err);
    }
  };
  const handlePaymentUpdate = async ({
    id,
    paymentStatus,
  }: {
    id: string;
    paymentStatus: string;
  }) => {
    try {
      let finalStatus;

      if (paymentStatus == "PENDING") {
        finalStatus = "PAID";
      }
      const updated = await updateOrderPaymentStatus({
        id: id,
        paymentStatus: finalStatus,
      }).unwrap();
      toast.success(updated?.message);
    } catch (err: any) {
      console.log(err);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "shippingInfo",
      headerName: "Customer Info",
      flex: 2,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const info = params.value;
        if (!info) return "N/A";

        const labels = {
          contact: "📞",
          district: "🏙️",
          city: "🌆",
          postalCode: "📮",
        };

        return (
          <Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
              py={4}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: 600, color: "#1976d2" }}
              >
                Name: {info.firstName} {info.lastName}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                {labels.contact}Contact: {info.phone}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                {labels.district}District: {info.districts}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                {labels.city}City: {info.city}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                {labels.postalCode}Post Code: {info.postalCode}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "deliveryCharge",
      headerName: "Delivery Charge",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "status",
      headerName: "Delivery",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        const status = row?.status;
        const id = row?.id;
        const style = statusStyles[status] || {
          backgroundColor: "#9e9e9e",
          hoverColor: "#757575",
        };
        return (
          <Box>
            <Box>
              <Button
                sx={{
                  p: "2px",
                  color: "#fff",
                  backgroundColor: style.backgroundColor,
                  cursor:
                    status === "CANCELLED" || status === "DELIVERED"
                      ? "not-allowed"
                      : "pointer",
                  pointerEvents:
                    status === "CANCELLED" || status === "DELIVERED"
                      ? "none"
                      : "auto",
                }}
                onClick={() => handleUpdate({ id, status })}
              >
                {row.status}
              </Button>
            </Box>
          </Box>
        );
      },
    },
    {
      field: "paymentType",
      headerName: "Payment Type",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "paymentStatus",
      headerName: "Payment",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        const paymentStatus = row?.paymentStatus;
        const id = row?.id;
        const style = paymentStatusStyles[paymentStatus] || {
          backgroundColor: "#9e9e9e",
          hoverColor: "#757575",
        };
        return (
          <Box>
            <Box>
              <Button
                sx={{
                  p: "2px",
                  color: "#fff",
                  backgroundColor: style.backgroundColor,
                  cursor:
                    paymentStatus === "PAID" || paymentStatus === "FAILED"
                      ? "not-allowed"
                      : "pointer",
                  pointerEvents:
                    paymentStatus === "PAID" || paymentStatus === "FAILED"
                      ? "none"
                      : "auto",
                }}
                onClick={() => handlePaymentUpdate({ id, paymentStatus })}
              >
                {row.paymentStatus}
              </Button>
            </Box>
          </Box>
        );
      },
    },

    {
      field: "action",
      headerName: "Details",
      flex: 0.8,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ color: "#1976d2" }}>
            <VisibilityOutlinedIcon />
          </IconButton>
          <Link
            href={`/dashboard/vendor/order-product/${row.id}`}
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        getRowHeight={() => "auto"}
        hideFooter
        disableRowSelectionOnClick
        disableColumnSorting
        disableColumnFilter
        disableMultipleRowSelection
        disableVirtualization
        sx={{
          background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
          color: "text.secondary",
          "& .MuiDataGrid-columnHeaders": {
            background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",

            fontWeight: 600,
            letterSpacing: "0.5px",
          },
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: 1.5,
            borderBottom: "1px solid #f0f0f0",
          },
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: "#f9f9f9",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#e3f2fd !important",
            transition: "all 0.25s ease-in-out",
            boxShadow: "inset 0 0 8px rgba(25,118,210,0.2)",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
        }}
      />
    </Box>
  );
};

export default AllOrderProduct;
