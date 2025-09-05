
"use client";

import { Stack } from "@mui/material";
import AllCart from "./AllCart";
import { useGetAdminAllCartQuery } from "@/redux/api/cartApi";



const Cart = () => {

  const { data: cartData } = useGetAdminAllCartQuery({});
  

  console.log(cartData);

  return 0;

  return (
    <Stack>
      <Stack>
        <AllCart data={cartData?.data} />
      </Stack>
    </Stack>
  );
};

export default Cart;
