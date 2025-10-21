"use client";
import { Box, CardMedia, Stack } from "@mui/material";
 
import { useGetImageDataQuery } from "@/redux/api/metaDataApi";

const HotDealImg = () => {
  const { data: imageData } = useGetImageDataQuery({});
  return (
    <Stack>
      <Box> 
        <CardMedia
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          component="img"
          alt={imageData?.data?.hotDealImages?.[0]}
          image={imageData?.data?.hotDealImages?.[0]}
        />
      </Box>
    </Stack>
  );
};

export default HotDealImg;
