import {
  CheckCircleOutlined,
  CrownOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { TUserRes } from "../../types";

const ShowProfile = ({
  userInfo,
}: {
  userInfo: Pick<TUserRes, "email" | "image" | "isBlocked" | "name" | "role">;
}) => {
  const backgroundUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhgSe47Iwr20FTah4RCnutoUrsOeDN8id1A&s"; // Replace with your banner image URL

  return (
    <div style={{ padding: "20px" }}>
      <Card
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          textAlign: "center",
        }}
        bodyStyle={{ padding: "0" }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={backgroundUrl}
            alt="banner"
            style={{ width: "100%", height: 250, objectFit: "cover" }}
          />
        </div>

        <Avatar
          src={userInfo?.image}
          size={100}
          style={{
            border: "3px solid #FF4D4F",
            position: "absolute",
            top: 200,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
          }}
        />

        <div
          style={{
            marginTop: "80px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              marginLeft: "16px",
              marginRight: "16px",
              display: "flex",
              justifyItems: "center",
              justifyContent: "space-between",
              border: "1px solid #FF4D4F",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <UserOutlined style={{ color: "#FF4D4F" }} size={32} />
              <span style={{ color: "#FF4D4F" }}>Name</span>
            </div>
            <span style={{ color: "#FF4D4F" }}>{userInfo?.name}</span>
          </div>

          <div
            style={{
              marginLeft: "16px",
              marginRight: "16px",
              display: "flex",
              justifyItems: "center",
              justifyContent: "space-between",
              border: "1px solid #FF4D4F",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MailOutlined style={{ color: "#FF4D4F" }} size={32} />
              <span style={{ color: "#FF4D4F" }}>Email</span>
            </div>
            <span style={{ color: "#FF4D4F" }}>{userInfo?.email}</span>
          </div>

          <div
            style={{
              marginLeft: "16px",
              marginRight: "16px",
              display: "flex",
              justifyItems: "center",
              justifyContent: "space-between",
              border: "1px solid #FF4D4F",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CrownOutlined style={{ color: "#FF4D4F" }} size={32} />
              <span style={{ color: "#FF4D4F" }}>Role</span>
            </div>
            <span style={{ color: "#FF4D4F" }}>{userInfo?.role}</span>
          </div>

          <div
            style={{
              marginLeft: "16px",
              marginRight: "16px",
              display: "flex",
              justifyItems: "center",
              justifyContent: "space-between",
              border: "1px solid #FF4D4F",
              borderRadius: "16px",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircleOutlined style={{ color: "#FF4D4F" }} size={32} />
              <span style={{ color: "#FF4D4F" }}>Status</span>
            </div>
            <span style={{ color: "#FF4D4F" }}>
              {userInfo?.isBlocked ? "Blocked" : "Active"}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShowProfile;
