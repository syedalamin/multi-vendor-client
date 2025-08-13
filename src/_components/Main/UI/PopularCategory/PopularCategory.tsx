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
      <>
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
            }}
          >
            Popular Category
          </Typography>
        </Stack>
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {category.data.map((item: Category) => (
            <>
              <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                <ImgTextCard item={item} key={item.id} />
              </Grid>
            </>
          ))}
        </Grid>
      </>
    );
  } else {
    popularCategory = (
      <>
        <Typography>NO Data</Typography>
      </>
    );
  }

  return <>{popularCategory}</>;
};

export default PopularCategory;
