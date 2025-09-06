"use client";
import CustomerProfileCard from "@/_components/Dashboard/Shared/ProfileCard/CustomerProfileCard";
import ProfileCard from "@/_components/Dashboard/Shared/ProfileCard/ProfileCard";
import VendorProfileCart from "@/_components/Dashboard/Shared/ProfileCard/VendorProfileCard";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Stack } from "@mui/material";
import React from "react";

const MyProfile = () => {
  const { data } = useGetMyProfileQuery({});

  let profile;

  if (data?.data?.role == "ADMIN") {
    profile = <ProfileCard item={data?.data} />;
  } else if (data?.data?.role == "VENDOR") {
    profile = <VendorProfileCart item={data?.data} />;
  } else {
    profile = <CustomerProfileCard item={data?.data} />;
  }

  return <Stack>{profile}</Stack>;
};

export default MyProfile;
