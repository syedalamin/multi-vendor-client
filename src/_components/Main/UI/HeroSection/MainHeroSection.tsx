import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

import Image from "next/image";
import slider1 from "@/image/Slider1.png";
import slider2 from "@/image/Slider2.png";
import slider3 from "@/image/Slider3.png";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";
const MainHeroSection = () => {
  return (
    <Stack pt={4}>
      <Stack>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              position="relative"
              sx={{
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "320px", sm: "400px", md: "477px" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src={slider1}
                  alt="Hero Image"
                  quality={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Gradient overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Content */}
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                textAlign="left"
                p={{ xs: 2, sm: 3, md: 4 }}
                zIndex={1}
              >
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                    letterSpacing: 1,
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Fresh & Healthy
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    my: 1,
                    fontSize: { xs: "2rem", sm: "2.3rem", md: "3rem" },
                  }}
                >
                  Fresh & Healthy <br /> Organic Food
                </Typography>

                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    color: "#fff",
                    mb: 2,
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                  }}
                >
                  Sale up to <span style={{ color: "#FFB800" }}>30% OFF</span>
                  <br />
                  Free shipping on all your order.
                </Typography>

                <Button
                  component={Link}
                  href="/product"
                  endIcon={<ArrowForward />}
                  variant="contained"
                  size="small"
                  sx={{
                    background: "#00B207",
                    color: "white",
                    fontWeight: "600",
                    textTransform: "none",
                    fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.85rem" },
                    py: { xs: 0.5, md: 0.8 },
                    px: { xs: 1.5, md: 2 },
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(3px)",
                      background: "#009e06",
                    },
                    "& .MuiButton-endIcon": {
                      fontSize: "1rem",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover .MuiButton-endIcon": {
                      transform: "translateX(2px)",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                <Box
                  position="relative"
                  sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <Image
                    src={slider2}
                    alt="Hero Image"
                    quality={100}
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Gradient overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />

                  {/* Content */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    textAlign="left"
                    p={{ xs: 2, sm: 3, md: 4 }}
                    zIndex={1}
                  >
                    <Typography
                      variant="subtitle2"
                      component="p"
                      sx={{
                        color: "#0e7113",
                        fontWeight: "700",
                        letterSpacing: 1,
                        mb: 1,
                      }}
                    >
                      SUMMER SALE
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        color: "#000",
                        fontWeight: "bold",
                        my: 1,
                        fontSize: { xs: "1.5rem", sm: "2rem",  },
                      }}
                    >
                      70% OFF
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      component="p"
                      sx={{
                        color: "#333",
                        mb: 2,
                      }}
                    >
                      Only Fruit & Vegetable
                    </Typography>

                    <Button
                      component={Link}
                      href="/product"
                      endIcon={<ArrowForward />}
                      variant="text"
                      size="small"
                      sx={{
                        background: "#00B207",
                        color: "white",
                        fontWeight: "600",
                        textTransform: "none",
                        fontSize: "0.75rem",
                        py: 0.5,
                        px: 1.5,
                        borderRadius: "16px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateX(3px)",
                        },
                        "& .MuiButton-endIcon": {
                          fontSize: "1rem",
                          transition: "transform 0.3s ease",
                        },
                        "&:hover .MuiButton-endIcon": {
                          transform: "translateX(2px)",
                        },
                      }}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                <Box
                  position="relative"
                  sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <Image
                    src={slider3}
                    alt="Hero Image"
                    quality={100}
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Gradient overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />

                  {/* Content */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="left"
                    p={{ xs: 2, sm: 3, md: 4 }}
                    zIndex={1}
                  >
                    <Typography
                      variant="subtitle2"
                      component="p"
                      sx={{
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      Best Deal
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        my: 1,
                        fontSize: { xs: "1.5rem", sm: "2rem",  },
                        textAlign: "center"
                      }}
                    >
                      Special Products Deal of the Month
                    </Typography>
 
                    <Button
                      component={Link}
                      href="/product"
                      endIcon={<ArrowForward />}
                      variant="text"
                      size="small"
                      sx={{
                        background: "#00B207",
                        color: "white",
                        fontWeight: "600",
                        textTransform: "none",
                        fontSize: "0.75rem",
                        py: 0.5,
                        px: 1.5,
                        borderRadius: "16px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateX(3px)",
                        },
                        "& .MuiButton-endIcon": {
                          fontSize: "1rem",
                          transition: "transform 0.3s ease",
                        },
                        "&:hover .MuiButton-endIcon": {
                          transform: "translateX(2px)",
                        },
                      }}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default MainHeroSection;
