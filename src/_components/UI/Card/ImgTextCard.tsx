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
        border: "1px solid #2e7d32",
        overflow: "hidden",

        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
      
          transform: "translateY(-4px)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        },
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(145deg, #fdfdfd, #f0f7f2)",
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
              height: { xs: "160px", sm: "140px" },
              objectFit: "cover",
            }}
          />
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
                color: "#333",
                textAlign: "center",
              }}
              fontWeight={700}
            >
              {item.name}
            </Typography>
          </Stack>
        </CardActionArea>
      </Link>
    </Box>
  );
}
