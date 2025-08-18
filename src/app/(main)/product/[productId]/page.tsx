import SingleProduct from "@/_components/Main/UI/Product/SingleProduct";
import { apiSingleFetcher } from "@/lib/NextFetch/fetcher";
import { Container } from "@mui/material";

const SingleProductPage =async ({
  params,
}: {
  params: Promise<{ productId: string }>
}) => {
   const { productId } = await params
   const singleProduct = await apiSingleFetcher(`/product/${productId}`)

  return <Container><SingleProduct singleProduct={singleProduct?.data}/></Container>
};

export default SingleProductPage;
