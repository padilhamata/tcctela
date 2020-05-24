import React from "react";

function entrega(){

    return(<>

<div class="alert alert-primary" role="alert">
  Seu pedido está confirmado, logo ele estará pronto!
</div>
        <h1>Entrega</h1>
<label>Seu pedido será entregue por Lucas</label>
<br/>
<br/>
<label>O pedido está a caminho</label>


<div className="progress" style={{width: '50%', marginLeft:'25%'}}>
  <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '50%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </>);
}
export default entrega;