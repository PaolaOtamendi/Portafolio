import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="navBar sticky top-0 bg-black bg-opacity-10 w-full flex justify-end z-50">
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
