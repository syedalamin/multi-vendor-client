import ProductData from "@/_components/Main/UI/Product/Product";

import { ProductPageProps } from "@/types/common";

import { Container } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "...",
};

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const params = await searchParams;
  const page = (await Number(params?.page)) || 1;
  const limit = (await Number(params?.limit)) || 12;
  return (
    <Container>
      <ProductData page={page} limit={limit} />
    </Container>
  );
};

export default ProductPage;
