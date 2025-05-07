import { Button, Input, Typography } from "antd";

const { Title } = Typography;
const GetTouch = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#FEEAE9",
        marginBottom: "2rem",
        padding: "60px 0",
      }}
    >
      <div>
        <Title level={2}>LET'S STAY IN TOUCH</Title>
        <p style={{ marginBottom: "16px" }}>
          <small>Get updates on sales specials and more</small>
        </p>
        <form>
          <div style={{ margin: "16px 0" }}>
            <Input placeholder="Enter your email" />
          </div>
          <Button color="danger" variant="solid">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetTouch;
