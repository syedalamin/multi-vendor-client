/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Counter from "@/lib/Button/Counter";
import { useDeleteCartMutation } from "@/redux/api/cartApi";
import { CardMedia, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { useMemo } from "react";
import { toast } from "sonner";

export default function ShippingTable({ data }: { data: any }) {
  const [deleteCart] = useDeleteCartMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteCart(id).unwrap();
      toast.success("Cart Deleted");
    } catch (err: any) {
      console.log(err);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "productImage",
      headerName: "Product",
      flex: 1,
      headerAlign: "center",
      align: "center",
      type: undefined,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        return (
          <Box>
            <CardMedia
              sx={{
                width: "50%",
                height: "50%",
                borderRadius: 2,
              }}
              component="img"
              alt={row.productName}
              image={row?.productImage}
            />
          </Box>
        );
      },
    },
    {
      field: "productName",
      headerName: " ",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "basePrice",
      headerName: "BASE PRICE",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params: any) => {
        return <Counter params={params.row} />;
      },
    },

    {
      field: "discountPrice",
      headerName: "SUBTOTAL",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params: any) => {
        return Number(params.row.discountPrice) > 0
          ? params.row.discountPrice
          : params.row.price;
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <GridDeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const rows = useMemo(() => data || [], [data]);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
          borderRadius: 3,
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            outline: "none",
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
          "& .MuiButton-root": {
            outline: "none",
            boxShadow: "none",
          },
        }}
      />
    </Box>
  );
}
