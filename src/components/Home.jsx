import developImage from "../assets/devW.png";
import frontEnd from "../assets/frontE.png";
import "./home.css";
import { BotonLets } from '/src/components/Boton.jsx';
import "animate.css/animate.css";

const Home = () => {
  return (
    <section
      className="containerAbout 
    h-screen 
    flex items-center justify-center 
    bg-gradient-to-b from-purple-300 via-purple-400 to-black"
    >
      <div className="iAm flex-1 
      text-center text-justify 
      m-4 
      bg-black bg-black-800 bg-opacity-50 
      text-white rounded-lg 
      pr-4
      animate__animated animate__backInDown">
        <div className="containername flex">
          <h1 className="firsttext font-mono font-bold text-green-400 text-xl m-3">
            Bienvenido..!, mi nombre es:
          </h1>
        </div>
        <div className="myname font-arial font-bold text-5xl m-3 flex">
          <h1>Paola Otamendi ;)</h1>
        </div>
        <br />
        <div className="container text-xl m-3">
          <p className="font-arial font-semibold">
            "Women FrontEnd Developer 👩‍💻 integrada de curiosidad e impulso por el
            aprendizaje continuo, apasionada por creatividad y lógica como
            aliados, creyente en desarrollar soluciones dinámicas y con valor."
          </p>
          <br />
          <p className="font-bold text-3xl font-mono text-green-400">
            Trabajemos como un equipo! 🤸‍♀️💪
          </p>
        </div>
        {/* <div>
            <BotonLets />
        </div> */}
      </div>
        <div className="containerlogo relative flex-1">
          <img
            src={developImage}
            alt="develop"
            className="developimage sm:w-1/2 lg:w-1/2 w-full h-auto mx-auto ml-0 sm:ml-2 "/>
          <div className="containernamelogo flex">
            <img
              src={frontEnd}
              alt=""
              className="h-auto mx-auto sm:mr-2"
              style={{ transform: "rotate(142deg)" }}
            />
          </div>
        </div>
        <div className="siguiente fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <BotonLets />
      </div>
    </section>
  );
};

export default Home;