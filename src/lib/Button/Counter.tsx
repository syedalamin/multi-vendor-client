/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useUpdateCartMutation } from "@/redux/api/cartApi";
const Counter = ({ params }: { params: any }) => {
  const [count, setCount] = useState(params?.quantity);

  const [updateCart] = useUpdateCartMutation();

  const increment = () => {
    setCount((prev: number) => {
      const newCount = prev + 1;
      handleUpdateCart(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prev: number) => {
      const newCount = prev > 1 ? prev - 1 : 1;
      handleUpdateCart(newCount);
      return newCount;
    });
  };

  const handleUpdateCart = async (newCount: number) => {
    if (!params?.id) return;

    const updateData = {
      id: params.id,
      quantity: newCount,
      productId: params.productId,
    };

    try {
      await updateCart(updateData).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton onClick={decrement}>
        <RemoveIcon />
      </IconButton>
      <Typography
        sx={{
          textAlign: "center",
        }}
      >
        {count}
      </Typography>

      <IconButton onClick={increment}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};

export default Counter;
