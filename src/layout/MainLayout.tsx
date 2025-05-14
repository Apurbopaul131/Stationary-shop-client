import { Outlet } from "react-router-dom";
import AppFooter from "../components/shered/AppFooter";
import Navbar from "../components/shered/Navbar";

const MainLayout = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Navbar></Navbar>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
