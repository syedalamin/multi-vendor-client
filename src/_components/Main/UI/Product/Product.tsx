"use client";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React from "react";
import AllProductData from "./AllProduct";


const Product = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  return <Stack>
    <AllProductData page={page} limit={limit}/>
  </Stack>;
};

export default Product;
