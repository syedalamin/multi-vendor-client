/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountBoxIcon } from "@/_Icons";


import { Avatar, Box, CardMedia, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";

import React from "react";
import { toast } from "sonner";

const AllCategory = ({ data }: { data: any }) => {
 
  const handleDelete = async (id: string) => {
    try {
      console.log(id);
      // await deleteAdmin(id).unwrap();
      toast.success("Store Deleted");
    } catch (err: any) {
      console.log(err);
    }
  };

  console.log(data);
  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {row?.image ? (
            <CardMedia
              sx={{ width: 50, height: 50, borderRadius: 2 }}
              component="img"
              alt={row.name}
              image={row.image}
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

export default AllCategory;
