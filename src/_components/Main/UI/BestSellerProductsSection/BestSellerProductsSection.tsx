import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BestSellerProducts from "./BestSellerProducts";
import HotDeal from "./HotDeal";
import { apiFetcher } from "@/lib/NextFetch/fetcher";
import BestSeller from "./BestSeller";
import TopRated from "./TopRated";

const BestSellerProductsSection = async () => {
  const productData = await apiFetcher(`/product`);
  return (
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
            textAlign: "center",
          }}
        >
          Featured Products
        </Typography>
      </Stack>
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
