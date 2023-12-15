import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFileArrowDown,
  faHandSparkles,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
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
      <button
        className="button_cv"
      >
        Abrir mi CV
        <FontAwesomeIcon
          icon={faFileArrowDown}
          fade
          style={{ color: "#00ff91" }}
          className="ml-2"
        />
      </button>
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
            style={{ color: "#3dffcf" }}
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
          <FontAwesomeIcon icon={faSquareGithub} size="lg" className="ml-1" />
        </button>
      </a>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="button_href slide_href">
            Abrir Demo
            <FontAwesomeIcon icon={faPlay} size="sm" className="ml-1" />
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
      <button
        onClick={handleCopyClick}
        className="bg-white w-36 h-11 m-2 uppercase font-arial font-bold hover:bg-blue-700 hover:text-white
        rounded-lg cursor-pointer"
      >
        Copiar Email
      </button>
    </div>
  );
};
