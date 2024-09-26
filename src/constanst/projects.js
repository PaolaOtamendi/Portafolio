import burgerImage from './images/burger.png';
import movieImage from './images/movie.png';
import socialImage from './images/social.png';
import mdImage from './images/mdlinks.png';
import dataImage from './images/datalovers.png';
import cardImage from './images/cardvalid.png';
import filesImage from './images/filesflowise.png';
import jsonImage from './images/jsonflowise.png';
import siemensImage from './images/siemenschat.png';
import guessImage from './images/guess.png';
import fleetImage from './images/fleet.png';
import vtexstorehome from './images/vtexstorehome.png';
import vtexstorehometech from './images/vtexstorehometech.png';


// Projects
export const Projects = [
    {
        id: 13,
        title: "Tech Products Storefront - VTEX",
        description: "Este proyecto consistió en desarrollar una tienda en línea para productos tecnológicos utilizando VTEX IO. Incluyó la implementación de un slider de productos, optimización del diseño para dispositivos móviles.",
        stack: ["VTEX IO, CSS, JSON, React, Flex Layout, Store Framework"],
        image: vtexstorehometech,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    },
    {
        id: 12,
        title: "E-commerce Storefront - VTEX",
        description: "Este proyecto consistió en la creación de una tienda en línea utilizando la plataforma VTEX. Implementé componentes como un carrusel de productos (shelf), un mega menú personalizado, y optimizaciones de diseño responsivo para tabletas y escritorios. Se enfocó en ofrecer una experiencia de usuario fluida tanto en navegación como en visualización de productos.",
        stack: ["VTEX IO, CSS, JSON, React, Flex Layout, Store Framework"],
        image: vtexstorehome,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    },
    {
        id: 11,
        title: "Fleet Management API REST",
        description: "El proyecto se enfoco en desarrollar una API REST para un software de gestión de flotas que rastrea la ubicación de casi 10,000 taxis. Implementando técnicas para almacenar y consultar datos, asegurando una experiencia de usuario óptima.",
        stack: ["Java, Spring boot, PostgreSQL, Pgadmin, Swagger, CRUD"],
        image: fleetImage,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-fleet-management-api",
        demoLink: null
    },
    {
        id: 10,
        title: "Guess The Number",
        description: "Este juego interactivo para el terminal enfrenta a la jugadora contra el ordenador. Ambos se turnan para adivinar un número aleatorio entre 1 y 100, utilizando las pistas de intentos previos para saber si estaban demasiado altos o bajos.",
        stack: ["Java, Diagramas de clases, Junit, Mockito"],
        image: guessImage,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    },
    {
        id: 9, 
        title: "BurgerQueen - Api Client",
        description: "Aplicación para un restaurante de hamburguesas, desarrollada con React, que permite al administrador gestionar usuarios e inventario de manera eficiente. Integra una API local para la operación.",
        stack: ["HTML", "JavaScript", "CSS Grid", "REACT", "API", "JEST"],
        image: burgerImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-burger-queen-api-client",
        demoLink: "https://dev-007-burger-queen-api-client-beta.vercel.app/"
    },
    {
        id: 8,
        title: "Movie Challenge",
        description: "Aplicación desarrollada con React y Tailwind CSS, y una API de peliculas. Incluye funciones como filtro de búsqueda y reutilización de componentes para ofrecer una experiencia atractiva y simplificada para explorar contenido cinematográfico.",
        stack: ["HTML", "JavaScript", "CSS Flex", "Tailwind CSS", "REACT", "API"],
        image: movieImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV005-movie-challenge-fw",
        demoLink: "https://dev-005-movie-challenge-fw-flame.vercel.app/"
    },
    {
        id: 7,
        title: "Social Network",
        description: "MountainMe es una red social para senderistas y montañistas, con diseño adaptable a móvil y escritorio. Permite iniciar sesión con Google, hacer publicaciones con fotos y experiencias, e interactuar con otros usuarios.",
        stack: ["HTML", "JavaScript", "CSS Grid", "Firebase", "Firestore", "JEST"],
        image: socialImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-social-network",
        demoLink: "https://dev-007-social-network.vercel.app/"
    },
    {
        id: 6,
        title: "MD-Links",
        description: "Herramienta CLI en Node.js que analiza documentos Markdown para obtener estadísticas de enlaces, identificando enlaces válidos e inválidos, cantidad total y rutas de documentos vinculados.",
        stack: ["JavaScript", "CLI", "HTTP", "NPM", "JEST"],
        image: mdImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-md-links",
        demoLink: "https://www.npmjs.com/package/md-links-pao-otamendi"
    },
    {
        id: 5,
        title: "Data Lovers",
        description: "Página para fanáticos de Rick and Morty con información detallada de personajes por multiversos. Diseño minimalista con filtros y animaciones para una experiencia dinámica.",
        stack: ["HTML", "JavaScript", "CSS Flexbox", "JEST"],
        image: dataImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-data-lovers",
        demoLink: "https://paolaotamendi.github.io/DEV007-data-lovers/"
    },
    {
        id: 4,
        title: "Card Validation",
        description: "Interfaz amigable y predictiva para verificar la validez de tarjetas de crédito. La aplicación web está dirigida a apoyar económicamente a una fundación contra el cáncer de mama, facilitando a los usuarios hacer donaciones de manera sencilla.",
        stack: ["HTML", "JavaScript", "CSS Flexbox"],
        image: cardImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-card-validation",
        demoLink: "https://paolaotamendi.github.io/DEV007-card-validation/"
    },
    {
        id: 3,
        title: "FlowiseAI - Chat with your files",
        description: "Con FlowiseAI, creamos 'Chat with your files', un chatbot revolucionario. Ahora puedes cargar documentos en txt o pdf para obtener respuestas instantáneas a tus preguntas o resúmenes detallados. ¡Simplifica tu vida con esta herramienta innovadora!",
        stack: ["FlowIse", "JavaScript"],
        image: filesImage,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files",
        demoLink: null
    },
    {
        id: 2,
        title: "FlowiseAI - Chat promt to json",
        description: "¡Con FlowiseAI, creamos 'Chat promt to json', una increíble aplicación que utiliza el encadenamiento de prompts para generar resultados en formato JSON. ¡Experimenta la revolución de la IA en tus conversaciones!",
        stack: ["FlowIse", "JavaScript"],
        image: jsonImage ,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files",
        demoLink: null
    },
    {
        id: 1,
        title: "Siemens - Chatbot",
        description: "En este proyecto para Siemens, desarrollado durante un hackatón, utilizamos Flowise para crear un chatbot de inteligencia artificial. Este chatbot ayuda en la búsqueda de empleos y ofrece soporte a los usuarios registrados en la página de Jobs.",
        stack: ["FlowIse", "JavaScript"],
        image: siemensImage,
        githubLink: "https://github.com/PaolaOtamendi/Siemens_project",
        demoLink: null
    }
];