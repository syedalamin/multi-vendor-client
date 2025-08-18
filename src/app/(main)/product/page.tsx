import ProductData from "@/_components/Main/UI/Product/Product";
import { Container } from "@mui/material";

type ProductPageProps = {
  searchParams: { page?: number; limit?: number };
};

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const params = await searchParams;
  const page = await Number(params?.page) || 1;
  const limit = await Number(params?.limit) || 5;
  return (
    <Container>
      <ProductData page={page} limit={limit} />
    </Container>
  );
};

export default ProductPage;
