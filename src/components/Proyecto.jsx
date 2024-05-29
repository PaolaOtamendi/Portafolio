import { BotonProject } from "./Boton.jsx";
import "./proyecto.css";
import { useState } from "react";

export const Proyecto = ({
  titulo,
  descripcion,
  herramientas,
  imagen,
  githubLink,
  demoLink,
}) => {

  const [mostrarHerramientas, setMostrarHerramientas] = useState(false);

  const toggleMostrarHerramientas = () => {
    setMostrarHerramientas(!mostrarHerramientas);
  };

  return (
    <div className="proyecto">

      <div className="titleApp">
      <h1>{titulo}</h1>
      </div>

      <div className="contain-image">
      <img src={imagen} alt={titulo} className="image" />
      <button className="button-tools" onClick={toggleMostrarHerramientas}>"Mostrar Stack"</button>
      {mostrarHerramientas && (
            <div className="containerdata">
              {herramientas.map((herramienta, index) => (
                <p key={index} className="tool">
                  {herramienta}
                </p>
              ))}
            </div>
        )}
      </div>

      <div className="dataproyecto">
        <div className="description">
          <p>{descripcion}</p>
        </div>
      </div>

      <div className="containbutton">
      <BotonProject githubLink={githubLink} demoLink={demoLink} />
      </div>

    </div>
  );
};
