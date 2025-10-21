/* eslint-disable @typescript-eslint/no-explicit-any */
"use state";
import FullScreenModal from "@/_components/Shared/Modal/FullScreenModal";
import EMForm from "@/_components/Form/EMForm";
import EMSearchInput from "@/_components/Form/EMSearchInput";
import EMSelect from "@/_components/Form/EMSelect";
import { VisibilityOutlinedIcon } from "@/_Icons";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import {
  useUpdateOrderPaymentStatusMutation,
  useUpdateOrderStatusMutation,
} from "@/redux/api/orderApi";

import { Box,  IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import Invoice from "../Vendor/Invoice";

const AllOrderProduct = ({ data }: { data: any }) => {
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [updateOrderPaymentStatus] = useUpdateOrderPaymentStatusMutation();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const filteredData = data
    ?.filter((item: any) =>
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reverse();

  const statusStyles: Record<string, string> = {
    PENDING: "#ff9800",
    SHIPPED: "#2196f3",
    DELIVERED: "#4caf50",
    CANCELLED: "#f44336",
  };

  const paymentStatusStyles: Record<string, string> = {
    PENDING: "#ff9800",
    PAID: "#4caf50",
    FAILED: "#f44336",
  };
  const handleStatusEdit = async (values: FieldValues) => {
    console.log(values);
  };

  const handleUpdate = async ({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => {
    console.log(id, status);

    try {
      const updated = await updateOrderStatus({
        id: id,
        status: status,
      }).unwrap();
      toast.success(updated?.message);
    } catch (err: any) {
      toast.error(err?.data);
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
      const updated = await updateOrderPaymentStatus({
        id: id,
        paymentStatus: paymentStatus,
      }).unwrap();
      toast.success(updated?.message);
    } catch (err: any) {
      toast.error(err?.data);
    }
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
            href={`/dashboard/vendor/order-product/${row.id}`}
          >
            <IconButton sx={{ color: "#1976d2" }}>
              <VisibilityOutlinedIcon />
            </IconButton>
          </Typography>
          <Typography>
            <IconButton
              onClick={() => {
                setOpen(true);
                setSelectedOrder(row);
              }}
              sx={{ color: "#1976d2" }}
            >
              <LocalPrintshopIcon />
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
      minWidth: 170,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        const status = row?.status;
        const id = row?.id;

        return (
          <Box>
            <EMForm onSubmit={handleStatusEdit}>
              <EMSelect
                name="status"
                fullWidth
                defaultValue={status}
                textColor={statusStyles[status]}
                onChange={(event: any) =>
                  handleUpdate({ id, status: event.target.value })
                }
                options={[
                  { label: "PENDING", value: "PENDING" },
                  { label: "SHIPPED", value: "SHIPPED" },
                  { label: "DELIVERED", value: "DELIVERED" },
                  { label: "CANCELLED", value: "CANCELLED" },
                ]}
              />
            </EMForm>
          </Box>
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
      minWidth: 120,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        const paymentStatus = row?.paymentStatus;
        const id = row?.id;

        return (
          <Box>
            <Box>
              <EMForm onSubmit={handleStatusEdit}>
                <EMSelect
                  name="paymentStatus"
                  fullWidth
                  defaultValue={paymentStatus}
                  textColor={paymentStatusStyles[paymentStatus]}
                  onChange={(event: any) =>
                    handlePaymentUpdate({
                      id,
                      paymentStatus: event.target.value,
                    })
                  }
                  options={[
                    { label: "PENDING", value: "PENDING" },
                    { label: "PAID", value: "PAID" },
                    { label: "FAILED", value: "FAILED" },
                  ]}
                />
              </EMForm>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <EMSearchInput
          label="Search by Order ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          align="right"
        />
      </Box>
      <DataGrid
        rows={filteredData || []}
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
      <FullScreenModal open={open} setOpen={setOpen}>
        {selectedOrder && <Invoice data={selectedOrder} setOpen={setOpen} />}
      </FullScreenModal>
    </Box>
  );
};

export default AllOrderProduct;

 