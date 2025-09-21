'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import { Product } from "@/types/common";
import { Grid, Stack, Typography } from "@mui/material";

const BestSellerProducts =  ({ productData }: { productData: any }) => {
  const averageRatting = productData?.data?.filter(
    (item: Product) => item?.averageRating >= 4 && item?.stock > 0
  );

  let product;

 
  if (productData?.success) {
    product = (
      <Stack py={4}>
        <Stack>
          <Typography
            py={2}
            variant="h4"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.3rem",
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
              textAlign: "center",
            }}
          >
            Featured Products
          </Typography>
        </Stack>
        <Grid container spacing={2} alignItems={"center"}>
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
