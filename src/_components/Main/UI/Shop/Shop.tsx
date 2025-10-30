"use client";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import AllShop from "./AllShop";
 
const Shop = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;


  return <Stack>
    <AllShop page={page} limit={limit} />
  </Stack>;
};

export default Shop;
