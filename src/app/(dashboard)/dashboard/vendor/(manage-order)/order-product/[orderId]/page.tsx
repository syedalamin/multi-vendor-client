
/* eslint-disable @typescript-eslint/no-explicit-any */

import OrderSingleDetails from "@/_components/Dashboard/UI/VendorProduct/OrderSingleDetails";
import { Stack } from "@mui/material";
import React from "react";

const SingleOrder = async ({ params }: { params: any }) => {
  const { orderId } = await params;

  return <Stack>
    <OrderSingleDetails id={orderId}/>
  </Stack>;
};

export default SingleOrder;
