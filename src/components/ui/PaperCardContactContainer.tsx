import { MessageOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import questionImage from "../../assets/about-image/have_questions.jpg";
import PcForm from "../form/PcForm";
import PcInput from "../form/pcInput";
import PcSelactInput from "../form/PcSelectInput";
import PcTextarea from "../form/PcTextarea";

const { Title } = Typography;
const chooseSevicesOptions = [
  {
    value: "suport",
    label: "suport",
  },
  {
    value: "inquiry",
    label: "inquiry",
  },
  {
    value: "other",
    label: "other",
  },
];
const PaperCardContactContainer = () => {
  const handleContactMessageSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
        Send us message
      </Title>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <img
            src={questionImage}
            style={{ width: "100%" }}
            alt="question-image"
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div>
            <PcForm onSubmit={handleContactMessageSubmit}>
              <Row gutter={16}>
                <Col span={12}>
                  <PcInput
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="Enter your name..."
                  />
                </Col>
                <Col span={12}>
                  <PcInput
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="Enter your email address..."
                  />
                </Col>
                <Col span={12}>
                  <PcInput
                    type="number"
                    name="name"
                    label="Phone/Whatsapp"
                    placeholder="Enter your number..."
                  />
                </Col>
                <Col span={12}>
                  <PcSelactInput
                    name="supportName"
                    options={chooseSevicesOptions}
                    label="Selact Support"
                    placeholder="Choose Services"
                  />
                </Col>
              </Row>
              <PcTextarea
                name="message"
                rows={4}
                label="How cant we help?"
                placeholer="Massage goes in here..."
              />
              <Button color="danger" variant="solid" htmlType="submit">
                send message
                <MessageOutlined />
              </Button>
            </PcForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PaperCardContactContainer;
