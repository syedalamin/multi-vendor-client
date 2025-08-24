"use client";
import { useGetAllCartQuery, useGetTotalCartQuery } from "@/redux/api/cartApi";
import { Grid, Stack } from "@mui/material";
import ShippingTable from "./ShippingTable";
import CartTotal from "./CartTotal";

const ShippingCart = () => {
  const { data } = useGetAllCartQuery({});
  const {data: totalCart} = useGetTotalCartQuery({});


  return (
    <Stack py={5}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 7, md: 8 }}>
          <ShippingTable data={data?.data}  />
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
          <CartTotal totalCart={totalCart} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ShippingCart;
