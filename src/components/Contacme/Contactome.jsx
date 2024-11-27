import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./contactome.css";
import dev from "../../assets/devwoman.png";
import { SocialsLinks } from "../../components/Socials/Socials.jsx";

export const Contactome = () => {
  return (
    <div className="contact_to-me">
      <div className="contain_title-tome">
        <h1 className="title_to-me">
          Contactame
        </h1>
        <img src={dev} alt="dev" className="me_image" />
      </div>

      <div className="contain_contact-tome">
        <SocialsLinks />
        <p className="texto-contacto break-words">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="lg"
            style={{ color: "#bcff12" }}
            className="mr-2"
          />
          Dirección: <strong>Saltillo, Coahuila, México</strong>
        </p>
      </div>
    </div>
  );
};
