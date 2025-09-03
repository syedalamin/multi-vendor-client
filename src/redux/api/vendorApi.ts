import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const vendorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVendors: builder.query({
      query: () => ({
        url: "/vendor",
        method: "GET",
      }),
      transformResponse: (response) => {
        return {
          vendor: response.data.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.vendor],
    }),
    verifyStatus: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/vendor/verify/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.vendor],
    }),
    // deleteAdmin: builder.mutation({
    //   query: (id: string | undefined) => ({
    //     url: `/admin/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [tagTypes.admin],
    // }),
  }),
});

export const { useGetAllVendorsQuery, useVerifyStatusMutation } = vendorApi;
