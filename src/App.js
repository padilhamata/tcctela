import React, { useState } from "react";
import api from "./services/api";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [quantidade, setquantidade] = useState("");
  const [valor, setvalor] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/produto", { nome, quantidade, valor });
    console.log(response);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p> Crud Básico </p>
        <label>Nome: </label>
        <input
          type="text"
          name="nome"
          id="nome"
          onChange={event => setNome(event.target.value)}
          value={nome}
        />
        <input
          type="text"
          name="quantidade"
          id="quantidade"
          onChange={event => setquantidade(event.target.value)}
          value={quantidade}
        />
        <input
          type="text"
          name="valor"
          id="valor"
          onChange={event => setvalor(event.target.value)}
          value={valor}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
