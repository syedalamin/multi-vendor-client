import Order from "@/_components/Main/UI/Order/Order";
import { Container } from "@mui/material";
import React from "react";

const ShippingPage = () => {
  return (
    <Container
      sx={{
        my: 4,
      }}
    >
      <Order/>
    </Container>
  );
};

export default ShippingPage;
