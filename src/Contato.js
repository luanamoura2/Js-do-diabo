import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
    return (
        <div id="Contato">
            
      <form action="#">
      <label htmlFor="nome">Nome: </label>
      <input className="form-control" type="text" id="nome" name="nome" placeholder="Digite algo"/>

      <label htmlFor="email">Email:</label>
      <input className="form-control" type="text"id="email"name="email"placeholder="Digite aqui"/>

      <label htmlFor="mensagem">Mensagem:</label>
      <textarea className="form-control" id="mensagem" name="mensagem"placeholder="Digite aqui"rows="5"></textarea>

      <input className="form-control"type="submit"value="Enviar"id="Enviar"/>
    </form>
        
      </div>
    );
}

export default Contato;