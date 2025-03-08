import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Flex, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import DashboardBarChart from "../../components/ui/DashbordBarChart";
import StaticOrderTable from "../../components/ui/StaticOrderTable";
import { useGetAllOrderQuery } from "../../redux/features/admin/orderManagementApi";
import { useGetAllproductQuery } from "../../redux/features/admin/productManagementApi";
import { useGetUserQuery } from "../../redux/features/auth/authApi";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

// const { Sider } = Layout;
const { Title, Text } = Typography;

const AdminDashboard = () => {
  const dispatch = useAppDispatch();
  const { data: user } = useGetUserQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const {
    data: orders,
    isFetching,
    isLoading,
  } = useGetAllOrderQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const { data: products } = useGetAllproductQuery([{}], {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  return (
    <Row gutter={16}>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div
          style={{
            minHeight: "100vh",
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
                src={user?.data.image}
                style={{ marginBottom: 20 }}
              />
              <Title level={4} style={{ color: "#fff" }}>
                {user?.data && user?.data?.name}
              </Title>
              <Text style={{ color: "#bbb" }}>
                {user?.data && user?.data?.email}
              </Text>
            </Flex>
            <Card
              style={{ marginTop: 20, background: "#FEEAE9", color: "#fff" }}
            >
              <Text style={{ color: "#FF136F" }}>
                Total Orders: {orders?.data?.length}
              </Text>
            </Card>
            <Card
              style={{ marginTop: 10, background: "#FEEAE9", color: "#fff" }}
            >
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
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
        <Flex vertical gap={16}>
          <StaticOrderTable
            orders={orders?.data}
            isLoading={isLoading}
            isFetching={isFetching}
          />
          <DashboardBarChart />
        </Flex>
      </Col>
    </Row>
  );
};

export default AdminDashboard;
