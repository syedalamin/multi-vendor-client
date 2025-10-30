/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Box, CardMedia, Grid } from "@mui/material";
import SideCategories from "./SideCategories";
import { useGetImageDataQuery } from "@/redux/api/metaDataApi";

const HeroSection = () => {
  const { data: imageData,  } = useGetImageDataQuery({});
  return (
    <Box sx={{ position: "relative" }}>
      <Grid container spacing={1}>
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "220px", sm: "350px" },
              py: 1,
              backgroundColor: "#fff",
            }}
          >
            <SideCategories />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className="mySwiper"
          >
            {imageData?.data?.sliderImages?.map((slide: any) => (
              <SwiperSlide key={slide}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "220px", sm: "350px" },
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    component="img"
                    alt={slide}
                    image={slide}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .swiper-button-prev {
          left: 10px;
        }
        .swiper-button-next {
          right: 10px;
        }

        @media (max-width: 600px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
