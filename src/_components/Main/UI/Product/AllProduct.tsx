/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyGetProductsQuery } from "@/redux/api/productApi";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Product } from "@/types/common";
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import Loading from "@/_components/Shared/Loading/Loading";
import { useEffect, useState } from "react";


const AllProduct = ({ page, limit }: { page: number; limit: number }) => {
  const [mergedData, setMergedData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [hasMore, setHasMore] = useState(true);

  const [trigger, { data: productData, isFetching, isLoading }] =
    useLazyGetProductsQuery();

  useEffect(() => {
    setMergedData([]);
    setCurrentPage(page);
    setHasMore(true);
    trigger({ page, limit });
  }, [page, limit, trigger]);

  useEffect(() => {
    if (productData?.data) {
      setMergedData((prev) => [...prev, ...productData.data]);

      if (
        mergedData?.length + productData?.data?.length >=
        productData?.meta?.total
      ) {
        setHasMore(false);
      }
    }
  }, [productData]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 800
    ) {
      if (
        hasMore &&
        !isFetching &&
        productData?.meta?.total &&
        mergedData.length < productData.meta.total
      ) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        trigger({ page: nextPage, limit });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, mergedData, isFetching, productData, hasMore]);

  let content;

  if ((isLoading || isFetching) && mergedData.length === 0) {
    content = <Loading />;
  } else if (!isLoading && !isFetching && mergedData.length === 0) {
    content = (
      <Typography
        py={4}
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No Data Found
      </Typography>
    );
  } else {
    content = (
      <Stack py={4}>
        <Grid container spacing={2} alignItems={"center"}>
          {mergedData.map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3, lg: 12 / 5 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        {isFetching && (
          <Box
            sx={{
              py: "1rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading...
          </Box>
        )}
        {!hasMore && (
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              borderRadius: "16px",
              bgcolor: "#f9fafb",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              maxWidth: "400px",
              mx: "auto",
              mt: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                color: "#16a34a",
              }}
            >
              🎉 All Products Loaded
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              You’ve reached the end of the list.
            </Typography>
          </Box>
        )}
      </Stack>
    );
  }

  return content;
};

export default AllProduct;
