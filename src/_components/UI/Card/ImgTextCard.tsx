 
import * as React from "react";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Category } from "@/types/common";

import { Box, CardMedia, Stack } from "@mui/material";
import Link from "next/link";

export default function ImgTextCard({ item }: { item: Category }) {
  return (
    <Box
      sx={{
        height: "100%",
        border: "1px solid #e0e0e0",
        display: "flex",
        borderRadius: "5px",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s , border 0.3s ",
        "&:hover": {
          border: "1px solid #2e7d32",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Link
        href={`/category/${item?.slug}`}
        style={{ height: "100%", width: "100%" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{
              width: "100%",
              height: { xs: "120px", sm: "130px", md: "140px" },
              objectFit: "cover",
            }}
          />
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  // md: "16px",
                },
                color: "#333",
                textAlign: "center",
              }}
              fontWeight={600}
            >
             {item.name.slice(0, 15)}
            </Typography>
          </Stack>
        </CardActionArea>
      </Link>
    </Box>
  );
}
