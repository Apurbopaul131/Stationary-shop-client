/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { TOrder, TProduct, TResponse } from "../../types";
import { logout, setUser, TUser } from "../features/auth/authSlice";
import { RootState } from "../store";

// cloud Name: dvqqxighm
// upload Preset name: g3wftqry
const baseQuery = fetchBaseQuery({
  baseUrl: "https://stationery-shop-theta.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).login;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions): Promise<any> => {
  let result = (await baseQuery(args, api, extraOptions)) as TResponse<
    TProduct | TOrder
  >;
  if (result?.error?.status === 404) {
    toast.error(result?.error?.data?.message, {
      position: "top-center",
      style: {
        color: "red",
        padding: "10px",
        borderRadius: "8px",
      },
      duration: 2000,
    });
  }
  if (result?.error && result?.error?.status === 401) {
    const res = await fetch(
      "https://stationery-shop-theta.vercel.app/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const refreshResults = await res.json();
    if (refreshResults?.data?.token) {
      const currentUser = (api.getState() as RootState).login.user;
      api.dispatch(
        setUser({
          user: currentUser as TUser,
          token: refreshResults?.data?.token,
        })
      );
      result = (await baseQuery(
        args,
        api,
        extraOptions
      )) as TResponse<TProduct>;
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
