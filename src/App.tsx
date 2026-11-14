import { Route, Routes } from "react-router";
import ListarPessoas from "./pages/ListarPessoas"
import CadastrarPessoas from "./pages/CadastrarPessoas";
import PrivateRoute from "./components/PrivateRoute";
import LoginRoute from "./components/LoginRoute";
import Logout from "./components/Logout";

const App = () =>{
  return(
    <Routes>
      <Route path="/login" element={<LoginRoute />}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route element={<PrivateRoute />}>
        <Route path="/pessoas">
          <Route path="listar" element={<ListarPessoas />} />
          <Route path="cadastrar" element={<CadastrarPessoas/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;