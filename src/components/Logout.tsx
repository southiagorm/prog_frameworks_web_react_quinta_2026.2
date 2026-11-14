import { Navigate } from "react-router";

function Logout(){
    localStorage.removeItem("token");
    return <Navigate to="/login" replace/>
}

export default Logout;