import { Navbar } from "/src/components/Nav.jsx";
import { Contactome } from "/src/components/Contactome.jsx";
import { Proyecto } from "/src/components/Proyecto.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { myProjects } from "../constanst/projects";
import "./proyectos.css";

const Proyectos = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="all min-h-screen max-w-screen">
      <Navbar />

      <div className="containtitle">
        <h1 className="title-proyectos">Proyectos</h1>
        <h1 className="intro-proyectos">
          "¡Bienvenido a mi rincón de proyectos! Aquí encontrarás creatividad en
          cada detalle."
        </h1>
      </div>

      <section className="contain-proyectos p-4">
        {myProjects.map((proyecto) => (
          <Proyecto
            key={proyecto.id}
            title={proyecto.title}
            description={proyecto.description}
            stack={proyecto.stack}
            image={proyecto.image}
            githubLink={proyecto.githubLink}
            demoLink={proyecto.demoLink}
          />
        ))}
      </section>

      <section className="contactome">
        <Contactome />
      </section>
    </section>
  );
};

export default Proyectos;
