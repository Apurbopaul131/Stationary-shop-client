import { Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import DashboaedCard from "../../components/ui/DashboardCard";
import DashboardBarChart from "../../components/ui/DashbordBarChart";
import StaticOrderTable from "../../components/ui/StaticOrderTable";
import { useTotalRevenueQuery } from "../../redux/features/admin/orderManagementApi";
import { useGetAllproductQuery } from "../../redux/features/admin/productManagementApi";
import { useGetMeOrdersQuery } from "../../redux/features/user/viewUserOrdersApi";
// const { Sider } = Layout;

const { Title } = Typography;
const UserDashboard = () => {
  const {
    data: orders,
    isFetching,
    isLoading,
  } = useGetMeOrdersQuery([{}], {
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
  const { data: revenue } = useTotalRevenueQuery(undefined, {
    pollingInterval: 3000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  return (
    <div>
      <Title
        level={2}
        style={{
          fontWeight: "bold",
        }}
      >
        User Dsahboard
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: "2rem" }}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <DashboaedCard
            title="Total revenue"
            result={revenue?.data[0]?.totalRevenue}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <DashboaedCard title="Total product" result={products?.meta?.total} />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <DashboaedCard title="Total order" result={orders?.meta?.total} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
          <StaticOrderTable
            orders={orders?.data?.slice(0, 5)}
            isLoading={isLoading}
            isFetching={isFetching}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "0.5rem",
            }}
          >
            <Link to={"/user/orders"}>
              <Button color="danger" variant="solid">
                SeeMore
              </Button>
            </Link>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <DashboardBarChart />
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboard;
