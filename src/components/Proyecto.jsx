import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { BotonProject } from "./Boton.jsx";
import "./proyecto.css";

export const Proyecto = ({
  titulo,
  descripcion,
  herramientas,
  imagen,
  githubLink,
  demoLink,
}) => {
  console.log("Valor de demoLink:", demoLink);
  return (
    <div className="proyecto">


      <h1 className="titleApp">{titulo}</h1>
      <div className="dataproyecto">
        <div className="containerdata">
          <p className="description">{descripcion}</p>
          <div className="herramientas">
            {herramientas.map((herramienta, index) => (
              <p key={index} className="tool">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  style={{ color: "#ac1ee0" }}
                  className="mr-3"
                />
                {herramienta}
              </p>
            ))}
          </div>
        </div>
        <div className="containerimage">
          <img src={imagen} alt={titulo} className="image" />
        </div>
      </div>
      <div className="containbutton">
        <BotonProject githubLink={githubLink} demoLink={demoLink} />
      </div>
    </div>
  );
};
