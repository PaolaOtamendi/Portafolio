import { Navbar } from "/src/components/Nav.jsx";
import { Contactome } from "/src/components/Contactome.jsx";
import { Proyecto } from "/src/components/Proyecto.jsx";

import { proyectos } from "../assets/data";

import "./proyectos.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Proyectos = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return(
    <section className="all bg-purple-400 min-h-screen max-w-screen">
      <Navbar />
      <div className="containtitle">
        <h1 className="title-proyectos font-bold text-black text-7xl m-6">
          Proyectos
        </h1>
        <h1 className="intro-proyectos">
          "¡Bienvenido a mi rincón de proyectos! Aquí encontrarás creatividad en cada detalle."
        </h1>
      </div>

      <section className="contain-proyectos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {proyectos.map((proyecto) => (
          <Proyecto
          key= {proyecto.id}
          titulo= {proyecto.titulo}
          descripcion= {proyecto.descripcion}
          herramientas= {proyecto.herramientas}
          imagen= {proyecto.image}
          githubLink= {proyecto.githubLink}
          demoLink= {proyecto.demoLink}
          />
        ))}
        </section>

        <section className="contactome bg-black">
        <Contactome />
      </section>

    </section>

    
  );
};

export default Proyectos;
