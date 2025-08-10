"use client";
import EcoModal from "@/_components/Shared/Modal/EcoModal";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <h2>Home Page</h2>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <EcoModal open={isOpen} setOpen={setOpen}>

        <Typography
          variant="h5"
          component={"h2"}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
            },
            fontWeight: 500,
          }}
        >
          Multi Vendor
        </Typography>
     
      </EcoModal>
    </div>
  );
};

export default HomePage;
