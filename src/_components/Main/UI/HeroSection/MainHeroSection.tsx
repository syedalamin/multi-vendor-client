import { Grid, Stack } from "@mui/material";
import React from "react";
import MuiAutoSlider from "./SlideHero";

const MainHeroSection = () => {
  const sliderItems = [
    {
      label: "First Slide",
      title: "Quick  Breakfast",
      subTitle: "100% Organic",
      imgPath:
        "https://cdn.pixabay.com/photo/2020/12/28/05/54/car-5865989_1280.jpg",
    },
    {
      label: "Second Slide",
      title: "Quick  Deaner",
      subTitle: "Car is nice",
      imgPath:
        "https://cdn.pixabay.com/photo/2020/12/30/05/33/car-5872493_960_720.jpg",
    },
    {
      label: "Third Slide",
      title: "Quick  Morning",
      subTitle: "Malter price",
      imgPath:
        "https://cdn.pixabay.com/photo/2020/11/15/01/43/car-5744399_1280.jpg",
    },
  ];
  const sliderItems2 = [
    {
      label: "Food Slide",
      title: "Delicious Pasta",
      subTitle: "Taste the Italian Cuisine",
      imgPath:
        "https://images.yummy.ph/yummy/uploads/2019/08/pennevodkapastarecipe-1.jpg",
    },
    {
      label: "Tech Slide",
      title: "Smart Gadgets",
      subTitle: "Innovation at your fingertips",
      imgPath:
        "https://blog.bikroy.com/en/wp-content/uploads/2019/06/W26-Blog-Gadgets-1-1024x536.png",
    },
    {
      label: "Nature Slide",
      title: "Green Forest",
      subTitle: "Breathe Fresh Air",
      imgPath:
        "https://plus.unsplash.com/premium_photo-1675824592773-10ef8da4ade3?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const sliderItems3 = [
    {
      label: "Adventure Slide",
      title: "Mountain Hiking",
      subTitle: "Explore the wild",
      imgPath:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      label: "Beach Slide",
      title: "Sunny Beach",
      subTitle: "Relax & Enjoy",
      imgPath:
        "https://www.whatsoninflorida.com/wp-content/uploads/2017/02/nal_TIwaterslide042_172504a_8col.jpg",
    },
    {
      label: "City Slide",
      title: "Night City Lights",
      subTitle: "Urban Vibes",
      imgPath:
        "https://saltproject.co/sites/default/files/images/SaltLakeCity/slidethecity/GOPR0857.jpg",
    },
  ];

  return (
    <Stack>
      <Stack>
        <Grid container spacing={3}>
          <Grid size={{ sm: 12, md: 8 }}>
            <MuiAutoSlider
              height={{ height: { xs: 340, sm: 480 } }}
              mainSlide={{
                color: "#fff",
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2,
                textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                fontSize: "3rem",
              }}
              data={sliderItems}
              subSlide={{
                color: "#fff",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 1,
              }}
              btnSlide={{
                background: "linear-gradient(90deg, #4caf50, #81c784)",
                color: "#fff",
                py: 1.5,
                px: 5,
                borderRadius: "30px",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                textDecoration: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #388e3c, #66bb6a)",
                  transform: "translateY(-2px)",
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                },
              }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 4 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                <MuiAutoSlider
                  height={{ height: { xs: 200, sm: 232 } }}
                  data={sliderItems2}
                  btnSlide={{
                    background: "linear-gradient(90deg, #4caf50, #81c784)",
                    color: "#fff",
                    py: 1,
                    px: 2,
                    borderRadius: "30px",
                    fontWeight: 600,
                    fontSize: { xs: "0.8rem", sm: "0.7rem" },
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(90deg, #388e3c, #66bb6a)",
                      transform: "translateY(-2px)",
                      boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                    },
                  }}
                  subSlide={{
                    color: "#fff",
                    fontWeight: { xs: 400, sm: 300 },
                    letterSpacing: 1,
                    fontSize: { xs: "1rem", sm: "0.7rem" },
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                  mainSlide={{
                    color: "#fff",
                    fontWeight: { xs: 600, sm: 400 },
                    lineHeight: 1,
                    mb: 2,
                    textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                    fontSize: { xs: "2.5rem", sm: "2rem" },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                <MuiAutoSlider
                  height={{ height: { xs: 200, sm: 232 } }}
                  data={sliderItems3}
                  btnSlide={{
                    background: "linear-gradient(90deg, #4caf50, #81c784)",
                    color: "#fff",
                    py: 1,
                    px: 2,
                    borderRadius: "30px",
                    fontWeight: 600,
                    fontSize: { xs: "0.8rem", sm: "0.7rem" },
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(90deg, #388e3c, #66bb6a)",
                      transform: "translateY(-2px)",
                      boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                    },
                  }}
                  subSlide={{
                    color: "#fff",
                    fontWeight: { xs: 400, sm: 300 },
                    letterSpacing: 1,
                    fontSize: { xs: "1rem", sm: "0.7rem" },
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                  mainSlide={{
                    color: "#fff",
                    fontWeight: { xs: 600, sm: 400 },
                    lineHeight: 1,
                    mb: 2,
                    textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                    fontSize: { xs: "2.5rem", sm: "2rem" },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default MainHeroSection;
