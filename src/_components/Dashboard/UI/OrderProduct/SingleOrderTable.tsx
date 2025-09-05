/* eslint-disable @typescript-eslint/no-explicit-any */

import { AccountBoxIcon } from "@/_Icons";
import { Avatar, Box, CardMedia } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SingleOrderTable = ({ data }: { data: any }) => {


  const columns: GridColDef[] = [
    {
      field: "product",
      headerName: "Image",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {row?.product ? (
            <CardMedia
              sx={{ width: 50, height: 50, borderRadius: 2 }}
              component="img"
              alt={row?.productId}
              image={row?.product?.productImages[0]}
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
      headerName: "Name",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
       renderCell: ({ row }) => (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
         {row?.product?.name}
        </Box>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      
    },
    {
      field: "discountPrice",
      headerName: "Discount Price",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      
    },
    
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
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

export default SingleOrderTable;
