/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMUploader from "@/_components/Form/EMUploader";
import FullScreenModal from "@/_components/Shared/Modal/FullScreenModal";
import { AddIcon, RemoveIcon } from "@/_Icons";
import { modifyPayload } from "@/utils/ModifyFormData/modifyFormData";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import AllSubCategory from "./AllSubCategory";
import {
  useCreateSubCategoryMutation,
  useGetAllSubCategoryQuery,
} from "@/redux/api/subCategoryApi";
import EMSelect from "@/_components/Form/EMSelect";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";

const SubCategory = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);

  const { data: categoryData } = useGetAllCategoryQuery({});
  const { data: subCategoryData } = useGetAllSubCategoryQuery({});

  const [createSubCategory] = useCreateSubCategoryMutation();

  console.log(categoryData?.data);
  const handleRegistration = async (values: FieldValues) => {
    const { name, categoryId, file } = values;

    const payload = {
      name,
      categoryId,
    };
    console.log(payload);
    const data = modifyPayload(payload, file);

    try {
      const res = await createSubCategory(data).unwrap();
      console.log(res)
      if (res?.success) {
        toast.success(res?.message);
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack>
      <Stack
        bgcolor={"white"}
        color={"black"}
        p={2}
        sx={{
          zIndex: 1200,
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
        display={"flex"}
      >
        <Box>
          <Typography component={"h2"} variant="h5" fontWeight={600}>
            Create Category
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={handleClickOpen}
            size="small"
            startIcon={open ? <RemoveIcon /> : <AddIcon />}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              color: "white",
              fontWeight: 600,
              borderRadius: "30px",
              textTransform: "none",
              px: 5,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
                boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Stack>
      <FullScreenModal open={open} setOpen={setOpen} title="Create Sub Category">
        <Box>
          <EMForm onSubmit={handleRegistration}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput name="name" label="Category Name" fullWidth={true} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMSelect
                  name="categoryId"
                  label="Category Id"
                  fullWidth={true}
                  options={
                    categoryData?.data?.map((item: any) => ({
                      label: item.name, 
                      value: item.id, 
                    })) || []
                  }
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <EMUploader name="file" label="Upload" />
              </Grid>
            </Grid>
            <Box>
              <Button
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  py: 1,
                  borderRadius: "30px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#43a047",
                  },
                }}
              >
                Create
              </Button>
            </Box>
          </EMForm>
        </Box>
      </FullScreenModal>
      <Stack>
        <AllSubCategory data={subCategoryData?.data} />
      </Stack>
    </Stack>
  );
};

export default SubCategory;
