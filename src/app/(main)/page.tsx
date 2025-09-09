import BestSellerProductsSection from "@/_components/Main/UI/BestSellerProductsSection/BestSellerProductsSection";
import MainHeroSection from "@/_components/Main/UI/HeroSection/MainHeroSection";


import SpecialCart from "@/_components/Main/UI/HeroSection/SpecialCart";
import PopularCategory from "@/_components/Main/UI/PopularCategory/PopularCategory";
import PopularProduct from "@/_components/Main/UI/Product/PopularProduct";
import { Container, Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Stack direction={"column"} spacing={5}>
        <MainHeroSection />
        <PopularCategory />
        <PopularProduct />
        <SpecialCart />
        <BestSellerProductsSection />
      </Stack>
    </Container>
  );
};

export default HomePage;
