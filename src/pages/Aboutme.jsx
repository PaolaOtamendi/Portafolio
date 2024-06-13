import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faDownLong,
} from "@fortawesome/free-solid-svg-icons";

import {
  BotonCv,
  BotonNext,
  BotonLinkedin,
  BotonGithub,
} from "/src/components/Boton.jsx";

import { Lenguajes, Softwares, Softskills } from "/src/components/Skills.jsx";
import { Carrusel } from "/src/components/Carrusel.jsx";
import { Navbar } from "/src/components/Nav.jsx";
import "./aboutme.css";
import "animate.css/animate.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AboutMe = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="contain-all bg-purple-400">
      <Navbar />
      <section className="contain-section2">
        <section className="contain-part1">
          <div className="part1">
            <div className="contain-aboutme">
              <div className="title-intro">
                <h1 className="title-part1">
                  Acerca de mí
                </h1>
              </div>

              <div className="contain-textintro">
                <p className="text m-2">
                  💫🚀 Actualmente impulsada por los desafíos, tomé uno más:{" "}
                  <strong>
                    mi transformación de Ingeniera Industrial, con 5 años de
                    experiencia en Calidad y Mejora Continua, a Desarrolladora.
                  </strong>
                </p>
                <p className="text m-2">
                  Siempre tuve esa sensación de adentrarme en el de la
                  programación, así que decidí sumergirme felizmente
                  participando en Laboratoria, donde comencé mi desarrollo como
                  Desarrolladora Frontend, colaborando y trabajando en equipo en
                  diversos proyectos.
                </p>
                <p className="text m-2">
                  Además, recientemente{" "}
                  <strong>
                    completé mi primer curso en Java y actualmente estoy
                    participando en varios cursos de React y JavaScript.
                  </strong>
                </p>
              </div>
              <div className="contain-buttoncv">
                <BotonCv />
              </div>
            </div>

            <div className="contain-contact">
              <div className="title-intro">
                <h1 className="title-part1">
                  Contactame
                </h1>
              </div>
              <div className="contain-info">
                <p className="text mb-4 m-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    style={{ color: "#000" }}
                    className="mr-2"
                  />
                  Email: <strong>paola_otamendi23@hotmail.com</strong>
                </p>
                <p className="text mb-4 m-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="xl"
                    style={{ color: "#000" }}
                    className="mr-2"
                  />
                  Teléfono: <strong>+(52) 844 273 50 64</strong>
                </p>
                <p className="text mb-4 m-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xl"
                    style={{ color: "#000" }}
                    className="mr-2"
                  />
                  Dirección: <strong>Saltillo, Coahuila, México</strong>
                </p>
              </div>
              <div className="button-linkedin">
                <BotonLinkedin />
              </div>
              <div className="button-github">
                <BotonGithub />
              </div>
            </div>
          </div>
        </section>

        <section className="contain-part2">
          <div className="contain-stack">
            <h1 className="title-skills animate__animated animate__bounceInDown">
              Stack Tecnológico
              <FontAwesomeIcon
                icon={faDownLong}
                bounce
                size="sm"
                style={{ color: "#00ff91" }}
                className="ml-2"
              />
            </h1>
          </div>
          <div className="part2">
            <div className="stack">
              <Lenguajes />
            </div>
            <div className="stack">
              <Softwares />
            </div>
            <div className="stack">
              <Softskills />
            </div>
          </div>

          <div className="carrusel-projects">
            <Carrusel />
          </div>

          <div className="button-projects">
            <BotonNext />
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutMe;
