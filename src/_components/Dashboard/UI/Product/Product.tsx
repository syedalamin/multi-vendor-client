
"use client";




import {
  useGetProductsQuery,
} from "@/redux/api/productApi";

import AllProduct from "./AllProduct";
import { Stack } from "@mui/material";

const Product = () => {

  const { data: productData } = useGetProductsQuery({});




  return (
    <Stack>
   
      <Stack>
        <AllProduct data={productData?.data} />
      </Stack>
    </Stack>
  );
};

export default Product;
