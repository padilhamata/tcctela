import React from "react";
import api from "../../api";

function redefinirSenha() {
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/redefinirSenha/");
    console.log(response);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Redefinir Senha</label>
        <br />
        <label>cpf: </label>
        <input type="text" name="cpf" id="cpf" />
        <br />
        <label>E-mail: </label>
        <input type="email" name="email" id="email" />
        <br />
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}
export default redefinirSenha;
