import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";

const DashboaedCard = ({
  title,
  result,
}: {
  title: string;
  result: number | string;
}) => {
  console.log(title, result);
  return (
    <Card
      style={{
        background: "linear-gradient(to right, #FF4D4F, #FAAD14)",
        borderRadius: "0.75rem",
        color: "white",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
      bodyStyle={{ padding: 0 }}
      variant="borderless"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "14px", opacity: 0.9 }}>{title}</div>
          <div style={{ fontSize: "24px", fontWeight: 600 }}>{result}</div>
        </div>
        <div
          style={{
            background: "white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DollarOutlined style={{ fontSize: "20px", color: "#FAAD14" }} />
        </div>
      </div>
    </Card>
  );
};

export default DashboaedCard;
