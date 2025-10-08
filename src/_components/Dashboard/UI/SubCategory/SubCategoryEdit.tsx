/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";

import EMInput from "@/_components/Form/EMInput";
import EMSelect from "@/_components/Form/EMSelect";

import EMUploader from "@/_components/Form/EMUploader";

import Loading from "@/_components/Shared/Loading/Loading";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";

import {
 
  useGetSingleSubCategoryQuery,
  useUpdateSubCategoryMutation,
} from "@/redux/api/subCategoryApi";

import { modifyPayload } from "@/utils/ModifyFormData/modifyFormData";

import { Box, Button, Grid } from "@mui/material";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditSubCategory = ({ slug, setOpen }: { slug: string; setOpen: any }) => {
  const [updateSubCategory] = useUpdateSubCategoryMutation();
  const { data: categorySubData } = useGetAllCategoryQuery({});
  const { data: categoryData, isLoading } = useGetSingleSubCategoryQuery(slug);

  const { name, id , categoryId} = categoryData?.data || "";

 

  const handleEdit = async (values: FieldValues) => {
    const { name, categoryId, file } = values;

    const payload = {
      name,
      categoryId,
    };
    const data = modifyPayload(payload, file);

    try {
      const res = await updateSubCategory({ id, data }).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        setOpen(false);
      }
    } catch (err: any) {
      toast.success(err?.data);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box>
        <EMForm onSubmit={handleEdit}>
          <Grid wrap="wrap" container spacing={2} my={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="name"
                label="Category Name"
                defaultValue={name}
                fullWidth={true}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMSelect
                name="categoryId"
                label="Category Id"
                defaultValue={categoryId}
                fullWidth={true}
                options={
                  categorySubData?.data?.map((item: any) => ({
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
              Edit Sub Category
            </Button>
          </Box>
        </EMForm>
      </Box>
    </Box>
  );
};

export default EditSubCategory;
