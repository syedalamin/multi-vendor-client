import ImgProductCard from "@/_components/UI/Card/ImgProductCard";
import { apiFetcher } from "@/lib/NextFetch/fetcher";
import { Product } from "@/types/common";

import {
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import PaginationClient from "./PaginationToClient";

const ProductData = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const productData = await apiFetcher(`/product?limit=${limit}&page=${page}`);

  // console.log(productData)
  const total = productData?.meta?.total || 0;
  const totalPages = Math.ceil(total / limit);

  let product;

  if (productData.success) {
    product = (
      <Stack py={4}>
        <Grid
          container
          spacing={2}
          alignItems={"center"}
  
        >
          {productData.data.map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 12 / 4 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
       <PaginationClient page={page} totalPages={totalPages} limit={limit} />
      </Stack>
    );
  } else {
    product = (
      <>
        <Typography>NO Data</Typography>
      </>
    );
  }

  return product;
};

export default ProductData;
