import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import HeroImg from "@/image/HeroImg.png";
const HeroSection = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#edf2ee",
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
        gap={4}
        spacing={2}
        gridColumn={12}
        
      >
        <Grid size={{ xs: 12, sm: 6 }} >
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              color: "#00B207",
            }}
            fontWeight={600}
          >
            Welcome to Multi Vendor
          </Typography>
          <Typography
            component={"h2"}
            variant="h2"
            sx={{
              fontSize: {
                xs: "1.6rem",
                sm: "2rem",
                md: "3rem",
                xl: "4rem",
              },
              fontWeight: {
                xs: 600,
                md: 700,
              },
            }}
          >
            Fresh & Healthy Organic Food
          </Typography>
          <Typography
            component={"h2"}
            variant="h4"
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "2rem",
                xl: "2.5rem",
              },
              fontWeight: {
                xs: 300,
                md: 400,
              },
            }}
          >
            Sale up to <span color="#FF8A00">30% OFF</span>
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                md: "1rem",
              },
            }}
            fontWeight={300}
          >
            Free shipping on all your order. we deliver, you enjoy
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 5 }}>
          <Box>
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
