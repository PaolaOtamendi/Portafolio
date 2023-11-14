/* import rocket from "../assets/rocket.png"; */
import me from "../assets/me.jpg";
import "./aboutp.css";

const AboutS = () => {
  return (
    <section
      className="flex flex-col h-screen 
    bg-gradient-to-b from-purple-300 via-purple-400 to-black"
    >
      <section
        className="containerdata 
      flex items-center"
      >
        <div
          className="containerAbout
          rounded-lg
          bg-black bg-black-800 bg-opacity-60
          pr-4
          pb-0
          mb-5"
        >
          <h1 className="title m-5 text-3xl font-bold text-green-400">
            About Me!
          </h1>
          <div className="containerinfo text-center text-justify text-white font-arial m-5">
            <p>
              🚀 Impulsada por los desafíos inicie mi desarrollo como ingeniera
              industrial donde tuve la oportunidad de analizar y crear
              soluciones a problemas de forma simple, automatizada y
              colaborativa con el equipo de IT.
            </p>
            <br />
            <p>
              💫 Actualmente tome un desafío mas que fue mi transformación como
              Ingeniera a Developer, siempre tuve esa sensación por
              incursionarme en el mundo Dev, así que decidí adentrarme en el
              felizmente.
            </p>
            <br />
            <p>
              🌟 Mi enfoque como Developer es desarrollar creativamente
              soluciones de valor para todas las personas que interactúan día a
              día con la tecnología.
            </p>
          </div>
          <div>
            <button className="bg-white text-black font-bold mx-5">
              👩‍💻 Descarga mi CV
            </button>
          </div>
        </div>
        <div
          className="containerinfor flex
          rounded-lg
          bg-black bg-black-800 bg-opacity-60
          pr-4
          pb-0
          ml-3
          h-fit"
        >
          <div
            className="containerdatos 
            text-center text-justify 
            text-white"
          >
            <h1 className="title m-5 text-3xl font-bold text-green-400">
              Contactame
            </h1>
            <div className="containerinfo text-center text-justify text-white font-arial m-5">
              <p>Email: paola_otamendi23@hotmail.com</p>
              <p>Teléfono: +(52) 844 273 50 64</p>
              <p>Dirección: Saltillo, Coahuila, México</p>
              <a>inkedin</a>
              <a>github</a>
            </div>
          </div>
        </div>
        <div className="containerme">
          <img src={me} alt="rocket" className="meimage rotate-360"></img>
        </div>
      </section>
      <section className="containerNext flex items-center justify-center mt-4 flex">
        <div>
          <button>Continuar</button>
        </div>
      </section>
    </section>
  );
};

export default AboutS;
