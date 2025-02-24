import { baseApi } from "../../api/baseApi";

const orderMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),
    cancleOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/cancle-order/${orderId}`,
        method: "DELETE",
      }),
    }),

    acceptOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/accept-order/${orderId}`,
        method: "PATCH",
      }),
    }),
  }),
});
export const {
  useGetAllOrderQuery,
  useCancleOrderMutation,
  useAcceptOrderMutation,
} = orderMangementApi;
