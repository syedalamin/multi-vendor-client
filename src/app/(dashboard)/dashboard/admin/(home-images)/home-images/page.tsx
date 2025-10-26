/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMImageInput from "@/_components/Form/EMImageInput";
import EMInput from "@/_components/Form/EMInput";
import EMUploaderMany from "@/_components/Form/EMUploaderMany";
import {
  useCreateImageDataMutation,
  useGetImageDataQuery,
} from "@/redux/api/metaDataApi";
import { modifyHomePayloads } from "@/utils/ModifyFormData/modifyFormData";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const HomeImages = () => {
  const [createImageData] = useCreateImageDataMutation();
  const { data: imageData } = useGetImageDataQuery({});
  const {
    footerImages,
    heroImages,
    hotDealImages,
    hotMainImages,
    reviewMainImages,
    sliderImages,
  } = imageData?.data || {};

  const handleImages = async (values: FieldValues) => {
    const {
      footerImages,
      heroImages,
      hotDealImages,
      hotMainImages,
      reviewImages,
      reviewMainImages,
      sliderImages,
      hours,
      minutes,
      removeSliderImages,
      removeHeroImages,
      removeHotDealImages,
      removeHotMainImages,
      removeReviewMainImages,
      removeFooterImages,
    } = values;
    const payload = {
      removeSliderImages,
      removeHeroImages,
      removeHotDealImages,
      removeHotMainImages,
      removeReviewMainImages,
      removeFooterImages,
      hours: Number(hours),
      minutes: Number(minutes),
    };

    const data = modifyHomePayloads(payload, {
      footerImages,
      heroImages,
      hotDealImages,
      hotMainImages,
      reviewImages,
      reviewMainImages,
      sliderImages,
    });

    try {
      const res = await createImageData(data).unwrap();

      if (res.success) {
        toast.success(res.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data);
    }
  };
  return (
    <Container>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Box
          py={5}
          px={3}
          sx={{
            width: "100%",
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{ color: "#2e7d32" }}
              >
                Update Home Section
              </Typography>
            </Box>
          </Stack>

          <EMForm onSubmit={handleImages}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12 }}>
                <EMUploaderMany name="sliderImages" label="Slider Images" />
                <EMImageInput
                  name="sliderImage"
                  removeFieldName="removeSliderImages"
                  images={sliderImages}
                />
                <Grid container spacing={1} pt={2}>
                  {sliderImages?.map((item: any) => (
                    <Grid key={item} size={{ xs: 4 }}>
                      <CardMedia
                        sx={{ width: "100%", height: "100%" }}
                        component="img"
                        alt={item}
                        image={item}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <EMUploaderMany name="heroImages" label="Hero Images" />
                <EMImageInput
                  name="heroImage"
                  removeFieldName="removeHeroImages"
                  images={heroImages}
                />
                <Grid container spacing={1} pt={2}>
                  {heroImages?.map((item: any) => (
                    <Grid key={item} size={{ xs: 4 }}>
                      <CardMedia
                        sx={{ width: "100%", height: "100%" }}
                        component="img"
                        alt={item}
                        image={item}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <EMUploaderMany name="hotDealImages" label="Hot Deal Images" />
                <EMImageInput
                  name="hotDealImage"
                  removeFieldName="removeHotDealImages"
                  images={hotDealImages}
                />
                <Grid pt={2}>
                  <CardMedia
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    alt={hotDealImages?.[0]}
                    image={hotDealImages?.[0]}
                  />
                </Grid>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <EMUploaderMany name="hotMainImages" label="Hot Main Images" />
                <EMImageInput
                  name="hotMainImage"
                  removeFieldName="removeHotMainImages"
                  images={hotMainImages}
                />
                <Grid pt={2}>
                  <CardMedia
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    alt={hotMainImages?.[0]}
                    image={hotMainImages?.[0]}
                  />
                </Grid>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <EMUploaderMany
                  name="reviewMainImages"
                  label="Footer Main Images"
                />
                <EMImageInput
                  name="reviewMainImage"
                  removeFieldName="removeReviewMainImages"
                  images={reviewMainImages}
                />
                <Grid pt={2}>
                  <CardMedia
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    alt={reviewMainImages?.[0]}
                    image={reviewMainImages?.[0]}
                  />
                </Grid>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <EMUploaderMany name="footerImages" label="Footer Images" />
                <EMImageInput
                  name="footerImage"
                  removeFieldName="removeFooterImages"
                  images={footerImages}
                />
                <Grid container spacing={1} pt={2}>
                  {footerImages?.map((item: any) => (
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
              </Grid>

              <Grid
                container
                spacing={2}
                my={4}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid size={{ xs: 12, sm: 5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <EMInput
                      name="hours"
                      label="Hours"
                      type="number"
                      fullWidth
                    />
                    <EMInput
                      name="minutes"
                      label="Minutes"
                      type="number"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 7 }}>
                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      backgroundColor: "#4caf50",
                      color: "#fff",

                      borderRadius: "30px",
                      fontWeight: 600,
                      fontSize: "1rem",
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#43a047",
                      },
                    }}
                  >
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </EMForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default HomeImages;
