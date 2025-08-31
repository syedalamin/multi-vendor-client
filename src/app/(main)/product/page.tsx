import Product from "@/_components/Main/UI/Product/Product";
import { Container } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "...",
};

const ProductPage = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};

export default ProductPage;
