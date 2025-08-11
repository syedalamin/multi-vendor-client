"use client";

import { useGetAllAdminsQuery } from "@/redux/api/adminApi";
import React from "react";

const AdminPage = () => {

  const {data} = useGetAllAdminsQuery({})

  console.log(data);
  return (
    <div className="mt-20 text-black">
      

      <h2>Admin Page</h2>
    </div>
  );
};

export default AdminPage;
