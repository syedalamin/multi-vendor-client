/* eslint-disable @typescript-eslint/no-explicit-any */
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMSelect from "@/_components/Form/EMSelect";
import EMUploader from "@/_components/Form/EMUploader";
import Loading from "@/_components/Shared/Loading/Loading";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";
import { modifyPayload } from "@/utils/ModifyFormData/modifyFormData";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditAdminProfile = ({ setOpen }: { setOpen: any }) => {
  const [updateMyProfile] = useUpdateMyProfileMutation();
  const { data: myData, isLoading } = useGetMyProfileQuery({});

  console.log(myData?.data);
  const {
    address,
    contactNumber,
    firstName,
    gender,
    lastName,

    email,
  } = myData?.data || "";

  const handleEdit = async (values: FieldValues) => {
    const {
      address,
      contactNumber,
      firstName,
      gender,
      lastName,
      profilePhoto,
      file,
    } = values;
    const payload = {
      address,
      contactNumber,
      firstName,
      gender,
      lastName,
      profilePhoto,
    };
    const data = modifyPayload(payload, file);

    try {
      const res = await updateMyProfile({ data }).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        setOpen(false);
      }
    } catch (err: any) {
      toast.success(err?.data);
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
                name="firstName"
                label="First Name"
                defaultValue={firstName}
                fullWidth={true}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="lastName"
                label="Last Name"
                defaultValue={lastName}
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
                name="gender"
                label="Gender"
                defaultValue={gender}
                fullWidth={true}
                options={[
                  { label: "MALE", value: "MALE" },
                  { label: "FEMALE", value: "FEMALE" },
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMUploader name="file" label="Image" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <EMInput
                name="address"
                label="Address"
                defaultValue={address}
                fullWidth={true}
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

export default EditAdminProfile;
