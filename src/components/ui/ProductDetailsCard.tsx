import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";
const { Title } = Typography;
const ProductDetailsCard = ({ product }: { product: TProduct }) => {
  return (
    <Row
      gutter={16}
      style={{
        backgroundColor: "#FEEAE9",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
        <img
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "20px",
            padding: "20px",
            backgroundColor: "rgb(212, 209, 209,0.4)",
          }}
          src={product?.image}
          alt=""
        />
      </Col>
      <Col xs={24} sm={{ span: 24 }} md={{ span: 16 }}>
        <div>
          <Title level={1}>{product?.name}</Title>
          <p style={{ fontSize: "1.2rem" }}>{product?.description}</p>
          <p
            style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#ff4d4f" }}
          >
            {product?.inStock ? "#Instock" : "#out-of-stock"}
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <span style={{ fontWeight: "bold", marginRight: "4px" }}>
              Category:
            </span>
            {product?.category}
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            <span style={{ fontWeight: "bold", marginRight: "4px" }}>
              Quantity:
            </span>
            {product?.quantity}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title level={1} style={{ color: "#FAAD14" }}>
              ${product?.price}
            </Title>
            <Link to={`cart`}>
              <Button
                disabled={product.inStock === false}
                size="large"
                color="danger"
                variant="solid"
              >
                <ShoppingCartOutlined />
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsCard;
