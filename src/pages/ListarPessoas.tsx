import { useEffect, useState } from "react";
import PessoaService from "../services/PessoaService";
import type { Pessoa } from "../types/Pessoa";

const ListarPessoas = () => {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    useEffect(()=>{
        async function buscarPessoas(){
            const data = await PessoaService.findMany();
            console.log(data);
            setPessoas(data.pessoas);
        }

        buscarPessoas();
    },[]);
    return(
        <div>
            <h1>Lista de Pessoas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.usuario?.email}</td>
                            <td>{pessoa.usuario?.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarPessoas;