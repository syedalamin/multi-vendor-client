"use client";
import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
import { Stack } from "@mui/material";
import AllOrderProduct from "./AllOrderProduct";




const OrderProduct = () => {
  const { data: allOrderData } = useGetAllOrdersQuery({});
 

  return (
    <Stack>
      <Stack>
        <AllOrderProduct data={allOrderData?.data} />
      </Stack>
    </Stack>
  );
};

export default OrderProduct;
