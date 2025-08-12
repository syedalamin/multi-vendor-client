import DashboardDrawer from "@/_components/Dashboard/Shared/DashboardDrawer/DashboardDrawer";
import PrivateRouteProvider from "@/lib/Providers/PrivateRouteProvider";

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
