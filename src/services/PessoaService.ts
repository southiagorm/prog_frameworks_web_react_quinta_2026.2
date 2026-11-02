import api from "../api/api";

class PessoaService{
    async findMany(){
        const response = await api.get("/pessoas",{headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAZW1haWwuY29tIiwicm9sZSI6IkFMVU5PIiwiaWF0IjoxNzkzMzE2ODkxLCJleHAiOjE3OTMzMjA0OTEsInN1YiI6IjEifQ.UwIGIFh7wadc24E4coVvrk5VeFzezBrljGUDM2qYEcw"
        }});
        return response.data;
    }
}

export default new PessoaService();