import type { Pessoa } from "./Pessoa";

export interface Usuario{
    id:number,
    email:string,
    role:string,
    pessoa?:Pessoa
}