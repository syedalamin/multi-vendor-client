"use client";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { Box, Grid, Stack } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import ImgTextCard from "@/_components/UI/Card/ImgTextCard";
import { Category } from "@/types/common";
import TitleAndButton from "@/_components/Shared/TitleAndButton/TitleAndButton";

const Categories = () => {
  const { data: categoryData } = useGetAllCategoryQuery({});

  return (
    <Stack sx={{ width: "100%" }}>
      <TitleAndButton title="Categories" links="/category"/>
      
      <Box sx={{ width: "100%", py: 1 }}>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{ clickable: true }}
          // loop={true} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,  
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 10 },
            768: { slidesPerView: 5, spaceBetween: 10 },
            1024: { slidesPerView: 7, spaceBetween: 10 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ paddingBottom: "5px", paddingTop: "20px" }}
        >
          {categoryData?.data?.map((item: Category) => (
            <SwiperSlide key={item.id}>
              <Grid>
                <Stack>
                  <ImgTextCard item={item} />
                </Stack>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
};

export default Categories;
