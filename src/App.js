import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Crud from "./services/crud";
import "./App.scss";
import Cabecalho from "./services/cabecalho/cabecalho";
import Login from "./services/login/login/login";
import RedefinirSenha from "./services/login/redefinirSenha/redefinirSenha";
import Inscrever from "./services/login/inscrever/inscrever";
import Cardapio from "./services/usuario/cardapio/cardapio";
import trocaSenha from "./services/login/trocarSenha/trocarSenha"
import Pagamento from "./services/usuario/pagamento/pagamento";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Route path="/" exact component={Login} />
          <Route path="/cardapio" exact component={Cardapio} />
          <Route path="/crud" exact component={Crud} />
          <Route path="/redefinirSenha" exact component={RedefinirSenha} />
          <Route path="/inscrever" exact component={Inscrever} />
          <Route path="/trocasenha" exact component={trocaSenha}/>
          <Route path="/pagamento" exact component={Pagamento}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
