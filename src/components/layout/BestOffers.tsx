import { Card, Col, Row, Typography } from "antd";
import "./BestOffers.css";

const { Title } = Typography;
const BestOffers = () => {
  return (
    <section className="best-offers">
      <Title level={1} style={{ fontWeight: "bold", marginBottom: "2rem" }}>
        Best offers for you
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {/* First Coupon */}
        <Col xs={24} lg={12}>
          <Card className="coupon-card yellow">
            <div className="coupon-content">
              <div className="left">
                <Title level={1}>15% OFF</Title>
                <p>on your next purchase</p>
                <p>use by January 2024</p>
              </div>
              <div className="right">
                <Title level={1}>NEW15</Title>
                <p>Coupon Code</p>
              </div>
            </div>
          </Card>
        </Col>

        {/* Second Coupon */}
        <Col xs={24} lg={12}>
          <Card className="coupon-card pink">
            <div className="coupon-content">
              <div className="left">
                <Title level={1}>20% OFF</Title>
                <p>on your next purchase</p>
                <p>use by January 2024</p>
              </div>
              <div className="right">
                <Title level={1}>Couple 20</Title>
                <p>Coupon Code</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default BestOffers;
