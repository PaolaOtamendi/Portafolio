import pruebadev from "../assets/prueba9.jpg";
import "../styles/pages/home.css";
import { BotonNext } from "../components/Buttons/Boton.jsx";
import "animate.css/animate.css";

import { Navbar } from "../components/Nav/Nav.jsx";
import { Resume } from "../components/About/About.jsx";
import { SocialsLinks } from "../components/Socials/Socials.jsx";
import { BotonCv } from "../components/Buttons/Boton.jsx";
import { StackSkills } from "../components/Stacks/Stackskills.jsx";
import { ProjectCarrusel } from "../components/Carrusel/Projectcarrusel.jsx";
import { FooterHome } from "../components/Footer/Footer.jsx";
import { TbHeartCode } from "react-icons/tb";


const Home = () => {
  return (
    <section id="home" className="contain-all min-h-screen max-w-screen">
      <Navbar />

      <section className="contain_section-welcome">
        <div className="section_welcome">
          <div className="container__text-header">
            <h1 className="text__header-title-welcome">Hola!, <span className="break-line">Mi nombre es:</span></h1>
          </div>
          <div className="container__text-description">
            <div className="text__description-name">
              <h1 className="name">Paola Otamendi</h1>
            </div>
            <div className="text__description-intro">
              <p className="introduction">
              "Desarrolladora Web e Ingeniera apasionada por el aprendizaje continuo, especializada en crear soluciones creativas que transforman ideas en sitios web y aplicaciones funcionales."
              </p>
              <p className="worktogether font-bold">
                ¡Conoce más sobre mí y trabajemos como un equipo!<span><TbHeartCode fontSize="20" color="#100614"/></span>
              </p>
            </div>
          </div>

          <div className="container__socials-contacts">
          <BotonCv />
          <SocialsLinks />
          </div>
        </div>

        <div className="contain-logo">
          <img
            src={pruebadev}
            alt="develop"
            className="develop-image h-auto mx-auto"
          />
        </div>
      </section>

      <section id="resumen" className="contain_section-resume">
        <Resume />
      </section>

      <section id="stack" className="contain_section-skills">
        <StackSkills />
        <ProjectCarrusel />
      </section>
      <section className="contain_section-next">
      <BotonNext />
      </section>
      <FooterHome />
    </section>
  );
};

export default Home;
