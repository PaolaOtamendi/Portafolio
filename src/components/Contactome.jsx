import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { CopyEmail } from "./Boton.jsx";
import "./contactome.css";
import dev from "../assets/devwoman.png";

export const Contactome = () => {
  return (
    <div className="containerMe">
        <div className="titlecontain">
      <h1 className="titleContac">Contactame</h1>
      <img src={dev} alt="dev" className="meimage"/>
      </div>
      <p className="textoContac">
        <FontAwesomeIcon
          icon={faEnvelope}
          size="1xs"
          style={{ color: "#52ffa5" }}
          className="mr-2"
        />
        Email: paola_otamendi23@hotmail.com
      </p>
      <CopyEmail />
      <p className="textoContac">
        <FontAwesomeIcon
          icon={faPhone}
          size="1xs"
          style={{ color: "#52ffa5" }}
          className="mr-2"
        />
        Teléfono: +(52) 844 273 50 64
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
              hover:text-white 
              text-white font-bold py-2 px-4 rounded"
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
          className="links m-2 break-words w-24
              bg-blue-500 
              hover:bg-blue-700 
              active:bg-blue-800 
              hover:text-white
              text-white font-bold py-2 px-4 rounded"
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
  );
};
