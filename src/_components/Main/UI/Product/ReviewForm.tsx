/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMRating from "@/_components/Form/EMRating";
import { useCreateRatingMutation } from "@/redux/api/reviewApi";

import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ShowReview from "./ShowReview";

const ReviewForm = ({ id }: { id: string }) => {
  const [createRating] = useCreateRatingMutation();
  const handleRegistration = async (values: FieldValues) => {
    const { review, value } = values;

    const payload = {
      review,
      value: Number(value),
    };
    console.log(payload)

    try {
      const res = await createRating({ id, data: payload }).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (err: any) {
     toast.error(err?.data);
    }
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",

          p: 2,
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: "20px",
            maxWidth: 500,
            width: "100%",
            height: "100%",
            border: "1px solid #e0e0e0",
            display: "flex",

            flexDirection: "column",
            overflow: "hidden",
           
          }}
        >
          <Typography
            py={2}
            variant="h4"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2.3rem",
              },
              fontWeight: {
                xs: 600,
                md: 700,
              },
              color: "#2e7d32",
              textAlign: "center",
            }}
          >
            Write a Review
          </Typography>
          <EMForm onSubmit={handleRegistration}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12 }}>
                <Typography
                  pb={2}
                  variant="h4"
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: "1rem",
                    },
                    fontWeight: {
                      xs: 600,
                    },
                    color: "black",
                  }}
                >
                  Your Rating
                </Typography>
                <EMRating name="value" size="large" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography
                  pb={2}
                  variant="h4"
                  component="h1"
                  sx={{
                    fontSize: {
                      xs: "1rem",
                    },
                    fontWeight: {
                      xs: 600,
                    },
                    color: "black",
                  }}
                >
                  Your Review
                </Typography>
                <EMInput
                  name="review"
                  label="Tell us about your experience..."
                  fullWidth={true}
                  type="text"
                  multiline={true}
                  rows={4}
                />
              </Grid>
            </Grid>
            <Box>
              <Button
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  py: 1,
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
                Submit Review
              </Button>
            </Box>
          </EMForm>
        </Box>
      </Box>
      <ShowReview id={id} />
    </Box>
  );
};

export default ReviewForm;
