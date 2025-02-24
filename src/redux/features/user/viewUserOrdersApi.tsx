import { baseApi } from "../../api/baseApi";

const viewUserOrdersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMeOrders: builder.query({
      query: () => ({
        url: "/me-orders",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetMeOrdersQuery } = viewUserOrdersApi;
