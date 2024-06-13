
import pruebadev from "../assets/prueba9.jpg";
import "./home.css";
import { BotonLets } from "/src/components/Boton.jsx";
import "animate.css/animate.css";

import { Navbar } from "/src/components/Nav.jsx";

const Home = () => {
  return (
    <section className="contain-all bg-purple-400 min-h-screen max-w-screen">
    <Navbar />

      <section className="contain-section1">
        <div className="contain-text">
            <h1 className="title-welcome">
              Hola!, Bienvenido a mi portafolio
            </h1>

          <div className="contain-iam bg-black bg-black-800 bg-opacity-50 animate__animated animate__backInDown">
            <div className="my-name flex">
              <h1>Mi nombre es Paola Otamendi ;)</h1>
            </div>
            <div className="contain-info text-xl m-3">
              <div className="first-text mt-3">
                <p>
                  "Desarrolladora Web e Ingeniera 👩‍💻👷‍♀️, conformada por
                  curiosidad e impulso por el aprendizaje continuo. Apasionada
                  por las soluciones creativas y lógicas, creyente en
                  desarrollar sitios web y aplicaciones dinámicas con valor
                  agregado."
                </p>
              </div>
              <div className="second-text mt-3">
                <p className="font-bold">
                  ¡Conoce más sobre mí y trabajemos como un equipo! 🤸
                </p>
              </div>
            </div>
          </div>

          <div className="boton-next mb-4">
            <BotonLets />
          </div>
        </div>

        <div className="contain-logo">
          <img
            src={pruebadev}
            alt="develop"
            className="develop-image h-auto mx-auto"
            />
        </div>
      </section>
    </section>
  );
};

export default Home;
