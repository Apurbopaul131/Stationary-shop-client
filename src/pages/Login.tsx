/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Space } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PcForm from "../components/form/PcForm";
import PcInput from "../components/form/pcInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { userLoginValidationSchema } from "../schemas/user.schema";
import "../styles/toast.css";
import handleJwtTokenDecode from "../uitls/jwtDecode";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { error }] = useLoginMutation();

  console.log(error);
  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loggedin...", {
      style: {
        padding: "10px",
        borderRadius: "8px",
        color: "yellowgreen",
      },
      position: "top-center",
    });
    try {
      const result = await login(data).unwrap();
      // console.log(result);
      if (result?.success && result?.data?.token) {
        const decodedUser = handleJwtTokenDecode(result?.data?.token) as TUser;
        console.log("decoced User", decodedUser);
        dispatch(setUser({ user: decodedUser, token: result?.data?.token }));
        toast.success(result?.message, {
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "green",
          },
          position: "top-center",
          id: toastId,
          duration: 2000,
        });
        navigate(`/${decodedUser?.role}/dashboard`);
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
        resolver={zodResolver(userLoginValidationSchema)}
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
          Sign in to your account
        </h2>

        <Space direction="vertical" size="small" style={{ display: "flex" }}>
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
            Sign in
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
          No account?{" "}
          <Link
            to={"/register"}
            style={{ textDecoration: "underline", color: "#FAAD14" }}
          >
            Sign up
          </Link>
        </p>
      </PcForm>
    </Flex>
  );
};

export default Login;
