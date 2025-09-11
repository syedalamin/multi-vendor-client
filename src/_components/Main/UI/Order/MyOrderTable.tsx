/* eslint-disable @typescript-eslint/no-explicit-any */

import { VisibilityOutlinedIcon } from "@/_Icons";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";

const MyOrderTable = ({ data }: { data: any }) => {
  const statusStyles: Record<string, any> = {
    PENDING: { backgroundColor: "#ff9800" },
    SHIPPED: { backgroundColor: "#2196f3" },
    DELIVERED: { backgroundColor: "#4caf50" },
    CANCELLED: { backgroundColor: "#f44336" },
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }} py={4}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 600, color: "#1976d2" }}
              >
               Name:   {info.firstName} {info.lastName}
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
                {labels.postalCode}Post Code:  {info.postalCode}
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
              backgroundColor: style.backgroundColor,
              display: "inline-block",
              minWidth: "90px",
            }}
          >
            {row.status}
          </Typography>
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
            href={`/orders/${row.id}`}
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        height: 600
      }}
    >
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
          border: "none",
          background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
          color: "text.secondary",
          "& .MuiDataGrid-columnHeaders": {
            background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
     
            fontSize: "18px",
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

export default MyOrderTable;
