import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/common";
import { Box, Rating, Stack } from "@mui/material";
import Link from "next/link";

export default function ImgProductCard({ item }: { item: Product }) {
  // console.log(item);
  return (
    <Card>
      <CardMedia
        width={"100%"}
        height="100"
        component="img"
        alt={item.name}
        image={item.productImages[0]}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        p={{ xs: 3, sm: 2 }}
        gap={1}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        <Box justifyItems={{ xs: "center", sm: "start" }}>
          <Typography
            sx={{
              fontSize: {
                xs: "12px",
              },
            }}
            fontWeight={500}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "17px",
                sm: "15px",
              },
              fontWeight: 700,
            }}
            fontWeight={500}
          >
            Price ৳{item?.price}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
            size="small"
          />
        </Box>
        <Box>
          <Link href={"/cart"}>Cart</Link>
        </Box>
      </Stack>
    </Card>
  );
}
