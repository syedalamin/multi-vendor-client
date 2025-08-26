import ProductData from "@/_components/Main/UI/Product/Product";

import { ProductPageProps } from "@/types/common";

import { Container } from "@mui/material";


const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const params = await searchParams;
  const page = await Number(params?.page) || 1;
  const limit = await Number(params?.limit) || 12;
  return (
    <Container>
      {/* <SearchResult searchTerm="green"/> */}
      <ProductData page={page} limit={limit} />
    </Container>
  );
};

export default ProductPage;
