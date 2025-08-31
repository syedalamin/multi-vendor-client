import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: ({ page, limit }: { page?: number; limit?: number }) => ({
        url: "/category",
        method: "GET",
        params: { page, limit },
      }),
      transformResponse: (response) => {
        return response.data;
      },
    }),
    getCategoryById: builder.query({
      query: (id: string | undefined) => ({
        url: `/product/id/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCategoryQuery, useGetCategoryByIdQuery } = categoryApi;
