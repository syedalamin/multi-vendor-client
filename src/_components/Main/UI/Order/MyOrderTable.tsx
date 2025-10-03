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
      headerName: "Customer Info",
      headerAlign: "center",
      align: "center",
      minWidth: 250,
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
            </Box>
          </Box>
        );
      },
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },

    {
      field: "deliveryCharge",
      headerName: "Delivery Charge",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "status",
      headerName: "Delivery",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
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
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
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

export default MyOrderTable;
