"use client";
import { useGetSingleVendorQuery } from "@/redux/api/vendorApi";
import React from "react";
import ShopDetails from "./ShopDetails";
import { Container } from "@mui/material";
import Loading from "@/_components/Shared/Loading/Loading";

const SingleShop = ({ slug }: { slug: string }) => {
  const { data: shopData, isLoading } = useGetSingleVendorQuery(slug);
  

  if(isLoading){
    return <Loading/>
  }

  return (
    <Container>
      <ShopDetails item={shopData?.data} />
    </Container>
  );
};

export default SingleShop;
