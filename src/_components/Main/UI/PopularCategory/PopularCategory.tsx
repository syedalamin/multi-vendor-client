"use client";
import Loading from "@/_components/Shared/Loading/Loading";
import ImgTextCard from "@/_components/UI/Card/ImgTextCard";

import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { Category } from "@/types/common";
import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

import React from "react";

const PopularCategory = () => {
  const page = 1;
  const limit = 12;
  const { data: categoryData, isLoading } = useGetAllCategoryQuery({
    page,
    limit,
  });

  let popularCategory;

  if (isLoading) {
    return <Loading />;
  }
  if (categoryData?.success) {
    popularCategory = (
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
            Popular Category
          </Typography>
          <Button
            component={Link}
            href="/category"
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
          {categoryData?.data?.map((item: Category) => (
            <Grid key={item.id} size={{ xs: 4, sm: 3, md: 2 }}>
              <Stack>
                <ImgTextCard item={item} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  } else {
    popularCategory = (
      <Stack>
        <Typography textAlign={"center"}>NO Data</Typography>
      </Stack>
    );
  }

  return <Stack>{popularCategory}</Stack>;
};

export default PopularCategory;
