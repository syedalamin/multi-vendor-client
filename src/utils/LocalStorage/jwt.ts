import { jwtDecode, JwtPayload } from "jwt-decode"
interface CustomJwtPayload extends JwtPayload {
  role: string;
}
export const decodedToken = (token: string) =>{
    return jwtDecode<CustomJwtPayload>(token);
}