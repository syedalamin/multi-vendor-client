import DashboardDrawer from "@/_components/Dashboard/Shared/DashboardDrawer/DashboardDrawer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardDrawer>{children}</DashboardDrawer>
      {/* {children} */}
    </>
  );
}
