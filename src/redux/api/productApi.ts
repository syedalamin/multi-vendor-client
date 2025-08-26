import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (searchTerm: string) => ({
        url: "/product",
        method: "GET",
        params: { searchTerm },
      }),
      transformResponse: (response) => {
        return response.data;
      },
    }),
    getProductId: builder.query({
      query: (id: string | undefined) => ({
        url: `/product/id/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProductIdQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
} = productApi;
