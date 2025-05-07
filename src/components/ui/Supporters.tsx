import { Col, Row, Typography } from "antd";
import Marquee from "react-fast-marquee";

// Importing images (adjust the path as per your file structure)
import SingureLogo from "../../assets/supporters/Singure.jpg";
import TenMinutesLogo from "../../assets/supporters/Ten-minutes-school.png";
import IctDivisionLogo from "../../assets/supporters/ict-divition.png";
import StartUpBangladeshLogo from "../../assets/supporters/start_up_bangladesh.jpg";

const { Title } = Typography;

const supportersLogos = [
  {
    name: "Beximco",
    logo: SingureLogo,
  },
  {
    name: "Tenminutes",
    logo: TenMinutesLogo,
  },
  {
    name: "Ict Division",
    logo: IctDivisionLogo,
  },
  {
    name: "Startup Bangladesh",
    logo: StartUpBangladeshLogo,
  },
  {
    name: "Singure Bangladesh",
    logo: SingureLogo,
  },
];

const Supporters = () => {
  return (
    <div
      style={{
        marginBottom: "2rem",
      }}
    >
      <Title level={2} style={{ textAlign: "center", fontWeight: "bold" }}>
        Our Supporters
      </Title>
      <Marquee pauseOnClick={true} speed={40}>
        <Row align="middle" gutter={[32, 0]} wrap={false}>
          {supportersLogos.map(({ name, logo }, idx) => (
            <Col key={idx}>
              <img
                src={logo}
                alt={name}
                style={{
                  height: "50px",
                  width: "80px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Col>
          ))}
        </Row>
      </Marquee>
    </div>
  );
};

export default Supporters;
