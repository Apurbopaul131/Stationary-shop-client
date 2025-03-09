import { Navigate } from "react-router-dom";
import { selactToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(selactToken);
  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
