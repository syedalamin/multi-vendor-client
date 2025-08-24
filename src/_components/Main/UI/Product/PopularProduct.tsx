import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import { apiFetcher } from "@/lib/NextFetch/fetcher";
import { Product } from "@/types/common";

import { Grid, Stack, Typography } from "@mui/material";

import React from "react";

const PopularProduct = async () => {
  const product = await apiFetcher("/product");

  // console.log(product)

  let popularProduct;

  if (product.success) {
    popularProduct = (
      <Stack>
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
              textAlign: "center"
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
          {product.data.slice(0, 12).map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 12 / 4, lg: 12 / 5 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  } else {
    popularProduct = (
      <>
        <Typography>NO Data</Typography>
      </>
    );
  }

  return <>{popularProduct}</>;
};

export default PopularProduct;
