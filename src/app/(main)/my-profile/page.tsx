import MyProfile from "@/_components/Main/UI/MyProfile/MyProfile";
import { Container } from "@mui/material";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "My Profile",
  description: "...",
};
const MyProfilePage = () => {
  return (
    <Container>
      <MyProfile />
    </Container>
  );
};

export default MyProfilePage;
