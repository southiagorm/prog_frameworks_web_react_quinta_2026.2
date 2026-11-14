import { Navigate } from "react-router";
import Login from "../pages/Login";

function LoginRoute(){
    const token = localStorage.getItem("token");

    return token ? <Navigate to="/pessoas/listar" replace/> : <Login />
}

export default LoginRoute;