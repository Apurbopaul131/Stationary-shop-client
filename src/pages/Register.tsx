/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Space } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PcFileinput from "../components/form/PcFileinput";
import PcForm from "../components/form/PcForm";
import PcInput from "../components/form/pcInput";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import { userRegistrationValidationSchema } from "../schemas/user.schema";
import "../styles/toast.css";
import { TResponse, TUserRes } from "../types";
import { uploadImageToCloudinary } from "../uitls/uploadImage";
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
    const { image, ...remainingData } = data;
    const imageUrl = await uploadImageToCloudinary(image);
    console.log("cloudinary image url:", imageUrl);
    const registerData = { image: imageUrl, ...remainingData };
    try {
      const registeredUser = (await register(
        registerData
      )) as TResponse<TUserRes>;
      if (registeredUser?.error) {
        toast.error(registeredUser?.error?.data?.message, {
          id: toastId,
          duration: 2000,
          style: {
            padding: "10px",
            borderRadius: "8px",
            color: "red",
          },
          position: "top-center",
        });
      } else {
        toast.success(registeredUser?.data?.message, {
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
      toast.error("Registered failed...", {
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
        resolver={zodResolver(userRegistrationValidationSchema)}
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
          <PcFileinput name="image" label="Image Url:" />

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
            Sign in
          </Link>
        </p>
      </PcForm>
    </Flex>
  );
};

export default Register;
