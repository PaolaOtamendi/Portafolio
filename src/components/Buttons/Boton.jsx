import { FaFileDownload, FaFileCode, FaGithubAlt } from "react-icons/fa";
import { IoPlayForward, IoCopy } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./botones.css";


export const BotonCv = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1D3HCrCqqg0NBYRVNREOoDidHKXfG9Emq/view"
      target="_blank"
      rel="noopener noreferrer"
      className="ref"
    >
      <button className="button_style button_cv">
        Explora mi CV
        <FaFileDownload color="#bcff12" />
      </button>
    </a>
  );
};

export const BotonNext = () => {
  return (
    <div>
      <Link to="/Proyectos" className="ref">
        <button className="button_style button_slide">
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
        <button className="button_style button_href">
          Código
          <FaGithubAlt color="#bcff12"/>
        </button>
      </a>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="button_style button_href">
            Abrir Demo
            <IoPlayForward color="#bcff12"/>
          </button>
        </a>
      )}
    </div>
  );
};

// copy mail button
export const CopyEmail = () => {
  const emailToCopy = "paola_otamendi23@hotmail.com";
  const handleCopyClick = () => {
    navigator.clipboard.writeText(emailToCopy).then(() => {
      alert("Texto copiado al portapapeles.");
    });
  };

  return (
    <div className="flex justify-center">
      <button onClick={handleCopyClick} className="button_style button_href-mail">
      <IoCopy color="#bcff12" />Copy
      </button>
    </div>
  );
};
