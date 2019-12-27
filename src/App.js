import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Crud from "./services/crud";
import "./App.scss";
import Cabecalho from "./services/cabecalho/cabecalho";
import Login from "./services/login/login/login";
import RedefinirSenha from "./services/login/redefinirSenha/redefinirSenha";
import Inscrever from "./services/login/inscrever/inscrever";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Route path="/" exact component={Login} />
          <Route path="/crud" exact component={Crud} />
          <Route path="/redefinirSenha" exact component={RedefinirSenha} />
          <Route path="/inscrever" exact component={Inscrever} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
