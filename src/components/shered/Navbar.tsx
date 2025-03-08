import { LoginOutlined, LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import papaerCardLogo from "../../assets/images/shop-logo.png";
import {
  logout,
  selactToken,
  selactUser,
} from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./Navbar.css";

const { Title } = Typography;
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = useAppSelector(selactToken);
  const user = useAppSelector(selactUser);
  const dispatch = useAppDispatch();
  return (
    <nav className="navbar">
      <Flex
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
        align="center"
        gap="small"
      >
        <img src={papaerCardLogo} alt="papaerCardLogo" />
        <Title level={3}>PaperCard</Title>
      </Flex>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>All Products</NavLink>
        {token && <NavLink to={`/${user?.role}/dashboard`}>Dashboard</NavLink>}
        {!token ? (
          <Link to={"/login"}>
            <Button color="danger" variant="solid">
              <LoginOutlined />
              Login
            </Button>
          </Link>
        ) : (
          <Button
            onClick={() => dispatch(logout())}
            color="danger"
            variant="solid"
          >
            Logout
            <LogoutOutlined />
          </Button>
        )}
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <MenuOutlined />
      </div>
    </nav>
  );
};

export default Navbar;
