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
  console.log(name.length);
  console.log(description.length);
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <Card style={{ borderRadius: "10px", backgroundColor: "#FEEAE9" }}>
        <img
          src={image}
          style={{
            width: "100%",
            height: "250px",
            borderRadius: "20px",
            backgroundColor: "rgb(212, 209, 209,0.4)",
            padding: "20px ",
          }}
          alt="Card Image"
        />
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Title level={3}>
            {name.length > 19 ? `${name.slice(0, 19)}...` : name}
          </Title>
          <p style={{ fontSize: "1.2rem" }}>
            {description.length > 30
              ? `${description.slice(0, 30)}...`
              : description}
          </p>
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
