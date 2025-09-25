/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductRatingQuery } from "@/redux/api/reviewApi";
import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import trustyShop from "@/image/trustyShopbd.jpg";
import Image from "next/image";
const ShowReview = ({ id }: { id: string }) => {
  const { data: productRating, isLoading } = useGetProductRatingQuery(id);
 

  if (isLoading) {
    return <Box>Loading...</Box>;
  } else if (productRating?.data?.length == 0) {
    return <Box> No Review</Box>;
  } else if (productRating?.success) {
    return (
      <Stack py={3}>
        <Typography
          pb={2}
          variant="h4"
          component="h1"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.8rem",
            },
            fontWeight: {
              xs: 600,
            },
            color: "black",
          }}
        >
          All Reviews
        </Typography>
        <Grid container spacing={3}>
          {productRating?.data?.map((item: any) => (
            <Grid key={item?.id} size={{ xs: 12  }}>
              <Stack
                spacing={2}
                sx={{
                  height: "100%",
                  border: "1px solid #e0e0e0",
                  display: "flex",
                  borderRadius: "8px",
                  p: 1,
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s , border 0.3s ",
                  "&:hover": {
                    border: "1px solid #2e7d32",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Box>
                      <Image
                        src={item?.user?.customer?.profilePhoto || trustyShop}
                        height={50}
                        width={50}
                        alt="trustyShop"
                        className="border border-gray-300 rounded-full"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                          fontSize: { xs: "1rem" },
                          fontWeight: { xs: 600 },
                          color: "#2e7d32",
                        }}
                      >
                        {`${item?.user?.customer?.firstName ?? ""} ${
                          item?.user?.customer?.lastName ?? ""
                        }`.trim() || "Anonymous"}
                      </Typography>

                      <Stack direction={"row"} alignItems={"center"}>
                        <Typography
                          variant="h4"
                          component="h1"
                          sx={{
                            fontSize: {
                              xs: "0.8rem",
                            },
                          }}
                        >
                          ({item?.value})
                        </Typography>
                        <Rating
                          name="half-rating-read"
                          defaultValue={item?.value}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                      </Stack>
                    </Box>
                  </Stack>
                  <Box>
                    <Typography
                      variant="h4"
                      component="h1"
                      sx={{
                        fontSize: {
                          xs: "0.8rem",
                        },
                        fontWeight: {
                          xs: 600,
                        },
                        color: "black",
                      }}
                    >
                      {item?.createdAt
                        ? new Date(item.createdAt).toLocaleDateString("en-GB")  
                        : "N/A"}
                    </Typography>
                  </Box>
                </Stack>
                <Box>{item?.review}</Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  }
};

export default ShowReview;
