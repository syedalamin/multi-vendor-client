/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountBoxIcon } from "@/_Icons";
// import { useDeleteSubCategoryMutation } from "@/redux/api/subCategoryApi";
import FullScreenModal from "@/_components/Shared/Modal/FullScreenModal";
import { Avatar, Box, CardMedia, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import React, { useState } from "react";
// import { toast } from "sonner";
import EditSubCategory from "./SubCategoryEdit";
import { EditOutlined } from "@mui/icons-material";

const AllSubCategory = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);
  const [categorySlug, setCategorySlug] = useState("");
  // const [deleteSubCategory] = useDeleteSubCategoryMutation();
  // const handleDelete = async (id: string) => {
  //   try {
  //     console.log(id);
  //     const subCategoryDeleted = await deleteSubCategory(id).unwrap();
  //     toast.success(subCategoryDeleted.data.message);
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // };

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
            {/* <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <GridDeleteIcon />
            </IconButton> */}
            <IconButton
              onClick={() => {
                setOpen(true);
                setCategorySlug(row.slug);
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
      <FullScreenModal open={open} setOpen={setOpen} title="Edit Sub Category">
        <EditSubCategory slug={categorySlug} setOpen={setOpen} />
      </FullScreenModal>
    </Box>
  );
};

export default AllSubCategory;
