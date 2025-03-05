import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Row, Typography } from "antd";
import GelPen from "../../assets/banner_images/gel_pen-removebg-preview.png";
import Penset from "../../assets/banner_images/pant_set-removebg-preview.png";
import Stapler from "../../assets/banner_images/stapler-removebg-preview.png";

const { Title } = Typography;
const BannerSlider = () => {
  return (
    <Carousel
      autoplay
      style={{
        margin: "20px 0",
        backgroundColor: "#FEEAE9",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        padding: "40px",
        borderRadius: "5px",
      }}
    >
      <div>
        <Row>
          <Col
            sm={{ span: 24 }}
            md={{ span: 12 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Title level={1}>Gel Pen</Title>
              <p style={{ fontSize: "1.2rem" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <Title level={3} style={{ color: "#ff4d4f" }}>
                $30
              </Title>
              <Button color="danger" variant="solid">
                <ShoppingCartOutlined /> Buy now
              </Button>
            </div>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <img
              src={GelPen}
              alt="Gel Pen"
              style={{ width: "100%", height: "350px" }}
            />
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col
            sm={{ span: 24 }}
            md={{ span: 12 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Title level={1}>Penset</Title>
              <p style={{ fontSize: "1.2rem" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <Title level={3} style={{ color: "#ff4d4f" }}>
                $55
              </Title>
              <Button color="danger" variant="solid">
                <ShoppingCartOutlined />
                Buy now
              </Button>
            </div>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <img
              src={Penset}
              alt="Pen Pen"
              style={{ width: "100%", height: "450px" }}
            />
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col
            sm={{ span: 24 }}
            md={{ span: 12 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Title level={1}>Stapler</Title>
              <p style={{ fontSize: "1.2rem" }}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <Title level={3} style={{ color: "#ff4d4f" }}>
                $1200
              </Title>
              <Button color="danger" variant="solid">
                <ShoppingCartOutlined />
                Buy now
              </Button>
            </div>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <img
              src={Stapler}
              alt="Stapler"
              style={{ width: "100%", height: "350px" }}
            />
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default BannerSlider;
