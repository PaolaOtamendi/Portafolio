import burguer from "../assets/images/burguer.png";
import movie from "../assets/movie.png";
import social from "../assets/social.png";
import mdlinks from "../assets/mdlinks.png";
import datalovers from "../assets/datalovers.png";
import cardvalid from "../assets/cardvalid.png";
import flowise from "../assets/flowise.png";

import { useState, useEffect, useRef } from "react";

import "./carrusel.css"; // Suponiendo que tu archivo CSS se llama carrusel.css

export const Carrusel = () => {
    const [posicionActual, setPosicionActual] = useState(0);
  
    const elementosCarrusel = [
      { src: burguer, alt: "imagen1" },
      { src: movie, alt: "imagen2" },
      { src: social, alt: "imagen3" },
      { src: mdlinks, alt: "imagen4" },
      { src: datalovers, alt: "imagen5" },
      { src: cardvalid, alt: "imagen6" },
      { src: flowise, alt: "imagen7" },
    ];
  
    // Clonar la primera imagen y agregarla al final para crear un bucle
    const elementosConLoop = [...elementosCarrusel, elementosCarrusel[0]];
    const anchoTotal = elementosConLoop.length * 200;
  
    const moverAPosicion = (posicion) => {
      setPosicionActual(posicion);
      carouselTrackRef.current.style.transform = `translateX(-${posicion * 200}px)`;
    };
  
    const carouselTrackRef = useRef(null);
  
    useEffect(() => {
      if (carouselTrackRef.current) {
        carouselTrackRef.current.style.width = `${anchoTotal}px`;
  
        // Inicialmente, establecer la posición en la primera imagen clonada (longitud - 1)
        moverAPosicion(elementosConLoop.length - 1);
  
        const intervaloMovimiento = setInterval(() => {
          if (posicionActual < elementosConLoop.length - 2) {
            moverAPosicion(posicionActual + 1);
          } else {
            // Al llegar al final, volver a la primera imagen clonada
            moverAPosicion(0);
          }
        }, 3000);
  
        return () => clearInterval(intervaloMovimiento);
      }
    }, [carouselTrackRef, anchoTotal]);
  
    return (
      <section className="contenedor-carrusel">
        <h1>Hola soy el carrusel</h1>
        <div className="carrusel" ref={carouselTrackRef}>
          {elementosConLoop.map((elemento, indice) => (
            <div className="elemento-carrusel" key={indice}>
              <img src={elemento.src} alt={elemento.alt} />
            </div>
          ))}
        </div>
      </section>
    );
  };


/*export const Carrusel = () => {
  return (
    <section className="carrusel-container">
      <h1 className="text-white">Hola soy el carrusel</h1>
      <div className="carrusel">
        <img className="imagen" src={burguer} alt="image" />

        <img className="imagen" src={movie} alt="image" />

        <img className="imagen" src={social} alt="image" />

        <img className="imagen" src={mdlinks} alt="image" />

        <img className="imagen" src={datalovers} alt="image" />

        <img className="imagen" src={cardvalid} alt="image" />

        <img className="imagen" src={flowise} alt="image" />

        <img className="imagen" src={mdlinks} alt="image" />

        <img className="imagen" src={mdlinks} alt="image" />
      </div>
    </section>
  );
};*/
