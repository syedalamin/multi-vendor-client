/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import TitleAndButton from "@/_components/Shared/TitleAndButton/TitleAndButton";
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import { useGetAllSubCategoryQuery } from "@/redux/api/subCategoryApi";
import { Product } from "@/types/common";
import { Box, Container, Grid, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const CategoryProducts = () => {
  const { data: subCategoryData } = useGetAllSubCategoryQuery({});
 
  return (
    <Stack>
      {subCategoryData?.data?.map((item: any) => (
        <Stack
          key={item?.id}
          sx={{
            backgroundColor: "#fff",
            my: 1,
            py: 3,
          }}
        >
          <Stack>
            <Container>
              <TitleAndButton
                title={item?.name}
                links={`/category/${item?.category?.slug}?slug=${item?.slug}`}
              />

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
                  {item?.product?.map((items: Product) => (
                    <SwiperSlide key={items.id}>
                      <Grid>
                        <Stack>
                          <ImgProductCard item={items} />
                        </Stack>
                      </Grid>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Container>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default CategoryProducts;
