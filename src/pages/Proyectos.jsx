import { Navbar } from "/src/components/Nav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

import burguer from "../assets/burguer.PNG";

import "./proyectos.css";

const Proyectos = () => {
  return (
    <section className="all bg-black min-h-screen max-w-screen">
      <Navbar />
      <div className="containtitle">
        <h1 className="title">
          Proyectos
          <FontAwesomeIcon icon={faThumbsUp} flip className="ml-3" />
        </h1>
      </div>
      <div className="proyectos">
        {/*         <h1 className="title">Proyectos</h1> */}
        <div className="proyecto">
          <h1 className="titleApp">BurguerQueen - Api Client</h1>
          <div className="dataBurguer">
            {/* <h1 className="titleApp">BurguerQueen - Api Client</h1> */}
            <div className="containerdata">
              <p className="description">
                App diseñada para un restaurante de hamburguesas que permite al
                administrador llevar el contro de los usuarios y el inventario;
                al cocinero manejar el estado de las ordenes y al mesero tomar
                el pedido del cliente. La app fue desarrollada con React y está
                conectada a una API que funciona de manera local.
              </p>
              <div className="herramientas">
                <p className="tool1">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#ac1ee0" }}
                    className="mr-3"/>
                  HTML
                </p>
                <p className="tool2">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#ac1ee0" }}
                    className="mr-3"/>
                  JavaScript
                </p>
                <p className="tool3">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#ac1ee0" }}
                    className="mr-3"/>
                  CSS
                </p>
                <p className="tool4">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#ac1ee0" }}
                    className="mr-3"/>
                  API
                </p>
                <p className="tool5">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#ac1ee0" }}
                    className="mr-3"/>
                  JEST
                </p>
              </div>
            </div>
            <div className="containerimage">
              <img src={burguer} alt="burguer" className="image"></img>
            </div>
          </div>
          <div className="containbutton">
              <button className="button">Abrir proyecto</button>
            </div>
        </div>

        <div className="proyecto">
          <div className="dataMovie">
            <h1 className="titleApp">Movie challenge</h1>
            <p className="description">
              App diseñada para un restaurante de hamburguesas que permite al
              administrador llevar el contro de los usuarios y el inventario; al
              cocinero manejar el estado de las ordenes y al mesero tomar el
              pedido del cliente. La app fue desarrollada con React y está
              conectada a una API que funciona de manera local.
            </p>
            <p className="tools">HTML, JavaScript, CSS, REACT, API, JEST.</p>
          </div>
        </div>

        <div className="proyecto">
          <div className="dataSocial">
            <h1 className="titleApp">Social Network</h1>
            <p className="description">
              App diseñada para un restaurante de hamburguesas que permite al
              administrador llevar el contro de los usuarios y el inventario; al
              cocinero manejar el estado de las ordenes y al mesero tomar el
              pedido del cliente. La app fue desarrollada con React y está
              conectada a una API que funciona de manera local.
            </p>
            <p className="tools">HTML, JavaScript, CSS, REACT, API, JEST.</p>
          </div>
        </div>

        <div className="proyecto">
          <div className="dataSocial">
            <h1 className="titleApp">MD-Links</h1>
            <p className="description">
              App diseñada para un restaurante de hamburguesas que permite al
              administrador llevar el contro de los usuarios y el inventario; al
              cocinero manejar el estado de las ordenes y al mesero tomar el
              pedido del cliente. La app fue desarrollada con React y está
              conectada a una API que funciona de manera local.
            </p>
            <p className="tools">HTML, JavaScript, CSS, REACT, API, JEST.</p>
          </div>
        </div>

        <div className="proyecto">
          <div className="dataSocial">
            <h1 className="titleApp">Data Lovers</h1>
            <p className="description">
              App diseñada para un restaurante de hamburguesas que permite al
              administrador llevar el contro de los usuarios y el inventario; al
              cocinero manejar el estado de las ordenes y al mesero tomar el
              pedido del cliente. La app fue desarrollada con React y está
              conectada a una API que funciona de manera local.
            </p>
            <p className="tools">HTML, JavaScript, CSS, REACT, API, JEST.</p>
          </div>
        </div>

        <div className="proyecto">
          <div className="dataSocial">
            <h1 className="titleApp">Card Validation</h1>
            <p className="description">
              App diseñada para un restaurante de hamburguesas que permite al
              administrador llevar el contro de los usuarios y el inventario; al
              cocinero manejar el estado de las ordenes y al mesero tomar el
              pedido del cliente. La app fue desarrollada con React y está
              conectada a una API que funciona de manera local.
            </p>
            <p className="tools">HTML, JavaScript, CSS, REACT, API, JEST.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
