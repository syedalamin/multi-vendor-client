/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";

import { useLoginUserMutation } from "@/redux/api/authApi";
import { useRegisterCustomerMutation } from "@/redux/api/userApi";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/ModifyFormData/modifyFormData";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import next from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const RegistrationPage = () => {
  const router = useRouter();
  const [registerCustomer] = useRegisterCustomerMutation();
  const [loginUser] = useLoginUserMutation();
  const handleRegistration = async (values: FieldValues) => {
    const { email, password } = values;

    const payload = {
      password,
      customer: {
        email,
      },
    };

    const data = modifyPayload(payload);

    try {
      const res = await registerCustomer(data).unwrap();

      if (res?.data?.data?.id) {
        toast.success(res?.data?.message);
        console.log(res?.data?.data);
        const userRes = await loginUser({
          password,
          email,
        }).unwrap();
        console.log(userRes);
        if (userRes?.data?.data?.accessToken) {
          storeUserInfo({ accessToken: userRes?.data?.data?.accessToken });
          toast.success(userRes?.data?.message);
          router.push("/");
        } else {
          console.log(userRes?.data?.message);
        }
      }
    } catch (err: any) {
      next(err)
      toast.error("User is already existss");
    }
  };
  return (
    <Container>
      <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Box
          maxWidth={400}
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
                Create Account
              </Typography>
            </Box>
          </Stack>
          <Box>
            <EMForm onSubmit={handleRegistration}>
              <Grid wrap="wrap" container spacing={2} my={4}>
                <Grid size={{ xs: 12 }}>
                  <EMInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <EMInput
                    name="password"
                    label="Password"
                    // type="password"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>

                {/* <Grid size={{ xs: 12, md: 6 }}>
                  <EMInput
                    name="contactNumber"
                    label="Contact Number"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EMUploader name="file" label="Upload" />
                </Grid> */}
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
                  Create Account
                </Button>
                <Typography textAlign={"center"} mt={3} fontSize={"0.95rem"}>
                  Already have account ?{" "}
                  <Link href={"/login"} style={{ color: "#4caf50" }}>
                    Login
                  </Link>
                </Typography>
              </Box>
            </EMForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegistrationPage;
