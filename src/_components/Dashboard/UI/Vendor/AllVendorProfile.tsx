/* eslint-disable @typescript-eslint/no-explicit-any */
import EMSearchInput from "@/_components/Form/EMSearchInput";
import { AccountBoxIcon } from "@/_Icons";
import {
  useDeleteVendorMutation,
  useGetAllVendorsQuery,
  useVerifyStatusMutation,
} from "@/redux/api/vendorApi";

import { Avatar, Box, Button, CardMedia, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";

import React, { useState } from "react";
import { toast } from "sonner";

const AllVendorProfile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });

  const { data: vendorData, isLoading } = useGetAllVendorsQuery({
    limit: paginationModel.pageSize,
    page: paginationModel.page + 1,
  });

  const filteredData = vendorData?.vendor
    ?.filter((item: any) =>
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reverse();

  const [deleteVendor] = useDeleteVendorMutation();
  const [verifyStatus] = useVerifyStatusMutation();

  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const deletedVendor = await deleteVendor(id).unwrap();
      toast.success(deletedVendor?.data?.message);
    } catch (err: any) {
      console.log(err);
    }
  };
  const handleVerified = async (id: string) => {
    try {
      const verify = await verifyStatus(id).unwrap();
      toast.success(verify?.data?.message);
    } catch (err: any) {
      console.log(err);
    }
  };

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
    <Box sx={{ height: 500, width: "100%" }}>
      <Box py={2} sx={{ width: "100%" }}>
        <EMSearchInput
          label="Search by Gmail"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          align="right"
        />
      </Box>
      <DataGrid
        rows={filteredData || []}
        columns={columns}
        loading={isLoading}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowCount={vendorData?.meta?.total || 0}
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

export default AllVendorProfile;
