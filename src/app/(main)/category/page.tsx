import AllCategory from "@/_components/Main/UI/CategorySection/AllCategory";
import { ProductPageProps } from "@/types/common";
import { Container } from "@mui/material";
import React from "react";

const CategoryPage = async ({ searchParams }: ProductPageProps) => {
  const params = await searchParams;
  const page = (await Number(params?.page)) || 1;
  const limit = (await Number(params?.limit)) || 12;
  return (
    <Container>
      <AllCategory page={page} limit={limit} />
    </Container>
  );
};

export default CategoryPage;
