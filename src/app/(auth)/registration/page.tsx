"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import EMUploader from "@/_components/Form/EMUploader";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { useRegisterCustomerMutation } from "@/redux/api/userApi";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/ModifyFormData/modifyFormData";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
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
    const { firstName, lastName, email, contactNumber, password, file } =
      values;

    const payload = {
      password,
      customer: {
        firstName,
        lastName,
        email,
        contactNumber,
      },
    };

    const data = modifyPayload(payload, file);

    try {
      const res = await registerCustomer(data).unwrap();
      
      if (res?.data?.data?.id) {
        toast.success(res?.data?.message);
        console.log(res?.data?.data)
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
    } catch (err) {
      console.log(err);
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
                Registration
              </Typography>
            </Box>
          </Stack>
          <Box>
            <EMForm onSubmit={handleRegistration}>
              <Grid wrap="wrap" container spacing={2} my={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EMInput
                    name="firstName"
                    label="First Name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EMInput name="lastName" label="Last Name" fullWidth={true} />
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
                    label="Contact Number"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EMUploader name="file" label="Upload" />
                </Grid>
              </Grid>
              <Box>
                <Typography textAlign={"right"} fontSize={"0.9rem"} pb={2}>
                  <Link href={"/forget-password"} style={{ color: "#4caf50" }}>
                    Forgot Password?
                  </Link>
                </Typography>
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
                  Registration
                </Button>
                <Typography textAlign={"center"} mt={3} fontSize={"0.95rem"}>
                  Do You Have An Account?{" "}
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
