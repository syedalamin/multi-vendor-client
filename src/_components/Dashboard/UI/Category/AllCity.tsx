/* eslint-disable @typescript-eslint/no-explicit-any */


import { useDeleteCityMutation } from "@/redux/api/cityApi";



import { Box,  IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";

import React from "react";
import { toast } from "sonner";

const AllCity = ({ data }: { data: any }) => {
 
  const [deleteCity] = useDeleteCityMutation()
  const handleDelete = async (id: string) => {
    try {
      
      const districtDeleted = await deleteCity(id).unwrap();
      toast.success(districtDeleted?.data?.message);
    } catch (err: any) {
      console.log(err);
    }
  };


  const columns: GridColDef[] = [

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

export default AllCity;
