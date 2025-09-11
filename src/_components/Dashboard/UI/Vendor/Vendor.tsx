/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMUploader from "@/_components/Form/EMUploader";
import FullScreenModal from "@/_components/Shared/Modal/FullScreenModal";
import { AddIcon, RemoveIcon } from "@/_Icons";
import { modifyPayloads } from "@/utils/ModifyFormData/modifyFormData";
import { useCreateVendorMutation } from "@/redux/api/userApi";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import AllVendorProfile from "./AllVendorProfile";
import { useGetAllVendorsQuery } from "@/redux/api/vendorApi";
import EMSelect from "@/_components/Form/EMSelect";
import { useGetAllDistrictQuery } from "@/redux/api/districtApi";

const Vendor = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const { data: districtData } = useGetAllDistrictQuery({});

  const [createVendor] = useCreateVendorMutation();
  const { data } = useGetAllVendorsQuery({});

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
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack>
      <Stack
        bgcolor={"white"}
        color={"black"}
        p={2}
        sx={{
          zIndex: 1200,
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
        display={"flex"}
      >
        <Box>
          <Typography component={"h2"} variant="h5" fontWeight={600}>
            Create Vendor
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={handleClickOpen}
            size="small"
            startIcon={open ? <RemoveIcon /> : <AddIcon />}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              color: "white",
              fontWeight: 600,
              borderRadius: "30px",
              textTransform: "none",
              px: 5,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
                boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Stack>
      <FullScreenModal open={open} setOpen={setOpen} title="Create Vendor">
        <Box>
          <EMForm onSubmit={handleRegistration}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput name="shopName" label="Shop Name" fullWidth={true} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput
                  name="description"
                  label="Description"
                  fullWidth={true}
                />
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
              {/* <Grid size={{ xs: 12, md: 6 }}>
                <EMInput name="district" label="District" fullWidth={true} />
              </Grid> */}
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
              {/* <Grid size={{ xs: 12, md: 6 }}>
                <EMInput name="city" label="City" fullWidth={true} />
              </Grid> */}
              <Grid size={{ xs: 12, md: 6 }}>
                <EMUploader name="logo" label="Upload Logo" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMUploader name="banner" label="Upload Banner" />
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
      </FullScreenModal>
      <Stack>
        <AllVendorProfile data={data?.vendor} />
      </Stack>
    </Stack>
  );
};

export default Vendor;
