
import RelatedProducts from "@/_components/Main/UI/Product/RelatedProducts";
import SingleProduct from "@/_components/Main/UI/Product/SingleProduct";
import { apiSingleFetcher } from "@/lib/NextFetch/fetcher";
import { Container } from "@mui/material";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;

  const singleProduct = await apiSingleFetcher(`/product/${productId}`);
  const { name, description, productImages, slug, subCategory } =
    singleProduct.data;

  console.log(productImages[0]);

  return {
    title: name,
    description: description.slice(0, 100),
    keywords: [name, slug, subCategory.name, subCategory.slug],
    openGraph: {
      title: name,
      description: description,
      images: [
        {
          url: productImages[0],
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
  };
}

const SingleProductPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = await params;
  const singleProduct = await apiSingleFetcher(`/product/${productId}`);

  return (
    <Container>
      <SingleProduct singleProduct={singleProduct?.data} />
      <RelatedProducts singleProduct={singleProduct?.data} />
    </Container>
  );
};

export default SingleProductPage;
