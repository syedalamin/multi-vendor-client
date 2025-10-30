/* eslint-disable @typescript-eslint/no-explicit-any */

export async function generateMetadata({ params }: { params: any }) {
  const { category } = await params;

  const singleSubCategory = await apiSingleFetcher(`/category/${category}`);
  return {
    title: `${singleSubCategory.data.name} - TrustyShop BD`,
  };
}

import CategorySectionDrawer from "@/_components/Main/UI/CategorySection/CategorySection";

import { apiSingleFetcher } from "@/lib/NextFetch/fetcher";
import { Stack } from "@mui/material";

const CategorySlugPage = async ({ params }: { params: any }) => {
  const { category } = await params;
  const singleSubCategory = await apiSingleFetcher(`/category/${category}`);

  return (
    <Stack>
      {/* <CategoryParams props={{ category }} /> */}

      <CategorySectionDrawer item={singleSubCategory} name="Sub Category" />
    </Stack>
  );
};

export default CategorySlugPage;
