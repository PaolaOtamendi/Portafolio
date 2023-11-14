import dev3 from "../assets/dev3.png";
import tools from "../assets/softwares.png";
import react from "../assets/react.png";
import node from "../assets/node.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

import "./aboutp.css";

const About = () => {
  return (
    <section
      className="containerAbout flex flex-col h-screen
    bg-gradient-to-b from-purple-300 via-purple-400 to-black"
    >
      <section className="containerData flex">
        <div
          className="firstData 
        max-w-2xl
        max-h-96
        md:mt-8 lg:mt-5 lg:w-[90%] lg:p-10
        "
        >
          <h1
            className="titleFirst m-2 
          text-4xl font-bold text-center tracking-wide text-green-400 
          bg-black bg-black-800 bg-opacity-30 rounded-lg
          max-w-2xl
          max-h-96
          md:mt-8 lg:mt-5 lg:w-[97%] lg:p-2"
          >
            About Me!
          </h1>
          <div className="informacion m-2
          font-semibold text-justify font-arial text-lg 
          bg-black bg-black-800 bg-opacity-60 rounded-lg text-white">
            {/*             <p className="mb-4 m-2 break-words">
              🚀 Impulsada por los desafíos inicie mi desarrollo como ingeniera
              industrial donde tuve la oportunidad de analizar y crear
              soluciones a problemas de forma simple, automatizada y
              colaborativa con el equipo de IT.
            </p> */}
            <p className="mb-4 m-2 break-words">
              💫🚀 Actualmente impulsada por los desafios, tome uno mas que fue
              mi transformación como Ingeniera Industrial a Developer, siempre
              tuve esa sensación por incursionarme en el mundo Dev, así que
              decidí adentrarme en el felizmente participando en Laboratoria,
              donde inicie mi desarrollo como FrontEnd Developer.
            </p>
            <p className="mb-4 m-2 break-words">
              🌟Mi enfoque como Developer es desarrollar creativamente
              soluciones de valor para todas las personas que interactúan día a
              día con la tecnología.
            </p>
          </div>
          <div className="containerbutton bg-white text-black text-lg rounded-lg p-2 font-bold m-3 cursor-pointer">
            <button className="buttoncv">👩‍💻 Descarga mi CV</button>
          </div>
          <div className="tooldeveloper mt-5 items-center">
            <div>
            <img src={tools} alt="tools" className="tools mt-3"></img>
            </div>
            <div className="flex">
            <img src={react} alt="tools" className="react mt-3"></img>
            <img src={node} alt="tools" className="node mt-3"></img>
            </div>
          </div>
        </div>
        <div
          className="secondData 
        max-w-2xl
        max-h-96
        md:mt-8 lg:mt-5 lg:w-[70%] lg:p-10"
        >
          <h1
            className="titleSecond m-2
          text-4xl font-bold text-center tracking-wide text-green-400 
          bg-black bg-black-800 bg-opacity-30 rounded-lg
          max-w-2xl
          max-h-96
          md:mt-8 lg:mt-5 lg:w-[97%] lg:p-2"
          >
            Contactame
          </h1>
          <div className="informacion m-2
          font-semibold text-justify font-arial
          bg-black bg-black-800 bg-opacity-60 rounded-lg text-white text-lg">
            <p className="mb-4 m-2 break-words">
              Email: paola_otamendi23@hotmail.com
            </p>
            <p className="mb-4 m-2 break-words">
              Teléfono: +(52) 844 273 50 64
            </p>
            <p className="mb-4 m-2 break-words">
              Dirección: Saltillo, Coahuila, México
            </p>
            <div className="redes flex">
            <a className="mb-4 m-2 break-words">Linkedin</a>
            <img src={linkedin} alt="tools" className="linkedin mt-3"></img>
            </div>
            <div className="github flex">
            <a className="mb-4 m-2 break-words">GitHub</a>
            <img src={github} alt="tools" className="github mt-3"></img>
            </div>
          </div>
        </div>
        <div
          className="containerMe
        ml-1
        max-w-2xl
        max-h-96
        md:mt-8 lg:mt-0 lg:w-[70%] lg:p-5"
        >
          <img
            src={dev3}
            alt="me"
            className="meimage rotate-45 sm:w-1/2 lg:w-1/2 w-full h-auto mx-auto ml-0 sm:ml-2"
          ></img>
        </div>
      </section>
      <section className="containerNext">
        <div>
          <button>Avanzar</button>
        </div>
      </section>
    </section>
  );
};

export default About;
