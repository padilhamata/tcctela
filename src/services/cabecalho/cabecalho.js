import React from "react";
import { Link } from "react-router-dom";
const Cabecalho = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        
          <div className="navbar-header">
            <label className="navbar-brand nav-link">Tcc do Lucas</label>
          </div>
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
