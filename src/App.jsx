import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutS from "./pages/AboutSkills";
/* import './cssApp.css' */

const App = () => {
  return(
  <Routes>
  <Route element={<Home />} path="/" />
  <Route element={<AboutS />} path="/About-Skills" />
  </Routes>
  )
}

export default App;