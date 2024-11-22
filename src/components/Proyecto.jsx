import { BotonProject } from "./Boton.jsx";
import "./proyecto.css";
import { useState } from "react";

export const Proyecto = ({
  title,
  description,
  stack,
  image,
  githubLink,
  demoLink,
}) => {
  const [mostrarstack, setMostrarstack] = useState(false);

  const toggleMostrarstack = () => {
    setMostrarstack(!mostrarstack);
  };

  return (
    <div className="infocard_project">
      <div className="infocard_project-image">
        <h1 className="project_title">{title}</h1>
        <img src={image} alt={title} className="project_image" />

        {/* <div className="project_stack">
          {stack.map((herramienta, index) => (
            <span key={index} className="stack_tool1">
              {herramienta}
              {index < stack.length - 1 && ', '}
            </span>
          ))}
        </div> */}

        <div className="project_stack">
          {stack.map((herramienta, index) => (
            <p key={index} className="stack_tool">
              {herramienta}
            </p>
          ))}
        </div>
        {/*<button className="button-tools" onClick={toggleMostrarstack}>"Mostrar Stack"</button>
      {mostrarstack && (
            <div className="containerdata">
              {stack.map((herramienta, index) => (
                <p key={index} className="tool">
                  {herramienta}
                </p>
              ))}
            </div>
        )}*/}
      </div>

      <div className="infocard_project-data">
        <div className="project_data">
          <p>{description}</p>
        </div>
      </div>

      <div className="infocard_project-buttons">
        <BotonProject githubLink={githubLink} demoLink={demoLink} />
      </div>
    </div>
  );
};
