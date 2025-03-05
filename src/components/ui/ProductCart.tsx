import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/features/admin/productManagementApi";
import LoadingSpinner from "../shered/LoadingSpinner";

const { Title } = Typography;
const ProductCart = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    isFetching,
  } = useGetProductQuery(productId);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(product?.data?.price * quantity);
  }, [product?.data?.price, quantity]);
  console.log("price", product?.data.price);
  console.log("quantity:", quantity);
  console.log("total Price", totalPrice);
  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            backgroundColor: "#FEEAE9",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <img
            src={product?.data.image}
            style={{
              borderRadius: "20px",
              backgroundColor: "rgb(212, 209, 209,0.4)",
              padding: "20px ",
            }}
            alt="product-image"
            width={200}
          />
          <div>
            <Title level={3}>{product?.data.name}</Title>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#FAAD14",
                fontWeight: "bold",
              }}
            >
              ${product?.data.price}
            </p>
            <div
              style={{
                display: "flex",
                gap: "4px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                <MinusOutlined />
              </Button>
              <Input value={quantity} />
              <Button
                onClick={() => quantity < 10 && setQuantity(quantity + 1)}
              >
                <PlusOutlined />
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Total:</p>
              <p style={{ fontSize: "1.2rem" }}>${totalPrice}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/products/${productId}`}>
                <Button color="danger" variant="solid">
                  Cancle
                </Button>
              </Link>
              <Button color="danger" variant="solid">
                Proced Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
