/*import developImage from "../assets/devW.png";*/
import developImage from "../assets/dev1.png";
import frontEnd from "../assets/frontE.png";
import "./home.css";
import { BotonLets } from "/src/components/Boton.jsx";
import "animate.css/animate.css";

//Segundas importaciones cambios
import { Navbar } from "/src/components/Nav.jsx";

const Home = () => {
  return (
    <section className="All bg-purple-400 min-h-screen max-w-screen">
    <Navbar />

      <section className="containerAbout">
        <div className="text1">
          <div className="containWelcome">
            <h1 className="welcome font-bold text-black text-7xl m-6">
              Hola!, Bienvenido a mi portafolio
            </h1>
          </div>

          <div className="entryiAm bg-black bg-black-800 bg-opacity-50 animate__animated animate__backInDown">
            <div className="myname font-arial font-bold text-white text-4xl m-3 flex">
              <h1>Paola Otamendi ;)</h1>
            </div>
            <div className="container text-xl m-3">
              <div className="firsttext mt-3">
                <p className="">
                  "Desarrolladora Web e Ingeniera 👩‍💻👷‍♀️, conformada por
                  curiosidad e impulso por el aprendizaje continuo. Apasionada
                  por las soluciones creativas y lógicas, creyente en
                  desarrollar sitios web y aplicaciones dinámicas con valor
                  agregado."
                </p>
              </div>
              <div className="secondtext mt-3">
                <p className="font-bold text-2xl font-mono text-green-400">
                  ¡Conoce más sobre mí y trabajemos como un equipo! 🤸
                </p>
              </div>
            </div>
          </div>

          <div className="siguiente relative bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <BotonLets />
          </div>
        </div>

        <div className="containerlogo relative flex-1 ">
          <img
            src={developImage}
            alt="develop"
            className="developimage h-auto mx-auto ml-0"
            />
        </div>
      </section>
    </section>
  );
};

export default Home;
