import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Contato() {
  return (
    <div id="Contact">

      <form action="#" id="ContactForm">
        <label htmlFor="nome">Nome:</label>
        <input className="form-control" type="text" id="nome" name="nome" placeholder="Digite algo" />

        <label htmlFor="email">Email:</label>
        <input className="form-control" type="text" id="email" name="email" placeholder="Digite aqui" />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea className="form-control" id="mensagem" name="mensagem" placeholder="Digite aqui" rows="5"></textarea>

        <input className="form-control" type="submit" value="Enviar" id="Enviar" />
      </form>

      <iframe
        id="ContactIframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774404.4768347656!2d-74.63903050469177!3d40.695612502187615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1734027319546!5m2!1spt-BR!2sbr"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Panificadora e Confeitaria Soley">
      </iframe>

    </div>
  );
}

export default Contato;