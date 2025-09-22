"use client";
import Loading from "@/_components/Shared/Loading/Loading";
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";

import { useGetProductsQuery } from "@/redux/api/productApi";
import { Product } from "@/types/common";
import { ArrowForward } from "@mui/icons-material";

import { Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

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
      <Stack spacing={5}>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.8rem",
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
          <Button
            component={Link}
            href="/product"
            endIcon={<ArrowForward />}
            variant="text"
            size="small"
            sx={{
              color: "#00B207",
              fontWeight: "600",
              textTransform: "none",
              fontSize: "0.75rem",
              py: 0.5,
              px: 1.5,
              borderRadius: "16px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateX(3px)",
              },
              "& .MuiButton-endIcon": {
                fontSize: "1rem",
                transition: "transform 0.3s ease",
              },
              "&:hover .MuiButton-endIcon": {
                transform: "translateX(2px)",
              },
            }}
          >
            View All
          </Button>
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
