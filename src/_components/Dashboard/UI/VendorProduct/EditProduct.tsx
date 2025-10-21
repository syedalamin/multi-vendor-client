/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMImageInput from "@/_components/Form/EMImageInput";
import EMInput from "@/_components/Form/EMInput";
import EMSelect from "@/_components/Form/EMSelect";
import EMUploaderMany from "@/_components/Form/EMUploaderMany";
import Loading from "@/_components/Shared/Loading/Loading";

import {
  useGetProductIdQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi";
import { useGetAllSubCategoryQuery } from "@/redux/api/subCategoryApi";
import { modifyProductPayload } from "@/utils/ModifyFormData/modifyFormData";

import { Box, Button, Grid } from "@mui/material";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditProduct = ({ id , setOpen}: { id: string , setOpen: any}) => {
  const { data: subCategoryData } = useGetAllSubCategoryQuery({limit: 100});
  const [updateProduct] = useUpdateProductMutation();
  const { data: productData, isLoading } = useGetProductIdQuery(id);

  const {
    description,
    discount,
    name,
    price,
    stock,
    productImages,
    subCategoryId,
  } = productData?.data || "";

  const handleEdit = async (values: FieldValues) => {
    const {
      name,
      discount,
      subCategoryId,
      description,
      price,
      stock,
      file,
      removeImages,
    } = values;

    const payload = {
      name,
      subCategoryId,
      description,
      price: Number(price),
      discount: Number(discount),
      stock: Number(stock),
      removeImages,
    };
    const data = modifyProductPayload(payload, file);

    try {
      const res = await updateProduct({ id, data }).unwrap();
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
                label="Product Name"
                defaultValue={name}
                fullWidth={true}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="price"
                label="Price"
                fullWidth={true}
                defaultValue={price}
                type="number"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="stock"
                label="Stock"
                fullWidth={true}
                defaultValue={stock}
                type="number"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="discount"
                label="Discount Percent"
                defaultValue={discount}
                fullWidth={true}
                type="number"
              />
            </Grid>
            <Grid
              direction={"column"}
              container
              spacing={2}
              size={{ xs: 12, md: 6 }}
            >
              <Grid>
                <EMSelect
                  name="subCategoryId"
                  label="Category Id"
                  defaultValue={subCategoryId}
                  fullWidth={true}
                  options={
                    subCategoryData?.data?.map((item: any) => ({
                      label: item.name,
                      value: item.id,
                    })) || []
                  }
                />
              </Grid>

              <Grid>
                <EMUploaderMany name="file" label="Upload" />
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="description"
                label="Description"
                fullWidth={true}
                type="text"
                multiline={true}
                defaultValue={description}
                rows={4}
              />
            </Grid>
            <EMImageInput
              name="productsImages"
              removeFieldName="removeImages"
              images={productImages}
            />
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
              Edit Product
            </Button>
          </Box>
        </EMForm>
      </Box>
    </Box>
  );
};

export default EditProduct;
