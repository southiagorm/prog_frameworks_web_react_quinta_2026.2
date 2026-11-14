import { Navigate, Outlet, useLocation } from "react-router";
import { isAuthenticated } from "../utils/jwt";

function PrivateRoute(){
    //const token = localStorage.getItem("token");
    const location = useLocation();

    if(!isAuthenticated()){
        return <Navigate to="/login" replace state={{from:location}}/>
    }

    return <Outlet />
}

export default PrivateRoute;