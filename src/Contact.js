import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Formulário enviado');
  };

  return (
    <div id="Contact">
      <form onSubmit={handleSubmit}>
        <label>Nome: </label><br />
        <input placeholder="Digite aqui..." /><br />
        <label>Email: </label><br />
        <input placeholder="Digite aqui..." /><br />
        <label>CPF: </label><br />
        <input placeholder="Digite aqui..." /><br />
        <label>Mensagem: </label><br />
        <textarea placeholder="Digite aqui..." /><br />
        <input type="submit" id="Enviar" value="Enviar" /><br />
      </form>

      <iframe
        id="ContactIframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774404.4768347656!2d-74.63903050469177!3d40.695612502187615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1734027319546!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        
      />
    </div>
  );
}

export default Contato;