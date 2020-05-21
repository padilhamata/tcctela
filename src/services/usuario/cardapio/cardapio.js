import React from "react";

function telaInicial() {
    return (
        <div className="telaInicial">
            
         
            <h1>Cardápio</h1>
            <div className="row">

                <div className="col-sm-4">

                    <h2>Cardapio de pizzas</h2>
                    <label  >01 - Atum</label>
                    <label className="d-block">Molho,mussarela,atum,tomate,cebola,azeitona,orégano</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>02 - Bacon</label>
                    <label className="d-block">Molho,mussarela,bacon,tomate,azeitona,orégano</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>03 - Baiana</label>
                    <label className="d-block">Molho,mussarela,presunto,calabresa,bacon,pimenta,cebola,orégano,azeitona</label>
                    <label>04 - Calabresa</label>
                    <label className="d-block">Molho,mussarela,calabresa,cebola,orégano,azeitona</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>05 - Frango</label>
                    <label className="d-block">Molho,mussarela,frango,azeitona,orégano</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                     <br />

                    <label>06 - Napolitana</label>
                    <label className="d-block">Molho,mussarela,parmesão,tomate,azeitona,orégano</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>07 - Portuguesa</label>
                    <label className="d-block">Molho, mussarela, palmito,catupiry,azeitona,orégano</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>08 - Quatro Queijo</label>
                    <label className="d-block">Molho,mussarela,provolone, queijo prato,caipira</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande


                </div>
                <div className="col-sm-4">
                    <h2>Pizzas Doces</h2>
                    <label>01 - California</label>
                    <label className="d-block">Creme de Leite,mussarela,abacaxi,pêssego,banana,maçã,figo,caramelo,cereja</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />

                    <label>02 - Banana</label>
                    <label className="d-block">Creme de leite,mussarela,banana,canela,cereja</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />

                    <label>03 - Chocolate</label>
                    <label className="d-block">Creme de Leite,mussarela,Chocolate,cereja</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>04 - Prestígio</label>
                    <label className="d-block">Creme de leite, mussarela,goiabada,cereja</label>
                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>05 - Romeu e julieta</label>
                    <label className="d-block">Creme de Leite, mussarela,goiabada,cereja</label>

                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />
                    <label>06 - Brigadeiro</label>
                    <label className="d-block">Creme de leite, mussarela,brigadeiro,chocolate granulado, cereja</label>

                    <input type="checkbox" /> Pequena
                    <input type="checkbox" /> Média
                    <input type="checkbox" /> Grande
                    <br />


                </div>
                <div className="col-sm-4">
                    <h2>Bebidas</h2>
                    <label>01 - Refrigerante Lata R$: 2,00 </label> <input type="checkbox" className="text-left" />Comprar
                    <br />
                    <label>Refrigerante 600 ml R$:3,00 </label> <input type="checkbox" className="text-left" />Comprar
                    <br />
                    <label>Refrigerante 2lt R$:5,00 </label>
                    <input type="checkbox" className="text-left" />Comprar
                    <br />
                    <label>Cerveja Lata R$:2,50 </label><input type="checkbox" className="text-left" />Comprar<br />
                    <br />
                    <h2>Tamanhos</h2><br />
                    <label>Pequena R$15,00</label><br />
                    <label>Média R$18,00</label><br />
                    <label>Grande R$ 20,00</label><br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />


                    <input type="button" value="Comprar" className="btn btn-primary" />

                </div>

            </div>

        </div>
    );
}
export default telaInicial;