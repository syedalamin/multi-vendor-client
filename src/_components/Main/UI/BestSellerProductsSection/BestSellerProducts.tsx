/* eslint-disable @typescript-eslint/no-explicit-any */
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import { Product, ProductStatus } from "@/types/common";
import { Grid, Stack, Typography } from "@mui/material";


const BestSellerProducts = async ({productData}: {productData : any}) => {
  


  const averageRatting = productData?.data?.filter(
    (item: Product) =>
      item.averageRating >= 4 &&
      item.stock > 0 &&
      item.status == ProductStatus.ACTIVE
  );

  let product;

  if (productData.success) {
    product = (
      <Stack py={4}>
        <Grid container spacing={2} alignItems={"center"} >
          {averageRatting?.slice(0, 5)?.map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 12 / 5 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  } else {
    product = (
      <>
        <Typography>NO Data</Typography>
      </>
    );
  }

  return product;
};

export default BestSellerProducts;
