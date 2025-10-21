import Categories from "@/_components/Main/UI/HomeSection/Categories";
import CategoryProducts from "@/_components/Main/UI/HomeSection/CategoryProducts";
import FooterImg from "@/_components/Main/UI/HomeSection/FooterImg";
import HeroImg from "@/_components/Main/UI/HomeSection/HeroImg";
import HeroSection from "@/_components/Main/UI/HomeSection/HeroSection";
import HotDeal from "@/_components/Main/UI/HomeSection/HotDeal";
import HotDealImg from "@/_components/Main/UI/HomeSection/HotDealImg";
import HotMainImg from "@/_components/Main/UI/HomeSection/HotMainImg";
import { Box, Container, Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Stack
        direction={"column"}
        spacing={2}
        sx={{
          backgroundColor: "#ececec",
        }}
      >
        <Stack>
          <Container>
            <HeroSection />
          </Container>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#fff",
            py: 4,
          }}
        >
          <Container>
            <HeroImg />
          </Container>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#fff",
            py: 3,
          }}
        >
          <Container>
            <Categories />
          </Container>
        </Stack>
        <Stack>
          <Container>
            <HotDealImg />
          </Container>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#fff",
            py: 3,
          }}
        >
          <Container>
            <HotDeal />
          </Container>
        </Stack>
        <Stack>
          <Container>
            <HotMainImg />
          </Container>
        </Stack>
        <Stack>
          <CategoryProducts />
        </Stack>
        <Stack>
          <Container>
            <FooterImg />
          </Container>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;

//     <Container>
//       <Stack direction={"column"} spacing={5}>
//         <MainHeroSection />
//         <PopularCategory />
//         <PopularProduct />
//         <SpecialCart />
//         <BestSellerProductsSection />
//       </Stack>
//     </Container>
