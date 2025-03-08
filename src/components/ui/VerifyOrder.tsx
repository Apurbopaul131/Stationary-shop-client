import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../../redux/features/admin/orderManagementApi";
import LoadingSpinner from "../shered/LoadingSpinner";

const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const {
    data: verifiedInfomration,
    isLoading,
    isFetching,
  } = useVerifyOrderQuery(searchParams.get("order_id"));
  console.log(verifiedInfomration?.data?.[0].bank_status);
  if (isLoading && isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div
        style={{
          width: "400px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          margin: "50px auto",
        }}
      >
        {verifiedInfomration?.data?.[0].bank_status === "Success" ? (
          <div
            style={{
              fontSize: "60px",
              color: " #28a745",
              marginBottom: "10px",
            }}
          >
            ✔️
          </div>
        ) : (
          <div style={{ fontSize: "60px", color: "red", marginBottom: "10px" }}>
            ❌
          </div>
        )}

        <h2
          style={{
            color: `${
              verifiedInfomration?.data?.[0].bank_status === "Success"
                ? "#28a745"
                : "red"
            }`,
            // color: "#28a745",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {verifiedInfomration?.data?.[0].bank_status === "Success"
            ? "Success"
            : "Failed"}
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Thank you for purchasing product.
          <br />
          We are working hard to find the best service and deals for you.
        </p>
        <Link to={"/products"}>
          <Button color="danger" variant="solid">
            Continue <ArrowRightOutlined />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyOrder;
