import { Box, Container, Typography } from "@mui/material";
import Breadcrumbs from "@/image/Breadcrumbs.png";
import Image from "next/image";

interface CategoryParamsProps {
  category?: string;
  subCategory?: string;
  product?: string;
}

type PropsType = {
  props: CategoryParamsProps;
};

const CategoryParams = ({ props }: PropsType) => {

  const segments = Object.values(props).filter(Boolean);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={Breadcrumbs} alt="Hero Image" quality={100} priority fill />

      <Container>
        <Typography
          display={"flex"}
          gap={1}
          flexWrap={"wrap"}
          sx={{
            position: "relative",
            color: "#fff",
            textAlign: "start",
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
            },
          }}
        >
          {segments.map((segment, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                fontWeight: index === 0 ? "bold" : "normal",
                color: index === 0 ? "#fff" : "#00B207",
              }}
            >
         
              {index === 0 && <>Category &gt; {segment}</>}

           
              {index > 0 && <> &gt; {segment}</>}
            </Box>
          ))}
        </Typography>
      </Container>
    </Box>
  );
};

export default CategoryParams;
