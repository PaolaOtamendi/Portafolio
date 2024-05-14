import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { BotonCv, BotonNext } from "/src/components/Boton.jsx";
import { Lenguajes, Softwares, Softskills } from "/src/components/Skills.jsx";
import { Carrusel } from "/src/components/Carrusel.jsx";
import { Navbar } from "/src/components/Nav.jsx";
import "./aboutme.css";
import "animate.css/animate.css";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const AboutMe = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts or location changes
  }, [location]);


  return (
    <section className="bg-purple-400">
      <Navbar />
      {/*Modificacion de vistas e informacion */}
      <section className="modificado">

        <section className="seccion1">
        <div className="parte1">
          <div className="AboutMe flex flex-col items-center justify-center text-center">
            <div className="titulointro flex flex-row">
              <h1 className="titulo1 font-bold text-black text-6xl m-6">
                Acerca de mí
              </h1>
            </div>

            <div className="textointro">
              <p className="texto m-2 break-words">
                💫🚀 Actualmente impulsada por los desafíos, tomé uno más: <strong>mi
                transformación de Ingeniera Industrial, con 5 años de
                experiencia en Calidad y Mejora Continua, a Desarrolladora.</strong>
              </p>
              <p className="texto m-2 break-words">
                Siempre tuve esa sensación de adentrarme en el de la programación, así
                que decidí sumergirme felizmente participando en Laboratoria,
                donde comencé mi desarrollo como Desarrolladora Frontend,
                colaborando y trabajando en equipo en diversos proyectos.
              </p>
              <p className="texto m-2 break-words">
                Además, recientemente <strong>completé mi primer curso en Java y
                actualmente estoy participando en varios cursos de React y
                JavaScript.</strong>
              </p>
            </div>
            <div className="botonintro">
              <BotonCv />
            </div>
          </div>

          <div className="Contactame flex flex-col items-center justify-center text-center">
            <div className="titultointro2">
              <h1 className="titulo1 font-bold text-black text-6xl m-6">
                Contactame
              </h1>
            </div>
            <div className="contactos2">
              <p className="texto mb-4 m-2 break-words">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  style={{ color: "#52ffa5" }}
                  className="mr-2"
                />
                Email: <strong>paola_otamendi23@hotmail.com</strong>
              </p>
              <p className="texto mb-4 m-2 break-words">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="lg"
                  style={{ color: "#52ffa5" }}
                  className="mr-2"
                />
                Teléfono: <strong>+(52) 844 273 50 64</strong>
              </p>
              <p className="texto mb-4 m-2 break-words">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  style={{ color: "#52ffa5" }}
                  className="mr-2"
                />
                Dirección: <strong>Saltillo, Coahuila, México</strong>
              </p>
            </div>
            <div className="contacto m-2 flex items-center">
              <a
                href="https://www.linkedin.com/in/paola-otamendi-frontenddeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="button_link m-2 break-words"
              >
                Linkedin
              </a>
              <FontAwesomeIcon
                icon={faLinkedin}
                beat
                size="2xl"
                style={{ color: "#52ffa5" }}
                className="linkedin"
              />
            </div>
            <div className="contacto m-2 flex items-center">
              <a
                href="https://github.com/PaolaOtamendi"
                target="_blank"
                rel="noopener noreferrer"
                className="button_link m-2 break-words"
              >
                GitHub
              </a>
              <FontAwesomeIcon
                icon={faGithub}
                flip
                size="2xl"
                style={{ color: "#52ffa5" }}
                className="github"
              />
            </div>
          </div>

        </div>
        </section>

        <section className="seccion2 bg-black text-white text-center">
          <div className="containstack">
          <h1 className="tituloskills font-bold text-6xl m-6 animate__animated animate__bounceInDown">
          Stack Tecnológico
          </h1>
          </div>
          <div className="parte2 justify-center items-center bg-black">
            <div className="stack">
          <Lenguajes />
          </div>
          <div className="stack">
          <Softwares />
          </div>
          <div className="stack">
          <Softskills />
          </div>

          {/*<div className="siguiente m-4 flex items-center justify-center">
            <BotonNext />
  </div>*/}
        </div>

        <div className="carrusel-proyectos">
        <Carrusel />
</div>

        <div className="siguiente m-4 flex items-center justify-center">
            <BotonNext />
          </div>
        </section>

      </section>
    </section>
  );
};

export default AboutMe;
