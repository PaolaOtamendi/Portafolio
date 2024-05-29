import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { CopyEmail, BotonLinkedin, BotonGithub } from "./Boton.jsx";
import "./contactome.css";
import dev from "../assets/devwoman.png";

export const Contactome = () => {
  return (
    <div className="containerMe">
      {/*A partir de aqui estoy haciendo cambios*/}
      <div className="titlecontain">
        <h1 className="titulo1 font-bold text-white text-6xl m-6">
          Contactame
        </h1>
        <img src={dev} alt="dev" className="meimage" />
      </div>

      <div className="contactos2">
        <p className="texto-contacto mb-4 m-2 break-words">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            style={{ color: "#00ff91" }}
            className="mr-2"
          />
          Email: <strong>paola_otamendi23@hotmail.com</strong>
          <CopyEmail />
        </p>
        <p className="texto-contacto mb-4 m-2 break-words">
          <FontAwesomeIcon
            icon={faPhone}
            size="lg"
            style={{ color: "#00ff91" }}
            className="mr-2"
          />
          Teléfono: <strong>+(52) 844 273 50 64</strong>
        </p>
        <p className="texto-contacto mb-4 m-2 break-words">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="lg"
            style={{ color: "#00ff91" }}
            className="mr-2"
          />
          Dirección: <strong>Saltillo, Coahuila, México</strong>
        </p>
      </div>

      <div className="contacto flex items-center">
        <BotonLinkedin />
      </div>

      <div className="contacto flex items-center">
        <BotonGithub />
      </div>
    </div>
  );
};
