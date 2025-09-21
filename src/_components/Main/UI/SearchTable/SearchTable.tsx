/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Box, CardMedia } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SearchTable = ({ data }: { data: any }) => {
  const columns: GridColDef[] = [
    {
      field: "productImages",
      headerName: "Product",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <CardMedia
            sx={{ width: 50, height: 50, borderRadius: 2 }}
            component="img"
            alt={row.productName}
            image={row?.productImages?.[0]}
          />
          <Link
            href={`/product/${row.slug}`}
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />
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
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {row.name}
          <Link
            href={`/product/${row.slug}`}
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />
        </Box>
      ),
    },
    {
      field: "price",
      headerName: "BASE PRICE",
      flex: 1,
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {row.price}
          <Link
            href={`/product/${row.slug}`}
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />
        </Box>
      ),
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
          py: 2,
          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            display: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            display: "none",
          },
        }}
      />
    </Box>
  );
};

export default SearchTable;
