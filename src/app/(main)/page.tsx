import HeroSection from "@/_components/Main/UI/HomeSection/HeroSection";
import { Box, Container, Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Stack direction={"column"} spacing={5}>
        <Stack
          sx={{
            backgroundColor: "#ececec",
          }}
        >
          <Container>
            <HeroSection />
          </Container>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
// import BestSellerProductsSection from "@/_components/Main/UI/BestSellerProductsSection/BestSellerProductsSection";
// import MainHeroSection from "@/_components/Main/UI/HeroSection/MainHeroSection";
// import SpecialCart from "@/_components/Main/UI/HeroSection/SpecialCart";
// import PopularCategory from "@/_components/Main/UI/PopularCategory/PopularCategory";
// import PopularProduct from "@/_components/Main/UI/Product/PopularProduct";
// import { Container, Stack } from "@mui/material";

// const HomePage = () => {
//   return (
//     <Container>
//       <Stack direction={"column"} spacing={5}>
//         <MainHeroSection />
//         <PopularCategory />
//         <PopularProduct />
//         <SpecialCart />
//         <BestSellerProductsSection />
//       </Stack>
//     </Container>
//   );
// };

// export default HomePage;
