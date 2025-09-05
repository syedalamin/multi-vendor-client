/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import FullScreenModal from "@/_components/Shared/Modal/FullScreenModal";
import { AddIcon, RemoveIcon } from "@/_Icons";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

import EMSelect from "@/_components/Form/EMSelect";
import { useGetAllSubCategoryQuery } from "@/redux/api/subCategoryApi";
import EMUploaderMany from "@/_components/Form/EMUploaderMany";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/redux/api/productApi";
import { modifyProductPayload } from "@/utils/ModifyFormData/modifyFormData";
import { toast } from "sonner";
import AllProduct from "./AllProduct";

const Product = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const [createProduct] = useCreateProductMutation();
  const { data: productData } = useGetProductsQuery({});
  const { data: subCategoryData } = useGetAllSubCategoryQuery({});

  const handleRegistration = async (values: FieldValues) => {
    const { name, discount, subCategoryId, description, price, stock, file } =
      values;

    const payload = {
      name,
      subCategoryId,
      price: Number(price),
      discount: Number(discount),
      stock: Number(stock),
      description,
    };


    const data = modifyProductPayload(payload, file);

    try {
      const res = await createProduct(data).unwrap();
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
      <FullScreenModal open={open} setOpen={setOpen} title="Create Product">
        <Box>
          <EMForm onSubmit={handleRegistration}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput name="name" label="Product Name" fullWidth={true} />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput
                  name="price"
                  label="Price"
                  fullWidth={true}
                  type="number"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput
                  name="stock"
                  label="Stock"
                  fullWidth={true}
                  type="number"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput
                  name="discount"
                  label="Discount"
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
                  rows={4}
                />
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
        <AllProduct data={productData?.data} />
      </Stack>
    </Stack>
  );
};

export default Product;
