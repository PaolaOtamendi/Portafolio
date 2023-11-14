import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutS from "./pages/AboutSkills";
import About from "./pages/About";
/* import './cssApp.css' */

const App = () => {
  return(
  <Routes>
  <Route element={<Home />} path="/" />
  <Route element={<AboutS />} path="/About" />
  <Route element={<About />} path="/Previo" />
  </Routes>
  )
}

export default App;