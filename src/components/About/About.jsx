import { myExperience, myEducation } from "../../constanst/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./about.css";
import { SiRobotframework } from "react-icons/si";
import { FaBook } from "react-icons/fa";

export const Resume = () => {
  return (
    <section className="section__resume--home">
      <div className="section__resume--intro">
        <div className="card">
          <div className="card-body card_intro">
            <h5 className="card-title card_intro-title">Quién soy</h5>
            <h6 className="card-subtitle mb-2 card_intro-sub">
              💻 De Ingeniera a Desarrolladora Web:
            </h6>
            <p className="card-text style_about">
              Como{" "}
              <strong>
                Ingeniera con 5 años de experiencia en Calidad y Mejora Continua
              </strong>
              , decidí transformar mi carrera para construir soluciones
              tecnológicas impactantes.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card_intro">
            <h5 className="card-title card_intro-title">Cómo empezó</h5>
            <h6 className="card-subtitle mb-2 card_intro-sub">
              🚀 De la curiosidad a la acción:
            </h6>
            <p className="card-text style_about">
              Mi curiosidad me llevo a <strong>Laboratoria</strong> donde
              descubrí mi pasión por el <strong>desarrollo web,</strong>{" "}
              colaborando en proyectos que{" "}
              <strong>
                fortalecieron mis habilidades técnicas y de equipo.
              </strong>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body card_intro">
            <h5 className="card-title card_intro-title">Mi camino hoy</h5>
            <h6 className="card-subtitle mb-2 card_intro-sub">
              🌟 Creciendo cada día:
            </h6>
            <p className="card-text style_about">
              Tras completar mi primer curso en <strong>Java,</strong> sigo
              perfeccionándome en <strong>React y JavaScript,</strong> siempre
              en <strong>constante aprendizaje</strong> y en busca de nuevos
              desafíos.
            </p>
          </div>
        </div>
      </div>
      <div className="section_resume-cards">
        <div className="card car_color">
          <div className="card-body">
            <h2 className="card_title-color">Mi Trayectoria</h2>
            <p className="card-text">
              <ul className="experience_list">
                {myExperience[0].items.map((item, index) => (
                  <li key={index} className="style_experience">
                    <p className="item_position">
                      <span>
                        <SiRobotframework size="20" color="#af6cdf" />
                      </span>
                      {item.position}.
                    </p>
                    <p className="item_company">{item.company}</p>
                    <p className="item_description">{item.description}</p>
                    <p className="item_duration">{item.duration}</p>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>

        <div className="card car_color">
          <div className="card-body">
            <h2 className="card_title-color">Formación</h2>
            <p className="card-text">
              <ul className="education_list">
                {myEducation[0].items.map((item, index) => (
                  <li key={index} className="style_education">
                    <p className="item_institution">
                      <span>
                        <FaBook size="20" color="#af6cdf" />
                      </span>
                      {item.institution}.
                    </p>
                    <p className="item_degree">{item.degree}</p>
                    <p className="item_description">{item.description}</p>
                    <p className="item_duration">{item.year}</p>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
