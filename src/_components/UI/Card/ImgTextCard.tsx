import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Category } from "@/types/common";

import { CardMedia, Stack } from "@mui/material";
import Link from "next/link";

export default function ImgTextCard({ item }: { item: Category }) {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
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
              height: "100%",
              width: "100%",
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
                textAlign: "center"
              }}
              fontWeight={700}
            >
              {item.name}
            </Typography>
          </Stack>
        </CardActionArea>
      </Link>
    </Card>
  );
}
