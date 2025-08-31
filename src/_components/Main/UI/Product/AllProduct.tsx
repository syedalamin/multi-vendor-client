

import { useGetProductsQuery } from '@/redux/api/productApi';
import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import PaginationClient from './PaginationToClient';
import { Product } from '@/types/common';
import ImgProductCard from '@/_components/UI/Card/ImgProductCard';

const AllProduct =({ page, limit }: { page: number; limit: number })=> {
  const {data: productData} = useGetProductsQuery({page: page, limit: limit})
  const total = productData?.meta?.total || 0;
  const totalPages = Math.ceil(total / limit);

let product;

  if (productData?.success) {
    product = (
      <Stack py={4}>
        <Grid container spacing={2} alignItems={"center"}>
          {productData.data.map((item: Product) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 12 / 4 }}>
              <ImgProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        <PaginationClient
          url={"product"}
          page={page}
          totalPages={totalPages}
          limit={limit}
        />
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

export default AllProduct;