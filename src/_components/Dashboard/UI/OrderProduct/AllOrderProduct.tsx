/* eslint-disable @typescript-eslint/no-explicit-any */

import { VisibilityOutlinedIcon } from "@/_Icons";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import React from "react";

const AllOrderProduct = ({ data }: { data: any }) => {
  const statusStyles: Record<string, any> = {
    PENDING: { backgroundColor: "#ff9800" },
    SHIPPED: { backgroundColor: "#2196f3" },
    DELIVERED: { backgroundColor: "#4caf50" },
    CANCELLED: { backgroundColor: "#f44336" },
  };
  const paymentStatusStyles: Record<string, any> = {
    PENDING: { backgroundColor: "#ff9800", hoverColor: "#e68900" },
    PAID: { backgroundColor: "#4caf50", hoverColor: "#388e3c" },
    FAILED: { backgroundColor: "#f44336", hoverColor: "#d32f2f" },
  };

  const columns: GridColDef[] = [
    {
      field: "action",
      headerName: "Details",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box>
          <Typography
            component={Link}
            href={`/dashboard/admin/order-product/${row.id}`}
          >
            <IconButton sx={{ color: "#1976d2" }}>
              <VisibilityOutlinedIcon />
            </IconButton>
          </Typography>
        </Box>
      ),
    },
    {
      field: "id",
      headerName: "orderId",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "shippingInfo",
      headerName: "Info",
      headerAlign: "center",
      align: "left",
      minWidth: 200,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const info = params.value;
        if (!info) return "N/A";

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
                Contact: {info.phone}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                District: {info.districts}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                Thana: {info.city}
              </Typography>

              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                Post Code: {info.postalCode}
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                {info.address}
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#555" }}>
                {info.notes}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      field: "totalAmount",
      headerName: "Total",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "deliveryCharge",
      headerName: "Delivery",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        const status = row.status;
        const style = statusStyles[status] || { backgroundColor: "#9e9e9e" };
        return (
          <Typography
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "center",
              color: "#fff",
              display: "inline-block",
              minWidth: "100px",
              backgroundColor: style.backgroundColor,
            }}
          >
            {row.status}
          </Typography>
        );
      },
    },
    {
      field: "paymentType",
      headerName: "Type",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "paymentStatus",
      headerName: "Payment",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        const paymentStatus = row?.paymentStatus;

        const style = paymentStatusStyles[paymentStatus] || {
          backgroundColor: "#9e9e9e",
          hoverColor: "#757575",
        };
        return (
          <Typography
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "center",
              color: "#fff",
              display: "inline-block",
              minWidth: "90px",
              backgroundColor: style.backgroundColor,
            }}
          >
            {row.paymentStatus}
          </Typography>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowHeight={() => "auto"}
        hideFooter
        disableRowSelectionOnClick
        disableColumnSorting
        disableColumnFilter
        disableMultipleRowSelection
        disableVirtualization
        sx={{
          border: "1px solid #e0e0e0",
          background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
          color: "text.secondary",

          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
          },

          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },

          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },

          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "inherit",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            textAlign: "center",
            width: "100%",
          },

          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
      />
    </Box>
  );
};

export default AllOrderProduct;
