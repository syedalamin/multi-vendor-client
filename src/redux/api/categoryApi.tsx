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
      providesTags: [tagTypes.category]
    }),
    getCategoryById: builder.query({
      query: (id: string | undefined) => ({
        url: `/product/id/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCategoryQuery, useGetCategoryByIdQuery, useCreateCategoryMutation } = categoryApi;
