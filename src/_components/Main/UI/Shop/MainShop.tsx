import { Container } from "@mui/material";
import Shop from "./Shop";
import React from "react";
import Loading from "@/_components/Shared/Loading/Loading";

const MainShop = () => {
  return (
    <Container>
      <React.Suspense fallback={<Loading />}>
        <Shop />
      </React.Suspense>
    </Container>
  );
};

export default MainShop;
