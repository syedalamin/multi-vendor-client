import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const subCategoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSubCategory: builder.mutation({
      query: (data) => ({
        url: "/sub-category/create-sub-category",
        method: "POST",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.subCategory],
    }),
    getAllSubCategory: builder.query({
      query: () => ({
        url: "/sub-category",
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.subCategory],
    }),

    getSingleSubCategory: builder.query({
      query: (slug: string | undefined) => ({
        url: `/sub-category/${slug}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.subCategory],
    }),

    updateSubCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/sub-category/${id}`,
        method: "PATCH",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.subCategory],
    }),
    deleteSubCategory: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/sub-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
  }),
});

export const {
  useCreateSubCategoryMutation,
  useGetAllSubCategoryQuery,
  useDeleteSubCategoryMutation,
  useGetSingleSubCategoryQuery,
  useUpdateSubCategoryMutation
} = subCategoryApi;
