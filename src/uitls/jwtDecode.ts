import { jwtDecode } from "jwt-decode";
const handleJwtTokenDecode = (token: string) => {
  const decoedData = jwtDecode(token);
  return decoedData;
};
export default handleJwtTokenDecode;
