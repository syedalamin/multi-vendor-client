"use client";
import Loading from "@/_components/Shared/Loading/Loading";
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";

import { useGetProductsQuery } from "@/redux/api/productApi";
import { Product } from "@/types/common";

import { Grid, Stack, Typography } from "@mui/material";

const PopularProduct = () => {
  const page = 1;
  const limit = 10;
  const { data: productData, isLoading } = useGetProductsQuery({
    page: page,
    limit: limit,
  });

  let popularProduct;

  if (isLoading) {
    return <Loading />;
  }
  if (productData?.success) {
    popularProduct = (
      <Stack>
        <Stack>
          <Typography
            pb={5}
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
            Popular Product
          </Typography>
        </Stack>
        <Grid
          container
          spacing={2}
          alignItems={"stretch"}
          justifyContent={"center"}
        >
          {productData?.data?.map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 12 / 4, lg: 12 / 5 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  } else {
    popularProduct = (
      <Stack
        sx={{
    
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography textAlign={"center"}>NO Data</Typography>
      </Stack>
    );
  }

  return <>{popularProduct}</>;
};

export default PopularProduct;
