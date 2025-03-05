import { BaseQueryApi } from "@reduxjs/toolkit/query";
export type TError = {
  data:
    | {
        error: {
          path: string;
          message: string;
        }[];
        message: string;
        stack: string;
        success: boolean;
        statusCode: number;
      }
    | {
        success: boolean;
        message: string;
        error: string;
      };
  status: number;
};

export type TMeta = {
  age: number;
  limit: number;
  total: number;
  totalPage: number;
};
export type TResponse<T> = {
  data?: {
    data: T[] | T;
    success?: boolean;
    message?: string;
    statusCode?: number;
  };
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
  statusCode: number;
};
export type TReduxResponse<T> = TResponse<T> & BaseQueryApi;
export type TProduct = {
  _id: string;
  brand: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  quantity: number;
  inStock: boolean;
};
export type TStatus = "Pending" | "Shipping";
export type TOrder = {
  _id: string;
  email: string;
  product: TProduct;
  quantity: number;
  totalPrice: number;
  status: TStatus; // Enum-like status
};
export type TRole = "user" | "admin";
export type TUserRes = {
  _id: string;
  email: string;
  name: string;
  image: string;
  role: "user" | "admin";
  isBlocked: boolean;
};
