import { Layout, Typography } from "antd";
import CompanyLogo from "../../assets/images/shop-logo.png";
import "./AppFooter.css";
const { Footer } = Layout;
const { Title } = Typography;
const AppFooter = () => {
  return (
    <Footer className="custom-footer">
      <div className="footer-links">
        <div className="footer-logo">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={CompanyLogo} width={60} height={60} alt="Company-logo" />
          </div>
          <Title level={3}>PAPERCARD Industries Ltd.</Title>
          <p>Providing reliable tech since 1992</p>
        </div>
        <div>
          <Title level={5} style={{ fontWeight: "bold" }}>
            Services
          </Title>
          <a href="#" className="footer-link">
            Branding
          </a>
          <a href="#" className="footer-link">
            Design
          </a>
          <a href="#" className="footer-link">
            Marketing
          </a>
          <a href="#" className="footer-link">
            Advertisement
          </a>
        </div>
        <div>
          <Title level={5} style={{ fontWeight: "bold" }}>
            Company
          </Title>
          <a href="#" className="footer-link">
            About us
          </a>
          <a href="#" className="footer-link">
            Contact
          </a>
          <a href="#" className="footer-link">
            Jobs
          </a>
          <a href="#" className="footer-link">
            Press kit
          </a>
        </div>
        <div>
          <Title level={5} style={{ fontWeight: "bold" }}>
            Legal
          </Title>
          <a href="#" className="footer-link">
            Terms of use
          </a>
          <a href="#" className="footer-link">
            Privacy policy
          </a>
          <a href="#" className="footer-link">
            Cookie policy
          </a>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
