"use client";
import { Box, Grid, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Product, ProductStatus } from "@/types/common";

import { useGetProductsQuery } from "@/redux/api/productApi";
import { useMemo } from "react";
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import CountDown from "../../Shared/CountDown";
import { useGetImageDataQuery } from "@/redux/api/metaDataApi";

const HotDeal = () => {
  const { data: productData } = useGetProductsQuery({});
  const { data: imageData } = useGetImageDataQuery({});


  const discount = useMemo(() => {
    return productData?.data
      ?.filter(
        (item: Product) =>
          item.discount >= 20 &&
          item.stock > 0 &&
          item.status === ProductStatus.ACTIVE
      )
      ?.sort(() => 0.5 - Math.random())
      ?.slice(0, 12);
  }, [productData?.data]);

  return (
    <Stack sx={{ width: "100%" }}>
      <CountDown title="Hot Deal" hours={imageData?.data?.hours} minutes={imageData?.data?.minutes} />

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
            640: { slidesPerView: 4, spaceBetween: 10 },
            768: { slidesPerView: 5, spaceBetween: 10 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ paddingBottom: "5px", paddingTop: "20px" }}
        >
          {discount?.map((item: Product) => (
            <SwiperSlide key={item.id}>
              <Grid>
                <Stack>
                  <ImgProductCard item={item} />
                </Stack>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
};

export default HotDeal;
