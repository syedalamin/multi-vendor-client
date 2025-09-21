import { Container } from "@mui/material";
import Category from "./Category";
import React from "react";
import Loading from "@/_components/Shared/Loading/Loading";

const MainCategory = () => {
  return (
    <Container>
      <React.Suspense fallback={<Loading/>}>
        <Category />
      </React.Suspense>
    </Container>
  );
};

export default MainCategory;
