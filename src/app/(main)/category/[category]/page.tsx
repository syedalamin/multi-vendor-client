import { Stack } from "@mui/material";


import CategoryParams from "@/_components/UI/Category/CategoryParams";
import CategorySectionDrawer from "@/_components/Main/UI/CategorySection/CategorySection";
import { apiSingleFetcher } from "@/lib/NextFetch/fetcher";


interface CategoryParams {
  params: { category: string };
}

const CategorySlugPage = async ({ params }: CategoryParams) => {
  const { category } =await params;

  const singleSubCategory = await apiSingleFetcher(`/category/${category}`);

  return (
    <Stack>
      <CategoryParams props={{ category }} />
      <CategorySectionDrawer
        item={singleSubCategory}
        name="Sub Category"
      />
    </Stack>
  );
};

export default CategorySlugPage;
