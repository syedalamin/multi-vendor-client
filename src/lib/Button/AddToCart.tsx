/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCreateCartMutation } from "@/redux/api/cartApi";
import { getUserInfo } from "@/services/auth.services";
import { Stack, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const AddToCart = ({
  id,
  name,
  sx,
  stock,
}: {
  id: string;
  name: string;
  sx: any;
  stock: number;
}) => {
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
    if (stock === 0) return;
    if (userInfo?.role) {
      try {
        const res: any = await createCart(GenerateData).unwrap();
        if (res?.success) {
          toast.success(res?.message);
        } 
      } catch (err: any) {
        toast.error(err?.data);
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
          background: stock === 0 ? "#9e9e9e" : "#4caf50",
          color: "#fff",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background 0.3s ease",
          cursor: stock === 0 ? "not-allowed" : "pointer",
          pointerEvents: stock === 0 ? "none" : "auto",
          opacity: stock === 0 ? 0.6 : 1,
        }}
        onMouseEnter={(e) => {
          if (stock !== 0) e.currentTarget.style.background = "#43a047";
        }}
        onMouseLeave={(e) => {
          if (stock !== 0) e.currentTarget.style.background = "#4caf50";
        }}
      >
        {stock === 0 ? "Out of Stock" : name}
      </Typography>
    </Stack>
  );
};

export default AddToCart;
