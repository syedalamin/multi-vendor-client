import PopularCategory from "@/_components/Main/UI/PopularCategory/PopularCategory";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container sx={{
      py: 5
    }}>
      <PopularCategory />
    </Container>
  );
};

export default HomePage;
