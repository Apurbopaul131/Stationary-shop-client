import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

//admin dashboard sidebar options
export const adminPahts: MenuProps["items"] = [
  {
    key: "dashboard",
    label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "product-management",
    label: "P. Management",
    children: [
      {
        key: "create-product",
        label: <NavLink to={"/admin/create-product"}>Add Products</NavLink>,
      },
      {
        key: "all-products",
        label: <NavLink to={"/admin/products"}>All Products</NavLink>,
      },
    ],
  },
  {
    key: "order-management",
    label: "O. Management",
    children: [
      {
        key: "all-orders",
        label: <NavLink to={"/admin/orders"}>All Orders</NavLink>,
      },
    ],
  },
  {
    key: "setting",
    label: "Setting",
    children: [
      {
        key: "profile",
        label: <NavLink to={"/admin/profile"}>Profile</NavLink>,
      },
    ],
  },
];
