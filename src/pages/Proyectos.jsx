import { Navbar } from "/src/components/Nav.jsx";
import { Contactome } from "/src/components/Contactome.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import burguer from "../assets/images/burguer.png";
import movie from "../assets/movie.png";
import social from "../assets/social.png";
import mdlinks from "../assets/mdlinks.png";
import datalovers from "../assets/datalovers.png";
import cardvalid from "../assets/cardvalid.png";
import flowise from "../assets/flowise.png";
import { Proyecto } from "/src/components/Proyecto.jsx";

import "./proyectos.css";

const Proyectos = () => {
  return (
    <section className="all bg-black min-h-screen max-w-screen">
      <Navbar />
      <div className="containtitle">
        <h1 className="title">
          Proyectos
          <FontAwesomeIcon icon={faThumbsUp} flip className="ml-3" />
        </h1>
      </div>
      <div className="proyectos">
        <Proyecto
          titulo="BurguerQueen - Api Client"
          descripcion="Esta es una aplicación diseñada para un restaurante de 
          hamburguesas, concebida con la finalidad de proporcionar al 
          administrador herramientas para gestionar eficientemente el 
          control de usuarios y el inventario. La aplicación se ha 
          desarrollado utilizando la biblioteca React y se encuentra 
          integrada con una API que opera de manera local."
          herramientas={[
            "HTML",
            "JavaScript",
            "CSS Grid",
            "REACT",
            "API",
            "JEST",
          ]}
          imagen={burguer}
          githubLink="https://github.com/PaolaOtamendi/DEV007-burger-queen-api-client"
          demoLink="https://dev-007-burger-queen-api-client-beta.vercel.app/"
        />

        <Proyecto
          titulo="Movie Challenge"
          descripcion="Este proyecto utiliza React y Tailwind CSS para desarrollar una 
          aplicación web que aprovecha datos de películas de una API. 
          Se desarrolló con funciones clave, como un filtro de búsqueda 
          y la reutilización inteligente de componentes. Nuestro enfoque 
          se centra en ofrecer una experiencia atractiva para los usuarios, 
          simplificando el proceso de exploración y disfrute de contenido 
          cinematográfico."
          herramientas={[
            "HTML",
            "JavaScript",
            "CSS Flex",
            "Tailwind CSS",
            "REACT",
            "API",
          ]}
          imagen={movie}
          githubLink="https://github.com/PaolaOtamendi/DEV005-movie-challenge-fw"
          demoLink="https://dev-005-movie-challenge-fw-flame.vercel.app/"
        />

        <Proyecto
          titulo="Social Network"
          descripcion="MountainMe es una red social enfocada a senderistas y montañistas. 
          El diseño se adapta a formato móvil y de escritorio. Cuenta con una 
          interfaz dinámica e intuitiva que permite al usuario iniciar sesión con 
          una cuenta de Google, hacer publicaciones con fotografías e información 
          sobre sus experiencias, además de interactuar con las publicaciones de
          los demás usuarios."
          herramientas={[
            "HTML",
            "JavaScript",
            "CSS Grid",
            "Firebase",
            "Firestore",
            "JEST",
          ]}
          imagen={social}
          githubLink="https://github.com/PaolaOtamendi/DEV007-social-network"
          demoLink="https://dev-007-social-network.vercel.app/"
        />

        <Proyecto
          titulo="MD-Links"
          descripcion="
          Herramienta CLI que analiza documentos Markdown para proporcionar estadísticas 
          sobre enlaces, incluyendo enlaces válidos e inválidos, cantidad total 
          de enlaces y rutas de documentos vinculados. Su propósito es facilitar 
          la obtención de datos valiosos sin comprometer la integridad de la 
          información, ejecutándose en Node.js para versatilidad en entornos de 
          ejecución."
          herramientas={["JavaScript", "CLI", "HTTP", "NPM", "JEST"]}
          imagen={mdlinks}
          githubLink="https://github.com/PaolaOtamendi/DEV007-md-links"
          demoLink="https://www.npmjs.com/package/md-links-pao-otamendi"
        />

        <Proyecto
          titulo="Data Lovers"
          descripcion=" Dirigida a los fanáticos de Rick and Morty, la página proporciona 
          información detallada sobre los personajes, organizada por multiversos, 
          el diseño adopta un enfoque minimalista para equilibrar la extravagancia 
          de los personajes. 
          Se incorporan diferentes filtros por multiversos y personajes, ademas de 
          animaciones a las tarjetas botones para agregar dinamismo a la experiencia 
          del usuario."
          herramientas={["HTML", "JavaScript", "CSS Flexbox", "JEST"]}
          imagen={datalovers}
          githubLink="https://github.com/PaolaOtamendi/DEV007-data-lovers"
          demoLink="https://paolaotamendi.github.io/DEV007-data-lovers/"
        />

        <Proyecto
          titulo="Card Validation"
          descripcion=" 
          La interfaz está diseñada para ser amigable y predictiva. Esta aplicación web 
          permite al usuario verificar la validez de un número de tarjeta
          de crédito.
          Se concluyó enfocar la página en una fundación dedicada al cáncer 
          de mama, dirigida a aquellos que deseen brindar apoyo económico 
          a mujeres que lo necesiten."
          herramientas={["HTML", "JavaScript", "CSS Flexbox"]}
          imagen={cardvalid}
          githubLink="https://github.com/PaolaOtamendi/DEV007-card-validation"
          demoLink="https://paolaotamendi.github.io/DEV007-card-validation/"
        />
        <Proyecto
          titulo="FlowiseAI - Chat with your files"
          descripcion=" 
          Empleando la herramienta de FlowiseAI se generaron dos chatbots, estas 
          herramientas benefician actualmente para optimizar procesos, automatizar 
          tareas y al aprovechar al maximo sus capacidades.
          Chat with your files. Este chatbot permite a los usuarios cargar
          a los usuarios un documento txt o pdf y analizar su contenido."
          herramientas={["FlowIse", "JavaScript"]}
          imagen={flowise}
          githubLink="https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files"
          demoLink={null}
        />
        <Proyecto
          titulo="FlowiseAI - Chat promt to json"
          descripcion=" 
          Empleando la herramienta de FlowiseAI se generaron dos chatbots de inteligencia
          artificial.
          Chat promt to json. Este chatbot es una aplicación que aprovecha
          el encadenamiento de prompts para producir un resultado en formato JSON"
          herramientas={["FlowIse", "JavaScript"]}
          imagen={flowise}
          githubLink="https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files"
          demoLink={null}
        />
      </div>
      <section className="contactome bg-black">
      <Contactome />
      </section>
    </section>
  );
};

export default Proyectos;
