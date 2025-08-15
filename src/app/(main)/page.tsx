import HeroSection from "@/_components/Main/UI/HeroSection/HeroSection";
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
      </Stack>
    </Container>
  );
};

export default HomePage;
