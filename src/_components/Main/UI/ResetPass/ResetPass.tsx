/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function ResetPass() {
  const searchParams = useSearchParams();
  const [resetPassword] = useResetPasswordMutation();
  const router = useRouter();
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  const handleReset = async (values: FieldValues) => {
    const { newPassword } = values;

    const payload = {
      id: userId,
      newPassword,
      token: token,
    };

    try {
      const res = await resetPassword(payload).unwrap();

      console.log(res)
      if (res.success) {
        toast.success(res.message);
        router.push("/login");
      }
    } catch (err: any) {
      toast.error(err?.data);
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
                Reset Password
              </Typography>
            </Box>
          </Stack>

          <EMForm onSubmit={handleReset}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12 }}>
                <EMInput
                  name="newPassword"
                  label="Password"
                  // type="password"
                  type="text"
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
                Reset
              </Button>
            </Box>
          </EMForm>
        </Box>
      </Stack>
    </Container>
  );
}
