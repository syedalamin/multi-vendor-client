"use client";

import { useGetMyOrdersQuery } from "@/redux/api/orderApi";
import { Stack } from "@mui/material";
import React from "react";
import MyOrderTable from "./MyOrderTable";

const MyOrder = () => {
  const { data } = useGetMyOrdersQuery({});

  let productData;

  
  if (data?.success) {
    productData = data?.data;
  }
  return <Stack>
    {productData  && <MyOrderTable data={productData} />}
  </Stack>;
};

export default MyOrder;
