import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Typography } from "antd";
import { Link } from "react-router-dom";
import { useGetAllproductQuery } from "../../redux/features/admin/productManagementApi";
import { useGetUserQuery } from "../../redux/features/auth/authApi";
import { logout } from "../../redux/features/auth/authSlice";
import { useGetMeOrdersQuery } from "../../redux/features/user/viewUserOrdersApi";
import { useAppDispatch } from "../../redux/hooks";

// const { Sider } = Layout;
const { Title, Text } = Typography;

const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const { data: user } = useGetUserQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const { data: orders } = useGetMeOrdersQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const { data: products } = useGetAllproductQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "400px",
        margin: "0 auto",
        borderRadius: "10px",
        backgroundColor: "#001529",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Flex vertical align="center">
          <Avatar
            size={80}
            icon={<UserOutlined />}
            style={{ marginBottom: 20 }}
          />
          <Title level={4} style={{ color: "#fff" }}>
            {user?.data && user?.data?.name}
          </Title>
          <Text style={{ color: "#bbb" }}>
            {user?.data && user?.data?.email}
          </Text>
        </Flex>
        <Card style={{ marginTop: 20, background: "#FEEAE9", color: "#fff" }}>
          <Text style={{ color: "#FF136F" }}>
            Your orders: {orders?.data?.length}
          </Text>
        </Card>
        <Card style={{ marginTop: 10, background: "#FEEAE9", color: "#fff" }}>
          <Text style={{ color: "#FF136F" }}>
            Total Products: {products?.data?.length}
          </Text>
        </Card>
        <Link to={"/"}>
          <Button
            block
            style={{
              marginTop: 20,
              backgroundColor: "#FAAD14",
              border: "none",
              color: "white",
            }}
          >
            Home
          </Button>
        </Link>
        <Button
          onClick={() => dispatch(logout())}
          color="danger"
          block
          variant="solid"
          style={{ marginTop: 10 }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserDashboard;
