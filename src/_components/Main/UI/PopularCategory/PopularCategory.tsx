"use client";
import Loading from "@/_components/Shared/Loading/Loading";
import ImgTextCard from "@/_components/UI/Card/ImgTextCard";

import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { Category } from "@/types/common";
import { Grid, Stack, Typography } from "@mui/material";

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
            Popular Category
          </Typography>
        </Stack>
        <Grid
          container
          spacing={2}
          alignItems={"stretch"}
          justifyContent={"center"}
        >
          {categoryData?.data?.map((item: Category) => (
            <Grid key={item.id} size={{ xs: 6, sm: 3, md: 2 }}>
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
