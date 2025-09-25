 

import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const invoiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    getLatestInvoice: builder.query({
      query: () => ({
        url: `/invoice/latest-invoice`,
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: [tagTypes.invoice],
    }),

   
  }),
});

export const { useGetLatestInvoiceQuery} = invoiceApi;
