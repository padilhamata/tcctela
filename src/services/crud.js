import React, { useState } from "react";
import api from "./api";

function Crud() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  const [users, setUser] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    let response;
    if (id.length === 0) {
      response = await api.post("/produto", { nome, quantidade, valor });
    } else {
      console.log(id, nome, quantidade, valor);
      response = await api.put("/produto", { id, nome, quantidade, valor });
    }
    console.log(response);
  }

  async function handleAtualiza() {
    const response = await api.get("/produtos");
    setUser(response.data);
    console.log(response);
  }

  async function handleEditar(
    id,
    nomeEditado,
    quantidadeEditado,
    valorEditado
  ) {
    setId(id);
    setNome(nomeEditado);
    setQuantidade(quantidadeEditado);
    setValor(valorEditado);
  }

  async function handleExcluir(id) {
    const responsedelete = await api.delete("/produtos/"+id);
    const get = await api.get("/produtos");
    setUser(get.data);
    console.log(responsedelete);
    console.log(get);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1> Crud Básico </h1>
        <h2>Create</h2>
        <label>Nome: </label>
        <label>{id}</label>
        <input
          type="text"
          name="nome"
          id="nome"
          onChange={event => setNome(event.target.value)}
          value={nome}
        />
        <br />
        Quantidade
        <input
          type="text"
          name="quantidade"
          id="quantidade"
          onChange={event => setQuantidade(event.target.value)}
          value={quantidade}
        />
        <br />
        Valor
        <input
          type="text"
          name="valor"
          id="valor"
          onChange={event => setValor(event.target.value)}
          value={valor}
        />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Atualizar/Editar</h2>
        <button type="button" onClick={handleAtualiza}>
          Atualizar
        </button>
        {users.map(user => (
          <div key={user.id}>
            <p>
              {user.id} Nome= {user.nome}, Quantidade= {user.quantidade}, Valor=
              {user.valor}
            </p>
            <button
              type="button"
              onClick={handleEditar.bind(
                "",
                user.id,
                user.nome,
                user.quantidade,
                user.valor
              )}
            >
              Editar
            </button>
            <button
              type="button"
              onClick={handleExcluir.bind(
                "",
                user.id
               
              )}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crud;
