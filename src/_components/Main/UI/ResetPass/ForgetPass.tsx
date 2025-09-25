/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import EMForm from "@/_components/Form/EMForm";
import EMInput from "@/_components/Form/EMInput";
import { useForgetPasswordMutation } from "@/redux/api/authApi";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter,  } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function ForgetPass() {
 
  const [forgetPassword] = useForgetPasswordMutation();
  const router = useRouter();
 

  const handleForget = async (values: FieldValues) => {
    const { email } = values;

    const payload = {
 
      email,
 
    };

    try {
      const res = await forgetPassword(payload).unwrap();

      console.log(res)
      if (res.success) {
        toast.success("Please Check Your Email");
        router.push("/");
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
              Write Your Email
              </Typography>
            </Box>
          </Stack>

          <EMForm onSubmit={handleForget}>
            <Grid wrap="wrap" container spacing={2} my={4}>
              <Grid size={{ xs: 12 }}>
                <EMInput
                  name="email"
                  label="Email"
               
                  type="email"
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
                Forget 
              </Button>
            </Box>
          </EMForm>
        </Box>
      </Stack>
    </Container>
  );
}
