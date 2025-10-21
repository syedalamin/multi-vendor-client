import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdmins: builder.query({
      query: ({ page, limit }: { page?: number; limit?: number }) => ({
        url: "/admin",
        method: "GET",
        params: { page, limit },
      }),
      transformResponse: (response) => {
        return {
          admin: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),
    softDelete: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/admin/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    deleteAdmin: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useSoftDeleteMutation,
  useDeleteAdminMutation,
} = adminApi;
