import ImgTextCard from "@/_components/UI/Card/ImgTextCard";
import { apiFetcher } from "@/lib/NextFetch/fetcher";
import { Category } from "@/types/common";
import { Grid, Stack, Typography } from "@mui/material";

import React from "react";

const PopularCategory = async () => {
  const category = await apiFetcher("/category");

  let popularCategory;

  if (category.success) {
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
          {category.data.slice(0, 12).map((item: Category) => (
            <Grid key={item.id} size={{ xs: 6, sm: 3, md: 2 }}>
              <Stack >
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
