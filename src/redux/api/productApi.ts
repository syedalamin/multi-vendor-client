import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/create-product",
        method: "POST",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.product],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.product],
    }),
    getProducts: builder.query({
      query: ({
        page,
        limit,
        searchTerm,
      }: {
        page?: number;
        limit?: number;
        searchTerm?: string;
      }) => ({
        url: "/product",
        method: "GET",
        params: { page, limit, searchTerm },
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.product],
    }),
    getMyVendorProducts: builder.query({
      query: ({
        page,
        limit,
        searchTerm,
      }: {
        page?: number;
        limit?: number;
        searchTerm?: string;
      }) => ({
        url: "/product/my-vendor",
        method: "GET",
        params: { page, limit, searchTerm },
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.product],
    }),

    getProductId: builder.query({
      query: (id: string | undefined) => ({
        url: `/product/id/${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.product],
    }),
    getProductIds: builder.mutation({
      query: (ids: string[]) => ({
        url: `/product/ids/`,
        method: "POST",
        body: { ids },
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/product/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.product],
    }),
  }),
});

export const {
  useGetProductIdQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetProductIdsMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetMyVendorProductsQuery,
} = productApi;
