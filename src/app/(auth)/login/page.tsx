"use client"
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";

const LoginPage = () => {
  const handleLogin = async (values: FieldValues) => {
    console.log(values);
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
                Login Multi Vendor
              </Typography>
            </Box>
          </Stack>
          <Box>
            <EMForm onSubmit={handleLogin}>
              <Grid container spacing={2} my={4}>
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
                    type="password"
                    fullWidth={true}
                  />
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
                  Login
                </Button>
                <Typography component={"p"} textAlign={"center"}>
                  Do Not Have An Account?{" "}
                  <Link href={"/registration"}>Create An Account</Link>
                </Typography>
              </Box>
            </EMForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
