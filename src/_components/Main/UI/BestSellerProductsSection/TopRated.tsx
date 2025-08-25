"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import MediaControlCard from "@/_components/UI/Card/MediaControlCard";
import { Product, ProductStatus } from "@/types/common";
import { Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";

const TopRated = ({ productData }: { productData: any }) => {
  const discount = useMemo(() => {
    return productData?.data
      ?.filter(
        (item: Product) =>
          item.stock <= 20 &&
          item.stock > 0 &&
          item.status === ProductStatus.ACTIVE
      )
      ?.sort(() => 0.5 - Math.random())
      ?.slice(0, 3);
  }, [productData?.data]);

  let product;

  if (productData.success) {
    product = (
      <Grid container spacing={1} direction={"column"} alignItems={"center"}>
        {discount?.map((item: Product) => (
          <Grid key={item.id}>
            <MediaControlCard item={item} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    product = (
      <>
        <Typography>NO Data</Typography>
      </>
    );
  }

  return product;
};

export default TopRated;
