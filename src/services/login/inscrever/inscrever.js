import React from "react";

function inscrever() {
  return (
    <div>
      <h1>Abra uma conta</h1>
      <br />

      <label>Nome: </label>
      <input type="text" id="nome" name="nome" />
      <br />

      <label>Sobrenome: </label>
      <input type="text" id="sobrenome" name="sobrenome" />
      <br />

      <label>CPF: </label>
      <input type="text" id="cpf" name="cpf" />
      <br />

      <label>Telefone: </label>
      <input type="tel" id="telefone" name="telefone" />
      <br />

      <label>E-mail: </label>
      <input type="email" id="email" name="email" />
      <br />

      <label>Senha: </label>
      <input type="passoword" id="senha" name="senha" />
      <br />

      <button type="submit">Enviar</button>
    </div>
  );
}
export default inscrever;
