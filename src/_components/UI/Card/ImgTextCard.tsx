import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Category } from "@/types/common";

import { CardMedia, Stack } from "@mui/material";
import Link from "next/link";

export default function ImgTextCard({ item }: { item: Category }) {

  return (
    <Card>
     <Link href={`/category/${item?.slug}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={"100%"}
          height="100"
          image={item.image}
          alt={item.name}
        />
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 2
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "14px", 
                md: "16px"
              },
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
