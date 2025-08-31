


import Category from "@/_components/Main/UI/CategorySection/Category";
import { Container } from "@mui/material";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Category",
  description: "...",
};

const CategoryPage = async () => {
  return (
    <Container>
      <Category />
    </Container>
  );
};

export default CategoryPage;
