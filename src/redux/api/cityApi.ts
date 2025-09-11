import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const cityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCity: builder.mutation({
      query: (data) => ({
        url: "/city/create",
        method: "POST",
        
        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.city],
    }),
    getAllCity: builder.query({
      query: () => ({
        url: "/city",
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.city],
    }),

    deleteCity: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/city/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.city],
    }),
  }),
});

export const {
useCreateCityMutation,
useGetAllCityQuery,
useDeleteCityMutation
} = cityApi;
