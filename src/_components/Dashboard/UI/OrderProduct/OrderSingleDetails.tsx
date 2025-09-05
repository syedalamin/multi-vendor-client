'use client'

import { useGetSingleOrderQuery } from "@/redux/api/orderApi";
import { Stack } from "@mui/material";
import SingleOrderTable from "./SingleOrderTable";


const OrderSingleDetails = ({id}:{id: string}) => {
  const {data: singleOrder} = useGetSingleOrderQuery(id);
 
 
  return (
    <Stack>
      <SingleOrderTable data={singleOrder?.data?.orderItem}/>
    </Stack>
  );
};

export default OrderSingleDetails;