import Footer from "@/_components/Main/Shared/Footer/Footer";
import Navbar from "@/_components/Main/Shared/Navbar/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
