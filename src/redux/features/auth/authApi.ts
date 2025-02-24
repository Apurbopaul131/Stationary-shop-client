import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/auth/register-user",
        method: "POST",
        body: user,
      }),
    }),

    getUser: builder.query({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
    }),
  }),
});
export const { useLoginMutation, useRegisterUserMutation, useGetUserQuery } =
  authApi;
