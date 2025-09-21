import Loading from "@/_components/Shared/Loading/Loading";
import { Container } from "@mui/material";
import React from "react";
import Product from "./Product";

const MainProduct = () => {
  return (
    <Container>
      <React.Suspense fallback={<Loading />}>
        <Product />
      </React.Suspense>
    </Container>
  );
};

export default MainProduct;
