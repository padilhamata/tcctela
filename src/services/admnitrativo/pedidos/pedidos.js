import React from "react";

function pedidos() {
  return (
    <>
      <h1>Pedidos</h1>
      <div className="pedidos">
        <div className="prato">
          <label>Cliente: Lucas</label>
          <br />
          <label>status: cozinha</label>
          <br />
          <label>valor: 100,00</label>
          <br />
          <div class="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>

        <div className="prato">
          <label>Cliente: Lucas</label>
          <br />
          <label>status: cozinha</label>
          <br />
          <label>valor: 100,00</label>
          <br />
          <div class="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default pedidos;
