/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountBoxIcon } from "@/_Icons";
import { useDeleteAdminMutation, useGetAllAdminsQuery } from "@/redux/api/adminApi";

import { Avatar, Box, CardMedia, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";

import React, { useState } from "react";
import { toast } from "sonner";

const AdminAllProfile = () => {
 
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const { data: adminData, isLoading } = useGetAllAdminsQuery({
    limit: paginationModel.pageSize,
    page: paginationModel.page + 1,
  });

  const [deleteAdmin] = useDeleteAdminMutation();
  const handleDelete = async (id: string) => {
    try {
      const adminDeleted = await deleteAdmin(id).unwrap();
      toast.success(adminDeleted?.data?.message);
    } catch (err: any) {
      toast.error(err?.data);
    }
  };
  // console.log(adminData?.meta);
  const columns: GridColDef[] = [
    {
      field: "profilePhoto",
      headerName: "Image",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {row?.profilePhoto ? (
            <CardMedia
              sx={{ width: 50, height: 50, borderRadius: 2 }}
              component="img"
              alt={row.lastName}
              image={row.profilePhoto}
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
      field: "firstName",
      headerName: "Name",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box>
          {row.firstName} {row.lastName}
        </Box>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "isDeleted",
      headerName: "Deleted",
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
        rows={adminData?.admin?.data || []}
        columns={columns}
        loading={isLoading}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowCount={adminData?.meta?.total  || 0}
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

export default AdminAllProfile;
