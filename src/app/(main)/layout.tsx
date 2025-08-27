import Footer from "@/_components/Main/Shared/Footer/Footer";
import Navbar from "@/_components/Main/Shared/Navbar/Navbar";

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
      {children}
      <Footer />
    </>
  );
}
