import React from "react";
import { Link } from "react-router-dom";

function pagamento() {
  return (
    <div>
      <h1>Confirme seu Endereço</h1>
      <label>Avenida: </label>
      <label> Alameda josé gerson de Morais Quadra 91 Lote 17</label>
      <br />
      <label>CEP:</label>
      <label>74350.700</label>
      <br />
      <label>Cidade: </label>
      <label>Goiânia</label>
      <br/>
      <Link to="/editarusuario">Clique para editar seu Endereço</Link>
      <br/>
      <br />
      <div className="pagamento">
      <h1>Pagamento</h1>
<label>Valor das compras: 100,00</label>
  
<ul className="nav flex-column ">
  <li className="nav-item">
    <input type="radio" name="pagamento"/>
    <label> Dinheiro</label>
  </li>

  <li className="nav-item">
  <input type="radio" name="pagamento"/>
    <label> Novo Cartão</label>
    <br/>
    <label>Número do Cartão: </label>
    <input />
    <br/>
    <label>Nome Completo: </label>
    <input />
    <br/>
    <label>Data de vencimento: </label>
    <input />
    <br/>
    <label>Código de segurança: </label>
    <input />
    <br/>
    <label>CPF do titular do cartão: </label>
    <input />
    <br/>
  </li>
</ul>
</div>
<Link   className="btn btn-primary" to="/entrega" >Continuar</Link>

    </div>
  );
}
export default pagamento;
