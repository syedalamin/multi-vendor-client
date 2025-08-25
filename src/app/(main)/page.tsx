import BestSellerProductsSection from "@/_components/Main/UI/BestSellerProductsSection/BestSellerProductsSection";
import HeroSection from "@/_components/Main/UI/HeroSection/HeroSection";
import SpecialCart from "@/_components/Main/UI/HeroSection/SpecialCart";
import PopularCategory from "@/_components/Main/UI/PopularCategory/PopularCategory";
import PopularProduct from "@/_components/Main/UI/Product/PopularProduct";
import { Container, Stack } from "@mui/material";

const HomePage = () => {
  
  return (
    <Container>
      <Stack direction={"column"} spacing={10}>
        <HeroSection />
        <PopularCategory />
        <PopularProduct />
        <SpecialCart/>
        <BestSellerProductsSection/>
      </Stack>
    </Container>
  );
};

export default HomePage;
