import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FaFileDownload, FaFileCode, FaGithubAlt } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./botones.css";

// No necesario
export const BotonLets = () => {
  return (
    <div>
      <Link to="/Me">
        <button className="button_slide slide_down flex">
          Let´s Go!
          <FontAwesomeIcon
            icon={faStar}
            spin
            size="lg"
            style={{ color: "#00ff91" }}
            className="ml-2"
          />
        </button>
      </Link>
    </div>
  );
};

export const BotonCv = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1D3HCrCqqg0NBYRVNREOoDidHKXfG9Emq/view"
      target="_blank"
      rel="noopener noreferrer"
      className="ref"
    >
      <button className="button_cv">
        Explora mi CV
        <FaFileDownload color="#bcff12" />
      </button>
    </a>
  );
};

// No necesario
export const BotonLinkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/in/paola-otamendi-frontenddeveloper/"
      target="_blank"
      rel="noopener noreferrer"
      className="button_link m-2 break-words"
    >
      LinkedIn
      <FontAwesomeIcon
        icon={faLinkedin}
        fade
        size="xl"
        style={{ color: "#00ff91" }}
        className="linkedin ml-2"
      />
    </a>
  );
};

// No necesario
export const BotonGithub = () => {
  return (
    <a
      href="https://github.com/PaolaOtamendi"
      target="_blank"
      rel="noopener noreferrer"
      className="button_link m-2 break-words"
    >
      GitHub
      <FontAwesomeIcon
        icon={faGithub}
        fade
        size="xl"
        style={{ color: "#00ff91" }}
        className="github ml-2"
      />
    </a>
  );
};

export const BotonNext = () => {
  return (
    <div>
      <Link to="/Proyectos" className="ref">
        <button className="button_slide slide_down flex">
          Proyectos
          <FaFileCode color="#bcff12" />
        </button>
      </Link>
    </div>
  );
};

export const BotonProject = ({ githubLink, demoLink }) => {
  return (
    <div className="containbutton">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <button className="button_href slide_href">
          Código
          <FaGithubAlt color="#bcff12"/>
        </button>
      </a>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="button_href slide_href">
            Abrir Demo
            <IoPlayForward color="#bcff12"/>
          </button>
        </a>
      )}
    </div>
  );
};

// No necesario
export const CopyEmail = () => {
  const emailToCopy = "paola_otamendi23@hotmail.com";
  const handleCopyClick = () => {
    navigator.clipboard.writeText(emailToCopy).then(() => {
      alert("Texto copiado al portapapeles.");
    });
  };

  return (
    <div className="flex justify-center mt-2">
      <button onClick={handleCopyClick} className="button_href slide_href">
        Copiar Email
      </button>
    </div>
  );
};
