import burgerImage from '../assets/images/burger.png';
import movieImage from '../assets/images/movie.png';
import socialImage from '../assets/images/social.png';
import mdImage from '../assets/images/mdlinks.png';
import dataImage from '../assets/images/datalovers.png';
import cardImage from '../assets/images/cardvalid.png';
import filesImage from '../assets/images/filesflowise.png';
import jsonImage from '../assets/images/jsonflowise.png';
import siemensImage from '../assets/images/siemenschat.png';
import guessImage from '../assets/images/guess.png';
import fleetImage from '../assets/images/fleet.png';
import vtexstorehome from '../assets/images/vtexstorehome.png';
import vtexstorehometech from '../assets/images/vtexstorehometech.png';


// Projects
export const myProjects = [
    {
        id: 13,
        title: "Tech Products Storefront - VTEX",
        description: "Desarrollo de una tienda en línea de productos tecnológicos en VTEX IO, incluyendo un slider de productos y diseño optimizado para móviles.",
        stack: ["VTEX IO", "CSS", "JSON", "React", "Flex Layout", "Store Framework"],
        image: vtexstorehometech,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    },
    {
        id: 12,
        title: "E-commerce Storefront - VTEX",
        description: "Creación de una tienda en línea en VTEX, implementando un carrusel de productos y un mega menú personalizado con diseño responsivo.",
        stack: ["VTEX IO", "CSS", "JSON", "React", "Flex Layout", "Store Framework"],
        image: vtexstorehome,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    },
    {
        id: 11,
        title: "Fleet Management API REST",
        description: "Desarrollo de una API REST para gestión de flotas, rastreando la ubicación de 10,000 taxis con técnicas de almacenamiento y consulta de datos.",
        stack: ["Java", "Spring boot", "PostgreSQL", "Pgadmin", "Swagger", "CRUD"],
        image: fleetImage,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-fleet-management-api",
        demoLink: null
    },
    {
        id: 10,
        title: "Guess The Number",
        description: "Juego interactivo en terminal donde los jugadores adivinan un número entre 1 y 100, usando pistas de intentos previos.",
        stack: ["Java", "Diagramas de clases", "Junit", "Mockito"],
        image: guessImage,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-JAVA-003-guess-the-number",
        demoLink: null
    },
    {
        id: 9, 
        title: "BurgerQueen - Api Client",
        description: "Aplicación de gestión para un restaurante de hamburguesas, desarrollada en React, que integra una API local para administrar usuarios e inventario.",
        stack: ["HTML", "JavaScript", "CSS Grid", "REACT", "API", "JEST"],
        image: burgerImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-burger-queen-api-client",
        demoLink: "https://dev-007-burger-queen-api-client-beta.vercel.app/"
    },
    {
        id: 8,
        title: "Movie Challenge",
        description: "Aplicación en React y Tailwind CSS que permite explorar películas con funciones de búsqueda y reutilización de componentes.",
        stack: ["HTML", "JavaScript", "CSS Flex", "Tailwind CSS", "REACT", "API"],
        image: movieImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV005-movie-challenge-fw",
        demoLink: "https://dev-005-movie-challenge-fw-flame.vercel.app/"
    },
    {
        id: 7,
        title: "Social Network",
        description: "MountainMe es una red social para senderistas con diseño adaptable, que permite iniciar sesión, publicar fotos y compartir experiencias.",
        stack: ["HTML", "JavaScript", "CSS Grid", "Firebase", "Firestore", "JEST"],
        image: socialImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-social-network",
        demoLink: "https://dev-007-social-network.vercel.app/"
    },
    {
        id: 6,
        title: "MD-Links",
        description: "Herramienta CLI en Node.js que analiza documentos Markdown para obtener estadísticas de enlaces válidos e inválidos.",
        stack: ["JavaScript", "CLI", "HTTP", "NPM", "JEST"],
        image: mdImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-md-links",
        demoLink: "https://www.npmjs.com/package/md-links-pao-otamendi"
    },
    {
        id: 5,
        title: "Data Lovers",
        description: "Página para fans de Rick and Morty que muestra información de personajes por multiversos con diseño minimalista y filtros.",
        stack: ["HTML", "JavaScript", "CSS Flexbox", "JEST"],
        image: dataImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-data-lovers",
        demoLink: "https://paolaotamendi.github.io/DEV007-data-lovers/"
    },
    {
        id: 4,
        title: "Card Validation",
        description: "Interfaz para verificar la validez de tarjetas de crédito, diseñada para facilitar donaciones a una fundación contra el cáncer de mama.",
        stack: ["HTML", "JavaScript", "CSS Flexbox"],
        image: cardImage,
        githubLink: "https://github.com/PaolaOtamendi/DEV007-card-validation",
        demoLink: "https://paolaotamendi.github.io/DEV007-card-validation/"
    },
    {
        id: 3,
        title: "FlowiseAI - Chat with your files",
        description: "Chatbot que permite cargar documentos en txt o pdf para obtener respuestas instantáneas y resúmenes.",
        stack: ["FlowIse", "JavaScript"],
        image: filesImage,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files",
        demoLink: null
    },
    {
        id: 2,
        title: "FlowiseAI - Chat promt to json",
        description: "Aplicación que usa encadenamiento de prompts para generar resultados en formato JSON, mejorando la interacción con IA.",
        stack: ["FlowIse", "JavaScript"],
        image: jsonImage ,
        githubLink: "https://github.com/PaolaOtamendi/UPSK-AI-APPS-001-chat-with-your-files",
        demoLink: null
    },
    {
        id: 1,
        title: "Siemens - Chatbot",
        description: "Chatbot de IA desarrollado para Siemens, que ayuda en la búsqueda de empleos y soporte a usuarios registrados en la página de Jobs.",
        stack: ["FlowIse", "JavaScript"],
        image: siemensImage,
        githubLink: "https://github.com/PaolaOtamendi/Siemens_project",
        demoLink: null
    }
];