import developImage from "../assets/devW.png";
import frontEnd from "../assets/frontE.png";
import "./home.css";

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
      pr-4">
        <div className="containername flex">
          <h1 className="firsttext font-mono font-bold text-green-400 text-xl m-2">
            Hola, mi nombre es:
          </h1>
        </div>
        <div className="myname font-arial font-bold text-4xl m-2 flex">
          <h1>Paola Otamendi ;)</h1>
        </div>
        <br />
        <div className="container text-base m-2">
          <p className="font-mono">
            "Women FrontEnd Developer 👩‍💻 integrada de curiosidad e impulso por el
            aprendizaje continuo, apasionada por creatividad y lógica como
            aliados, creyente en desarrollar soluciones dinámicas y con valor."
          </p>
          {/* <br />
          <p className="font-mono">
            Impulsada por los desafíos me desarrolle como ingeniera industrial
            donde tuve la oportunidad de analizar y crear soluciones a problemas
            de forma simple, automatizada y colaborativa con el equipo de IT.
          </p>
          <br />
          <p className="font-mono">
            Mi enfoque actual como Developer es desarrollar creativamente
            soluciones para todas las personas que interactúan día a día con la
            tecnología.
          </p>*/}
          <br />
          <p className="font-bold text-xl font-mono text-green-400">
            Trabajemos como un equipo! 🤸‍♀️💪
          </p>
        </div>
        <di>
          <button className="bg-white text-black font-bold m-2">Let´s Go! ✨</button>
        </di>
      </div>
        <div className="containerlogo relative flex-1">
          <img
            src={developImage}
            alt="develop"
            className="developimage sm:w-1/2 lg:w-1/2 w-full h-auto mx-auto ml-0 sm:ml-2"
          />
          <div className="containernamelogo flex">
            <img
              src={frontEnd}
              alt=""
              className="h-auto mx-auto sm:mr-2"
              style={{ transform: "rotate(142deg)" }}
            />
          </div>
        </div>
    </section>
  );
};

export default Home;