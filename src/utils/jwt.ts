import { jwtDecode } from "jwt-decode";

export function isAuthenticated():boolean{
    const token = localStorage.getItem("token");

    if(!token) return false;

    try{
        const decode = jwtDecode(token);
        if(!decode.exp || decode.exp * 1000 <= Date.now()){
            localStorage.removeItem("token");
            return false;
        }
        return true;
    }catch{
        localStorage.removeItem("token");
        return false;
    }
}