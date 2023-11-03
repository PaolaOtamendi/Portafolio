const AboutS = () => {
    return (
      <di>
        <section
          className="containerData h-screen 
      flex flex-col items-center justify-center 
      bg-gradient-to-b from-purple-300 via-purple-400 to-black"
        >
          <div
            className="containerAbout
        text-center text-justify 
        bg-black
        text-white rounded-lg
        pr-4
        pb-0
        mr-60
        ml-60"
          >
            <p className="titleAbout m-5 text-3xl font-bold">About Me!</p>
            <p className="font-mono m-5">
              Impulsada 🚀 por los desafíos inicie mi desarrollo como ingeniera
              industrial donde tuve la oportunidad de analizar y crear soluciones
              a problemas de forma simple, automatizada y colaborativa con el
              equipo de IT.
            </p>
            <p className="font-mono m-5">
              Actualmente tome un desafío mas que fue mi transformación como
              Ingeniera a Developer, siempre tuve esa sensación por incursionarme
              en el mundo Dev, así que decidí adentrarme en el felizmente.
            </p>
            <p className="font-mono m-5">
              Mi enfoque 🌟 como Developer es desarrollar creativamente
              soluciones de valor para todas las personas que interactúan día a
              día con la tecnología.
            </p>
            <p className="m-5">Descarga mi CV</p>
          </div>
          <div
            className="containerSkills text-center text-justify 
          bg-white
          rounded-lg
          pr-4
          pb-0
          mr-60
          ml-60
          mt-10"
          >
            <p className="titleSkills m-5 text-3xl font-bold">Actualmente</p>
            <p className="text-black font-mono m-4">
              👩‍💻 Iniciandome como Front End Developer, emocionada por adquirir
              nuevos conocimientos y colaborar en conjunto.
            </p>
            <p className="text-black font-mono m-4">
              🌱 Me encuentro en continuo aprendizaje para mejorar mis habilidades
              con cursos de React, Base de Datos, Data Engineer.
            </p>
            <p className="text-black font-mono m-4">
              ⚡ Me encanta explorar y descubrir nuevos destinos, principalmente
              para hacer hiking.
            </p>
            <p className="text-black font-mono m-4">
              🤸‍♀️ Emocionada de formar parte de tu equipo, colaborar, crecer en
              conjunto y desarrollar ideas magnificas.
            </p>
          </div>
          <div className="containerimage">
              <img></img>
          </div>
        </section>
        {/* <section className="containerSkills">
        <div
            className="containerSkills flex-1 
        text-center text-justify 
        bg-black bg-black-800 bg-opacity-50
        text-white rounded-lg
        pr-4
        mr-60
        ml-60"
          >
              hola soy otro
          </div>
        </section> */}
      </di>
    );
  };
  
  export default AboutS;