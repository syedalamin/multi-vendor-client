import DashboardDrawer from "@/_components/Dashboard/Shared/DashboardDrawer/DashboardDrawer";
import PrivateRouteProvider from "@/lib/Providers/PrivateRouteProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustyShop BD",
  description: "...",
  icons: {
    icon: "/public/favicon.ico",
  },
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrivateRouteProvider>
      <DashboardDrawer>{children}</DashboardDrawer>
    </PrivateRouteProvider>
  );
}
