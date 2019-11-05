import React, { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await api.post("/login", { email, senha });
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Endereço de email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Seu email"
            required="required"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca vamos compartilhar seu email, com ninguém.
          </small>
        </div>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Senha"
            onChange={event => setSenha(event.target.value)}
            value={senha}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Clique em mim
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary form-group form-check-button"
        >
          Enviar
        </button>
        <Link
          to="/redefinirSenha"
          class="btn btn-primary form-group form-check-button"
          role="button"
          aria-pressed="true"
        >
          Esqueceu a senha?
        </Link>
      </div>
    </form>
  );
}
export default Login;
