"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "@/image/Slider1.png";
import slider2 from "@/image/Slider2.png";
import slider3 from "@/image/Slider3.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import SideCategories from "./SideCategories";

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative", pb: 2 }}>
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
            {[slider1, slider2, slider3].map((slide, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "220px", sm: "350px" },
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={slide}
                    alt={`Hero Image ${i + 1}`}
                    quality={100}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
