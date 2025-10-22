"use client";

import Loading from "@/_components/Shared/Loading/Loading";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PrivateRouteProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userInfo = getUserInfo();
    const allowRole = ["admin", "vendor"];

    if (!userInfo) {
      router.replace("/");
    } else if (!userInfo.role || !allowRole.includes(userInfo.role)) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <Loading/>;
  }

  return <>{children}</>;
};

export default PrivateRouteProvider;
