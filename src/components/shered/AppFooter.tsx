import { Layout, Typography } from "antd";
import { Link } from "react-router-dom";
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
            Contact
          </Title>
          <p>+8801917424643</p>
          <p>Shewrapara,Mirpur</p>
          <p>apurbopaul131@gmail.com</p>
        </div>
        <div>
          <Title level={5} style={{ fontWeight: "bold" }}>
            Company
          </Title>

          <p>
            <Link to={"/about"}>About</Link>
          </p>

          <p>
            <Link to={"/contact"}>Contact</Link>
          </p>
          <p>
            <Link to={"/faq"}>
              <p>FAQ</p>
            </Link>
          </p>
        </div>
        <div>
          <Title level={5} style={{ fontWeight: "bold" }}>
            Usefull links
          </Title>
          <p>
            <Link to={"/about"}>Home</Link>
          </p>
          <p>
            <Link to={"/products"}>All products</Link>
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
