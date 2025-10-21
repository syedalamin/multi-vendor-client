 
import FullScreenModal from "@/_components/Shared/Modal/FullScreenModal";
import { AccountBoxIcon } from "@/_Icons";
// import { useDeleteCategoryMutation } from "@/redux/api/categoryApi";
import { EditOutlined } from "@mui/icons-material";

import { Avatar, Box, CardMedia, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import React, { useState } from "react";

import EditCategory from "./CategoryEdit";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
// import { toast } from "sonner";

const AllCategory = () => {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });

  const { data: categoryData, isLoading } = useGetAllCategoryQuery({
    limit: paginationModel.pageSize,
    page: paginationModel.page + 1,
  });

  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");

  const columns: GridColDef[] = [
    {
      field: "image",
      headerName: "Image",
      headerAlign: "center",
      align: "center",

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
          {row?.name}
        </Box>
      ),
    },

    {
      field: "isDeleted",
      headerName: "Is Deleted",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => {
                setOpen(true);
                setCategoryId(row.slug);
              }}
            >
              <EditOutlined />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={categoryData?.data || []}
        columns={columns}
        loading={isLoading}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowCount={categoryData?.meta?.total || 0}
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
      <FullScreenModal open={open} setOpen={setOpen} title="Edit Category">
        <EditCategory slug={categoryId} setOpen={setOpen} />
      </FullScreenModal>
    </Box>
  );
};

export default AllCategory;
