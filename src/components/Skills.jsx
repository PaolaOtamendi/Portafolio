import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faNpm,
  faSquareGit,
  faSlack,
  faFigma,
  faMarkdown,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faTeamspeak,
  faLeanpub,
  faJava
} from "@fortawesome/free-brands-svg-icons";

import {
  faPeopleGroup,
  faArrowsSplitUpAndLeft,
} from "@fortawesome/free-solid-svg-icons";

import intell from "../assets/intellij.png";
import visual from "../assets/visual.png";
import jest from "../assets/jest.png";
import firebase from "../assets/firebase.png";

import "./skills.css";
import "animate.css/animate.css";

export const Lenguajes = () => {
  return (
    <div className="lenguajes p-4">
      <div className="icono">
        <p className="titeltools">HTML</p>
        <FontAwesomeIcon
          icon={faHtml5}
          size="3x"
          style={{ color: "#ff6600" }}
        />
      </div>
      <div className="icono">
        <p className="titeltools">CSS</p>
        <FontAwesomeIcon
          icon={faCss3Alt}
          size="3x"
          style={{ color: "#0086b3" }}
        />
      </div>
      <div className="icono">
        <p className="titeltools">JavaScript</p>
        <FontAwesomeIcon
          icon={faSquareJs}
          size="3x"
          style={{ color: "#65b800" }}
        />
      </div>
      <div className="icono">
        <p className="titeltools">Java</p>
        <FontAwesomeIcon icon={faJava}
        size="3x" 
        style={{ color: "#ff0000" }} 
        />
      </div>
    </div>
  );
};

export const Softwares = () => {
  return (
    <div className="softwares p-1 animate__animated animate__backInLeft">
      <div className="icono">
        <p className="titeltools">React</p>
        <FontAwesomeIcon
          icon={faReact}
          size="3x"
          style={{ color: "#00f080" }}
        />
      </div>
      <div className="icono">
        <p className="titeltools">NodeJS</p>
        <FontAwesomeIcon icon={faNode} size="3x" style={{ color: "#008a10" }} />
      </div>
      <div className="icono">
        <p className="titeltools">Firebase</p>
        <img src={firebase}
        alt="firebase"
        className=""
        />
      </div>
      <div className="icono">
        <p className="titeltools">NPM</p>
        <FontAwesomeIcon icon={faNpm} size="3x" style={{ color: "#d60000" }} />
      </div>
      <div className="icono">
        <p className="titeltools">JEST Test</p>
        <img src={jest}
        alt="jest"
        className=""
        />
      </div>
      <div className="icono">
        <p className="titeltools">VisualCode</p>
        <img src={visual}
        alt="visual"
        className=""
        />
      </div>
      <div className="icono">
      <p className="titeltools">Intellij</p>
        <img src={intell}
        alt="intell"
        className=""
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
  );
};

export const Softskills = () => {
  return (
    <div className="softskills p-1">
      <div className="icono">
        <p className="titeltools">Colaborativo</p>
        <FontAwesomeIcon
          icon={faPeopleGroup}
          size="2x"
          style={{ color: "#00ff91" }}
        />
      </div>
      <div className="icono">
        <p className="titeltools">Escucha Activa</p>
        <FontAwesomeIcon
          icon={faTeamspeak}
          size="2x"
          style={{ color: "#00ff91" }}
        />
      </div>
      <div className="icono">
        <p className="titeltools">Scrum</p>
        <FontAwesomeIcon
          icon={faArrowsSplitUpAndLeft}
          size="2x"
          style={{ color: "#00ff91" }}
        />
      </div>
      <div className="icono">
        <p className="titeltools">Autonomo</p>
        <FontAwesomeIcon
          icon={faLeanpub}
          size="2x"
          style={{ color: "#00ff91" }}
        />
      </div>
    </div>
  );
};
