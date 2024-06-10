import burgerImage from './images/burger.png';
import movieImage from './images/movie.png';

export const proyectos = [
    {
        id: 1, 
        titulo: "BurgerQueen - Api Client",
        descripcion: "Aplicación para un restaurante de hamburguesas, desarrollada con React, que permite al administrador gestionar usuarios e inventario de manera eficiente. Integra una API local para la operación.",
        herramientas: ["HTML", "JavaScript", "CSS Grid", "REACT", "API", "JEST"],
        image: burgerImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-burger-queen-api-client",
        demoLink: "https://dev-007-burger-queen-api-client-beta.vercel.app/"
    },
    {
        id: 2,
        titulo: "Movie Challenge",
        descripcion: "Aplicación desarrollada con React y Tailwind CSS, y una API de peliculas. Incluye funciones como filtro de búsqueda y reutilización de componentes para ofrecer una experiencia atractiva y simplificada para explorar contenido cinematográfico.",
        herramientas: ["HTML", "JavaScript", "CSS Flex", "Tailwind CSS", "REACT", "API"],
        image: movieImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV005-movie-challenge-fw",
        demoLink: "https://dev-005-movie-challenge-fw-flame.vercel.app/"
    },
    {
        id: 3,
        titulo: "Social Network",
        descripcion: "MountainMe es una red social para senderistas y montañistas, con diseño adaptable a móvil y escritorio. Permite iniciar sesión con Google, hacer publicaciones con fotos y experiencias, e interactuar con otros usuarios.",
        herramientas: ["HTML", "JavaScript", "CSS Grid", "Firebase", "Firestore", "JEST"],
        image: "src/assets/images/social.png",
        githubLink: "https://github.com/PaolaOtamendi/DEV007-social-network",
        demoLink: "https://dev-007-social-network.vercel.app/"
    },
    {
        id: 4,
        titulo: "MD-Links",
        descripcion: "Herramienta CLI en Node.js que analiza documentos Markdown para obtener estadísticas de enlaces, identificando enlaces válidos e inválidos, cantidad total y rutas de documentos vinculados.",
        herramientas: ["JavaScript", "CLI", "HTTP", "NPM", "JEST"],
        image: "src/assets/images/mdlinks.png",
        githubLink: "https://github.com/PaolaOtamendi/DEV007-md-links",
        demoLink: "https://www.npmjs.com/package/md-links-pao-otamendi"
    },
    {
        id: 5,
        titulo: "Data Lovers",
        descripcion: "Página para fanáticos de Rick and Morty con información detallada de personajes por multiversos. Diseño minimalista con filtros y animaciones para una experiencia dinámica.",
        herramientas: ["HTML", "JavaScript", "CSS Flexbox", "JEST"],
        image: "src/assets/images/datalovers.png",
        githubLink: "https://github.com/PaolaOtamendi/DEV007-data-lovers",
        demoLink: "https://paolaotamendi.github.io/DEV007-data-lovers/"
    },
    {
        id: 6,
        titulo: "Card Validation",
        descripcion: "Interfaz amigable y predictiva para verificar la validez de tarjetas de crédito. La aplicación web está dirigida a apoyar económicamente a una fundación contra el cáncer de mama, facilitando a los usuarios hacer donaciones de manera sencilla.",
        herramientas: ["HTML", "JavaScript", "CSS Flexbox"],
        image: "src/assets/images/cardvalid.png",
        githubLink: "https://github.com/PaolaOtamendi/DEV007-card-validation",
        demoLink: "https://paolaotamendi.github.io/DEV007-card-validation/"
    },
    {
        id: 7,
        titulo: "FlowiseAI - Chat with your files",
        descripcion: "Con FlowiseAI, creamos 'Chat with your files', un chatbot revolucionario. Ahora puedes cargar documentos en txt o pdf para obtener respuestas instantáneas a tus preguntas o resúmenes detallados. ¡Simplifica tu vida con esta herramienta innovadora!",
        herramientas: ["FlowIse", "JavaScript"],
        image: "src/assets/images/filesflowise.png",
        githubLink: "https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files",
        demoLink: null
    },
    {
        id: 8,
        titulo: "FlowiseAI - Chat promt to json",
        descripcion: "¡Con FlowiseAI, creamos 'Chat promt to json', una increíble aplicación que utiliza el encadenamiento de prompts para generar resultados en formato JSON. ¡Experimenta la revolución de la IA en tus conversaciones!",
        herramientas: ["FlowIse", "JavaScript"],
        image: "src/assets/images/jsonflowise.png",
        githubLink: "https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files",
        demoLink: null
    },
    {
        id: 9,
        titulo: "Siemens - Chatbot",
        descripcion: "En este proyecto para Siemens, desarrollado durante un hackatón, utilizamos Flowise para crear un chatbot de inteligencia artificial. Este chatbot ayuda en la búsqueda de empleos y ofrece soporte a los usuarios registrados en la página de Jobs.",
        herramientas: ["FlowIse", "JavaScript"],
        image: "src/assets/images/siemenschat.png",
        githubLink: "https://github.com/PaolaOtamendi/Siemens_project",
        demoLink: null
    },
    {
        id: 10,
        titulo: "Guess The Number",
        descripcion: "Este juego interactivo para el terminal enfrenta a la jugadora contra el ordenador. Ambos se turnan para adivinar un número aleatorio entre 1 y 100, utilizando las pistas de intentos previos para saber si estaban demasiado altos o bajos.",
        herramientas: ["Java"],
        image: "src/assets/images/guessthenumber.png",
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    },
    {
        id: 11,
        titulo: "Fleet Management Api",
        descripcion: "El proyecto se enfoco en desarrollar una API REST para un software de gestión de flotas que rastrea la ubicación de casi 10,000 taxis. Implementando técnicas para almacenar y consultar datos, asegurando una experiencia de usuario óptima.",
        herramientas: ["Java"],
        image: "src/assets/images/fleetapi.png",
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    }
];