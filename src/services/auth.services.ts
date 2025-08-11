import { instance } from "@/lib/Axios/axiosInstance";

export const getNewAccessToken = async () => {
  return await instance({
    url: "http://localhost:5000/api/v1/auth/refresh-token",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
