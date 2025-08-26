
import Badge from "@mui/material/Badge";
import { AddShoppingCartOutlinedIcon } from "@/_Icons";
import { useGetAllCartQuery } from "@/redux/api/cartApi";
import { Typography } from "@mui/material";
import Link from "next/link";

const Cart = () => {
  const { data, isLoading } = useGetAllCartQuery({});

  let badgeCount;
  if (!isLoading) {
    badgeCount = data?.data?.length;
  }

  return (
    <Badge color="success" badgeContent={badgeCount}>
      <Typography
       component={Link}
       href={"/cart"}
      >
        <AddShoppingCartOutlinedIcon />
      </Typography>
    </Badge>
  );
};

export default Cart;
