import { Link } from "react-router";

function MenuPessoas(){
    return(
        <nav>
            <Link to="/pessoas/cadastrar" replace>Cadastrar</Link> |
            <Link to="/pessoas/listar" replace>Listar</Link> |
            <Link to="/logout" replace>Logout</Link> 
        </nav>
    );
}

export default MenuPessoas;