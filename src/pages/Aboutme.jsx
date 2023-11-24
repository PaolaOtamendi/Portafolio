import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faVialCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faSquareGit } from "@fortawesome/free-brands-svg-icons";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faTeamspeak } from "@fortawesome/free-brands-svg-icons";
import { faArrowsSplitUpAndLeft } from "@fortawesome/free-solid-svg-icons";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";

import { BotonCv } from '/src/components/Boton.jsx';
import "./aboutme.css";
import "animate.css/animate.css";

const AboutMe = () => {
  return (
    <section className="Me bg-gradient-to-b from-purple-300 via-purple-400 to-black min-h-screen max-w-screen">
      <div className="section1 flex flex-col justify-center bg-black bg-black-800 bg-opacity-50">
        <div className="information1 p-4">
          <h1 className="title">About Me!</h1>
          <p className="texto m-2 break-words">
            💫🚀 Actualmente impulsada por los desafios, tome uno mas que fue mi
            transformación como Ingeniera Industrial a Developer, siempre tuve
            esa sensación por incursionarme en el mundo Dev, así que decidí
            adentrarme en el felizmente participando en Laboratoria, donde
            inicie mi desarrollo como Front end Developer.
          </p>
          <p className="texto m-2 break-words text-white font-bold font-mono">
            🌟Mi enfoque como Developer es desarrollar creativamente soluciones
            de valor para todas las personas que interactúan día a día con la
            tecnología.
          </p>
          <BotonCv />
        </div>

        <div className="information2 p-4">
          <h1 className="title">Contactame</h1>
          <p className="texto mb-4 m-2 break-words">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="1xs"
              style={{ color: "#52ffa5" }}
              className="mr-2"
            />
            Email: paola_otamendi23@hotmail.com
          </p>
          <p className="texto mb-4 m-2 break-words">
            <FontAwesomeIcon
              icon={faPhone}
              size="1xs"
              style={{ color: "#52ffa5" }}
              className="mr-2"
            />
            Teléfono: +(52) 844 273 50 64
          </p>
          <p className="texto mb-4 m-2 break-words">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="1xs"
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
              className="links m-2 break-words w-24 
              bg-blue-500 
              hover:bg-blue-700 
              active:bg-blue-800 
              text-white font-bold py-2 px-4 rounded">
              Linkedin</a>
            <FontAwesomeIcon
              icon={faLinkedin}
              beat
              size="2xl"
              style={{ color: "#52ffa5" }}
              className="linkedin"
            />
          </div>
          <div className="contacto m-2 flex items-center">
            <a href="https://github.com/PaolaOtamendi"
              target="_blank"
              rel="noopener noreferrer"
              className="links m-2 break-words w-24
              bg-blue-500 
              hover:bg-blue-700 
              active:bg-blue-800 
              text-white font-bold py-2 px-4 rounded">GitHub</a>
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
        <h1 className="title animate__animated animate__bounceInDown">
          SKILLS
        </h1>
        <div className="lenguajes p-4">
          <div className="icono">
            <p className="titeltools">HTML</p>
            <FontAwesomeIcon
              icon={faHtml5}
              beatFade
              size="4x"
              style={{ color: "#ff6600" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">CSS</p>
            <FontAwesomeIcon
              icon={faCss3Alt}
              beatFade
              size="4x"
              style={{ color: "#0086b3" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">JavaScript</p>
            <FontAwesomeIcon
              icon={faSquareJs}
              beatFade
              size="4x"
              style={{ color: "#65b800" }}
            />
          </div>
        </div>

        <div className="softwares p-4 animate__animated animate__backInLeft">
          <div className="icono">
            <p className="titeltools">React</p>
            <FontAwesomeIcon
              icon={faReact}
              size="3x"
              style={{ color: "#00f080" }}
              className="mt-2"
            />
          </div>
          <div className="icono">
            <p className="titeltools">NodeJS</p>
            <FontAwesomeIcon
              icon={faNode}
              size="3x"
              style={{ color: "#008a10" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">Firebase</p>
            <FontAwesomeIcon
              icon={faFireFlameCurved}
              size="3x"
              style={{ color: "#ff9500" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">NPM</p>
            <FontAwesomeIcon
              icon={faNpm}
              size="3x"
              style={{ color: "#d60000" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">JEST Test</p>
            <FontAwesomeIcon
              icon={faVialCircleCheck}
              size="3x"
              style={{ color: "#85002e" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">VisualCode</p>
            <FontAwesomeIcon
              icon={faCode}
              size="3x"
              style={{ color: "#00e66f" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">GitHub</p>
            <FontAwesomeIcon
              icon={faSquareGit}
              size="3x"
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">Slack</p>
            <FontAwesomeIcon
              icon={faSlack}
              size="3x"
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">Figma</p>
            <FontAwesomeIcon
              icon={faFigma}
              size="3x"
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">MarkDown</p>
            <FontAwesomeIcon
              icon={faMarkdown}
              size="3x"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
        <div className="softskills p-4">
          <div className="icono">
            <p className="titeltools">Compañerismo</p>
            <FontAwesomeIcon
              icon={faPeopleGroup}
              size="3x"
              style={{ color: "#49bc95" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">Comunicación</p>
            <FontAwesomeIcon
              icon={faTeamspeak}
              size="3x"
              style={{ color: "#49bc95" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">Scrum</p>
            <FontAwesomeIcon
              icon={faArrowsSplitUpAndLeft}
              size="3x"
              style={{ color: "#49bc95" }}
            />
          </div>
          <div className="icono">
            <p className="titeltools">Autoaprendizaje</p>
            <FontAwesomeIcon
              icon={faLeanpub}
              size="3x"
              style={{ color: "#49bc95" }}
            />
          </div>
        </div>
      </div>

      {/*       <div>
        <button>hola</button>
      </div> */}
    </section>
  );
};

export default AboutMe;
