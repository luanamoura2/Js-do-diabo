import React from "react";
import 'lightbox2/dist/css/lightbox.min.css'; 
import lightbox from 'lightbox2';

function Gallery() {
    return (
        <div id="Gallery">
        <a href="Conteudoo.png" data-lightbox="fotos" data-title="Conteudoo">
            <img className="Conteudoo" src="Conteudoo.png" width="350" height="250" alt="Conteudoo"/>
        </a>
       </div>
    );
}

export default Gallery;