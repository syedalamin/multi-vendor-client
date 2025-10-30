/* eslint-disable @typescript-eslint/no-explicit-any */

import { AccountBoxIcon,   } from "@/_Icons";
import { Avatar, Box, CardMedia,   } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
 

const SingleOrderTable = ({ data }: { data: any }) => {
  
  const columns: GridColDef[] = [
    // {
    //   field: "action",
    //   headerName: "Details",
    //   headerAlign: "center",
    //   align: "center",
    //   sortable: false,
    //   filterable: false,
    //   hideable: false,
    //   disableColumnMenu: true,
    //   renderCell: ({ row }) => (
    //     <Box>
    //       <IconButton sx={{ color: "#1976d2" }}>
    //         <VisibilityOutlinedIcon />
    //       </IconButton>
    //       <Link
    //         href={`/product/${row?.product?.slug}`}
    //         style={{ position: "absolute", inset: 0, zIndex: 1 }}
    //       />
    //     </Box>
    //   ),
    // },
    {
      field: "orderId",
      headerName: "Order Id",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "product",
      headerName: "Image",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box>
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
      headerAlign: "center",
      align: "center",
      minWidth: 250,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box
          sx={{
            whiteSpace: "normal",
            wordBreak: "break-word",
            lineHeight: 1.2,
          }}
        >
          {row?.product?.name}
        </Box>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      headerAlign: "center",
        minWidth: 100,
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "discount",
      headerName: "Percentage",
      headerAlign: "center",
     
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => <Box>{row?.product?.discount}</Box>,
    },
    {
      field: "discountPrice",
      headerName: "Discount Price",
      headerAlign: "center",
      minWidth: 150,
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerAlign: "center",
      align: "center",
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

export default SingleOrderTable;
