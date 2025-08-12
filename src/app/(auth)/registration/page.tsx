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

      if (res?.data?.id) {
        toast.success("user created successfully");

        const userRes = await loginUser({
          password,
          email,
        }).unwrap();
  
        if (userRes?.data?.accessToken) {
          // console.log(res?.data?.accessToken)
          storeUserInfo({ accessToken: userRes?.data?.accessToken });
          toast.success("User Login Successfully");
          router.push("/");
        } else {
          console.log(res?.message);
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
          boxShadow={1}
          borderRadius={1}
          maxWidth={600}
          py={5}
          px={3}
          width={"100%"}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Registration
              </Typography>
            </Box>
          </Stack>
          <Box>
            <EMForm onSubmit={handleRegistration}>
              <Grid wrap="wrap" container spacing={2} my={4}>
                <Grid size={{ md: 6 }}>
                  <EMInput
                    name="firstName"
                    label="First Name"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <EMInput name="lastName" label="Last Name" fullWidth={true} />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <EMInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <EMInput
                    name="password"
                    label="Password"
                    // type="password"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <EMInput
                    name="contactNumber"
                    label="Contact Number"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <EMUploader name="file" label="Upload" />
                </Grid>
              </Grid>
              <Box>
                <Typography component={"p"} textAlign={"end"}>
                  <Link href={"/registration"}>Forget Password</Link>
                </Typography>
                <Button
                  sx={{
                    margin: "20px 0px",
                  }}
                  fullWidth
                  type="submit"
                >
                  Registration
                </Button>
                <Typography component={"p"} textAlign={"center"}>
                  Do You Have An Account? <Link href={"/login"}>Login</Link>
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
