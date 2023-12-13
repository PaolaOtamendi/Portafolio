import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./pages/aboutme";
import Proyectos from "./pages/proyectos";

/* import './cssApp.css' */

const App = () => {
  return(
  <Routes>
  <Route element={<Home />} path="/" />
  <Route element={<AboutMe />} path="/Me" />
  <Route element={<Proyectos />} path="/Proyectos" />
  </Routes>
  )
}

export default App;