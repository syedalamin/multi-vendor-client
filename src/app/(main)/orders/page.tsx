import MyOrder from "@/_components/Main/UI/Order/MyOrder";
import { Container } from "@mui/material";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "My Orders",
  description: "...",
};
const MyOrdersPage = () => {
  return <Container>
    <MyOrder/>
  </Container>;
};

export default MyOrdersPage;
