import Order from "@/_components/Main/UI/Order/Order";
import { Container } from "@mui/material";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping - TrustyShop BD",
  description: "...",
};
const ShippingPage = () => {
  return (
    <Container
      sx={{
        my: 4,
      }}
    >
      <Order />
    </Container>
  );
};

export default ShippingPage;
