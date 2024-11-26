import { BotonProject } from "./Boton.jsx";
import "./proyecto.css";

export const Proyecto = ({
  title,
  description,
  stack,
  image,
  githubLink,
  demoLink,
}) => {

  return (
    <div className="infocard_project">
      <div className="infocard_project-image">
        <h1 className="project_title">{title}</h1>
        <img src={image} alt={title} className="project_image" />
        <div className="project_stack">
          {stack.map((herramienta, index) => (
            <p key={index} className="stack_tool">
              {herramienta}
            </p>
          ))}
        </div>
      </div>

      <div className="infocard_project-data">
        <div className="project_data">
          <p className="project_data-text">{description}</p>
        </div>
      </div>

      <div className="infocard_project-buttons">
        <BotonProject githubLink={githubLink} demoLink={demoLink} />
      </div>
    </div>
  );
};
