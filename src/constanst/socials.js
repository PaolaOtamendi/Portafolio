import { 
    FaGithub, 
    FaLinkedin, 
    FaWhatsapp, 
    FaEnvelope } from "react-icons/fa";

import { AiOutlineMessage } from "react-icons/ai";


// Socials and contacts
export const Socials = [
    {
        id: "github",
        title: "Social to github",
        icon: <FaGithub />,
        path: "https://github.com/PaolaOtamendi"
    },
    {
        id: "linkedin",
        title: "Social to Linkedin",
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/paola-otamendi-frontenddeveloper/"
    },
    {
        id: "whatsapp",
        title: "Contact to whatsapp",
        icon: <FaWhatsapp />,
        path: "https://wa.me/8442735064?text=Hola,%20me%20gustaria%20en%20hablar%20contigo",
    },
    {
        id: "correo",
        title: "Contact to correo",
        icon: <FaEnvelope />,
        path: "mailto:paola_otmendi23@hotmail.com?subject=Consulta%20sobre%20servicios&body=Hola,%20estoy%20interesado%20en%20saber%20más%20sobre%20tus%20servicios",
    }
];

export const Contactome = [
    {
        title: "Contactame",
        items: [
            {
                icon: <FaEnvelope />,
                Email: "paola_otamendi23@hotmail.com"
            },
            {
                icon: <AiOutlineMessage />,
                Phone: "8442735064"
            },
            {
                icon: <AiOutlineMessage />,
                Dirección: "México, Coahuila"
            },
            {
                icon: <FaLinkedin />,
                path: "https://www.linkedin.com/in/paola-otamendi-frontenddeveloper/",
                title: "Linkedin"
            },
            {
                icon: <FaGithub />,
                path: "https://github.com/PaolaOtamendi",
                title: "Github"
            }
        ]
    }
]