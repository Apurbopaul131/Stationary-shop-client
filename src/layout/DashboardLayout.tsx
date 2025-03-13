import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import paperCartLogo from "../assets/images/shop-logo.png";
import { adminPahts } from "../constants/adminsidebar.constants";
import { userPaths } from "../constants/usersidebar.constants";
import { logout, selactUser } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
const { Header, Content, Sider } = Layout;
const DashboardLayout = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selactUser);
  const dispatch = useAppDispatch();

  const userRole = {
    ADMIN: "admin",
    USER: "user",
  };
  //logic for generated role based side bar
  const role = user?.role;
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = adminPahts;
      break;
    case userRole.USER:
      sidebarItems = userPaths;
      break;
    default:
      break;
  }
  return (
    <Layout hasSider style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => navigate("/")}
            style={{
              color: "white",
              height: "4rem",
              display: "flex",
              gap: "4px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <img src={paperCartLogo} alt="paperCartLogo" />
            <h2>PaperCard</h2>
          </div>
          <Button
            onClick={() => dispatch(logout())}
            style={{ marginRight: "10px" }}
            color="danger"
            variant="solid"
          >
            Logout
            <LogoutOutlined />
          </Button>
        </Header>
        <Content style={{ margin: "10px 10px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
