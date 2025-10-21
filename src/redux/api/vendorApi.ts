import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const vendorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVendors: builder.query({
      query: ({ page, limit }: { page?: number; limit?: number }) => ({
        url: "/vendor",
        method: "GET",
        params: { page, limit },
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
    updateVendor: builder.mutation({
      query: ({ id, data }) => ({
        url: `/vendor/${id}`,
        method: "PATCH",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.vendor],
    }),
    deleteVendor: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/vendor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.vendor],
    }),
  }),
});

export const {
  useGetAllVendorsQuery,
  useVerifyStatusMutation,
  useDeleteVendorMutation,
  useUpdateVendorMutation
} = vendorApi;
