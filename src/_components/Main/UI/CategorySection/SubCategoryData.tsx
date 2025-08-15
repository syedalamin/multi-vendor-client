"use client";
import ImgProductCard from "@/_components/UI/Card/ImgProductCard";

import { Product } from "@/types/common";
import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
interface CategoryData {
  data: {
    product: Product[];
  };
}
const SubCategoryData = ({ subCategory }: { subCategory: string }) => {
  const [categoryData, setData] = useState<null | CategoryData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!subCategory) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const baseUrl = "http://localhost:5000/api/v1";
        const res = await fetch(`${baseUrl}/sub-category/${subCategory}`);
        const singleSubCategory = await res.json();
        setData(singleSubCategory);
      } catch (error) {
        console.error("Error fetching sub-category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subCategory]);

  let product;

  if (!loading) {
    product = (
      <Stack>
        <Grid
          container
          spacing={2}
          py={7}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {categoryData?.data?.product?.map((item: Product) => (
            <Grid key={item.id} size={{ xs:6, sm: 6, md: 4 , lg: 12 / 4 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  } else if (
    !categoryData?.data?.product ||
    categoryData?.data?.product.length === 0
  ) {
    product = <Stack>No Data Found</Stack>;
  } else {
    product = <Stack>Loading...</Stack>;
  } 

  return product;
};

export default SubCategoryData;
