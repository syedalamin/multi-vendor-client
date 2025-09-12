import Footer from "@/_components/Main/Shared/Footer/Footer";
import Navbar from "@/_components/Main/Shared/Navbar/Navbar";
import DisplayCartButton from "@/_components/Main/UI/Cart/DisplayCartButton";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <DisplayCartButton />
      {children}
      <Footer />
    </>
  );
}
