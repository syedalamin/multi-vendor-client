// lib/fetcher.ts (SSR GET Only)

 
import { GetResponse } from "@/types/common";
 

export async function apiFetcher(
  endpoint: string,
  { tags, revalidate }: { tags?: string[]; revalidate?: number } = {}
): Promise<GetResponse> {
  const baseUrl = process.env.BASE_URL;
 
 
  //
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 50000);

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
     
    },
    cache: "default",
    next: { tags, revalidate },
    signal: controller.signal,
  });

  clearTimeout(timeout);

  if (!res.ok) {
    console.log("user is not login ");
  }

  const response = await res.json();

  // console.log(response)
  return {
    success: response?.success,
    message: response?.message,
    meta: response?.meta,
    data: response?.data,
  };
}
export async function apiSingleFetcher(
  endpoint: string,
  { tags, revalidate }: { tags?: string[]; revalidate?: number } = {}
): Promise<GetResponse> {
  const baseUrl = process.env.BASE_URL;
 
 
  //
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 50000);

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
 
    },
    cache: "no-store",
    next: { tags, revalidate },
    signal: controller.signal,
  });

  clearTimeout(timeout);

  if (!res.ok) {
    console.log("user is not login ");
  }

  const response = await res.json();

  // console.log(response)
  return response;
}


