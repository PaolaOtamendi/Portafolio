import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFileArrowDown,
  faHandSparkles,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import "./botones.css";

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
      href="https://drive.google.com/file/d/1nUUtPc4V9PU-Xlqvn9sAvehZHRUyZSzD/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="button_cv">
        "Explora mi CV"
        <FontAwesomeIcon
          icon={faFileArrowDown}
          fade
          size="lg"
          style={{ color: "#00ff91" }}
          className="ml-2"
        />
      </button>
    </a>
  );
};

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
      <Link to="/Proyectos">
        <button className="button_slide slide_down flex">
          Proyectos
          <FontAwesomeIcon
            icon={faHandSparkles}
            fade
            style={{ color: "#00ff91" }}
            className="ml-2"
          />
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
          Github
          <FontAwesomeIcon
            icon={faSquareGithub}
            size="lg"
            style={{ color: "#00ff91" }}
            className="ml-2"
          />
        </button>
      </a>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="button_href slide_href">
            Abrir Demo
            <FontAwesomeIcon
              icon={faPlay}
              size="sl"
              style={{ color: "#00ff91" }}
              className="ml-1"
            />
          </button>
        </a>
      )}
    </div>
  );
};

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
