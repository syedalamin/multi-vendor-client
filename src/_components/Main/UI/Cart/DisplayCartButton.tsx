import { Stack } from "@mui/material";
import React from "react";
import CartDrawer from "./CartDrawer";

const DisplayCartButton = () => {
  return (
    <Stack
      sx={{
        position: "fixed",       
        top: "50%",               
        right: { xs: "10px", sm: "20px" },  
        transform: "translateY(-50%)", 
        zIndex: 1300,              
      }}
    >
      <CartDrawer />
    </Stack>
  );
};

export default DisplayCartButton;
