import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import HeroImg from "@/image/HeroImg.png";

const HeroSection = () => {
  return (
    <Stack
      sx={{
        background: "linear-gradient(135deg, #edf2ee 0%, #e0f7e9 100%)",
        height: "100vh"
      }}
      display={"flex"}
      justifyContent={"center"}
      py={5}
      px={4}
    >
      <Grid
        container
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems={"center"}
        spacing={4}
        sx={{ width: "100%" }}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "#00B207",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              mb: 2,
            }}
            fontWeight={600}
          >
            Welcome to Multi Vendor
          </Typography>
          <Typography
            component={"h1"}
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.5rem",
                xl: "4.5rem",
              },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Fresh & Healthy Organic Food
          </Typography>
          <Typography
            component={"h2"}
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: 400,
              mb: 3,
            }}
          >
            Sale up to{" "}
            <span style={{ color: "#FF8A00", fontWeight: 700 }}>30% OFF</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 300,
              mb: 4,
              color: "#555",
            }}
          >
            Free shipping on all your order. we deliver, you enjoy
          </Typography>
          <Button
            href="/product"
            variant="contained"
            sx={{
              backgroundColor: "#00B207",
              color: "#fff",
              padding: "12px 30px",
              fontSize: "1rem",
              borderRadius: "30px",
              "&:hover": { backgroundColor: "#009904" },

            }}

          >
            Shop Now
          </Button>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "200px", sm: "280px", md: "380px" },
            }}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              alt="Hero Img"
              src={HeroImg}
            />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HeroSection;

