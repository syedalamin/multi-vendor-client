// lib/fetcher.ts (SSR GET Only)

import { auth_key } from "@/constant/auth_key";
import { GetResponse } from "@/types/common";
import { cookies } from "next/headers";

export async function apiFetcher(
  endpoint: string,
  { tags, revalidate }: { tags?: string[]; revalidate?: number } = {}
): Promise<GetResponse> {
  const baseUrl = "http://localhost:5000/api/v1";
  const cookieStore = await cookies();
  const token = cookieStore.get(auth_key)?.value;
  //
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `${token}` }),
    },
    cache: "force-cache",
    next: { tags, revalidate },
    signal: controller.signal,
  });

  clearTimeout(timeout);

  if (!res.ok) {
    console.log("user is not login ");
  }

  const response = await res.json();

  return {
    success: response?.success,
    message: response?.message,
    meta: response?.data?.meta,
    data: response?.data?.data,
  };
}
