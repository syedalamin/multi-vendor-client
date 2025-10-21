/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetImageDataQuery } from "@/redux/api/metaDataApi";
import { Box, CardMedia, Grid, Stack } from "@mui/material";
const FooterImg = () => {
  const { data: imageData } = useGetImageDataQuery({});
  return (
    <Stack>
      <Box>
        <CardMedia
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          component="img"
          alt={imageData?.data?.reviewMainImages?.[0]}
          image={imageData?.data?.reviewMainImages?.[0]}
        />
      </Box>
      <Grid container spacing={1} pt={2}>
        {imageData?.data?.footerImages?.slice(0,2)?.map((item: any) => (
          <Grid key={item} size={{ xs: 6 }}>
            <CardMedia
              sx={{ width: "100%", height: "100%" }}
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

export default FooterImg;
