import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";

export const userPaths:MenuProps['items'] = [
  {
    key: "dashboard",
    label: <NavLink to={"/user/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "all-orders",
    label: <NavLink to={"/user/orders"}>All Orders</NavLink>,
  },
];
