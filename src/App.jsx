import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboutme";
import Proyectos from "./pages/Proyectos";


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