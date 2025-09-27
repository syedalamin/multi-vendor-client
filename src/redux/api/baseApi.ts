import { axiosBaseQuery } from "@/lib/Axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://api.trustyshoptbd.com/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

// baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
// baseQuery: axiosBaseQuery({ baseUrl: "https://multi-vendor-server-wfx1.onrender.com/api/v1" }),