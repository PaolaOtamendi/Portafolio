import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="navBar flex flex-row justify-end bg-black bg-opacity-10 fixed top-0 w-full">
      <Link to="/" className="p-2 m-2 text-white hover:text-pink-500">
        Inicio
        <FontAwesomeIcon
          icon={faStar}
          size="sm"
          style={{ color: "#00ff91" }}
          className="ml-2"
        />
      </Link>
      <Link to="/Me" className="p-2 m-2 text-white text-white hover:text-pink-500">
        About Me
        <FontAwesomeIcon
          icon={faUser}
          size="sm"
          style={{ color: "#00ff91" }}
          className="ml-2"
        />
      </Link>
      <Link to="/Proyectos" className="p-2 m-2 text-white hover:text-pink-500">
        Proyectos
        <FontAwesomeIcon icon={faFolderOpen} size="sm"
          style={{ color: "#00ff91" }}
          className="ml-2" 
          />
      </Link>
    </div>
  );
};
