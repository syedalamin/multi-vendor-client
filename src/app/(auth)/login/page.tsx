"use client";
import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const [error, setError] = useState("");
  const [loginUser] = useLoginUserMutation();
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values).unwrap();

      if (res?.data?.data?.accessToken) {
        // console.log(res?.data?.accessToken)
        storeUserInfo({ accessToken: res?.data?.data?.accessToken });

        toast.success("User Login Successfully");
        router.push(redirect);
      } else {
        setError(res?.message);
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
                Login
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  margin: "2px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <EMForm onSubmit={handleLogin}>
              <Grid container spacing={2} my={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <EMInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={{xs: 12, md: 6 }}>
                  <EMInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
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
                  Login
                </Button>
                <Typography textAlign={"center"} mt={3} fontSize={"0.95rem"}>
                  Don&apos;t have an account?{" "}
                  <Link href={"/registration"} style={{ color: "#4caf50" }}>
                    Create One
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

export default LoginPage;
