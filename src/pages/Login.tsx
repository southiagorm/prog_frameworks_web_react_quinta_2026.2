import { useForm } from "react-hook-form";
import type { LoginForm } from "../types/LoginForm";
import AuthService from "../services/AuthService";
import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm<LoginForm>();

    async function onSubmit(data:LoginForm){
        try{
            const responseData = await AuthService.login(data);
            localStorage.setItem("token",responseData.token);
        }catch(error){
            if(axios.isAxiosError(error)){
                console.log(error.response?.data?.error);
                setError(error.response?.data?.error);
            }
        }
        reset();
    }

    return(
        <div>
            <p>{error}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input placeholder="email" type="email" id="email" {...register("email", {required:"Informe um e-mail"})} /></td>
                        </tr>
                        <tr><td>{errors.email && errors.email?.message}</td></tr>
                        <tr>
                            <td><label htmlFor="password">Senha</label></td>
                            <td><input type="password" id="password" {...register("password",{required:"Informe uma senha"})}/></td>
                        </tr>
                        <tr><td>{errors.password && errors.password?.message}</td></tr>
                    </tbody>
                </table>
                <button type="submit" disabled={isSubmitting}>Entrar</button>
            </form>
        </div>
    );
}

export default Login;