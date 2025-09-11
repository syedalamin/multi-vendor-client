
/* eslint-disable @typescript-eslint/no-explicit-any */

import BackButton from "@/_components/Button/BackButton";
import OrderSingleDetails from "@/_components/Dashboard/UI/VendorProduct/OrderSingleDetails";
import {  Container } from "@mui/material";

import React from "react";

const MySingleOrder = async ({ params }: { params: any }) => {
  const { orderId } = await params;
  
  return (
    <Container>
      <OrderSingleDetails id={orderId} />
     <BackButton/>
    </Container>
  );
};

export default MySingleOrder;
