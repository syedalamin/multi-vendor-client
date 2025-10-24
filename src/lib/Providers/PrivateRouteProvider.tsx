/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Loading from "@/_components/Shared/Loading/Loading";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PrivateRouteProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfo: any = getUserInfo();
    const allowRole = ["admin", "vendor"];

    if (!userInfo) {
      router.replace("/");
      return;
    }

    if (userInfo.role === "vendor") {
      if (isLoading) return;

      if (data?.data?.isVerified === false) {
        router.replace("/verify");
        return;
      }
    }

    if (!userInfo.role || !allowRole.includes(userInfo.role)) {
      router.replace("/");
      return;
    }

    setLoading(false);
  }, [router, data, isLoading]);

  if (loading || isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default PrivateRouteProvider;
