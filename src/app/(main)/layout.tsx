import Footer from "@/_components/Main/Shared/Footer/Footer";
import SearchBarWithNavbar from "@/_components/Main/Shared/Navbar/SearchBarWithNavbar";

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
      <SearchBarWithNavbar/>
      <DisplayCartButton />
      {children}
      <Footer />
    </>
  );
}
