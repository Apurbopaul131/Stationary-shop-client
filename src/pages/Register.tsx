/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Flex, Space } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PcForm from "../components/form/PcForm";
import PcInput from "../components/form/pcInput";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import "../styles/toast.css";
import { TResponse, TUserRes } from "../types";
const Register = () => {
  const [register] = useRegisterUserMutation();
  const navigate = useNavigate();
  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Register...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });
    try {
      const registeredUser = (await register(
        data
      ).unwrap()) as TResponse<TUserRes>;
      if (registeredUser?.success && registeredUser?.data) {
        toast.success(registeredUser.message, {
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "green",
          },
          position: "top-center",
          id: toastId,
          duration: 2000,
        });
        navigate("/login");
      }
    } catch (err: any) {
      toast.error("Login failed...", {
        id: toastId,
        duration: 2000,
        style: {
          padding: "10px",
          borderRadius: "8px",
          color: "red",
        },
        position: "top-center",
      });
    }
  };
  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <PcForm
        onSubmit={handleOnSubmit}
        style={{
          minWidth: "400px",
          padding: "1rem",
          background: "#fff",
          borderRadius: "0.5rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "600",
          }}
        >
          Sign up to your account
        </h2>

        <Space direction="vertical" size="small" style={{ display: "flex" }}>
          <PcInput type="text" name="name" label="Name:" />
          <PcInput type="email" name="email" label="Email:" />
          <PcInput type="password" name="password" label="Password:" />

          <Button
            color="danger"
            variant="solid"
            htmlType="submit"
            style={{
              width: "100%",
              textTransform: "uppercase",
            }}
          >
            Sign up
          </Button>
        </Space>
        <p
          style={{
            textAlign: "center",
            color: "#6B7280",
            fontSize: "0.875rem",
            marginTop: "4px",
          }}
        >
          You already have an account?{" "}
          <Link
            to={"/login"}
            style={{
              textDecoration: "underline",
              color: "#FAAD14",
            }}
          >
            Sign up
          </Link>
        </p>
      </PcForm>
    </Flex>
  );
};

export default Register;
