"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountBoxIcon } from "@/_Icons";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/productApi";

import { Avatar, Box, CardMedia, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";

import React from "react";
import { toast } from "sonner";

const AllProduct = () => {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });

  
  const { data: productData, isLoading } = useGetProductsQuery({
    limit: paginationModel.pageSize,
    page: paginationModel.page + 1,
  });

  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = async (id: string) => {
    try {
      const productDeleted = await deleteProduct(id).unwrap();
      toast.success(productDeleted?.data?.message);
    } catch (err: any) {
      console.log(err);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "productImages",
      headerName: "Image",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {row?.productImages ? (
            <CardMedia
              sx={{ width: 50, height: 50, borderRadius: 2 }}
              component="img"
              alt={row.name}
              image={row.productImages[0]}
            />
          ) : (
            <Avatar sx={{ width: 50, height: 50 }}>
              <AccountBoxIcon />
            </Avatar>
          )}
        </Box>
      ),
    },
    {
      field: "name",
      headerName: "Product Name",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "stock",
      headerName: "Product Stock",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },

    {
      field: "discount",
      headerName: "Discount Price",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box>
          {row?.price && (row.price * (1 - row.discount / 100)).toFixed(2)}
        </Box>
      ),
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
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
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={productData?.data || []}
        columns={columns}
        loading={isLoading}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowCount={productData?.meta?.total || 0}
        pageSizeOptions={[5, 10, 20, 50]}
        paginationMode="server"
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
            justifyContent: "start",
            alignItems: "start",
            outline: "none",
            cursor: "pointer",
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

          "& .MuiDataGrid-columnHeader": {
            textAlign: "left",
          },
        }}
      />
    </Box>
  );
};

export default AllProduct;
