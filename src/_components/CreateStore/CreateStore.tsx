"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMSelect from "@/_components/Form/EMSelect";
import EMUploader from "@/_components/Form/EMUploader";
import { useGetAllDistrictQuery } from "@/redux/api/districtApi";
import { useCreateVendorMutation } from "@/redux/api/userApi";

import { modifyPayloads } from "@/utils/ModifyFormData/modifyFormData";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateStore = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const router = useRouter();
  const { data: districtData } = useGetAllDistrictQuery({});

  const [createVendor] = useCreateVendorMutation();

  const handleRegistration = async (values: FieldValues) => {
    const {
      shopName,
      description,
      email,
      contactNumber,
      password,
      banner,
      logo,
      district,
      city,
    } = values;

    const payload = {
      password,
      vendor: {
        shopName,
        description,
        email,
        contactNumber,
        district,
        city,
      },
    };

    const data = modifyPayloads(payload, { logo, banner });

    try {
      const res = await createVendor(data).unwrap();

      if (res.success) {
        toast.success(res.message);
        router.push("/login-store")
      }
    } catch (err: any) {
      toast.error(err?.data);
    }
  };

  return (
    <Container>
      <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Box
          maxWidth={600}
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
                Create Store
              </Typography>
            </Box>
          </Stack>

          <EMForm onSubmit={handleRegistration}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput name="shopName" label="Shop Name" fullWidth={true} />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth={true}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput
                  name="password"
                  label="Password"
                  // type="password"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput
                  name="contactNumber"
                  label="BKash Number"
                  fullWidth={true}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <EMSelect
                  name="district"
                  label="District"
                  fullWidth={true}
                  options={
                    districtData?.data?.map((item: any) => ({
                      label: item.name,
                      value: item.name,
                    })) || []
                  }
                  onChange={(e: any) => setSelectedDistrict(e.target.value)}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMSelect
                  name="city"
                  label="Thana"
                  fullWidth={true}
                  options={
                    districtData?.data
                      ?.find((d: any) => d.name === selectedDistrict)
                      ?.city?.map((c: any) => ({
                        label: c.name,
                        value: c.name,
                      })) || []
                  }
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <EMUploader name="logo" label="Upload Logo" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMUploader name="banner" label="Upload Banner" />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <EMInput
                  name="description"
                  label="Description"
                  fullWidth={true}
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
                Create
              </Button>
            </Box>
          </EMForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default CreateStore;
