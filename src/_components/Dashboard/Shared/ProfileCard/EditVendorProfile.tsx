/* eslint-disable @typescript-eslint/no-explicit-any */
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMSelect from "@/_components/Form/EMSelect";
import EMUploader from "@/_components/Form/EMUploader";
import Loading from "@/_components/Shared/Loading/Loading";
import { useGetAllDistrictQuery } from "@/redux/api/districtApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { useUpdateVendorMutation } from "@/redux/api/vendorApi";
import { modifyPayloads } from "@/utils/ModifyFormData/modifyFormData";
import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditVendorProfile = ({ setOpen }: { setOpen: any }) => {
  const [updateVendor] = useUpdateVendorMutation();
  const { data: myData, isLoading } = useGetMyProfileQuery({});
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const { data: districtData } = useGetAllDistrictQuery({});
  const { shopName, description, email, contactNumber, id, district, city } =
    myData?.data || "";

  console.log(myData?.data);
  const handleEdit = async (values: FieldValues) => {
    const {
      shopName,
      description,
      email,
      contactNumber,
      banner,
      logo,
      district,
      city,
    } = values;
    const payload = {
      shopName,
      description,
      email,
      contactNumber,
      district,
      city,
    };

    const data = modifyPayloads(payload, { logo, banner });

    try {
      const res = await updateVendor({ id, data }).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        setOpen(false);
      }
    } catch (err: any) {
      toast.error(err?.data);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box>
        <EMForm onSubmit={handleEdit}>
          <Grid wrap="wrap" container spacing={2} my={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="shopName"
                label="Shop Name"
                defaultValue={shopName}
                fullWidth={true}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="contactNumber"
                label="Contact Number"
                defaultValue={contactNumber}
                fullWidth={true}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="email"
                label="Email"
                disabled={true}
                defaultValue={email}
                fullWidth={true}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <EMSelect
                name="district"
                label="District"
                fullWidth={true}
                defaultValue={district}
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
                defaultValue={city}
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
                defaultValue={description}
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
              Edit Product
            </Button>
          </Box>
        </EMForm>
      </Box>
    </Box>
  );
};

export default EditVendorProfile;
