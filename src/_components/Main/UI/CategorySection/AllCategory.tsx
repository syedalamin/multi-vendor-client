import ImgTextCard from "@/_components/UI/Card/ImgTextCard";
import { apiFetcher } from "@/lib/NextFetch/fetcher";
import { Category } from "@/types/common";
import { Grid, Stack, Typography } from "@mui/material";

import React from "react";
import PaginationClient from "../Product/PaginationToClient";

const AllCategory = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const categoryData = await apiFetcher(`/category?limit=${limit}&page=${page}`);
  const total = categoryData?.meta?.total || 0;
  const totalPages = Math.ceil(total / limit);

  let category;

  if (categoryData.success) {
    category = (
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
        <PaginationClient
          url={"category"}
          page={page}
          totalPages={totalPages}
          limit={limit}
        />
      </Stack>
    );
  } else {
    category = (
      <Stack>
        <Typography textAlign={"center"}>NO Data</Typography>
      </Stack>
    );
  }

  return <Stack>{category}</Stack>;
};

export default AllCategory;
