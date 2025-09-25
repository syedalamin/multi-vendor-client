"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import MediaControlCard from "@/_components/UI/Card/MediaControlCard";
import { Product, ProductStatus } from "@/types/common";
import { Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";

const HotDeal = ({ productData }: { productData: any }) => {
 
  const discount = useMemo(() => {
    return productData?.data
      ?.filter(
        (item: Product) =>
          item.discount >= 10 &&
          item.stock > 0 &&
          item.status === ProductStatus.ACTIVE
      )
      ?.sort(() => 0.5 - Math.random())
      ?.slice(0, 3);
  }, [productData?.data]);

  let product;

  if (productData?.success) {
    product = (
      <Grid container spacing={1} direction={"column"} alignItems={"start"}>
        {discount?.map((item: Product) => (
          <Grid
            key={item.id}
            sx={{
              height: "100%",
              width: "100%",
              border: "1px solid #e0e0e0",
              display: "flex",
              borderRadius: "8px",
              flexDirection: "column",
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s , border 0.3s ",
              "&:hover": {
                border: "1px solid #2e7d32",
                transform: "translateY(-4px)",
              },
            }}
          >
            <MediaControlCard item={item} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    product = (
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography textAlign={"center"}>NO Data</Typography>
      </Stack>
    );
  }

  return product;
};

export default HotDeal;
