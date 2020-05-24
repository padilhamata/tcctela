import React from "react";
import api from "../../util/api";


function inscrever() {
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.put("/cadastro/");
    console.log(response);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="inscrever_form">
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
        
        <label>Avenida: </label>
        <input type="text" id="avenida" name="avenida" />
        <br />

        <label>cep: </label>
        <input type="text" id="cep" name="cep" />
        <br />

        <label>Setor: </label>
        <input type="text" id="cidade" name="cidade" />
        <br />

        <label>Cidade: </label>
        <input type="text" id="cidade" name="cidade" />
        <br />

        <label>E-mail: </label>
        <input type="email" id="email" name="email"  placeholder="exemplo@examplo.com"  />
        <br />

        <label>Senha: </label>
       <input type="password" id="senha"  autocomplete="new-password" /> 
        {/* <input type="password" data-type="password" autocomplete="new-password" name="senha"  placeholder="" id="senha" ></input> */}
        <br />

        <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default inscrever
