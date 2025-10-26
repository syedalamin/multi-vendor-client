"use client";
import { Box, CardMedia, Stack } from "@mui/material";

import { useGetImageDataQuery } from "@/redux/api/metaDataApi";

const HotDealImg = () => {
  const { data: imageData } = useGetImageDataQuery({});
  return (
    <Stack>
      <Box>
        <CardMedia
          component="img"
          alt={imageData?.data?.hotDealImages?.[0]}
          image={imageData?.data?.hotDealImages?.[0]}
          sx={{
            width: "100%",
            objectFit: "cover",

            maxHeight: 300,
          }}
        />
      </Box>
    </Stack>
  );
};

export default HotDealImg;
