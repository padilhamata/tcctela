import React from "react";
import { Link } from "react-router-dom";
const Cabecalho = props => {
  return (
    <header>
      <nav className="nav ">
        <label>Tcc do Lucas</label>
        <Link className="nav-link active" to="/">
          Login
        </Link>
        <Link className="nav-link" to="/crud">
          Crud
        </Link>
      </nav>
    </header>
  );
};

export default Cabecalho;
