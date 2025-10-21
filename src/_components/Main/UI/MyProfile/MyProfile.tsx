"use client";
import CustomerProfileCard from "@/_components/Dashboard/Shared/ProfileCard/CustomerProfileCard";
import ProfileCard from "@/_components/Dashboard/Shared/ProfileCard/ProfileCard";
import VendorProfileCart from "@/_components/Dashboard/Shared/ProfileCard/VendorProfileCard";
import Loading from "@/_components/Shared/Loading/Loading";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Stack } from "@mui/material";
import React from "react";

const MyProfile = () => {
  const { data, isLoading } = useGetMyProfileQuery({});

  if (isLoading) {
   return <Loading />;
  }
  let profile;

  if (data?.data?.role == "ADMIN") {
    profile = <ProfileCard item={data?.data} />;
  } else if (data?.data?.role == "VENDOR") {
    profile = <VendorProfileCart item={data?.data} />;
  } else if (data?.data?.role == "CUSTOMER") {
    profile = <CustomerProfileCard item={data?.data} />;
  }else{
    profile = <Loading/>
  }

  return <Stack>{profile}</Stack>;
};

export default MyProfile;
