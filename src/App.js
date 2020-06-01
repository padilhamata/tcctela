import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Crud from "./services/util/crud";
import "./App.scss";
import Cabecalho from "./services/cabecalho/cabecalho";
import Login from "./services/acesso/login/login";
import RedefinirSenha from "./services/acesso/redefinirSenha/redefinirSenha";
import Inscrever from "./services/acesso/inscrever/inscrever";
import Cardapio from "./services/usuario/cardapio/cardapio";
import trocaSenha from "./services/acesso/trocarSenha/trocarSenha";
import Pagamento from "./services/usuario/pagamento/pagamento";
import Entrega from "./services/usuario/entrega/entrega";
import Pedidos from "./services/admnitrativo/pedidos/pedidos";
import Estoque from "./services/admnitrativo/estoque/estoque";
import Colaboradores from "./services/admnitrativo/colaboradores/colaboradores";
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
          <Route path="/trocasenha" exact component={trocaSenha} />
          <Route path="/pagamento" exact component={Pagamento} />
          <Route path="/entrega" exact component={Entrega} />
          <Route path="/pedidos" exact component={Pedidos} />
          <Route path="/estoque" exact component={Estoque} />
          <Route path="/colaboradores" exact component={Colaboradores}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
