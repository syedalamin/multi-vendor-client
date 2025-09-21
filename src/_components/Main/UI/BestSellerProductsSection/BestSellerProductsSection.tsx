"use client";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BestSellerProducts from "./BestSellerProducts";

import { useGetProductsQuery } from "@/redux/api/productApi";
import HotDeal from "./HotDeal";
import BestSeller from "./BestSeller";
import TopRated from "./TopRated";
 

const BestSellerProductsSection = () => {
  const page = 1;
  const limit = 12;
  const { data: productData,   } = useGetProductsQuery({
    page: page,
    limit: limit,
  });

  

  

  return (
    <Stack>
      <BestSellerProducts productData={productData} />
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography
            py={2}
            variant="h4"
            component="p"
            sx={{
              fontSize: {
                xs: "1.3rem",
              },
              textAlign: "left",
            }}
            fontWeight={600}
          >
            Hot Deals
          </Typography>
          <HotDeal productData={productData} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography
            py={2}
            variant="h4"
            component="p"
            sx={{
              fontSize: {
                xs: "1.3rem",
              },
              textAlign: "left",
            }}
            fontWeight={600}
          >
            Best Seller
          </Typography>
          <BestSeller productData={productData} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography
            py={2}
            variant="h4"
            component="p"
            sx={{
              fontSize: {
                xs: "1.3rem",
              },
              textAlign: "left",
            }}
            fontWeight={600}
          >
            Top Rated
          </Typography>
          <TopRated productData={productData} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default BestSellerProductsSection;
