import { Button, Card, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";

const { Title } = Typography;
const ProductCard = ({
  _id,
  name,
  description,
  price,
  image,
}: Pick<TProduct, "_id" | "name" | "description" | "price" | "image">) => {
  return (
    <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <Card style={{ borderRadius: "10px", backgroundColor: "#FEEAE9" }}>
        <img
          src={image}
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "20px",
            backgroundColor: "rgb(212, 209, 209,0.4)",
            padding: "20px ",
          }}
          alt="Card Image"
        />
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Title level={3}>{name}</Title>
          <p style={{ fontSize: "1.2rem" }}>{description}</p>
        </div>
        <div
          style={{
            border: "none",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={3} style={{ color: "#FAAD14" }}>
              ${price}
            </Title>
            <Link to={`/products/${_id}`}>
              <Button color="danger" variant="solid">
                view details
              </Button>
            </Link>
            {/* <Button color="danger" variant="solid">
              <ShoppingCartOutlined />
              Buy now
            </Button> */}
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
