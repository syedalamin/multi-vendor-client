"use client";

import { useGetAllAdminsQuery } from "@/redux/api/adminApi";
import { Stack } from "@mui/material";
import React from "react";

const AdminPage = () => {
  const { data } = useGetAllAdminsQuery({});

  console.log(data);
  return (
    <Stack>
      <h2>Admin Page</h2>
    </Stack>
  );
};

export default AdminPage;
