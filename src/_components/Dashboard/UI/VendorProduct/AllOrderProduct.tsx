/* eslint-disable @typescript-eslint/no-explicit-any */
"use state";

import { VisibilityOutlinedIcon } from "@/_Icons";
import { useUpdateOrderPaymentStatusMutation, useUpdateOrderStatusMutation } from "@/redux/api/orderApi";

import { Box, Button, IconButton } from "@mui/material";
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

        const textStyle = {
          fontSize: "18px",
          fontWeight: 500,
          whiteSpace: "normal",
          wordBreak: "break-word",
        };

        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Box sx={textStyle}>
              <span style={{ fontWeight: 700, color: "#1976d2" }}>Name: </span>
              {info.firstName} {info.lastName}
            </Box>
            <Box sx={textStyle}>
              <span style={{ fontWeight: 700, color: "#1976d2" }}>
                Contact:{" "}
              </span>
              {info.phone}
            </Box>
            <Box sx={textStyle}>
              <span style={{ fontWeight: 700, color: "#1976d2" }}>
                District:{" "}
              </span>
              {info.districts}
            </Box>
            <Box sx={textStyle}>
              <span style={{ fontWeight: 700, color: "#1976d2" }}>City: </span>
              {info.city}
            </Box>
            <Box sx={textStyle}>
              <span style={{ fontWeight: 700, color: "#1976d2" }}>
                Postal Code:{" "}
              </span>
              {info.postalCode}
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
          <IconButton>
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
          border: "1px solid #e0e0e0",
          background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
          color: "text.secondary",
          borderRadius: 0,
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: 1.4,
          },
          "& .MuiDataGrid-columnHeader": {
            textAlign: "left",
            fontSize: "17px",
            fontWeight: 600,
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "inherit",
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
