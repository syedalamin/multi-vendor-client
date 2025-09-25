import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import { apiFetcher } from "@/lib/NextFetch/fetcher";
import { Product } from "@/types/common";

import { Grid, Stack, Typography } from "@mui/material";



const RelatedProducts = async ({ singleProduct }: { singleProduct: Product }) => {
  
  const {
    id,
  } = singleProduct;
  const product = await apiFetcher(`/product/related/${id}`);



  let relatedProducts;

  if (product.success) {
    relatedProducts = (
      <Stack>
        <Stack>
          <Typography
            py={2}
            variant="h4"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
                lg: "2.4rem",
              },
              fontWeight: {
                xs: 600,
                md: 700,
              },
              lineHeight: {
                xs: 1.4,
                md: 1.6,
              },
              textAlign: "center"
            }}
          >
           Related Products
          </Typography>
        </Stack>
        <Grid
          container
          spacing={2}
          alignItems={"stretch"}
          justifyContent={"center"}
        >
          {product.data?.map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3}}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  } else {
    relatedProducts = (
      <>
        <Typography>NO Data</Typography>
      </>
    );
  }

  return <>{relatedProducts}</>;
};

export default RelatedProducts;
