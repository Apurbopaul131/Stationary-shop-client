import { createBrowserRouter } from "react-router-dom";
import ProductCart from "../components/ui/ProductCart";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "../layout/ProtectedRoute";
import About from "../pages/About";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminViewOrders from "../pages/admin/AdminViewOrders";
import CreateProduct from "../pages/admin/CreateProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import ViewProducts from "../pages/admin/ViewProducts";
import AllProducts from "../pages/AllProducts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import UserDashboard from "../pages/user/UserDashboard";
import ViewOrders from "../pages/user/ViewOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "products/:productId/cart",
        element: <ProductCart />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "products",
        element: <ViewProducts />,
      },
      {
        path: "products/update/:productId",
        element: <UpdateProduct />,
      },
      {
        path: "orders",
        element: <AdminViewOrders />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "orders",
        element: <ViewOrders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
