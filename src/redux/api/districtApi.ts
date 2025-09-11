import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const districtApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDistrict: builder.mutation({
      query: (data) => ({
        url: "/district/create",
        method: "POST",

        data: data,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: [tagTypes.district],
    }),
    getAllDistrict: builder.query({
      query: () => ({
        url: "/district",
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.district],
    }),

    deleteDistrict: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/district/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.district],
    }),
  }),
});

export const {
  useCreateDistrictMutation,
  useGetAllDistrictQuery,
  useDeleteDistrictMutation,
} = districtApi;
