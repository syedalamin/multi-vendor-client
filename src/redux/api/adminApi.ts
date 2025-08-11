import { baseApi } from "./baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAdmins: build.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      // transformResponse: (response) => {
      //   return {
      //     admin: response.data,
      //     meta: response.meta,
      //   };
      // },
    }),
  }),
});

export const { useGetAllAdminsQuery } = adminApi;
