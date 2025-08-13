import PopularCategory from "@/_components/Main/UI/PopularCategory/PopularCategory";
import PopularProduct from "@/_components/Main/UI/Product/PopularProduct";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container sx={{
      py: 5
    }}>
      <PopularCategory />
      <PopularProduct/>
    </Container>
  );
};

export default HomePage;
