import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { BotonCv, BotonNext } from "/src/components/Boton.jsx";
import { Lenguajes, Softwares, Softskills } from "/src/components/Skills.jsx";
import { Navbar } from "/src/components/Nav.jsx";
import "./aboutme.css";
import "animate.css/animate.css";

const AboutMe = () => {
  return (
    <section className="">
      <Navbar />
      <section className="Me bg-gradient-to-b from-purple-300 via-purple-400 to-black min-h-screen max-w-screen">
        <div className="section1 flex flex-col justify-center bg-black bg-black-800 bg-opacity-50">
          <div className="information1 p-4">
            <h1 className="title mt-8">About Me!</h1>
            <p className="texto m-2 break-words">
              💫🚀 Actualmente impulsada por los desafíos, tomé uno más que fue mi 
              transformación como Ingeniera Industrial con experiencia de 
              5 años en Calidad y Mejora Continua a Developer. Siempre tuve 
              esa sensación de incursionarme en el mundo Dev, así que decidí 
              adentrarme felizmente participando en Laboratoria, donde inicié 
              mi desarrollo como Frontend Developer, colaboré y trabajé en 
              equipo en distintos proyectos.
            </p>
            <p className="texto m-2 break-wordS">
              🌟Mi enfoque como desarrollador es crear creativamente soluciones de 
              valor para todas las personas que interactúan día a día con la tecnología.
            </p>
            <BotonCv />
          </div>

          <div className="information2 p-4">
            <h1 className="title">Contactame</h1>
            <p className="texto mb-4 m-2 break-words">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                style={{ color: "#52ffa5" }}
                className="mr-2"
              />
              Email: paola_otamendi23@hotmail.com
            </p>
            <p className="texto mb-4 m-2 break-words">
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                style={{ color: "#52ffa5" }}
                className="mr-2"
              />
              Teléfono: +(52) 844 273 50 64
            </p>
            <p className="texto mb-4 m-2 break-words">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="lg"
                style={{ color: "#52ffa5" }}
                className="mr-2"
              />
              Dirección: Saltillo, Coahuila, México
            </p>
            <div className="contacto m-2 flex items-center">
              <a
                href="https://www.linkedin.com/in/paola-otamendi-frontenddeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="button_link m-2 break-words">
                Linkedin
              </a>
              <FontAwesomeIcon
                icon={faLinkedin}
                beat
                size="2xl"
                style={{ color: "#52ffa5" }}
                className="linkedin"/>
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

        <div className="section2 flex flex-col justify-center items-center bg-black">
          <h1 className="title mt-8 animate__animated animate__bounceInDown">
            SKILLS
          </h1>
          <Lenguajes />

          <Softwares />

          <Softskills />
          
          <div className="siguiente m-4 flex items-center justify-center">
            <BotonNext />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
