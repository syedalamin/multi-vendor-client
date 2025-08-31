"use client";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import AllCategory from "./AllCategory";

const Category = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 12;


  return <Stack>
    <AllCategory page={page} limit={limit} />
  </Stack>;
};

export default Category;
