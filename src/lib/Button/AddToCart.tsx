/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useCreateCartMutation } from "@/redux/api/cartApi";
import { getUserInfo } from "@/services/auth.services";
import { Stack, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
;
import React from "react";
import { toast } from "sonner";

const AddToCart = ({ id, name , sx}: { id: string; name: string , sx: any}) => {
  const pathname = usePathname();
  const [createCart] = useCreateCartMutation();
  const userInfo = getUserInfo();
  const router = useRouter();
  const GenerateData = {
    productId: id,
    quantity: 1,
  };
  const handleRoute = () => {
    router.push(`/login?redirect=${pathname}`);
  };

  const handleCartSubmit = async () => {
    if (userInfo?.role) {
      const res: any = await createCart(GenerateData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } else {
      handleRoute();
    }
  };
  return (
    <Stack
      flex={1}
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100%" }}
      spacing={2}
    >
      <Typography 
        onClick={handleCartSubmit}
        sx={{
          ...sx,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#4caf50",
          color: "#fff",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#43a047")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#4caf50")}
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default AddToCart;
