/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountBoxIcon } from "@/_Icons";
import { useVerifyStatusMutation } from "@/redux/api/vendorApi";
// import { useDeleteAdminMutation } from "@/redux/api/adminApi";

import { Avatar, Box, Button, CardMedia, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";

import React from "react";
import { toast } from "sonner";

const AllVendorProfile = ({ data }: { data: any }) => {
  // const [deleteAdmin] = useDeleteAdminMutation();
  const [verifyStatus] = useVerifyStatusMutation();
  const handleDelete = async (id: string) => {
    try {
      console.log(id);
      // await deleteAdmin(id).unwrap();
      toast.success("Store Deleted");
    } catch (err: any) {
      console.log(err);
    }
  };
  const handleVerified = async (id: string) => {
    try {
      const verify = await verifyStatus(id).unwrap();
      console.log(verify);
      toast.success("Store Verified");
    } catch (err: any) {
      console.log(err);
    }
  };
  console.log(data);
  const columns: GridColDef[] = [
    {
      field: "logo",
      headerName: "Logo",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {row?.logo ? (
            <CardMedia
              sx={{ width: 50, height: 50, borderRadius: 2 }}
              component="img"
              alt={row.lastName}
              image={row.logo}
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
      field: "shopName",
      headerName: "Shop Name",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
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
      field: "isVerified",
      headerName: "Verified",
      flex: 1,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Button
              sx={{
                p: "2px",
                backgroundColor: row.isVerified ? "#4caf50" : "#f44336",
                color: "#fff",
                "&:hover": {
                  backgroundColor: row.isVerified ? "#45a049" : "#d32f2f",
                },
              }}
              onClick={() => handleVerified(row.id)}
            >
              {row.isVerified ? "True" : "False"}
            </Button>
          </Box>
        );
      },
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

export default AllVendorProfile;
