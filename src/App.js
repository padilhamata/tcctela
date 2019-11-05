import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Crud from "./services/crud";
import "./App.css";
import Cabecalho from "./services/cabecalho/cabecalho";
import Login from "./services/login/login";
import RedefinirSenha from "./services/login/redefinirSenha/redefinirSenha";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
          <Route path="/" exact component={Login} />
          <Route path="/crud" exact component={Crud} />
          <Route path="/RedefinirSenha" exact component={RedefinirSenha} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
