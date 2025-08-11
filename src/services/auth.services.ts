import { auth_key } from "@/constant/auth_key";
import { instance } from "@/lib/Axios/axiosInstance";
import { decodedToken } from "@/utils/LocalStorage/jwt";
import {
  getFromLocalStorage,
  removeUserFromLocalStorage,
  setToLocalStorage,
} from "@/utils/LocalStorage/localStorage";




export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(auth_key, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(auth_key);

  if (authToken) {
    const decodedData  = decodedToken(authToken);

    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  }
};

export const removeUser = () =>{
  const removeFromLocalStorage = removeUserFromLocalStorage(auth_key);
  return removeFromLocalStorage
}

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
