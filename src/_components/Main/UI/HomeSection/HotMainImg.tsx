"use client";
import { Box, CardMedia, Stack } from "@mui/material";

import { useGetImageDataQuery } from "@/redux/api/metaDataApi";

const HotMainImg = () => {
  const { data: imageData } = useGetImageDataQuery({});
  return (
    <Stack>
      <Box>
        <CardMedia
          sx={{
            width: "100%",
            objectFit: "cover",
            maxHeight: 250,
          }}
          component="img"
          alt={imageData?.data?.hotMainImages?.[0]}
          image={imageData?.data?.hotMainImages?.[0]}
        />
      </Box>
    </Stack>
  );
};

export default HotMainImg;
