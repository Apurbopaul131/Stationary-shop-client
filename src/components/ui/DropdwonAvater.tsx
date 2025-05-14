import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const DropdwonAvater = ({ role }: { role: string }) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <Link to={"/"}>Home</Link>,
    },
    {
      key: "3",
      label: (
        <Link to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"}>
          Dashboard
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to={role === "admin" ? "/admin/profile" : "/user/profile"}>
          Setting
        </Link>
      ),
      icon: <SettingOutlined />,
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <a
        onClick={(e) => {
          console.log(e.target);
          return e.preventDefault();
        }}
      >
        <Space>
          <Avatar size={44} icon={<UserOutlined />} />
        </Space>
      </a>
    </Dropdown>
  );
};
export default DropdwonAvater;
