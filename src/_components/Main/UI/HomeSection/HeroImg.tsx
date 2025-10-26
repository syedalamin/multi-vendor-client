"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardMedia, Grid, Stack } from "@mui/material";

import { useGetImageDataQuery } from "@/redux/api/metaDataApi";

const HeroImg = () => {
  const { data: imageData } = useGetImageDataQuery({});
  return (
    <Stack>
      <Grid container spacing={1}>
        {imageData?.data?.heroImages?.slice(0, 3)?.map((item: any) => (
          <Grid key={item} size={{ xs: 4 }}>
            <CardMedia
               sx={{ width: "100%", height: {xs: "100%", md: "80%"} ,objectFit: "cover" }}
             
              component="img"
              alt={item}
              image={item}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default HeroImg;
