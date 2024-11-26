import { BotonProject } from "./Boton.jsx";
import "./proyecto.css";
import { HiCodeBracketSquare } from "react-icons/hi2";

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

        <div className="project_stack-contain">
          <p className="stack_label">
            <HiCodeBracketSquare size="20" color="#bcff12" />
            Stack: [
          </p>
          <div className="project_stack">
            {stack.map((herramienta, index) => (
              <p key={index} className="stack_tool">
                "{herramienta}"{index < stack.length - 1 ? "," : ""}
              </p>
            ))}
          </div>
          <p className="stack_label">]</p>
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
