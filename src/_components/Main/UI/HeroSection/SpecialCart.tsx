import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import milk from "@/image/milk.png";
import icewater from "@/image/icewater.png";
import brakfast from "@/image/brakfast.png";
import Image from "next/image";
import Link from "next/link";
const SpecialCart = () => {
  return (
    <Box py={4}>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          position="relative"
          sx={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <Image
            src={milk}
            alt="Hero Image"
            quality={100}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="start"
            textAlign="left"
            p={2}
          >
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
            >
              100% Fresh <br />
              Cow Milk
            </Typography>

            <Typography
              component={Link}
              href="/product"
              sx={{
                background: "#4caf50",
                color: "#fff",
                py: 1,
                px: 4,
                borderRadius: "30px",
                textDecoration: "none",
                transition: "background 0.3s ease",
                cursor: "pointer",
              }}
            >
              Shop Now
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          position="relative"
          sx={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <Image
            src={icewater}
            alt="Hero Image"
            quality={100}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="end"
            textAlign="left"
            p={2}
          >
            <Box>
              <Typography
                variant="subtitle2"
                component={"p"}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                DRINK SALE
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: "bold", mb: 1 }}
              >
                Water &<br />
                Soft Drink
              </Typography>
            </Box>

            <Typography
              component={Link}
              href="/product"
              sx={{
                background: "#4caf50",
                color: "#fff",
                py: 1,
                px: 4,
                borderRadius: "30px",
                textDecoration: "none",
                transition: "background 0.3s ease",
                cursor: "pointer",
              }}
            >
              Shop Now
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          position="relative"
          sx={{ borderRadius: "10px", overflow: "hidden" }}
        >
          <Image
            src={brakfast}
            alt="Hero Image"
            quality={100}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="start"
            textAlign="left"
            p={2}
          >
            <Box>
              <Typography
                variant="subtitle2"
                component={"p"}
                sx={{ color: "black", fontWeight: "bold" }}
              >
                100 % ORGANIC
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: "bold", mb: 1 }}
              >
                Quick
                <br />
                Breakfast
              </Typography>
            </Box>

            <Typography
              component={Link}
              href="/product"
              sx={{
                background: "#4caf50",
                color: "#fff",
                py: 1,
                px: 4,
                borderRadius: "30px",
                textDecoration: "none",
                transition: "background 0.3s ease",
                cursor: "pointer",
              }}
            >
              Shop Now
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpecialCart;
