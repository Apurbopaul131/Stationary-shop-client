import { MailOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Collapse, Row, Typography } from "antd";

const { Title } = Typography;
const { Panel } = Collapse;

const FAQSection = () => {
  const faqData = [
    {
      question: "Where can I find my tracking number?",
      answer:
        "Your tracking number can be found in your order confirmation email or in your order history on your account page.",
    },
    {
      question: "Can I order items not available at MUJI.us?",
      answer:
        "Unfortunately, we can only fulfill orders for items listed on MUJI.us.  You may be able to find additional items on the websites for other regions.",
    },
    {
      question: "Why can't I order furniture to my location?",
      answer:
        "Furniture delivery is currently limited to certain geographic areas. Please check our delivery policy for more information.",
    },
    {
      question: "What are the advantages of creating a MUJI account?",
      answer:
        "Creating a MUJI account allows you to save your shipping information, track your orders, and receive exclusive offers.",
    },
    {
      question: "What is the return policy?",
      answer:
        "We accept returns of unused items in original condition within 30 days of purchase.  See our full return policy for details.",
    },
  ];

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Title
        level={2}
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Frequently Asked Questions
      </Title>
      <Row gutter={[24, 24]} justify="center">
        <Col sm={24} md={12}>
          <Collapse
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <PlusOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              backgroundColor: "#fff", // Set background color of the Collapse component
              border: "1px solid #d9d9d9", // Add a border
              borderRadius: "8px", // Add border radius for rounded corners
            }}
          >
            {faqData.map((item, index) => (
              <Panel
                key={index}
                header={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "500",
                    }}
                  >
                    {item.question}
                  </div>
                }
                style={{
                  borderBottom: "1px solid #e8e8e8", // Add border between items
                }}
              >
                <p>{item.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </Col>
        <Col sm={24} md={12}>
          <div
            style={{
              textAlign: "center",
              padding: "40px 40px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              STILL HAVE QUESTIONS?
            </h3>
            <MailOutlined
              style={{
                fontSize: "40px",
                color: "#FF4D4F",
                marginBottom: "10px",
              }}
            />
            <p
              style={{
                fontSize: "16px",
                color: "#FF4D4F",
                marginBottom: "10px",
              }}
            >
              apurbopaul131@gmail.com
            </p>
            <p style={{ fontSize: "14px" }}>Monday - Friday 9AM - 5PM EST</p>
            <p style={{ fontSize: "14px" }}>*Excluding National Holidays</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FAQSection;
