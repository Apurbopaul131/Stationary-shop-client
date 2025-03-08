import { baseApi } from "../../api/baseApi";

const orderMangementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        method: "GET",
        params: { order_id },
      }),
    }),
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/orders",
        method: "POST",
        body: orderInfo,
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
  useCreateOrderMutation,
  useVerifyOrderQuery,
} = orderMangementApi;
