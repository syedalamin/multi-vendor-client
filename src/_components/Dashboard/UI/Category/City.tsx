/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import FullScreenModal from "@/_components/Shared/Modal/FullScreenModal";
import { AddIcon, RemoveIcon } from "@/_Icons";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
 
  useGetAllDistrictQuery,
} from "@/redux/api/districtApi";
import AllCity from "./AllCity";
import { useCreateCityMutation, useGetAllCityQuery } from "@/redux/api/cityApi";
import EMSelect from "@/_components/Form/EMSelect";

const City = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);

  const { data: districtData } = useGetAllDistrictQuery({});
  const { data: cityData } = useGetAllCityQuery({});
  const [createCity] = useCreateCityMutation();

 
  const handleRegistration = async (values: FieldValues) => {
    const { city, districtId } = values;

    const payload = {
      name: city,
      districtId: districtId,
    };

    try {
      const res = await createCity(payload).unwrap();
     
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
            Create City
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
      <FullScreenModal open={open} setOpen={setOpen} title="Create City">
        <Box>
          <EMForm onSubmit={handleRegistration}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMInput name="city" label="Thana Name" fullWidth={true} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <EMSelect
                  name="districtId"
                  label="District"
                  fullWidth={true}
                  options={
                    districtData?.data?.map((item: any) => ({
                      label: item.name,
                      value: item.id,
                    })) || []
                  }
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
      </FullScreenModal>
      <Stack>
        <AllCity data={cityData?.data} />
      </Stack>
    </Stack>
  );
};

export default City;
