/* eslint-disable @typescript-eslint/no-explicit-any */

import { VisibilityOutlinedIcon } from "@/_Icons";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";

const MyOrderTable = ({ data }: { data: any }) => {
  console.log(data);
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
   <Box>
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
   </Box>
  );
};


export default MyOrderTable;





// const MyOrderTable = ({ data }: { data: any }) => {
//   console.log(data);
//   const columns: GridColDef[] = [
//     {
//       field: "paymentStatus",
//       headerName: "Payment Status",
//       flex: 1,
//       sortable: false,
//       filterable: false,
//       hideable: false,
//       disableColumnMenu: true,
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       flex: 1,
//       sortable: false,
//       filterable: false,
//       hideable: false,
//       disableColumnMenu: true,
//     },
//     {
//       field: "totalAmount",
//       headerName: "Total Amount",
//       flex: 1,
//       sortable: false,
//       filterable: false,
//       hideable: false,
//       disableColumnMenu: true,
//     },
//   ];

//   return (
//     <Box sx={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={data}
//         columns={columns}
//         hideFooter
//         disableRowSelectionOnClick
//         disableColumnSorting
//         disableColumnFilter
//         disableMultipleRowSelection
//         disableVirtualization
//         sx={{
//           border: "1px solid #e0e0e0",
//           background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
//           color: "text.secondary",
//           borderRadius: 3,
//           "& .MuiDataGrid-cell": {
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             outline: "none",
//             cursor: "pointer",
//           },
//           "& .MuiDataGrid-cell:focus-within": {
//             outline: "none",
//           },
//           "& .MuiDataGrid-row.Mui-selected": {
//             backgroundColor: "inherit",
//           },
//           "& .MuiDataGrid-columnHeader:focus": {
//             outline: "none",
//           },
//         }}
//       />
//     </Box>
//   );
// };

// export default MyOrderTable;
