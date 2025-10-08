import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category/create-category",
        method: "POST",

        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.category],
    }),
    getAllCategory: builder.query({
      query: ({ page, limit }: { page?: number; limit?: number }) => ({
        url: "/category",
        method: "GET",
        params: { page, limit },
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.category],
    }),

    getSingleCategory: builder.query({
      query: (slug: string | undefined) => ({
        url: `/category/${slug}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.category],
    }),

    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.category],
    }),
    deleteCategory: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/category/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} = categoryApi;
